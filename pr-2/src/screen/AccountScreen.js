import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { Avatar, Button } from "react-native-paper"
import CustomCard from "../components/CustomCard"
import { FontAwesome } from "@expo/vector-icons"
// import CustomSearchBar from "../components/CustomSearchBar"
import { AuthContext } from "../context/AuthContext"
import { globalStyles } from "../styles"
import { useAuth } from "../hooks/useAuth"
export default function AccountScreen() {
  const { logout } = React.useContext(AuthContext)
  const { user } = useAuth()
  console.log(user)
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
          {user.username}
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            marginBottom: 20,
          }}
        >
          {user.email}
        </Text>
        <Button
          mode="contained"
          onPress={logout}
          icon="logout"
          style={styles.button}
        >
          Cerrar sesión
        </Button>
      </View>

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
