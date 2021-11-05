module.exports = {
    launch: {
      headless: process.env.HEADLESS !== 'false',
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
      ]
    },
    server: {
      command: 'npm run startfront',
      port: process.env.TEST_PORT || '9091',
      launchTimeout: 10000,
      debug: false || process.env.CI
    }
  };