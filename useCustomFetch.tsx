import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function useCustomFetch(url:string) {

  const [data,setData]=useState<any>()
  const [loading,setLoadingState]=useState<boolean>()
  const [error,setError]=useState({status:false,msg:''})
  const [DataOriginal, setDataOriginal] = useState<any>([])


  // sort item
  const sortDataToAscendingOrder = (input: Array<any>) => {
    return input.sort((a, b) => Number(a.Population) - Number(b.Population))
  }
  useEffect(()=>{
    axios.get(url).then((response) => {
      const { data, status } = response
      
      if (status === 200) {
        setData(sortDataToAscendingOrder(data.data))
        setDataOriginal(sortDataToAscendingOrder(data.data))
      }
    }).catch((err: any) => {
      setLoadingState(false)
      setError({status:false,msg:''})

    })
  },[url])

  return [loading,data,DataOriginal,error,setData,setLoadingState,setError,setDataOriginal]
}