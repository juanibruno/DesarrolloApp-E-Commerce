import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import products from '../utils/data/products.json'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Colors from '../utils/globals/Colors'


const ProductDetail = ({ route }) => {
  const { productId } = route.params
  const [product, setProduct] = useState({})

  useEffect(() => {
    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  }, [productId])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: product?.images ? product.images[2] : null }}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </Pressable>
        </View>

      </View>
      <Text>{product.title}</Text>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: "start",
    alignItems: "center",


  },
  content: {
    width: "100%",

  },
  image: {
    width: "100%",
    height: 300
  },

  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25

  },

  title: {
    fontSize: 20,
    fontWeight: "bold"
  },

  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10


  },
  price: {
    fontSize: 30,
  },
  buyNow: {
    backgroundColor: Colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buyNowText: {
    color: "white"
  }

})