import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { useState } from 'react'
import Colors from '../utils/globals/Colors'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import fonts from '../utils/globals/Fonts'



const Login = ({ navigation }) => {
    
    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")

    const onSubmit = () => {
        console.log(email),
        console.log(password);
    }


    return (

        <ImageBackground style={styles.image} source={require('../../assets/alex-perez-wEgR12N01Tk-unsplash.jpg')}>
            <View style={styles.main}>
                <View style={styles.container}>
                    <InputForm
                        label="Email"
                        value={email}
                        onChangeText={(t) => setEmail(t)}
                        isSecure={false}
                        error=""
                        
                    />
                    <InputForm
                        label="Password"
                        value={password}
                        onChangeText={(t) => setPasword(t)}
                        isSecure={true}
                        error=""
                    />
                    <SubmitButton onPress={onSubmit} title="Iniciar Sesión" />
                    <Text style={styles.sub}>No tenes una cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.subLink}>Registro</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({

    main: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 20,
        alignItems: "center",
    },
    container: {
        width: "90%",
        backgroundColor: Colors.primary,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.LobsterRegular
    },
    sub: {
        fontSize: 14,
        fontFamily: fonts.JosefinSansBold
    },
    subLink: {
        fontSize: 14,
        fontFamily: fonts.JosefinSansBold,
        color: "blue"
    },
    image: {
        flex: 1,
    }
})