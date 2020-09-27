import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile color={itemData.item.color} title={itemData.item.title} onSelect={() => {
            props.navigation.navigate({routeName: 'CategoryMeals', params: {categoryId: itemData.item.id}})
        }}/>
    }
    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} showsVerticalScrollIndicator={false}/>
    );
};
CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (() => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Menu'
                  iconName='ios-menu'
                  onPress={() => {
                      navData.navigation.toggleDrawer()
                  }}/></HeaderButtons>)
    };
}
export default CategoriesScreen;