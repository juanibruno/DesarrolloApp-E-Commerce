import { Pressable, StyleSheet, TextInput, View, Keyboard, Text } from 'react-native'
import { AntDesign } from "@expo/vector-icons"
import Colors from '../utils/globals/Colors'
import { useState } from 'react'




const Search = ({ handlerKeyword }) => {

    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const handlerInput = (t) => setInput(t)

    const search = () => {

        const expression = /[!#$%&.;)(<>?]/
        if (expression.test(input)) {
            setError("Caracteres no permitidos");
            return
        }

        setError()
        handlerKeyword(input);
        Keyboard.dismiss()
    }

    const resetSearch = () => {
        
        handlerKeyword('')
        handlerInput('')
        setError()
    }

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    placeholder='Buscar'
                    value={input}
                    onChangeText={handlerInput}
                    style={styles.input}
                />
                <Pressable onPress={search}>
                    <AntDesign name="search1" size={30} color="black" />
                </Pressable>
                <Pressable onPress={resetSearch}>
                    <AntDesign name="closecircle" size={30} color="black" />
                </Pressable>
            </View>
            { error ? <Text style={styles.textError}>{error}</Text> : null }  
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secundary,
        flexDirection: "row",
        alignItems: 'center',
        padding: 10
    },

    input: {
        flex: 1,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        margin: 10
    },
    textError:{
        backgroundColor:"#E00B47",
        paddingHorizontal:10,
        margin:1,
        fontSize:20
    }
})