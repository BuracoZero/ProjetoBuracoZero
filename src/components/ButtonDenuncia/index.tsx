import React from 'react'
import { TouchableOpacityProps, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function ButtonDenuncia({ onPress, ...rest }: TouchableOpacityProps){
    return (
        <TouchableOpacity style={styles.ball} onPress={onPress} {...rest} />
    ) 
}