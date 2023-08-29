import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    State:string
    population:BigInt
}

// jsx for child item
const  ChildItem=(props:Props)=>{
    const {State,population}=props
  return (
    <View>
      <Text style={styles.item}>{`${State}-${population}`}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    item:{
      fontSize:30,
      marginLeft:20,
      marginVertical:10
    }
  })
export default React.memo(ChildItem)
