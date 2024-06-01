import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { food_list } from '../constants/recipes/assets';
import { useNavigation } from '@react-navigation/native';

const RecipeCard = () => {
    const navigation =useNavigation()
  return (
    <View style={styles.cardList}>
      <FlatList showsVerticalScrollIndicator={false} style={styles.cardItems}
        data={food_list}
        renderItem={({ item }) => (
          <Pressable onPress={()=>navigation.navigate("RecipeDetails",{item})} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Expense:${item.price}</Text>
            <Text style={styles.time}>Time:{item.time}</Text>
          </Pressable>
        )}
        keyExtractor={item => item._id}
        numColumns={2}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
    cardList:{
        marginBottom:450
    },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginVertical: 5,
  },
  time: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
