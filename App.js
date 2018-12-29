import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
    createBottomTabNavigator,
    createStackNavigator
} from "react-navigation";
// screens - components to be rendered by navigators
import {
    CatalogueScreen,
    CategoryScreen,
    ProductScreen,
    SearchScreen,
    SearchResultsScreen,
    BagScreen
} from "./MyScreens";

const CatalogueNavigator = createStackNavigator(
    {
        Catalogue: CatalogueScreen,
        Category: CategoryScreen,
        Product: ProductScreen
    },
    {
        // configuration options
    }
);

const SearchNavigator = createStackNavigator(
    {
        SearchHome: SearchScreen,
        SearchResults: SearchResultsScreen
    },
    {
        // configuration options
    }
);

const AppTabNavigator = createBottomTabNavigator(
    {
        Catalogue: CatalogueNavigator,
        Search: SearchNavigator,
        Bag: BagScreen
    },
    {
        navigationOptions: ({ navigation }) => {
            // icons for each tab defined here
        },

        tabBarOptions: {
            initialRouteName: "Catalogue",
            activeTintColor: "#fff",
            inactiveTintColor: "#ddd",
            style: {
                backgroundColor: "#4d535e"
            }
        }
    }
);

export default class App extends React.Component {
    render() {
        return <AppTabNavigator />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
