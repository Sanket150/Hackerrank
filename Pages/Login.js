const Basepage = require("./Basepage");


class Login extends Basepage {

    constructor(page) {
        super(page)
        this.page = page
        this.SignIn = this.page.getByRole('button', { name: 'Log In' })
        this.usernamefield = '#username'
        this.passwordfield = '#password'
        this.loginBtn = "//button[@type='submit']"

    }

    async navigateToLoginPage(url) {
        await this.navigate(url)
        await this.page.waitForTimeout(2000)
    }

    async login(username, password) {
        if (await this.returnbooleanifvisible(this.SignIn)) {
            await this.ClickBtn(this.SignIn)
            await this.Filldetails(this.usernamefield, username)
            await this.Filldetails(this.passwordfield, password)
            await this.ClickBtn(this.loginBtn)
        }
        else {
            console.log('Already on login page')
        }
    }
}
module.exports = Login;