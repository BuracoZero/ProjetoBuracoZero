import React, {useState} from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import {styles} from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import {TextInput} from "react-native-gesture-handler";
import { ComponentButtonInterface } from "../../components";
import {LoginTypes} from "../../navigations/login.navigation"

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
export function SuasDenuncias({navigation}:LoginTypes) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Suas Denúncias</Text>
                <Text>Suas Denúncias</Text>
                <View style={styles.formRow}>
                </View>
            
                <ComponentButtonInterface title="Editar" type="third" onPressI={()=>{navigation.navigate("Tab")}}/> 
                <ComponentButtonInterface title="Remover" type="primary" onPressI={()=>navigation.navigate("Cadastrar")}/>
                <ComponentButtonInterface title="+" type="third" onPressI={()=>{navigation.navigate("CadastroDenuncias")}}/> 
            </KeyboardAvoidingView>
        </View>
    )
}