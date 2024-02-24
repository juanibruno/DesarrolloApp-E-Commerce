import { StyleSheet, FlatList, ImageBackground } from 'react-native'
import orders from '../utils/data/orders.json'
import OrderItem from '../components/OrderItem'
import Colors from '../utils/globals/Colors'
import Counter from '../components/Counter'


const Orders = () => {
  return (
    <ImageBackground
      source={require('../../assets/alex-perez-wEgR12N01Tk-unsplash.jpg')}
      style={styles.background}
      resizeMode="cover" 
    >
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
      <Counter/>
    </ImageBackground>
  )
}

export default Orders

const styles = StyleSheet.create({
  background:{
    flex: 1,
    width: '100%',
    height: '100%',
  }
})