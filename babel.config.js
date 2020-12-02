module.exports = {
    presets: [
        ['@babel/preset-env',
            {
                corejs: 3,
                useBuiltIns: 'usage',
            },

        ],
        ['@babel/preset-typescript', {
            isTSX: true,
            allExtensions: true,
        }],
        '@vue/babel-preset-jsx',
    ],
    env: {
        test: {
            plugins: ['transform-es2015-modules-commonjs'],
        },
    },
};
