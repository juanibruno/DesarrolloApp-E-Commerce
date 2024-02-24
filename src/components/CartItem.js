import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import Colors from '../utils/globals/Colors'
import { AntDesign } from '@expo/vector-icons'
import Fonts from '../utils/globals/Fonts'


const CartItem = ({ item }) => {
    return (

        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>{item.price}</Text>
            </View>
            <AntDesign name="delete" size={30} color="black" />
        </View>

    )
}

export default CartItem

const styles = StyleSheet.create({

    card: {
        backgroundColor: Colors.tercero,
        padding: 10,
        margin: 5,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 100,
        alignItems: "center"
    },
    textContainer: {
        width: "70%"
        
    },
    text: {
        fontFamily: Fonts.JosefinSansBold,
        color: "black",
        fontSize: 18,
        
    },
    text2: {
        fontFamily: Fonts.JosefinSansBold,
        margin:1,
        color: "black",
        fontSize:14,
        
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    }

})