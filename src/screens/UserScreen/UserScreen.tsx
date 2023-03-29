import {View, Text, Button, I18nManager, StyleSheet} from 'react-native';
import React from 'react';
import {translate} from '../../translations';
import RNRestart from 'react-native-restart';
import {switchLocale} from '../../translations/helperTanslation';
import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserScreen() {
  const ChangeLanguage = async (type: string) => {
    if (i18n.locale !== type) {
      await AsyncStorage.setItem('selectedLocale', JSON.stringify(type));
      if (type === 'ar') {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
      } else {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
      }
      switchLocale(type);
      RNRestart.Restart();
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Change Language To AR"
        onPress={() => ChangeLanguage('ar')}
      />
      <Button
        title="Change Language To EN"
        onPress={() => ChangeLanguage('en')}
      />
      <Text>{translate('hello')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
