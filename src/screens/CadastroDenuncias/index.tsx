import React, {useRef, useState} from "react";
import {Button, Alert, Image, View, Text, KeyboardAvoidingView } from "react-native";
import {styles} from "./styles";
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import { ComponentButtonInterface, ComponentButtonSalvar } from "../../components";
import {LoginTypes} from "../../navigations/login.navigation"
import { Camera, CameraCapturedPicture, CameraType,FaceDetectionResult } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'



export function CadastroDenuncias({navigation}:LoginTypes) {
  return (
    <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title}>Cadastro de Denúncias</Text>
            <Text>Responda com base nas características do buraco:</Text>
            <View style={styles.formRow}>
            <TextInput
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
                />
            </View>
            <View style={styles.form}>
            <TextInput
                placeholder="Descrição do buraco"
                placeholderTextColor={colors.black}
                style={styles.input}
                />
            </View>
          </KeyboardAvoidingView>
          <MaterialCommunityIcons name="camera-plus-outline" size={40} color="black" onPress={() => navigation.navigate("Camera")}/>
          <Text>Escolha uma imagem</Text>
          <View style={styles.buttonRow}>
                    <ComponentButtonSalvar title="Cancelar" type="fourth" onPressI={()=>navigation.navigate("SuasDenuncias")}/>
                    <ComponentButtonSalvar title="Salvar" type="secondary" onPressI={()=>{navigation.navigate("SuasDenuncias")}}/> 
                </View>
        </View>
  )
}