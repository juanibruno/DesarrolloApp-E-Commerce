import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import Orders from '../screens/Orders'
import OrdersStack from './OrdersStack'
import Colors from '../utils/globals/Colors'



const Tab = createBottomTabNavigator()

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen name="ShopStack" component={ShopStack}/>
                <Tab.Screen name="CartStack" component={CartStack}/>
                <Tab.Screen name="OrdersStack" component={OrdersStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: Colors.primary,
        height:80,
    }
})