import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ComponentButtonInterface, ComponentLoading } from "../../components";
import { TabTypes } from "../../navigations/tab.navigation";
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Sobrenos({navigation}:TabTypes){


    return (
        <View style={styles.container}>
          <View style={styles.panel}>
          <Text style={styles.title}>Buraco Zero</Text>
            <Text>Bem-vindo ao Buraco Zero, sua plataforma dedicada a tornar nossas ruas mais seguras e suaves. Estamos comprometidos em proporcionar uma experiência simples e eficaz para que você possa contribuir ativamente para o bem-estar da sua comunidade. Aqui está um pouco mais sobre nós:</Text>
            <Text>O Buraco Zero foi criado com uma missão clara - melhorar a qualidade de nossas ruas, tornando-as mais seguras para todos. Queremos proporcionar aos cidadãos uma maneira fácil e eficaz de relatar buracos nas ruas e, assim, colaborar com as autoridades locais para promover reparos rápidos e eficientes. </Text>
            <Text>Nosso aplicativo é intuitivo e fácil de usar. Com apenas alguns toques na tela, você pode relatar um buraco em sua área. Você terá a opção de incluir detalhes como a localização exata, tamanho e qualquer informação adicional relevante. Assim que seu relatório for enviado, nós o encaminharemos automaticamente para a prefeitura responsável.</Text>
            <Text>O Buraco Zero é mais do que um aplicativo; é uma comunidade comprometida em criar um ambiente urbano mais seguro e eficiente. Convidamos você a se juntar a nós, relatar buracos, e ser parte ativa da mudança positiva em sua cidade.</Text>
            <Text>Contato: buracozero.oficial@gmail.com</Text>
          </View>
        </View>
      );
}