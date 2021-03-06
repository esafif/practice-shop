import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer'

// import screen
import ProductOverViewScreen from "../screens/shop/ProductOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen'

import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const defaultNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primary : "",
	},
	headerTitleStyle: {
		fontFamily: "open-sans-bold",
	},
	headerBackTitleStyle: {
		fontFamily: "open-sans",
	},
	headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
}

const ProductNavigator = createStackNavigator(
	{
		ProductsOverview: ProductOverViewScreen,
		ProductDetail: ProductDetailScreen,
		Cart: CartScreen
	},
	{
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator({
	Orders: OrdersScreen
},{
	navigationOptions: {
		drawerIcon: drawerConfig => (
			<Ionicons
				name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
				size={23}
				color={drawerConfig.tintColor}
			/>
		)
	},
	defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
	Products: ProductNavigator,
	Orders: OrdersNavigator
}, {
	contentOptions:{
		activeTintColor: Colors.primary
	}
})

export default createAppContainer(ShopNavigator);
