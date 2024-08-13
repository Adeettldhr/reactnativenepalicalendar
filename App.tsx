import React from 'react';
import { SafeAreaView } from 'react-native';
import Calendar from './src/components/Calendar';
import {formatDate} from './src/utils/dateFormat';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Calendar />
    </SafeAreaView>
  );
};

export default App;
