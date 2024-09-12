import React from 'react';
import {Text, View} from 'react-native';
import Config from 'react-native-config';
function App() {
  return (
    <View style={{marginTop: 40}}>
      <Text>Environment: {Config.ENV}</Text>
    </View>
  );
}
export default App;