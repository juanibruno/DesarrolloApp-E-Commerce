import { StyleSheet, Text, View } from 'react-native'
import Colors from '../utils/globals/Colors'


const Header = ({title="E-Commerce"}) => {
    
  return (

    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>

  )
}

export default Header

const styles = StyleSheet.create({

    container:{
        backgroundColor: Colors.primary,
        height:80,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:30,
        marginTop:15,
        fontFamily:"Lobster-Regular"

    }
    
})