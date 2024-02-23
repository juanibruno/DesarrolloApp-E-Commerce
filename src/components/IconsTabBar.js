import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const IconsTabBar = ({ title, nameIcon, focused }) => {
    return (
        <View style={styles.container}>
            <AntDesign name={nameIcon} size={25} color={focused ? Colors.primary : "black"}/>
            <Text style={[styles.text, !focused && styles.textFocused]}>{title}</Text>
        </View>
    )
}

export default IconsTabBar

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        color:Colors.primary,
        textAlign: "center",
        fontSize:11
    },
    textFocused:{
        color: "black"
    }
})