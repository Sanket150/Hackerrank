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

    async navigateToLoginPage() {
        await this.navigate('https://www.hackerrank.com/dashboard')
        await this.page.waitForTimeout(2000)
    }

    async login(username, password) {
        await this.returnbooleanifvisible(this.SignIn) ? await this.ClickBtn(this.SignIn) : console.log('Already on login page')

        await this.Filldetails(this.usernamefield, username)
        await this.Filldetails(this.passwordfield, password)
        await this.ClickBtn(this.loginBtn)

    }



}
module.exports = Login;