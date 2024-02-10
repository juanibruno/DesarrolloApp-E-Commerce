import { StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'




const Home = ({selectedCategoryState}) => {
    return (
        <View>
            <Header title="Titulo"/>
            <Categories selectedCategoryState={selectedCategoryState}/>      
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})