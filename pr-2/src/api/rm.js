import { View, Text } from "react-native"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { ENV } from "../utils/constants"
import HomeScreen from "../screen/Home/HomeScreen"





export default function RickAndMortyApi() {
  const [characters, setCharacters] = useState([])

  const[nextUrl, setNextUrl] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(ENV.API_URL_RM)
        setCharacters(response.data.results)
        setNextUrl(response.data.info.next)
        //console.log("respuesta", response);

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return <HomeScreen characters={characters} nextUrl={nextUrl} />
}
