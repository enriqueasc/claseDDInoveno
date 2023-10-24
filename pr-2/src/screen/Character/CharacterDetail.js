import { View, Text } from "react-native"
import React from "react"
import { styles } from "./CharacterDetail.styles"
import { Avatar, IconButton } from "react-native-paper"
import Favoritos from "../../components/Favoritos/Favoritos"

export default function CharacterDetail(props) {

  const { navigation, route: { params } } = props
 

  return (
    <View style={styles.container}>
      <Avatar.Image
        size={250}
        source={{ uri: params.image }}
        style={styles.image}
      />
      <Text style={styles.title}> Nombre: {params.name}</Text>
      <Text style={styles.title}>Especie: {params.species}</Text>
      <Text style={styles.title}> Estatus: {params.status}</Text>
   
      <Text style={styles.title}> genero: {params.gender === "Male" ? "Maculino": "Femenino"}</Text>
      
      <Favoritos id={params.id}  />
    </View>
  )
}
