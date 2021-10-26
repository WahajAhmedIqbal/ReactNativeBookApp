import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const BooksInnerPage = ({ navigator }) => {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.history}>
                    Hostory
                </Text>
                <Text style={styles.alwaysfor}>
                    Always forgive your enemies, nothing annoys.
                </Text>
                <View style={styles.publishbar}>
                    <Text style={styles.publishbarInner}>
                        Publish from <Text style={styles.history1}> istudio </Text>
                    </Text>
                    <Text style={styles.publishbarInner}>
                        23, March 2019
                    </Text>
                </View>
                <View style={styles.pubImage}>
                    <Image style={styles.publishbarImg} source={require('../assets/15.jpg')} />
                </View>

                <View style={styles.rating}>
                    <Text>
                        4.9
                    </Text>

                </View>

            </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5
    },
    history: {
        color: "#d1856e",
        fontSize: 15
    },
    alwaysfor: {
        color: "#1b0836",
        fontSize: 28,
    },
    publishbar: {
        display: 'flex',
        // flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10
    },
    publishbarInner: {
        fontSize: 15,
        color: "#898989"
    },
    history1: {
        color: "#1b0836",
    },
    publishbarImg: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    pubImage: {
        width: '100%',
        height: 250
    },
    rating: {
        marginTop: 10
    }
})

export default BooksInnerPage
