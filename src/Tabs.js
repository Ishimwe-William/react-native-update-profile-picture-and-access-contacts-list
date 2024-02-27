// TopTabNavigator.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "./screens/Home";
import ContactsListScreen from "./screens/ContactsList";
import ProfileScreen from "./screens/Profile";

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Contacts" component={ContactsListScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default Tabs;
