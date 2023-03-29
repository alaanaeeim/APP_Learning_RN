import i18n from 'i18n-js';

export const translationGetters = {
  ar: () => require('./ar.json'),
  en: () => require('./en.json'),
};

export const translate = (key: any, config?: any) => i18n.t(key, config);
export const formatNumber = (key: any, config?: any) =>
  i18n.toNumber(key, config);
