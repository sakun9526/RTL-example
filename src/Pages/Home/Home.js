import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Click the button to navigate next page!</Text>
      <Button title='Next Page' onPress={() => navigation.navigate('RTL')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
  });