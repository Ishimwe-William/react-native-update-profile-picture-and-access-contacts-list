import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/Tabs";

const App = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Tabs />
            </NavigationContainer>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50, // Adjust as needed
    },
});

export default App;
