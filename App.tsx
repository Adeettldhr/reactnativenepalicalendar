import React from 'react';
import { SafeAreaView } from 'react-native';
import Calendar from './src/components/Calendar';
import {formatDate} from './src/utils/dateFormat';
import {convertToBS} from './src/utils/dateUtils';

const App = () => {
  const date = new Date();
  const today = formatDate(date);
console.log({today})
  console.log(convertToBS('1924-01-01'));
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Calendar />
    </SafeAreaView>
  );
};

export default App;
