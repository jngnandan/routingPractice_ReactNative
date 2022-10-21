
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

const Contact = ({navigation}) => {
  return (
    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/contact-blog-img.png'}} style={{width: 300, height: 300}} />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({})