import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from '../components/Header'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import ProductoPorCategoria from '../components/ProductoPorCategoria'



const ProductsByCategory = ({ categorySelected }) => {

  const [productsFiltered, setProductsFiltered] = useState([])

  useEffect (() => {
    setProductsFiltered(products.filter(product => product.category === categorySelected ))
  },[categorySelected])

  return (
    <>
      <Header title={categorySelected} />
      <FlatList
        style={styles.container}
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductoPorCategoria item={item}/>}
      />

    </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})