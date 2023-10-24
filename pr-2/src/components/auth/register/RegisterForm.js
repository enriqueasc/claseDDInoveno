import { View, Text } from "react-native"
import React from "react"
import { TextInput, Button } from "react-native-paper"
import { globalStyles } from "../../../styles"
import { useFormik } from "formik"
import * as Yup from "yup"
import { authApi } from "../../../api/auth"

export default function RegisterForm(props) {
  const { setShowLogin } = props
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      username: Yup.string().required(),
      password: Yup.string().required(),
      confirmPassword: Yup.string().required(),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      console.log("ok")
      const { email, username, password } = formData
      try {
        console.log("Registrando...")
        await authApi.register(email, username, password)
        setShowLogin(true)
      } catch (error) {
        console.log("Error al registrar")
        console.error(error)
      }
      console.log("Formulario enviado")
      console.log(formData)
    },
  })

  return (
    <View>
      <TextInput
        label="Email"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      ></TextInput>
      <TextInput
        label="Username"
        style={globalStyles.form.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
      ></TextInput>
      <TextInput
        label="Password"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      ></TextInput>
      <TextInput
        label="Confirm Password"
        style={globalStyles.form.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
        value={formik.values.confirmPassword}
        error={formik.errors.confirmPassword}
      ></TextInput>
      <Button
        mode="contained"
        style={globalStyles.form.buttonSubmit}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      >
        Register
      </Button>
      <Button
        mode="text"
        style={globalStyles.form.buttonText}
        onPress={() => setShowLogin(true)}
      >
        Log in
      </Button>
    </View>
  )
}
