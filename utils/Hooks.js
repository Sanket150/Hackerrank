const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright')
require('dotenv').config()

setDefaultTimeout(60 * 1000)

Before(async function () {
    const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true'

    this.browser = await chromium.launch({
        headless: isCI,
        channel: 'chrome',
        args: isCI ? [] : ['--start-maximized'],
        args: ['--disable-blink-features=AutomationControlled']
    })

    this.context = await this.browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        viewport: isCI ? { width: 1920, height: 1080 } : null,
        screen: { width: 1920, height: 1080 },
    })

    this.page = await this.context.newPage()
})

After(async function () {
    if (this.page) {
        await this.page.close()
    }
    if (this.browser) {
        await this.browser.close()
    }
})