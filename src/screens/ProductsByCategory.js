import { StyleSheet, FlatList, View, Text } from 'react-native'
import Header from '../components/Header'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import ProductoPorCategoria from '../components/ProductoPorCategoria'
import Search from '../components/Search'





const ProductsByCategory = ({categorySelected, selectProductId}) => {

const [productsFiltered, setProductsFiltered] = useState ([])
const [keyword, setKeyword] = useState("")

const handlerKeyword = (k) => {
  setKeyword(k)
}

  useEffect(() =>{
    if (categorySelected) setProductsFiltered(products.filter(product => product.category === categorySelected))
    if (keyword) setProductsFiltered(productsFiltered.filter(product => {
      const productTitleLower = product.title.toLowerCase()
      const keywordLower = keyword.toLowerCase()
      return productTitleLower.includes(keywordLower)
    }))
  },[categorySelected, keyword])
    

  


  return (
   <>
    <Header title={categorySelected}/>
    <Search handlerKeyword={handlerKeyword}/>
    
    <FlatList
      style={styles.container}
      data={productsFiltered}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ProductoPorCategoria selectProductId={selectProductId} item={item}/>}
    />
   
   </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})




