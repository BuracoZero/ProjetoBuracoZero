import React from "react";
import { View, KeyboardAvoidingView, Text } from "react-native"
import {styles} from "./styles"
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../styles/colors";
import { ComponentButtonInterface } from "../../components";
import { LoginTypes } from "../../navigations/login.navigation";

export function Cadastrar({navigation}:LoginTypes) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastrar</Text>
                <View style={styles.formRow}>
                <MaterialIcons name="person" size={24} color="black" />
                <TextInput
                    placeholder="Nome"
                    placeholderTextColor={colors.black}
                    style={styles.input}
                    />
                </View>
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
                <ComponentButtonInterface title="Salvar" type="third" onPressI={()=>console.log("cadastrar")}/>
                <ComponentButtonInterface title="Voltar" type="primary" onPressI={()=>navigation.navigate("Login")}/>
            </KeyboardAvoidingView>
        </View>
    )
}