import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { menu_list } from '../constants/recipes/assets'
import { colors } from '../styles/styles'

const CategoryList = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menu_list.map((item, index) => (
          <View key={item.id} style={[
            styles.categoryItem, 
            { backgroundColor: index === 0 ? colors.COLOR_GREEN : colors.COLOR_WHITE }
          ]}>
            <Text style={{color:index=== 0 ? colors.COLOR_WHITE:colors.COLOR_DARK}}>{item.menu_name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
  categoryItem: {
    marginVertical: 15,
    paddingHorizontal: 15,
    shadowRadius: 5,
    borderRadius: 10, 
    paddingVertical: 10, 
    marginHorizontal: 5, 
  },
})
