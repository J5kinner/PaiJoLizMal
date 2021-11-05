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
      command: 'npm run dev',
      port: process.env.TEST_PORT || '9090',
      launchTimeout: 10000,
      debug: false || process.env.CI
    }
  };