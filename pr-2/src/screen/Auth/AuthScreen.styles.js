import { StyleSheet } from "react-native"
import Fonts from "../../constants/Fonts"
import Colors from "../../constants/Colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#eaeaea",
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontSize: Fonts.size.large,
    fontWeight: "bold",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cover: {
    height: "40%",
    marginBottom: 20,
  },
})
