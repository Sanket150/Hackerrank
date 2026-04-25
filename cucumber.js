module.exports = {
    default: {
        paths: ['Feature/**/*.feature'],
        require: [
            'Steps/*.js',
            'utils/World.js',
            'utils/Hooks.js'
        ],
        format: ['progress', 'json:reports/cucumber-report.json', 'html:reports/cucumber-report.html'],
        defaultTimeout: 120000
    }
};