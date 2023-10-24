import { View, Text } from "react-native"
import React from "react"
import { TextInput, Button } from "react-native-paper"
import { globalStyles } from "../../../styles"
import { useFormik } from "formik"
import * as Yup from "yup"
import { authApi } from "../../../api/auth"
import { useAuth } from "../../../hooks/useAuth.js"
import Toast from "react-native-root-toast"

export default function LoginForm(props) {
  const { setShowLogin } = props
  const { login } = useAuth()
  const useAuthData = useAuth()
  console.log("useAuthData", useAuthData)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      const { email: identifier, password } = formData
      try {
        const response = await authApi.login(identifier, password)
        console.log("Log in ok")
        console.log(response)
        login(response.jwt)
      } catch (error) {
        console.log("error credenciales: ", error)
        Toast.show("Incorrect username or password, Morty!", {
          position: Toast.positions.CENTER,
          duration: Toast.durations.LONG,
        })
      }
    },
  })

  return (
    <View style={{ marginHorizontal: 20 }}>
      <TextInput
        label="Correo"
        style={styles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      ></TextInput>
      <TextInput
        label="Contraseña"
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      ></TextInput>
      <Button
        mode="contained"
        style={styles.buttonSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Iniciar Sesión
      </Button>
      <Button
        mode="text"
        style={styles.buttonText}
        onPress={() => setShowLogin(false)}
      >
        Crear nuevo usuario
      </Button>
    </View>
  )
}

const styles = {
  input: {
    ...globalStyles.form.input,
    // backgroundColor: "transparent",
    borderColor: "#00FF00", // Rick's portal green
    color: "#FFFFFF", // White text
  },
  buttonSubmit: {
    ...globalStyles.form.buttonSubmit,
    backgroundColor: "#FF9800", // Rick's lab coat orange
  },
  buttonText: {
    ...globalStyles.form.buttonText,
    color: "#FF9800", // Rick's lab coat orange
  },
}
