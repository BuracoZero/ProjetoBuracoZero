import React, {useEffect, useState} from "react";
import { View, Text, KeyboardAvoidingView, FlatList } from "react-native";
import {styles} from "./styles";
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import { ComponentButtonDenuncia, ComponentButtonInterface, ComponentButtonSalvar, ComponentListItem } from "../../components";
import { DenunciaTypes } from "../../navigations/denuncias.navigation"
import { apiDenuncia } from "../../services/data";

export interface IDenuncia {
    id?:number
    cep: string
    endereco: string
    descricao: string
}
export function SuasDenuncias({navigation}:DenunciaTypes) {
    const [data, setData] = useState<IDenuncia[]>()
    useEffect(()=>{
        async function fetchData() {
            const response = await apiDenuncia.index()
            setData(response.data)
        }
    }, [])
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Suas Denúncias</Text>
                <FlatList 
                    data={data}
                    renderItem={({item})=>
                    <ComponentListItem key={item.id} cep={item.cep} endereco={item.endereco} descricao={item.endereco} id={item.id}/>
                }
                keyExtractor={(i)=>String(i.id)}
                />
                <View style={styles.button}>
                <Entypo name="plus" size={24} color="black" /> 
                <ComponentButtonDenuncia onPress={()=>navigation.navigate("CadastroDenuncias")}>
                    <View style={styles.icone}>
                    <Entypo name="plus" size={28} color="yellow" />
                    </View>
                </ComponentButtonDenuncia>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}