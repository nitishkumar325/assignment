import { View, Text, SafeAreaView, FlatList, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import childItem from './childItem'
import axios from 'axios'
import ChildItem from './childItem'
import useCustomFetch from './useCustomFetch'


export default function App() {

  const [search, setSearch] = useState('')
  const [loading,data,DataOriginal,error,setData,setLoadingState,setError,setDataOriginal]=useCustomFetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest')

  // // network request
  // useEffect(() => {
  //   setLoadingState(true)
  //   axios.get('').then((response) => {
  //     const { data, status } = response
  //     setLoadingState(false)
  //     if (status === 200) {
  //       setData(sortDataToAscendingOrder(data.data))
  //       setDataOriginal(sortDataToAscendingOrder(data.data))
  //     }
  //   }).catch((err: any) => {
  //     setLoadingState(false)
  //   })
  // }, [])

  // jsx for item
  const renderItem = ({ item }: any) => {
    const { Population, State } = item
    return (
      <ChildItem State={State} population={Population} />
    )
  }
  // sort item
  const sortDataToAscendingOrder = (input: Array<any>) => {
    return input.sort((a, b) => Number(a.Population) - Number(b.Population))

  }
  //it check the search string on input array 
  const sortDataToDescending = (search: string) => {
    const result = DataOriginal.filter((item, index) => item.State.toLowerCase().startsWith(search.toLowerCase())).sort((a, b) => b.State.localeCompare(a.State))
    if (result && search != '') {
      setData([...result])
    }
    else {
      setData([...DataOriginal])
    }
  }

  const debounceSearch = (cb: Function, time: any) => {
    return (input: any) => {
      let timer
      if (timer)
        clearTimeout(timer)
      timer = setTimeout(() => {
        cb(input)
      }, time);
    }
  }

  useEffect(() => {
    sortDataToDescending(search)
  }, [search])

  const onChangeSearch = debounceSearch((input: any) => {
    setSearch(input)
  }, 500)

  // jsx for empty container
  const listEmptyComponent = () => {
    return (search != '' && <Text style={styles.listEmtyText}>{"........No result Found......"}</Text>)
  }

  //main view
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextInput onChangeText={onChangeSearch} placeholder={"Filter..."} style={styles.inputContainer} />
      <FlatList ListEmptyComponent={listEmptyComponent} style={styles.flatListCon} keyExtractor={(_, index) => `${"time"}${index}`} data={data} renderItem={renderItem} />
      {loading &&
        <ActivityIndicator style={styles.position} size={'large'} color={'red'} />
      }
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    width: "90%",
    height: 50,
    marginHorizontal: '5%',
    borderWidth: 1,
    borderColor: 'black'

  }, flatListCon: {
    marginTop: 20
  }, position: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }, listEmtyText: {
    textAlign: 'center',

  }
})

