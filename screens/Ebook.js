import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BooksCards from '../components/BooksCards'
import BooksInnerPage from './BooksInnerPage'


const Ebook = () => {
    const bookStack = createNativeStackNavigator()
    return (
        <bookStack.Navigator>
            <bookStack.Screen name='BooksCards' component={BooksCards} />
            <bookStack.Screen name='BooksInnerPage' component={BooksInnerPage} />
        </bookStack.Navigator>

    )
}


export default Ebook
