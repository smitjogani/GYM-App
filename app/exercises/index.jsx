import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';

const exercises = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  },[]);

  return (
    <View>
      <Text>exercises</Text>
    </View>
  )
}

export default exercises