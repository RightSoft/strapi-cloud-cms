module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      formLimit: "2500mb", // Increase form size
      jsonLimit: "2500mb", // Increase JSON payload size
      textLimit: "2500mb", // Increase text size
      formidable: {
        maxFileSize: 2500 * 1024 * 1024, // Set max upload size to 500MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
