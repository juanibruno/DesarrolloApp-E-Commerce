import { StyleSheet, Text, View, FlatList } from 'react-native'
import categories from '../utils/data/categories.json'
import CardCategories from './CardCategories'

const Categories = () => {
    return (
        <FlatList
            data={categories}
            keyExtractor={item => item}
            renderItem={({ item }) => <CardCategories item={item}/>}
        />
    )
}

export default Categories

const styles = StyleSheet.create({})