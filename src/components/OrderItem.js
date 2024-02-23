import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../utils/globals/Colors'
import fonts from '../utils/globals/Fonts'



const OrderItem = ({ order }) => {

   

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {new Date(order.createAt).toLocaleDateString()}
                </Text>
                <Text style={styles.text}>$ {order.total}</Text>
            </View>
            <AntDesign name='infocirlceo' size={30} color="black" style={styles.iconoInfo}/>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    card:{
        backgroundColor: Colors.primary,
        margin:10,
        borderWidth:2,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        alignItems:"center",
        elevation: 10,
      },
      textContainer:{
        width:"70%",
        padding:10,
      },
      text:{
        fontSize:17,
        fontFamily: fonts.JosefinSansBold
      },
      text2:{
        fontSize:19,
        fontFamily: fonts.JosefinSansBold,
        color:"grey"
      },
      iconoInfo:{
        padding:10
      }
})