import { Pressable, StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import CartItem from '../components/CartItem'
import Fonts from '../utils/globals/Fonts'
import { useSelector } from 'react-redux'


const Cart = () => {

    const cart = useSelector((state)=> state.cart)

    return (
        <ImageBackground
            source={require('../../assets/alex-perez-wEgR12N01Tk-unsplash.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>

                <FlatList
                    data={cart.items}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <CartItem item={item} />}
                />
                <View style={styles.confirmContainer}>
                    <Pressable>
                        <Text style={styles.confirmText}>Confirmar</Text>
                    </Pressable>
                    <Text style={styles.confirmText}>Total: ${cart.total} </Text>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        gap: 5,
        justifyContent: "space-between",
        marginBottom: 130
    },
    confirmContainer: {
        flexDirection: "row",
        backgroundColor: "gray",
        padding: 20,
        justifyContent: "space-between"
    },
    confirmText: {
        fontFamily: Fonts.LobsterRegular,
        fontSize: 18,
        color: "white"
    },
    background:{
        flex: 1,
    width: '100%',
    height: '100%',
    }
})