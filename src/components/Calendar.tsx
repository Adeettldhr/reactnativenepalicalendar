import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  convertToAD,
  convertToBS,
  getMonths,
  getYears,
} from '../utils/dateUtils';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2075);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [openYear, setOpenYear] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);

  const handleYearChange = (year: any) => {
    setSelectedYear(year);
  };

  const handleMonthChange = (month: any) => {
    setSelectedMonth(month);
  };

  const handleDayPress = (day: number) => {
    setSelectedDay(day);
  };

  const renderDay = (day: number | null) => (
    <View
      style={[styles.dayContainer, selectedDay === day && styles.selectedDay]}>
      <Text
        style={[styles.dayText, selectedDay === day && styles.selectedDayText]}
        onPress={() => day && handleDayPress(day)}>
        {day || ''}
      </Text>
    </View>
  );

  const generateCalendarDays = () => {
    const daysInMonth = [...Array(32).keys()].slice(1);
    const emptyDays = new Array(new Date(selectedYear, selectedMonth - 1, 1).getDay()).fill(null);
    return [...emptyDays, ...daysInMonth.slice(0, 30)];
  };

  return (
    <View style={styles.container}>

      <View style={styles.selectorContainer}>
        <DropDownPicker
          open={openMonth}
          value={selectedMonth}
          items={getMonths().map((month, index) => ({
            label: month,
            value: index + 1,
          }))}
          setOpen={setOpenMonth}
          setValue={handleMonthChange}
          searchable={true}
          searchPlaceholder="Enter Month"
          containerStyle={styles.dropdown}
        />
        <DropDownPicker
          open={openYear}
          value={selectedYear}
          items={getYears().map(year => ({ label: `${year}`, value: year }))}
          setOpen={setOpenYear}
          setValue={handleYearChange}
          searchable={true}
          searchPlaceholder="Enter Year"
          containerStyle={styles.dropdown}
        />
      </View>

      <View style={styles.calendarContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.weekRow}>
              {daysOfWeek.map(day => (
                <View key={day} style={styles.dayOfWeekContainer}>
                  <Text style={styles.dayOfWeek}>{day}</Text>
                </View>
              ))}
            </View>
          }
          data={generateCalendarDays()}
          renderItem={({ item }) => renderDay(item)}
          keyExtractor={(_, index) => index.toString()}
          numColumns={7}
        />
      </View>

      <Text style={styles.result}>
        Selected BS Date: {selectedYear}-{selectedMonth}-{selectedDay}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    zIndex: 1,
  },
  dropdown: {
    flex: 1,
    height: 50,
    marginHorizontal: 5,
  },
  calendarContainer: {
    marginBottom: 16,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayOfWeekContainer: {
    width: '14.28%',
    alignItems: 'center',
  },
  dayOfWeek: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dayContainer: {
    width: '14.28%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  dayText: {
    fontSize: 16,
    color: '#000',
  },
  selectedDay: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
  },
  selectedDayText: {
    color: '#fff',
  },
  result: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
});

export default Calendar;
