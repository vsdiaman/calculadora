// App.js
import React from 'react';
import { View } from 'react-native';
import Calculator from './calculator';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calculator />
    </View>
  );
};

export default App;
