import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fa from "./locales/fa.json";

i18n
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    lng: "en", // initial language
    fallbackLng: "en", // fallback language if key not found
    interpolation: {
      escapeValue: false, // not needed for React (React escapes by default)
    },
  });

export default i18n;
