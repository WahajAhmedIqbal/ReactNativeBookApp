import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import BooksTypeTabs from '../components/BooksTypeTabs';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container} >
            <BooksTypeTabs />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#fff",
        height: "100%"
    }
})

export default HomeScreen
