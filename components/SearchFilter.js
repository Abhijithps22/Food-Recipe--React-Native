import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SearchFilter = ({ icon, placeholder }) => {
  const [text, setText] = useState("")
  return (
    <SafeAreaView>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder={placeholder}
        />
        <FontAwesome name={icon} size={24} style={styles.icon} color={"#0AC004"}/>
      </View>
    </SafeAreaView>
  )
}

export default SearchFilter

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 25,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 10,
    borderRadius: 20,
  },
  icon: {
    marginRight:5
  },
});
