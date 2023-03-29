import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js';
import {translationGetters} from './language';

export async function ReadLocaleKey() {
  const value = await AsyncStorage.getItem('selectedLocale');
  if (value) {
    return JSON.parse(value);
  }
  return null;
}

export function switchLocale(newLocale: string) {
  i18n.translations = {[newLocale]: translationGetters[newLocale]()};
  i18n.locale = newLocale;
}
