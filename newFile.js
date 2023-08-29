import { View, Text,SafeAreaView } from 'react-native'
import React, { useState } from 'react'

export default function newFile() {
    console.log("render",count)
    const [count,setCount]=useState(1)
    const [n,setNew]=useState()

    const onClick=()=>{
        setCount(2)
        setCount(3)
        setCount(4)
        setCount(5)
        setNew(6)
        setCount(7)
    }
  return (
    <SafeAreaView>
            <Text onPress={onClick} style={{textAlign:'center'}}>{count}</Text>
            <Text style={{textAlign:'center'}}>{n}</Text>

    </SafeAreaView>
  )
}