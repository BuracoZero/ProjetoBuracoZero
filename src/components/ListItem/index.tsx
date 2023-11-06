import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { IDenuncia } from "../../screens/SuasDenuncias";

export interface ITextItem {
    textItem: string
}

export function ListItem({id, cep, endereco, descricao}:IDenuncia) {
    return(
        <View style={styles.listItem}>
            <Text style={styles.textItem}>{cep}</Text>
            <Text style={styles.textItem}>{endereco}</Text>
            <Text style={styles.textItem}>{descricao}</Text>
        </View>
    )
}