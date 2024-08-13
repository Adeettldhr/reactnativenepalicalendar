import {adToBs, bsToAd} from '@sbmdkl/nepali-date-converter';

export const convertToAD = (date: any) => {
  const adDate = bsToAd(date);
  const [yearStr, monthStr, dayStr] = adDate.split('-');
  return {
    year: parseInt(yearStr, 10),
    month: parseInt(monthStr, 10),
    day: parseInt(dayStr, 10),
  };
};

export const convertToBS = (date: any) => {
  const bsDate = adToBs(date);
  const [yearStr, monthStr, dayStr] = bsDate.split('-');
  return {
    year: parseInt(yearStr, 10),
    month: parseInt(monthStr, 10),
    day: parseInt(dayStr, 10),
  };
};

// Define the return type for months
export const getMonths = () => [
  'Baisakh', 'Jestha', 'Ashad', 'Shrawan', 'Bhadra', 'Ashoj', 
  'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
];

export const getYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 100 }, (_, i) => currentYear + i);
};