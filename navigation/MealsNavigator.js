import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {createAppContainer} from "react-navigation";
import Colors from "../constants/Colors";
import FavoriteScreen from "../screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import FilterScreen from "../screens/FiltersScreen";

const defaultStackNavOptions = {
    headerStyle: {backgroundColor: Colors.primaryColor},
    headerTintColor: 'white',
    headerTitle: 'A Screen',
    headerTitleStyle: {fontWeight: 'bold'},
    headerBackTitleStyle: {fontWeight: 'normal'}
};

const MealsNavigator = createStackNavigator({

    Categories: {screen: CategoriesScreen},
    CategoryMeals: {
        screen: CategoriesMealScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultStackNavOptions
});
const FavNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
}, {defaultNavigationOptions: defaultStackNavOptions});
const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor,
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor
        }
    }
}
const MealsFavTabNavigator = createMaterialBottomTabNavigator(
    tabScreenConfig
    , {
        activeColor: 'white',
        shifting: true,
    });
const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});
const MainNavigator = createDrawerNavigator({
    MealsFAVS: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals', drawerIcon: (icon) => {
                return <Ionicons name='ios-restaurant' size={25} color={icon.tintColor}/>
            }
        }
    }, Filters: {
        screen: FiltersNavigator, navigationOptions: {
            drawerLabel: 'Filters', drawerIcon: (icon) => {
                return <Ionicons name='ios-search' size={25} color={icon.tintColor}/>
            }
        }
    }
}, {contentOptions: {activeTintColor: Colors.accentColor}, labelStyle: {fontWeight: 'bold'}});
export default createAppContainer(MainNavigator);