import NepaliDateConverter from '@sbmdkl/nepali-date-converter';

// Define the types for the date conversion functions
export const convertToAD = (bsYear: number, bsMonth: number, bsDay: number): { year: number; month: number; day: number } => {
  const adDate = NepaliDateConverter.ConvertToEnglishDate(bsYear, bsMonth, bsDay);
  return adDate;
};

export const convertToBS = (adYear: number, adMonth: number, adDay: number): { year: number; month: number; day: number } => {
  const bsDate = NepaliDateConverter.ConvertToNepaliDate(adYear, adMonth, adDay);
  return bsDate;
};

// Define the return type for months
export const getMonths = (): string[] => {
  return ['Baisakh', 'Jestha', 'Ashad', 'Shrawan', 'Bhadra', 'Ashoj', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'];
};

// Define the return type for years
export const getYears = (): number[] => {
  const years: number[] = [];
  for (let year = 1950; year <= 2100; year++) {
    years.push(year);
  }
  return years;
};
