const path = require('path');

module.exports = {
    root: true,

    env: {
        browser: true,
        es6: true,
        'jest/globals': true,
    },

    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        $ee: 'readonly',
    },

    rules: {
        'no-console': 'error',
        'no-debugger': 'error',
        indent: ['error', 4],
        '@typescript-eslint/indent': 0,
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-empty-function': 0,
        'linebreak-style': 0,
        'max-len': 0,
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: [
                'acc', // for reduce accumulators
                'e', // for e.returnvalue
                'req', // for Express requests
                'request', // for Express requests
                'res', // for Express responses
                'response', // for Express responses
                'state', // for Vuex state
            ],
        }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never",
            }
        ],
        'import/no-unresolved': [
            'error',
            {
              'ignore': [ '\.svg' ]
            }
        ],
        'import/no-webpack-loader-syntax': 0,
    },

    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2018,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        jsx: true,
    },

    plugins: [
        'import',
        'vue',
        '@typescript-eslint',
        'jest',
    ],

    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
                directory: './tsconfig.json',
            },
        },
    },

    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended',
        'airbnb-base',
        '@vue/typescript',
    ],
};
