import {StyleSheet, Text, View} from 'react-native'

import Amplify from 'aws-amplify'
import {Authenticator} from 'aws-amplify-react-native'
import React from 'react'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
console.disableYellowBox = true;

function App() {
  return (
    <View style={styles.container}>
      {/* by default usernameAttributes="user" but we chose email in amplify init */}
      <Authenticator usernameAttributes="email"> 
        <Text>HOME</Text>
      </Authenticator>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default App
