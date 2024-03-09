import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useState } from 'react'
import Colors from '../utils/globals/Colors'
import fonts from '../utils/globals/Fonts'
import { useRegisterMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'



const Register = ({ navigation }) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [triggerRegister] = useRegisterMutation()

    const onSubmit = async () => {
        const {data} = await triggerRegister({ email, password })
  /*       console.log({idToken:data.idToken, email:data.email}) */
        dispatch(setUser({email:data.email, idToken:data.idToken}))


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
                    <InputForm
                        label="Confirmar Password"
                        value={confirmPassword}
                        onChangeText={(t) => setConfirmPassword(t)}
                        isSecure={true}
                        error=""
                    />
                    <SubmitButton onPress={onSubmit} title="Registrarme" />
                    <Text style={styles.sub}>ya tenes cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.subLink}>Inicio de sesion</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Register

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