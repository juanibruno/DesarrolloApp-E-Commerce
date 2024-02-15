import { StyleSheet, View } from 'react-native'
import Home from './src/screens/Home'
import { useState, useEffect } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import { useFonts } from 'expo-font'
import ProductDetail from './src/screens/ProductDetail'




const App = () => {

  const [fontsLoaded] = useFonts({
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf")
  })
  const [categorySelected, setCategorySelected] = useState("")
  const [productId, setProductId] = useState(0)

  if (!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }

  const selectProductId = (id) => {
    setProductId(id)
  }


  return (

    <View style={styles.container}>
      {categorySelected ?
        productId ?
          <ProductDetail productId={productId} />
          :
          <ProductsByCategory
            selectProductId={selectProductId}
            categorySelected={categorySelected} />
        :
        <Home selectedCategoryState={selectedCategoryState} />}
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})



