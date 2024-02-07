import { StyleSheet, Text, View } from 'react-native'
import ShadowPrimary from './Wrappers/ShadowPrimary'
import Colors from '../utils/globals/Colors'


const CardCategories = ({item}) => {
    return (
        <ShadowPrimary style={styles.container}>
            <Text style={styles.text}>{item}</Text>
        </ShadowPrimary>
    )
}

export default CardCategories

const styles = StyleSheet.create({

    container:{
        width:150,   /* aca debería bajar el widht para que en app se vea tamaño ok */
        backgroundColor: Colors.secundary,
        marginHorizontal:'10%',
        marginVertical:10,
        padding:5,
        alignItems:'center'
    },
    text:{
        fontSize:18,
    },

})