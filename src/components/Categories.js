import { StyleSheet, FlatList } from 'react-native'
import { useGetCategoriesQuery } from '../servicios/shop'

import CardCategories from './CardCategories'

const Categories = ({ navigation }) => {

    const { data: categories } = useGetCategoriesQuery()

    return (

        <FlatList
            data={categories}
            keyExtractor={item => item}
            renderItem={({ item }) => <CardCategories item={item} navigation={navigation} />}
        />

    )
}

export default Categories

const styles = StyleSheet.create({})