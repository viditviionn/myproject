import React from 'react';
import { View, Text } from 'react-native';

const PlaceholderScreen = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{route.name} Screen</Text>
    </View>
  );
};

export default PlaceholderScreen;
