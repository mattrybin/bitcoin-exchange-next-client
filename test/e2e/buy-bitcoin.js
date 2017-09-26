var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Click on [buy bitcoin] link': function (browser) {
    browser
      .url('http://localhost:3000/')   // visit the url
      .waitForElementVisible('body', 1000) // wait for the body to be rendered
      .click("#buy-bitcoin")
  },

  'Write 100 in the amount field and click [Buy Bitcoin]': function (browser) {
    browser
      .pause(500)
      .assert.containsText('body', 'Input Amount')
      .assert.containsText('#progress-bar', 'Amount')
      .setValue('input[type=number]', '100')
      .click("#amount-submit")
  },

  'Login with demo@demo.com and password': function (browser) {
    browser
      .pause(500)
      .assert.containsText('body', 'Login Here')
      .assert.containsText('#progress-bar', 'Account')
      .setValue('input[type=email]', 'demo@demo.com')
      .setValue('input[type=password]', 'password')
      .click("#login-submit")
  },


  'Add your bitcoin address': function (browser) {
    browser
      .pause(500)
      .assert.containsText('body', 'Add Bitcoin Address')
      .setValue('input[type=text]', '1Mz7153HMuxXTuR2R1t78mGSdzaAtNbBWX')
      .click("#bitcoin-address-submit")
  },

  'Add your phone number': function (browser) {
    browser
      .pause(500)
      .assert.containsText('body', 'Add Phone Number')
      .setValue('input[type=tel]', '034-321-321')
      .click("#phone-submit")
  },

  'View the info': function (browser) {
    browser
      .pause(500)
      .assert.containsText('body', 'Add Bitcoin Address')
      .setValue('input[type=text]', '1Mz7153HMuxXTuR2R1t78mGSdzaAtNbBWX')
      .click("#bitcoin-address-submit")
      .end();
  },
};
