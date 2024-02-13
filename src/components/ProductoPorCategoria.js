import { StyleSheet, Text, View, Image } from 'react-native'
import Colors from '../utils/globals/Colors';


const ProductoPorCategoria = ({item}) => {


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:item.thumbnail}}/>
            <Text style={styles.text}>{item.id} {item.title}</Text>
        </View>
    )
}

export default ProductoPorCategoria

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        width:"80%",
        marginHorizontal:"10%",
        marginVertical:5,
        padding:10,
        borderRadius:5,
        flexDirection:"row",
        alignItems: "center",
        gap:10,
        justifyContent:"center"


    },
    text:{
        width:"70%",
        fontSize:18,
        fontFamily:"Lobster-Regular"
    },
    image:{
        width:90,
        height:90
    }

})