import { useState } from 'react';
import { isValidJson } from '../utils/isValidJson';

export const useLocalStorage = (keyName: string, defaultValue: string | number | null = null) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        if (isValidJson(value)) {
          return JSON.parse(value);
        } else {
          return value;
        }
      } else {
        let value = defaultValue;
        if (typeof value !== 'string') {
          value = JSON.stringify(value);
        }

        window.localStorage.setItem(keyName, value);
        return defaultValue;
      }
    } catch (err) {
      console.error(err);
      return defaultValue;
    }
  });

  const setValue = (newValue: string | number | null) => {
    try {
      let value = newValue;
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }

      window.localStorage.setItem(keyName, value);
    } catch (err) {
      console.error(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
