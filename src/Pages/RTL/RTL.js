import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const translationsEn = {
  welcome: "Welcome!"
};

const translationsAr = {
  welcome: "أهلا بك!"
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: translationsEn },
      ar: { translation: translationsAr },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

const RTL = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("welcome")}</Text>
      <Button onPress={()=> i18n.changeLanguage('en')} title='English' />
      <Button onPress={()=> i18n.changeLanguage('ar')} title='Arabic' color="black"/>    
    </View>
  )
}

export default RTL

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    fontSize: 20,
    marginBottom: 30
  }
});