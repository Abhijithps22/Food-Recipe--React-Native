import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../styles/styles';

const RecipeDetails = ({ navigation, route }) => {
    const { item } = route.params;
    console.log(item);
    return (
        <View style={styles.recipeDetails}>
            <SafeAreaView>
                <Pressable style={styles.recipeDetails__leftArrow} onPress={() => navigation.goBack()}>
                    <FontAwesome name='arrow-circle-left' size={36} color={"white"} />
                </Pressable>
            </SafeAreaView>
            <View style={styles.recipeDetails__data}>
                <View style={styles.recipeDetails__imageBox}>
                    <Image source={item.image} style={styles.recipeDetails__image} />
                </View>
                <View style={styles.recipeDetails__contents}>
                    <View style={styles.recipeDetails_name}>
                        <Text style={globalStyles.title}>{item.name}</Text>
                    </View>
                <View style={styles.recipeDetails_desc}>
                    <Text style={globalStyles.title}>Description</Text>
                <Text style={globalStyles.description}>{item.description}</Text>
                </View>
               <View style={styles.recipeDetails_steps}>
               <Text style={globalStyles.title}>Steps</Text>
                    <Text style={globalStyles.description}>{item.steps}</Text>
               </View>
                </View>
            </View>
        </View>
    );
};

export default RecipeDetails;

const styles = StyleSheet.create({
    recipeDetails: {
        backgroundColor: "#0AC004",
        flex: 1,
    },
    recipeDetails__data: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 200,
        alignItems: "center",
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
    },
    recipeDetails__imageBox: {
        width: 300,
        height: 300,
        position: "absolute",
        top: -130,
        left: 25,
        borderRadius: 150, 
        overflow: 'hidden', 
    },
    recipeDetails__image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 100, 
    },
    recipeDetails__contents:{
        position:"absolute",
        padding:10,
        top:180,
    },
    recipeDetails_name:{
        marginBottom:15,
        alignItems:"center"
    },
    recipeDetails_steps:{
        marginTop:20
    },
    recipeDetails__leftArrow: {
        padding: 10,
    }
});
