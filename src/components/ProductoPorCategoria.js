import { StyleSheet, Text, View } from 'react-native'
import Colors from '../utils/globals/Colors';


const ProductoPorCategoria = ({item}) => {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.id}{item.title}</Text>
        </View>
    )
}

export default ProductoPorCategoria

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        width:"80%",
        marginHorizontal:"10%",
        padding:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems: "center",
        gap:20

    },
    text:{
        width:"60%",
        fontSize:16,
    }
})