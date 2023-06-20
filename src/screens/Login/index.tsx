import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import {styles} from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import { ComponentButtonInterface } from "../../components";
import {LoginTypes} from "../../navigations/login.navigation"

export function Login({navigation}:LoginTypes) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                <AntDesign name="idcard" size={24} color="black" />
                <TextInput
                    placeholder="CPF"
                    placeholderTextColor={colors.black}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                <Ionicons name="key" size={24} color="black" />
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor={colors.black}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={styles.input}
                    />
                </View>
                <ComponentButtonInterface title="Entrar" type="third" onPressI={()=>{navigation.navigate("Tab")}}/>
                <ComponentButtonInterface title="Cadastrar" type="primary" onPressI={()=>navigation.navigate("Cadastrar")}/>
            </KeyboardAvoidingView>
        </View>
    )
}