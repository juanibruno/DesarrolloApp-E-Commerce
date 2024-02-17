import { ImageBackground, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'




const Home = () => {
    return (
        <View>
            <Header title="App - J.I.B"/>
            <ImageBackground source={require('../../assets/alex-perez-wEgR12N01Tk-unsplash.jpg')} // Cambia la ruta según la ubicación de tu imagen de fondo
          style={styles.background}
          resizeMode="cover" >
            <Categories />      
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    
})