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
        height:100,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:30,

    }
    
})