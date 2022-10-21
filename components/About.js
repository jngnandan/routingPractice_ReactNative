
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'

const About = ({navigation}) => {

  return (
    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      
      <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/about-blog-img.png'}} style={{width: 300, height: 300}} />
      <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
      
    </View>
  )
}

export default About

const styles = StyleSheet.create({})