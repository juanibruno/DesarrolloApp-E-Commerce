import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'



const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const [number, setNumber] = useState(0)


    return (
        <View style={styles.counterContainer}>
            <Button title='Sumar' onPress={() => dispatch(increment())} />
            <Text>{count}</Text>
            <Button title='Restar' onPress={() => dispatch(decrement())} />
            <TextInput style={styles.input} onChangeText={(t) =>setNumber(parseInt(t)) }/>
            <Button title='Monto' onPress={()=>dispatch(incrementByAmount(number))}/>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10
    }

})

