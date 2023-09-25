import React, { useEffect, useState } from "react";
import { View, Text, KeyboardAvoidingView, Alert } from "react-native";
import {styles} from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import { ComponentButtonInterface } from "../../components";
import {LoginTypes} from "../../navigations/login.navigation"
import { MaskedTextInput } from "react-native-mask-text";
import { AxiosError } from "axios";
import { IAuthenticate } from "../../services/data/User";
import { useAuth } from "../../hooks/auth";

export function Login({navigation}:LoginTypes) {
    const { signIn } = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);
    async function handleSigIn() {
        try {
            setIsLoading(true);
            if (data?.cpf && data.password) {
                await signIn(data);
            }else{
                Alert.alert("Preencha todos os campos!!!");
                setIsLoading(false);
            }
        }catch (error) {
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
            setIsLoading
        }
    }
    function handleChange(item: IAuthenticate) {
        setData({...data, ...item})
    }
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },750)
    },[])
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                <AntDesign name="idcard" size={24} color="black" />
                <MaskedTextInput
                    mask="999.999.999-99"
                    onChangeText={(i)=> handleChange({ cpf: i })}
                    placeholder="CPF"
                    placeholderTextColor={colors.black}
                    keyboardType="numeric"
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
                    onChangeText={(i)=> handleChange({ password: i })}
                    />
                </View>
                <ComponentButtonInterface title="Entrar" type="secondary" onPressI={handleSigIn}/>
                <ComponentButtonInterface title="Cadastrar" type="primary" onPressI={()=>navigation.navigate("Cadastrar")}/>
            </KeyboardAvoidingView>
        </View>
    )
}

