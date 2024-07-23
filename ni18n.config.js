const supportedLngs = ["en", "vi", "jp"];

export const ni18nConfig = {
  fallbackLng: supportedLngs,
  supportedLngs,
  ns: ["translation"],
  react: {
    useSuspense: false,
  },
};
