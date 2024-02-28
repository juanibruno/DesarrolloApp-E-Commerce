import { StyleSheet, Text, View , Pressable } from 'react-native'
import Colors from '../utils/globals/Colors'
import { AntDesign } from '@expo/vector-icons'
import Fonts from '../utils/globals/Fonts'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../features/cart/cartSlice'


const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    return (

        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
                <Text style={styles.text2}>${item.price}</Text>
            </View>
            <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
                <AntDesign name="delete" size={27} color="black" />
            </Pressable>
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
        margin: 1,
        color: "black",
        fontSize: 14,

    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    }

})