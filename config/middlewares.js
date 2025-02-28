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
      formLimit: "750mb", // Increase form size
      jsonLimit: "750mb", // Increase JSON payload size
      textLimit: "750mb", // Increase text size
      formidable: {
        maxFileSize: 750 * 1024 * 1024, // Set max upload size to 500MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
