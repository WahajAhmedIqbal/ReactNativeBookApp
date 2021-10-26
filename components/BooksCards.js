import React from 'react'
import { Alert, Button, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
const BooksCards = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.conatienr}>
                <TouchableOpacity title='' onPress={() => navigation.navigate('BooksInnerPage')}>
                    <View style={styles.imgCard}>
                        <Image
                            onPress={() => Alert.alert('test')}
                            style={styles.imgImage}
                            source={require('../assets/15.jpg')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity title='' onPress={() => navigation.navigate('BooksInnerPage')}>

                    <View style={styles.imgCard} >
                        <Image
                            style={styles.imgImage}
                            source={require('../assets/16.jpg')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity title='' onPress={() => navigation.navigate('BooksInnerPage')}>

                    <View style={styles.imgCard}>
                        <Image
                            style={styles.imgImage}
                            source={require('../assets/summer-bird-blue-9781481487757_hr-678x1024.jpg')} />
                    </View>

                </TouchableOpacity>
                <TouchableOpacity title='' onPress={() => navigation.navigate('BooksInnerPage')}>

                    <View style={styles.imgCard}>
                        <Image
                            style={styles.imgImage}
                            source={require('../assets/12.jpg')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity title='' onPress={() => navigation.navigate('BooksInnerPage')}>

                    <View style={styles.imgCard}>
                        <Image
                            style={styles.imgImage}
                            source={require('../assets/summer-bird-blue-9781481487757_hr-678x1024.jpg')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity title='' onPress={() => navigation.navigate('BooksInnerPage')}>

                    <View style={styles.imgCard}>
                        <Image
                            style={styles.imgImage}
                            source={require('../assets/15.jpg')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity title='' onPress={() => navigation.navigate('BooksInnerPage')}>

                    <View style={styles.imgCard}>
                        <Image
                            style={styles.imgImage}
                            source={require('../assets/16.jpg')} />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    conatienr: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgCard: {
        width: 180,
        height: 250,
        overflow: 'hidden',
        margin: 0,
        marginTop: 15,
    },
    imgImage: {
        resizeMode: "center",
        height: "100%",
        width: "100%",
        borderRadius: 10,
        padding: 0,
        margin: 0,
    }
})
export default BooksCards
