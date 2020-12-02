module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
        'ts',
        'tsx',
    ],

    collectCoverageFrom: [
        'src/**/*.(vue|ts)',
        '!src/__test__/**',
        '!src/*.(js|ts)',
    ],

    transform: {
        '.*\\.vue$': '<rootDir>/node_modules/vue-jest',
        '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
        '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
    },

    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!vuetify)',
        '<rootDir>/node_modules/(?!(@ag-grid-community)/)',
        '<rootDir>/node_modules/(?!(@ag-grid-vue)/)',
    ],

    moduleNameMapper: {
        '^vue$': 'vue/dist/vue.common.js',
        '@/(.*)$': '<rootDir>/src/$1',
    },

    testMatch: [
        '**/__test__/(*.)+(spec|test).(js|ts|tsx)',
    ],

    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
};
