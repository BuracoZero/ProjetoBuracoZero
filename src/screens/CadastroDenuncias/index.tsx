import React, {useRef, useState} from "react";
import {Button, Alert, Image, View, Text, KeyboardAvoidingView } from "react-native";
import {styles} from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import { ComponentButtonInterface } from "../../components";
import {LoginTypes} from "../../navigations/login.navigation"
import { Camera, CameraCapturedPicture, CameraType,FaceDetectionResult } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'


const DateField: React.FC = () => {
    const[date, setDate] = useState(new
        Date().toLocaleDateString());
        return (
            <input
            type="text"
            value={date}
            onChange={(e) =>
            setDate(e.target.value)}
            />
        )

}
export function CadastroDenuncias({navigation}:LoginTypes) {
    const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermissionCamera] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
  const [photo,setphoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false);
  if (!permissionCamera) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Permita a camera por sua conta e risco </Text>
        <Button onPress={requestPermissionCamera} title="garanta a permissão" />
      </View>
    );
  }
  if (!permissionMedia) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionMedia.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>permissão</Text>
        <Button onPress={requestPermissionMedia} title="garanta a permissão" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if(ref.current){
        const picture = await ref.current.takePictureAsync()
        setphoto(picture)
        setTakePhoto(false)
    }
    
   }
  async function savePhoto(){
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("Images", asset, false)
    Alert.alert("Imagem salva com sucesso")
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      aspect: [4,3],
      quality: 1
    })
    if (!result.canceled) {
      setphoto(result.assets[0])
    }
  }


    return (
        <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title}>Cadastro de Denúncias</Text>
            <Text>Responda as perguntas com base no seu buraco</Text>
            <Text> CEP: *</Text>
            <View style={styles.formRow}>
            <TextInput
                autoCapitalize="none"
                style={styles.input}
                />
            </View>
            <Text> Endereço completo: *</Text>
            <View style={styles.formRow}>
            <TextInput
                autoCapitalize="none"
                style={styles.input}
                />
            </View>
            <Text> Descrição do buraco: *</Text>
            <View style={styles.formRow}>
            <TextInput
                autoCapitalize="none"
                style={styles.input}
                />
            </View>

            
                <ComponentButtonInterface title="Cancelar" type="third" onPressI={()=>{navigation.navigate("Tab")}}/> 
                <ComponentButtonInterface title="Enviar" type="primary" onPressI={()=>navigation.navigate("Tab")}/>
                <ComponentButtonInterface title=' Tirar Foto' type='primary' onPressI={()=>setTakePhoto(true)}/>
        <ComponentButtonInterface title='Salvar' type='primary' onPressI={savePhoto}/>
        <ComponentButtonInterface title='Abrir imagem' type='primary' onPressI={pickImage}/>
      
        {photo && photo.uri && (
           <Image source={{uri: photo!.uri}} style={styles.img} />

        )}

            </KeyboardAvoidingView>
        </View>
    )
}