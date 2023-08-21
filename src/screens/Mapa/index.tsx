import React, { useState, useEffect, useRef } from 'react';
import MapView, { Region, Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
import { colors } from '../../styles/colors';
import { styles } from '../Mapa/styles';
import { FontAwesome5 } from '@expo/vector-icons';

type ICoords ={
  latitude: number
  longitude: number
}

export function Mapa() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setRegion] = useState<Region>()
  const [marker, setMarker] = useState<Region[]>()
  const [coords, setCoords] = useState<ICoords[]>([])
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
  return (
    <View style={styles.container}>
      
      <MapView ref={mapRef} region={region} style={styles.map} showsUserLocation={true}>
      {marker && marker.map((i) => (
                    <Marker key = {i.latitude} coordinate = {i}>
                        <FontAwesome5 name="map-marker-alt" size={24} color="red" />
                    </Marker>
      ))}
        </MapView>
    </View>
  );

}