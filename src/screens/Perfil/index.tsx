import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ComponentButtonInterface, ComponentLoading } from "../../components";
import { TabTypes } from "../../navigations/tab.navigation";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Perfil({navigation}:TabTypes){
    const { user, signOut } = useAuth();
    const[isLoading, setIsLoading] = useState(true);
    async function handleVoltar(){
        console.log ("oi")
        await signOut()
    }
    useEffect(() => {
        if (user) {
            setIsLoading(false);
        }
    }, [user]);

    return(
        <>
            {isLoading ? (
                <ComponentLoading />
            ) : (
                <View style={styles.container}>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                </View>
            )}   
        </>
    )
}