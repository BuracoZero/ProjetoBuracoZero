import React, {useState} from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import {styles} from "./styles";
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import { ComponentButtonDenuncia, ComponentButtonInterface, ComponentButtonSalvar } from "../../components";
import {DenunciaTypes} from "../../navigations/denuncias.navigation"

export function DenunciasAdm({navigation}:DenunciaTypes) {
        return (
            <View>
                <Text>Denúncias Cadastradas</Text>
            </View>
        )
}