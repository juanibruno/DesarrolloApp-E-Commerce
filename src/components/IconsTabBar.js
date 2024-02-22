import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


const IconsTabBar = ({ title, nameIcon }) => {
    return (
        <View style={styles.container}>
            <AntDesign name={nameIcon} size={25} color="black"/>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default IconsTabBar

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        color:"black",
        textAlign: "center",
        fontSize:11
    }
})