import { Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../utils/globals/Colors'
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title = "E-Commerce", navigation }) => {

  return (

    <View style={styles.container}>
      {navigation.canGoBack() && <Pressable onPress={() => { navigation.goBack() }}
        style={styles.goBack}>
        <AntDesign name="arrowleft" size={30} color="Black" />
      </Pressable>}
      <Text style={styles.text}>{title}</Text>
    </View>

  )
}

export default Header

const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.primary,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  text: {
    fontSize: 30,
    marginTop: 15,
    fontFamily: "Lobster-Regular"

  },
  goBack: {
    position: "absolute",
    left: 15
  }

})