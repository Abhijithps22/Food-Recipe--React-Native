import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { globalStyles } from '../styles/styles'
const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={globalStyles.title}>Hi Abhijith</Text>
        <FontAwesome name={'bell-o'} size={24} color={"#0AC004"}/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
})