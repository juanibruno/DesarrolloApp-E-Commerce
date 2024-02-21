import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import Orders from '../screens/Orders'
import OrdersStack from './OrdersStack'







const MainNavigator = () => {
    return (
        <NavigationContainer>
            <ShopStack/>
        </NavigationContainer>
    )
}

export default MainNavigator
