import { View, Text } from "react-native"
import React, { useState } from "react"
import { getFavoriteApi } from "../api/favorito"
import { Button } from "react-native-paper"
import HomeScreen from "./Home/HomeScreen"
import { useFocusEffect } from "@react-navigation/native"
import { ENV } from "../utils/constants"
import axios from "axios"


export default function FavoritesScreen() {

const [personajes , setPersonajes] = useState([])
const [characters, setCharactes] = useState([])


  const checkFavorite = async () => {
    const response = await getFavoriteApi()
    console.log(response)
  }

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const favoriteResponse = await getFavoriteApi()
        //console.log(response)
        setPersonajes(favoriteResponse)

        try{
          const response = await axios.get(ENV.API_URL_RM);
          setCharactes(response.data.results)

        }catch(error){
          console.log(error)
        }

      })();
      
    }, [])
  )
  
  return (
    <HomeScreen
      characters={characters.filter((chracter)=> personajes.includes(chracter.id))}
    />
  )
}