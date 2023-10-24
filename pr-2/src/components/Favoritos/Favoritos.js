import React, { useState, useEffect } from "react"
import { IconButton } from "react-native-paper"
import { storageController } from "../../api/favorito"
import { addFavoritosApi } from "../../api/favorito";

export default function Favoritos(props) {

  console.log("estas son props "+ props.id);


  const { id } = props;

  

  const [isFavorite, setIsFavorite] = useState()
  const [reloadFavorite, setReloadFavorite] = useState()

  const onReloadFavorite = () => setReloadFavorite(!reloadFavorite)
  console.log("favorito: "+isFavorite)

  useEffect(() => {
    ( async () => {
      const response = await storageController.isFavoriteApi(id)
      if (response) setIsFavorite(true)
      else setIsFavorite(false)
    })()
  }, [id, reloadFavorite])

  const addFavoritos = async () => {
    try {
      console.log("aqui")
      console.log(id)
      await storageController.addFavoritosApi(id)
      onReloadFavorite()
    } catch (error) {
      console.log("error in addFavoritos", error)
    }
  }

  const removeFavoritos = async () => {
    try {
      await storageController.removeFavoritosApi(id)
      onReloadFavorite()
    } catch (error) {
      console.log("error in removeFavorites: ", error)
    }
  }

  const iconColor = isFavorite ? "#f00" : "#fff"
  return (
    <IconButton
      icon="heart"
      iconColor={iconColor}
      size={50}
      onPress={isFavorite ? removeFavoritos : addFavoritos}
    />
  )
}
