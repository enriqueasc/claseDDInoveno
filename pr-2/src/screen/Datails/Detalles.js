import { View, Text, image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'


export default function Detalles() {
  const route = useRoute();
  const { personaje } = route.params;
  
  
    return (
        <View>

            <Image style={{width: 200, height: 200}} source={{uri: personaje.image}} />
            <text>Nombre{personaje.name}</text>
        
        </View>
  )
}