import React from 'react'
import { Button, Text, View } from 'react-native'

const BooksInnerPage = ({ navigator }) => {
    return (
        <View>
            <Text>
                Books Inner Page
            </Text>
            <Button onPress={() => navigator.goback()} title='go back' />
        </View>
    )
}

export default BooksInnerPage
