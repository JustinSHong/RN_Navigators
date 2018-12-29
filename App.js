import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
} from "react-navigation";
// screens - components to be rendered by navigators
import BagScreen from "./BagScreen";
import CatalogueScreen from "./CatalogueScreen";
import CategoryScreen from "./CategoryScreen";
import ProductScreen from "./ProductScreen";
import SearchScreen from "./ProductScreen";
import SearchResultsScreen from "./SearchResultsScreen";
// icons
import { Ionicons } from "@expo/vector-icons";

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
        navigationOptions: ({ navigation }) => ({
            // icons for each tab defined here
            header: null,
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let icon;

                switch (routeName) {
                    case "Catalogue":
                        icon = "ios-basket";
                        break;
                    case "Search":
                        icon = "ios-search";
                        break;
                    case "Bag":
                        icon = "ios-appstore";
                        break;
                }

                return (
                    <Ionicons
                        style={{ width: 25 }}
                        name={icon}
                        size={25}
                        color={tintColor}
                    />
                );
            }
        }),
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

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
