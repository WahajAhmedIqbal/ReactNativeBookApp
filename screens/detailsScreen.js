import React from 'react'
import { View, Text, Button } from 'react-native';


const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Details Screen 1
            </Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default DetailsScreen
