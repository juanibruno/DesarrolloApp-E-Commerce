import { StyleSheet } from 'react-native'
import Home from './src/screens/Home'
import { useState, useEffect } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'


const App = () => {

  const [categorySelected, setCategorySelected] = useState("")

  const selectedCategoryState = (category) => {

    setCategorySelected(category)

  }
  useEffect(() => {
    console.log(categorySelected);
  }, [categorySelected])


  return (

    <Home selectedCategoryState={selectedCategoryState} />
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