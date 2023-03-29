import {View, StyleSheet, I18nManager} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserScreen from './src/screens/UserScreen/UserScreen';
import {ReadLocaleKey, switchLocale} from './src/translations/helperTanslation';
import RNRestart from 'react-native-restart';

const App = () => {
  const [restart, setRestart] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    ReadLocaleKey()
      .then((val: any) => {
        const locale = val ?? 'ar';
        if (
          (locale === 'ar' && !I18nManager.isRTL) ||
          (locale !== 'ar' && I18nManager.isRTL)
        ) {
          if (locale === 'ar') {
            I18nManager.allowRTL(true);
            I18nManager.forceRTL(true);
          } else {
            I18nManager.allowRTL(false);
            I18nManager.forceRTL(false);
          }
          switchLocale(locale);
          setRestart(true);
        } else {
          switchLocale(locale);
        }
      })
      .finally(() => {
        setReady(true);
      });
  }, []);

  useEffect(() => {
    if (ready && restart) {
      RNRestart.Restart();
    }
  }, [ready, restart]);

  return (
    <View style={styles.container}>
      <UserScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
