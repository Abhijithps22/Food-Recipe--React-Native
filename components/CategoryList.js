import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { menu_list, food_list } from '../constants/recipes/assets';
import { colors, globalStyles } from '../styles/styles';
import RecipeCard from './RecipeCard';

const CategoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredData, setFilteredData] = useState(food_list);

    const handleFilter = (category) => {
        setSelectedCategory(category);
        setFilteredData(category === "All" ? food_list : food_list.filter(item => item.category === category));
    };

    return (
        <View>
            <View>
                <Text style={globalStyles.title}>Category</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {menu_list.map((item) => (
                        <Pressable key={item.id} onPress={() => handleFilter(item.menu_name)}>
                            <View style={[
                                styles.categoryItem,
                                { backgroundColor: selectedCategory === item.menu_name ? colors.COLOR_GREEN : colors.COLOR_WHITE }
                            ]}>
                                <Text style={{ color: selectedCategory === item.menu_name ? colors.COLOR_WHITE : colors.COLOR_DARK }}>
                                    {item.menu_name}
                                </Text>
                            </View>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
            <View>
                <Text style={globalStyles.title}>Recipes</Text>
                <RecipeCard data={filteredData} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryItem: {
        marginVertical: 15,
        paddingHorizontal: 15,
        shadowRadius: 5,
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 5,
    },
});

export default CategoryList;
