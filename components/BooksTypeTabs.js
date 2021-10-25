import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import AudioBooks from '../screens/AudioBooks'
import Ebook from '../screens/Ebook'

const BooksTypeTabs = () => {
    const Tab = createMaterialTopTabNavigator()
    return (
        <Tab.Navigator >
            <Tab.Screen name="Ebook" component={Ebook} />
            <Tab.Screen name="Audio Book" component={AudioBooks} />
        </Tab.Navigator >

    )
}



export default BooksTypeTabs
