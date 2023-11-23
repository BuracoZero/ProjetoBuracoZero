import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ComponentButtonInterface, ComponentLoading } from "../../components";
import { PerfilTypes } from "../../navigations/perfil.navigation";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Perfil({navigation}:PerfilTypes){
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
                    <Text style={styles.title}>Perfil do Usuário</Text>
                    <View style={styles.dentro}>
                    <Text>{user?.user.name}</Text>
                    <Text>{user?.user.cpf}</Text>
                    <ComponentButtonInterface title="Sobre nós" type="primary" onPressI={()=>navigation.navigate("Sobre")}/>
                    <ComponentButtonInterface title="Sair" type="secondary" onPressI={handleVoltar}/>
                    </View>
                </View>
            )}   
        </>
    )
}