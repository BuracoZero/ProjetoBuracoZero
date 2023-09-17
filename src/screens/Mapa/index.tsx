import React, { useState, useEffect, useRef } from 'react';
import MapView, { Region, Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
import { API_GOOGLE } from '@env'
import { colors } from '../../styles/colors';
import { styles } from '../Mapa/styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { GooglePlacesAutocomplete, GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions'
import { Colors } from 'react-native/Libraries/NewAppScreen';

type ICoords = {
  latitude: number
  longitude: number
}

export function Mapa() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setRegion] = useState<Region>()
  const [marker, setMarker] = useState<Region[]>()
  const [coords, setCoords] = useState<ICoords[]>([])
  const [destination, setDestination] = useState<Region | null>(null)
  const mapRef = useRef<MapView>(null)

  useEffect(() => {
    let subscription: Location.LocationSubscription
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('A permissão para acessar a localização foi negada');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
      })
      setMarker([{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004
      }])
      subscription = await Location.watchPositionAsync({
        accuracy: Location.LocationAccuracy.High,
        timeInterval: 1000,
        distanceInterval: 1
      }, (location) => {
        setCoords((prevState) => [...prevState, location.coords])
      });
    })();

    return () => {
      if (subscription) {
        subscription.remove()
      }
    }
  }, []);

  async function handleDestination(data: GooglePlaceData, details: GooglePlaceDetail | null) {
    if (details) {
      setDestination({
        latitude: details?.geometry.location.lat,
        longitude: details?.geometry.location.lng,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004
      })
      if (marker) {
        setMarker([...marker, {
          latitude: details?.geometry.location.lat,
          longitude: details?.geometry.location.lng,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004
        }])
      }
    }
  }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {region ? (
        <>
          <GooglePlacesAutocomplete
            styles={{ container: styles.searchContainer, textInput: styles.searchInput }}
            placeholder="Pesquisar endereço"
            fetchDetails={true}
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            enablePoweredByContainer={false}
            query={{
              key: API_GOOGLE,
              language: 'pt-BR'
            }}
            onFail={setErrorMsg}
            onPress={handleDestination}
          />
          <MapView ref={mapRef} region={region} style={styles.map} showsUserLocation={true}>
            {marker && marker.map((i) => (
              <Marker key={i.latitude} coordinate={i}>
                <FontAwesome5 name="map-marker-alt" size={24} color="red" />
              </Marker>
            ))}
            {destination && (
              <MapViewDirections
                origin={region}
                destination={destination}
                apikey={API_GOOGLE}
                strokeColor={colors.primary}
                strokeWidth={6}
                onReady={(result) => {
                  mapRef.current?.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      top: 24,
                      bottom: 24,
                      left: 24,
                      right: 24
                    }
                  })
                }}
              />
            )}
          </MapView>
        </>
      ) : (
        <Text>{text}</Text>
      )}
    </View>
  )
}