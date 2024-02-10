import { StyleSheet, FlatList, View, Text } from 'react-native'
import Header from '../components/Header'
import products from '../utils/data/products.json'





const ProductsByCategory = ({categorySelected}) => {

/* console.log(products); */

  return (
   <>
    <Header title={categorySelected}/>
    <FlatList
      style={styles.container}
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => <View><Text>{item.title}</Text></View> }
    />
   
   </>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({})




