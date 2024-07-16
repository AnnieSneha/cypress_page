const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


async function setupNodeEvents(on,config){
  on('file:preprocessor', cucumber())
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/framework_class/*.js' 
    //Form.feature
  },
});



//'cypress/integration/Frames/*.js'   cypress/UAT/features/*.{js,feature}