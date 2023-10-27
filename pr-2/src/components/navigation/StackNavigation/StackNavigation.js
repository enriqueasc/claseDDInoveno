import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import RickAndMortyApi from "../../../api/rm"
import CharacterDetail from "../../../screen/Character/CharacterDetail"
import ChangeName from "../../../screen/ChangeName"
import ChangeEmail from "../../../screen/ChangeEmail"
import ChangeUserName from "../../../screen/ChangeUserName"
import ChangePassword from "../../../screen/ChangePassword"


export default function StackNavigation() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RickAndMortyApi"
        component={RickAndMortyApi}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="CharacterDetail"
        component={CharacterDetail}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ChangeName"
        component={ChangeName}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ChangeEmail"
        component={ChangeEmail}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="ChangeUserName"
        component={ChangeUserName}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />


    </Stack.Navigator>
  )
}
