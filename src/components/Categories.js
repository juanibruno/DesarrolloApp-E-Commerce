import { StyleSheet, FlatList } from 'react-native'
import categories from '../utils/data/categories.json'
import CardCategories from './CardCategories'

const Categories = ({navigation}) => {

    return (

        <FlatList
            data={categories}
            keyExtractor={item => item}
            renderItem={({ item }) => <CardCategories item={item} navigation={navigation}/>}
        />
    )
}

export default Categories

const styles = StyleSheet.create({})