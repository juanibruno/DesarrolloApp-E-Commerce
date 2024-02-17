import { Pressable, StyleSheet, Text, View } from 'react-native'


import ShadowPrimary from '../components/Wrappers/ShadowPrimary'

import Colors from '../utils/globals/Colors'
import fonts from '../utils/globals/Fonts'


const CardCategories = ({ item }) => {
    return (
        <Pressable onPress={() => console.log(item)}>
            <ShadowPrimary style={styles.container}>
                <Text style={styles.text}>{item}</Text>
            </ShadowPrimary>
        </Pressable>
    )
}

export default CardCategories

const styles = StyleSheet.create({

    container: {
        width: "80%",  /* aca debería bajar el widht para que en app se vea tamaño ok */
        backgroundColor: Colors.secundary,
        marginHorizontal: '10%',
        marginVertical: 10,
        padding: 20,
        alignItems: 'center',
        borderRadius:10,
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.LobsterRegular
    },

})