import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/styles'

const Home = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.banner}>
        <Image source={{uri:"https://imgs.search.brave.com/OVm86rO7h3hUvRqOYNOF6cw8cNqK9W-2xex42eBjU5M/rs:fit:860:0:0/g:ce/aHR0cDovL3d3dy5n/cmVlbnF1ZWVuLmNv/bS5oay93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8wMS9ncmVl/bi1raXRjaGVuLXN0/b3JpZXMtdmVnZ2ll/LWJvd2wuanBn"}} style={styles.bannerImage} />
      </View>
      <Text style={styles.recipesText}>32K+ Premium Recipes</Text>
      <Text style={styles.mainTitle}>Make Your Recipe</Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("RecipeList")}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  banner: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 350,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: 'white',
    objectFit:"cover"
  },
  recipesText: {
    color: "#0AC004",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  mainTitle: {
    color: "#3c444c",
    fontWeight: "bold",
    fontSize: 44,
    marginTop: 50,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0AC004",
    justifyContent: "center",
    marginTop: 70,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  }
})
