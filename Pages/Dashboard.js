const Basepage = require("./Basepage");

class Dashboard extends Basepage {

    constructor(page) {
        super(page)
        this.page = page
        this.header = this.page.locator('h2')
        this.Skill = this.page.locator("//span[@class='hr-title-sm']")
    }

    async verifyHeader(headertext) {
        const headerLocator = this.header.filter({ hasText: headertext })
        const isHeaderVisible = await this.returnbooleanifvisible(headerLocator)
        await this.Verifyassertion(isHeaderVisible)
        await this.scrollToElement(headerLocator)
    }

    async ClickonSkill(skillname) {
        const skilllocator = this.Skill.filter({ hasText: skillname })
        await this.scrollToElement(skilllocator)
        await this.ClickBtn(skilllocator)
        await this.page.waitForTimeout(5000)
    }

}
module.exports = Dashboard;