import { StyleSheet, FlatList, View, Text } from 'react-native'
import Header from '../components/Header'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'





const ProductsByCategory = ({categorySelected}) => {

/* console.log(products); */

const [productsFiltered, setProductsFiltered] = useState ([])

  useEffect(() =>{
    setProductsFiltered(products.filter(product => product.category === categorySelected))
  },[categorySelected])

  console.log(productsFiltered); /* funciona ok productsFiltered, ya que los muestra por consola  */


  return (
   <>
    <Header title={categorySelected}/>
    <FlatList
      style={styles.container}
      data={productsFiltered}
      keyExtractor={item => item.id}
      renderItem={({item}) => <View><Text>{item.title}</Text></View> }
    />
   
   </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})




