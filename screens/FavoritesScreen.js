import React from 'react';
import {StyleSheet, View} from 'react-native';
import MealList from "../components/MealList";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import {useSelector} from "react-redux";
import DefaultText from "../components/DefaultText";

const FavoriteScreen = (props) => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)
    if (favMeals.length === 0 || !favMeals) {
        return (<View style={styles.content}>
            <DefaultText> No favorite meals found. Start adding some!</DefaultText>
        </View>)
    }
    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    );
};
FavoriteScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: (() => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu'
                  iconName='ios-menu'
                  onPress={() => {
                      navData.navigation.toggleDrawer()
                  }}/></HeaderButtons>)
    };

}
const styles = StyleSheet.create({content: {flex: 1, justifyContent: 'center', alignItems: 'center'}});

export default FavoriteScreen;