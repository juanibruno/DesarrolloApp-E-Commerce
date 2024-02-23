import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native'
import cart from '../utils/data/cart.json'
import CartItem from '../components/CartItem'
import Fonts from '../utils/globals/Fonts'


const Cart = () => {
    
  return (
    <View style={styles.container}>
        
        <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
        />
      <View style={styles.confirmContainer}>
        <Pressable>
            <Text style={styles.confirmText}>Confirmar</Text>
        </Pressable>
        <Text style={styles.confirmText}>Total: ${cart.total} </Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        gap:5,
        justifyContent:"space-between",
        marginBottom:130
    },
    confirmContainer:{
        flexDirection:"row",
        backgroundColor:"gray",
        padding:20,
        justifyContent:"space-between"
    },
    confirmText:{
        fontFamily: Fonts.LobsterRegular,
        fontSize:18,
        color:"white"
    }
})