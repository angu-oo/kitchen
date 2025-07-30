import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Welcome to the Kitchen App!</Text>
      <Text>Your culinary journey starts here.</Text>
      {/* <Button title="登录" onPress={() => navigation.replace('Login')} /> */}
    </View>
  );
};