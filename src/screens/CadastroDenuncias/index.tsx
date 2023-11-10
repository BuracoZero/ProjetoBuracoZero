import React, {useRef, useState} from "react";
import {Button, Alert, Image, View, Text, KeyboardAvoidingView } from "react-native";
import {styles} from "./styles";
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import { ComponentButtonInterface, ComponentButtonSalvar } from "../../components";
import {LoginTypes} from "../../navigations/login.navigation"
import {DenunciaTypes} from "../../navigations/denuncias.navigation"
import { Camera, CameraCapturedPicture, CameraType,FaceDetectionResult } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import { MaskedTextInput } from "react-native-mask-text";
import { IDenuncia } from "../SuasDenuncias";
import { apiDenuncia } from "../../services/data";
import { AxiosError } from "axios";

export function CadastroDenuncias({navigation}:DenunciaTypes) {
  const [data, setdata] = useState<IDenuncia>()
  const [loading, setLoading] = useState()
  async function handleSubmit(){
    try{
      if(data?.cep && data.endereco && data.descricao) {
        // await apiDenuncia.store(data)
        Alert.alert("Denuncia cadastrada")
        navigation.navigate("SuasDenuncias")
      }else{
        Alert.alert("Preencha todos os campos!")
      }
    }catch(error){
      const err = error as AxiosError
      Alert.alert(err.response?.data as string)
    }
  }
  function handleChange(item: IDenuncia) {
    setdata({...data, ...item})
  }
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title}>Cadastro de Denúncias</Text>
            <Text>Responda com base nas características do buraco:</Text>
            <View style={styles.formRow}>
            <MaskedTextInput
                    mask="99999-999"
                    onChangeText={(i)=> handleChange({ cep: i })}
                placeholder="CEP"
                placeholderTextColor={colors.black}
                keyboardType="numeric"
                autoCapitalize="none"
                style={styles.input}
                />
            </View>
            <View style={styles.formRow}>
            <TextInput
                placeholder="Endereço completo"
                placeholderTextColor={colors.black}
                style={styles.input}
                onChangeText={(i)=> handleChange({endereco: i})}
                />
            </View>
            <View style={styles.form}>
            <TextInput
                placeholder="Descrição do buraco"
                placeholderTextColor={colors.black}
                style={styles.input}
                onChangeText={(i)=> handleChange({descricao: i})}
                />
            </View>
          </KeyboardAvoidingView>
          <MaterialCommunityIcons name="camera-plus-outline" size={40} color="black" onPress={() => navigation.navigate("Camera")}/>
          <Text>Escolha uma imagem</Text>
          <View style={styles.buttonRow}>
                    <ComponentButtonSalvar title="Cancelar" type="fourth" onPressI={()=>navigation.navigate("SuasDenuncias")}/>
                    <ComponentButtonSalvar title="Salvar" type="secondary" onPressI={handleSubmit}/> 
                </View>
        </View>
  )
}