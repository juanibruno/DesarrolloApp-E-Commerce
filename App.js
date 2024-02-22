import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import Colors from './src/utils/globals/Colors'
import MainNavigator from './src/navigation/MainNavigator'





const App = () => {

  const [fontsLoaded] = useFonts({
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf")
  })

 

  if (!fontsLoaded) return null


  return (
    <>
      <StatusBar backgroundColor={Colors.tercero} />
      <MainNavigator />
    </>
  )
}

export default App





