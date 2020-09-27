import React from 'react';
import MealsNavigator from "./navigation/MealsNavigator";
import {enableScreens} from "react-native-screens";
import {combineReducers, createStore} from "redux";
import mealsReducer from "./store/reducers/meal.reducer";
import {Provider} from "react-redux";

enableScreens();
const rootReducer = combineReducers({
    meals: mealsReducer
})
const store = createStore(rootReducer);
export default function App() {
    return (
        <Provider store={store}>
            <MealsNavigator/>
        </Provider>
    );
}