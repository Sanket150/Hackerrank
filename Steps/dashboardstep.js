const { Given, When, Then } = require('@cucumber/cucumber')
const Dashboard = require('../Pages/Dashboard')
let dashboard;

Then('I verify {string} header after login', async function (header) {
    dashboard = new Dashboard(this.page)
    await dashboard.verifyHeader(header)
})

When('I click on {string} skill from page', async function (skill) {
    dashboard = new Dashboard(this.page)
    await dashboard.ClickonSkill(skill)
})