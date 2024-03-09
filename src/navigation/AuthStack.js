import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()


import React from 'react'

const AuthStack = ({setIdToken}) => {

    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={({navigation, route}) => {
                return {
                    header: () => <Header
                                    title={route.name === "Login" ? "Inicio de sesion" : "Registro"}
                                    navigation={navigation}
                                    
                                    />
                }
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} initialParams={{setIdToken}} />
        </Stack.Navigator>
    )
}

export default AuthStack