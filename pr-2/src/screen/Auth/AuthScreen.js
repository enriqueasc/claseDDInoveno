import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image,} from "react-native"
import React, { useState } from "react"
// import ButtonSocial from "../../components/ButtonSocial"
import LoginForm from "../../components/auth/login/LoginForm"
import RegisterForm from "../../components/auth/register/RegisterForm"
import { styles } from "./AuthScreen.styles"
import logo from "../../assets/images/3_rgb.jpg"

export default function AuthScreen(props) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>AuthScreen</Text> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <View style={styles.cover}>
          <Image
            source={logo}
            style={styles.image}
          />
        </View>

        {showLogin ? (
          <>
            <Text style={styles.title}>Iniciar sesión</Text>
            <LoginForm setShowLogin={setShowLogin} />
          </>
        ) : (
          <>
            <Text style={styles.title}>Crea una cuenta</Text>
            <RegisterForm
              setShowLogin={setShowLogin}
              showLogin={showLogin}
            />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  )
}
