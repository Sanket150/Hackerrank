const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.page = null
        this.context = null
        this.browser = null
    }
}

setWorldConstructor(CustomWorld);
module.exports = CustomWorld;
