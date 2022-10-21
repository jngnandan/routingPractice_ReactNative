
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {useRoute } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
    const route = useRoute()
    console.log(route)

  return (
    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/home-blog-img.png'}} style={{width: 300, height: 300}} />

        <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})