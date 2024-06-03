import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { globalStyles } from '../styles/styles'
import SearchFilter from '../components/SearchFilter'
import CategoryList from '../components/CategoryList'

const RecipeList = () => {
  return (
    <View style={globalStyles.container}>
      <Header/>
      <SearchFilter icon={"search"} placeholder={"Enter Your Fav Recipe"}/>
      <CategoryList/> 
    </View>
  )
}

export default RecipeList

const styles = StyleSheet.create({})