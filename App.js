import { StyleSheet, View, StatusBar } from 'react-native'
import Home from './src/screens/Home'
import { useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'
import ProductDetail from './src/screens/ProductDetail'
import Colors from './src/utils/globals/Colors'
import Categories from './src/components/Categories'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from './src/components/Header'



const App = () => {

  const [fontsLoaded] = useFonts({
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf")
  })

  const Stack = createNativeStackNavigator()

  if (!fontsLoaded) return null


  return (
    <>
      <StatusBar backgroundColor={Colors.secundary} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={({route, navigation})=>{
            return{
              header: () => {
                return <Header
                          navigation={navigation} 
                          title={route.name === "Home" ? "Categorias" :
                          route.name === "ProductsByCategory" ? route.params.categorySelected : "Detalle"}/>
              }
            }
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})



