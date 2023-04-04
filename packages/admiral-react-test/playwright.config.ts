import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  workers: process.env.CI ? 2 : undefined,
  reporter: [['html', { open: 'on-failure' }]],

  use: {
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], deviceScaleFactor: 2 },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], deviceScaleFactor: 2 },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], deviceScaleFactor: 2 },
    },
  ],
};
export default config;
