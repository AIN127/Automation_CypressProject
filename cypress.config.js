const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        logToTerminal(message){
          console.log(message)
          return null
        }
      })
    },
    chromeWebSecurity: false,
    baseUrl: 'https://qaclickacademy.com/',
    pageLoadTimeout: 12000
    
  },
});
