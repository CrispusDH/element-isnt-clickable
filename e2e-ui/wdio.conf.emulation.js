exports.config = {
  runner: 'local',
  specs: [
    './dist/**/*.js'
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--enable-automation',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--window-size=420,800',
        '--disable-notifications'
      ],
      // Mobile emulation - http://chromedriver.chromium.org/mobile-emulation
      // List of emulated devices - https://codesearch.chromium.org/chromium/src/third_party/blink/renderer/devtools/front_end/emulated_devices/module.json?g=0&l=453
      //
      // Option #1
      // mobileEmulation: {
      //   deviceName: 'iPhone 7'
      // }
      //
      // Option #2
      mobileEmulation: {
        deviceMetrics: {
          width: 412,
          height: 732,
          pixelRatio: 3.5
        },
        // list of user agents https://deviceatlas.com/blog/list-of-user-agent-strings
        userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36"

      }
    }
  }],
  reporters: ['spec'],
  logLevel: 'error',
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  }
};
