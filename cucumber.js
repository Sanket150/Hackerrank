module.exports = {
    default: {
        paths: ['Feature/**/*.feature'],
        require: [
            'Steps/*.js',
            'utils/World.js',
            'utils/Hooks.js'
        ],
        format: ['progress'],
        defaultTimeout: 120000
    }
};