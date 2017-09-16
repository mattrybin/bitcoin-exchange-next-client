var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Click on [buy bitcoin] button': function (browser) {
    browser
      .url('http://localhost:3000/')   // visit the url
      .waitForElementVisible('body', 1000); // wait for the body to be rendered
  },

  'Write $100 in the amount field and click [Buy Bitcoin]': function (browser) {
    browser
      .assert.containsText('body', 'Support') // assert contains
  },

  'Write in demo-email and demo-password to login': function (browser) {
    browser
      .assert.containsText('body', 'Support') // assert contains
  },

  'Type in': function (browser) {
    browser
      .assert.containsText('body', 'Support') // assert contains
      .saveScreenshot(conf.imgpath(browser) + 'dwyl.png')
      .end();
  },

};
