import Logo from "./extensions/tsi-logo-edit.png";

export default {
  config: {
    // Add a new locale, other than 'en'
    locales: ["fr", "de"],
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    // Extend the translations
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Strapi!",
        "Auth.form.welcome.subtitle": "Customize Your TSI Site Here",
        // Translate a plugin's key/value pair by adding the plugin's name as a prefix
        // In this case, we translate the "plugin.name" key of plugin "content-type-builder"
      },
    },
    //...

    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap() {},
};
