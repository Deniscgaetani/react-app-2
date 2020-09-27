import React from 'react';
import {CATEGORIES} from "../data/dummy-data";
import MealList from "../components/MealList";
import {useSelector} from "react-redux";
import {View, StyleSheet} from 'react-native';
import DefaultText from "../components/DefaultText";

const CategoriesMealScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    if (displayedMeals.length === 0) {
        return <View style={styles.content}><DefaultText> No Meals found, maybe check your filters?</DefaultText></View>
    }
    return (
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    );
};

CategoriesMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {headerTitle: selectedCategory.title}
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CategoriesMealScreen;