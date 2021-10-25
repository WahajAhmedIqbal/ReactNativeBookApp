import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AudioBooks = () => {
    return (
        <View style={styles.booksTabContainer}>
            {/* <TouchableOpacity style={styles.tabsbuttons1} >
                <Text style={styles.tabsButton}>
                    Ebook
                </Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.tabsbuttons2} >
                <Text style={styles.tabsButton}>
                    Audiobooks
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    booksTabContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f7f7f7',
        borderRadius: 5,
        marginTop: 10,
    },
    tabsbuttons1: {
        backgroundColor: "#ffffff",
        height: 50,
        width: "50%",
        marginLeft: 5,
        textAlign: 'center',
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5
    },
    tabsbuttons2: {
        backgroundColor: "#f1f1f3",
        height: 50,
        width: "50%",
        marginRight: 5,
        textAlign: 'center',
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5

    },
    tabsButton: {
        fontSize: 18,
        color: "#150532",
        textAlign: 'center',
        fontWeight: "600"
    }
})

export default AudioBooks
