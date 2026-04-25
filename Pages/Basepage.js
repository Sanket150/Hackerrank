const { expect } = require('@playwright/test');
class Basepage {
    constructor(page) {
        this.page = page
    }

    async returnLocator(selector) {
        return typeof selector === 'string' ? (
            selector.startsWith('//') ? this.page.locator('xpath=' + selector) : this.page.locator(selector)) : selector;
    }

    async navigate(url) {
        await this.page.goto(url)
    }

    async ClickBtn(selector) {
        const locator = await this.returnLocator(selector)
        await locator.click()
    }

    async Filldetails(selector, value) {
        const locator = await this.returnLocator(selector)
        await locator.fill(value)
    }

    async returnbooleanifvisible(selector) {
        try {
            const locator = await this.returnLocator(selector)
            await locator.waitFor({ state: 'visible', timeout: 5000 })
            return true
        } catch (error) {
            return false
        }
    }

    async Verifyassertion(boolean) {
        await expect(boolean).toBe(true)
    }


    async scrollToElement(selector) {
        const locator = await this.returnLocator(selector)
        await locator.scrollIntoViewIfNeeded()
    }
}
module.exports = Basepage;