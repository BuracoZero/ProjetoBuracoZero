import React, {useState} from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import {styles} from "./styles";
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import { ComponentButtonDenuncia, ComponentButtonInterface } from "../../components";
import {LoginTypes} from "../../navigations/login.navigation"


export function SuasDenuncias({navigation}:LoginTypes) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Suas Denúncias</Text>
                <ComponentButtonInterface title="Editar" type="secondary" onPressI={()=>{navigation.navigate("Tab")}}/> 
                <ComponentButtonInterface title="Remover" type="fourth" onPressI={()=>navigation.navigate("Cadastrar")}/>
                <View style={styles.button}>
                <Entypo name="plus" size={24} color="black" /> 
                <ComponentButtonDenuncia onPress={()=>{navigation.navigate("CadastroDenuncias")}} />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}