import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import IconsTabBar from '../components/IconsTabBar'
import Colors from '../utils/globals/Colors'


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
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
                    tabBarIcon: ({ focused }) => <IconsTabBar title="Productos"
                        nameIcon="folderopen"
                        focused={focused} />
                }}
            />
            <Tab.Screen name="CartStack"
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => <IconsTabBar title="Carrito"
                        nameIcon="shoppingcart"
                        focused={focused} />
                }}
            />
            <Tab.Screen name="OrdersStack"
                component={OrdersStack}
                options={{
                    tabBarIcon: ({ focused }) => <IconsTabBar title="Ordenes"
                        nameIcon="profile"
                        focused={focused} />
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({

    tabBar: {
        backgroundColor: Colors.tercero,
        height: 100,
        width: "auto",
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 15,
        borderRadius: 15,
        elevation: 4
    }
})