import { StyleSheet } from 'react-native'
import Home from './src/screens/Home'
import { useState, useEffect } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'



const App = () => {

  const [fontsLoaded] = useFonts({
    "JosefinSans-Bold":require("./assets/fonts/JosefinSans-Bold.ttf"),
    "Lobster-Regular":require("./assets/fonts/Lobster-Regular.ttf")
  })
  const [categorySelected, setCategorySelected] = useState("")

 if(!fontsLoaded) return null

  const selectedCategoryState = (category) => {

    setCategorySelected(category)

  }


  return (

    <>
      {categorySelected ? <ProductsByCategory categorySelected={categorySelected} /> : <Home selectedCategoryState={selectedCategoryState} />}
    </>

  )
}

export default App

const styles = StyleSheet.create({})





{/* <>
      {categorySelected ?
                <ProductsByCategory categorySelected={categorySelected} />
                :
                <Home selectedCategoryState={selectedCategoryState} />

      }
    </> */}