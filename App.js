import { StyleSheet, View, StatusBar } from 'react-native'
import Home from './src/screens/Home'
import { useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'
import ProductDetail from './src/screens/ProductDetail'
import Colors from './src/utils/globals/Colors'
import Categories from './src/components/Categories'




const App = () => {

  const [fontsLoaded] = useFonts({
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf")
  })
  
  
  if (!fontsLoaded) return null


  return (
    <>
    <StatusBar backgroundColor={Colors.secundary}/>
   <ProductDetail productId={2}/>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})



