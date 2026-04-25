const { Given, When, Then } = require('@cucumber/cucumber');
const Login = require('../Pages/Login');
let loginPage;

Given('I am on the login page', async function () {
    loginPage = new Login(this.page)
    await loginPage.navigateToLoginPage()

});
When('I enter login credentials if not already logged in', async function () {
    loginPage = new Login(this.page)
    await loginPage.login(process.env.Hacker_username, process.env.Hacker_password)
})

