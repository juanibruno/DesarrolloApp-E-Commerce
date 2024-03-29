import { ImageBackground, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Counter from '../components/Counter'





const Home = ({ navigation }) => {
    return (
        <View>
            <ImageBackground source={require('../../assets/alex-perez-wEgR12N01Tk-unsplash.jpg')} // Cambia la ruta según la ubicación de tu imagen de fondo
                style={styles.background}
                resizeMode="cover" >
                    <Counter/>
                <Categories navigation={navigation} />
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})