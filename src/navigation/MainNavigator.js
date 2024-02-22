import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import Orders from '../screens/Orders'
import OrdersStack from './OrdersStack'
import Colors from '../utils/globals/Colors'
import IconsTabBar from '../components/IconsTabBar'




const Tab = createBottomTabNavigator()

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,

                }}
            >
                <Tab.Screen name="ShopStack"
                    component={ShopStack}
                    options={{
                        tabBarIcon: () => <IconsTabBar title="Productos" nameIcon="folderopen"/>
                    }}
                />
                <Tab.Screen name="CartStack"
                    component={CartStack}
                    options={{
                        tabBarIcon: () => <IconsTabBar title="Carrito" nameIcon="shoppingcart" />
                    }}
                />
                <Tab.Screen name="OrdersStack"
                    component={OrdersStack}
                    options={{
                        tabBarIcon: () => <IconsTabBar title="Ordenes" nameIcon="profile" />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: Colors.tercero,
        height: 80,
        width: "auto",
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 15,
        borderRadius: 15,
        elevation: 4
    }
})