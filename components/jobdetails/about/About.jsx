import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job: </Text>
      <Text style={styles.contentBox}>
        <Text style={styles.contextText}> {info} </Text>
      </Text>
    </View>
  )
}

export default About;