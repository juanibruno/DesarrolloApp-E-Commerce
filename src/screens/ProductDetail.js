import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import Colors from '../utils/globals/Colors'
import { useDispatch } from 'react-redux'
import { addCArtItem } from '../features/cart/cartSlice'
import { useGetProductQuery } from '../app/services/shop'


const ProductDetail = ({ route }) => {
  const dispatch = useDispatch()
  const { productId } = route.params
  const { data: product, isLoading } = useGetProductQuery(productId)
if (isLoading) return null

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
          <Pressable style={styles.buyNow} onPress={() => dispatch(addCArtItem(product))}>
            <Text style={styles.buyNowText}>Agregar</Text>
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