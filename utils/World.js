const { setworldconstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.page = null
        this.context = null
        this.browser = null
    }
}
module.exports = CustomWorld;
