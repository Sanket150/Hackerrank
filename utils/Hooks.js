const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright')
require('dotenv').config()

setDefaultTimeout(60 * 1000)

Before(async function () {
    const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true'

    this.browser = await chromium.launch({
        headless: isCI,
        args: isCI ? [] : ['--start-maximized']
    })

    this.context = await this.browser.newContext({
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