import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import Card from "../../components/Card/Card"



const loadMore = ()=>{
  console.log('cargando mas')
}



export default function HomeScreen(props) {
  const { characters, nextUrl } = props
  console.log("Homescreen props ", characters);


  

  return (
    <>
      <SafeAreaView></SafeAreaView>
      <FlatList
        data={characters}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card characters={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListaFooterComponent ={
          nextUrl && <ActivityIndicator style={styles.spiner} size="large" color="#79B543" />
        }
      />
    </>
  )
}


const styles = StyleSheet.create({
  spiner: {
    marginTop: 20,
    marginBottom: 50,
  },

})
