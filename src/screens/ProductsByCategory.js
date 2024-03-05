import { StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import ProductoPorCategoria from '../components/ProductoPorCategoria'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'


const ProductsByCategory = ({ navigation, route }) => {

  const { categorySelected } = route.params
  const { data: products } = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")

   const handlerKeyword = (k) => {
    setKeyword(k)
  }

  useEffect(() => {
    setProductsFiltered(products)
    if (keyword) setProductsFiltered(products.filter(product => {
      const productTitleLower = product.title.toLowerCase()
      const keywordLower = keyword.toLowerCase()
      return productTitleLower.includes(keywordLower)
    }))
  }, [categorySelected, keyword, products])


  return (
    <>
      <Search handlerKeyword={handlerKeyword} />
      <FlatList
        style={styles.container}
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductoPorCategoria navigation={navigation} item={item} />}
      />
    </>
  )
}
export default ProductsByCategory

const styles = StyleSheet.create({})




