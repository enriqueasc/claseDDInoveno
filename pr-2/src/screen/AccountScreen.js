import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert,} from "react-native"
import React from "react"
import { Avatar, Button, List } from "react-native-paper"
import CustomCard from "../components/CustomCard"
import { FontAwesome } from "@expo/vector-icons"

import { map } from 'lodash'



// import CustomSearchBar from "../components/CustomSearchBar"
import { AuthContext } from "../context/AuthContext"
import { globalStyles } from "../styles"
import { useAuth } from "../hooks/useAuth"

import Menu from "../components/Menu/Menu"
import { accountMenu } from "../components/Menu/menu.data"


export default function AccountScreen() {

  const { logout } = React.useContext(AuthContext)
  const { user } = useAuth()
  console.log(user)

const logoutAlert = () => {
  Alert.alert(
    "Cerrar sesión",
    "¿Estás seguro de que quieres cerrar sesión?",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Cerrar sesión", onPress: () => logout() },
    ],
    { cancelable: false }
  )
}




  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.mainContainer}>
        <Avatar.Image
          size={180}
          style={{ marginVertical: 40 }}
          source={require("../assets/images/person1.jpeg")}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          {user.firstname && user.lastname ? `${user.username} ${user.lastname}` : user.email }


        </Text>

       
        <Button
          mode="contained"
          onPress={logoutAlert}
          icon="logout"
          style={styles.button}
        >
          Cerrar sesión
        </Button>
      </View>
      <List.Section>
            <List.Subheader>Mi cuenta</List.Subheader>
            {map(accountMenu, (menu)=>(
                    <List.Item
                      key={menu.title}
                      title={menu.title}
                      description={menu.description}
                      left={(props) => <List.Icon {...props} icon={menu.leftIcon} />}
                      onPress={()=> navigation.navigate(menu.screen)}
                    
                    />
                  )
                )
            }
          </List.Section>  


      <View style={styles.footer}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#483d8b",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "",
    alignItems: "center",
    backgroundColor: "#483d8b",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#483d8b",
  },
  button: {
    ...globalStyles.button.logout,
  },
})
