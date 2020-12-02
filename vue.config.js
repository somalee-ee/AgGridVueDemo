/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
    css: { extract: { ignoreOrder: true } },
    filenameHashing: true,
    productionSourceMap: false,
    outputDir: process.env.NODE_ENV === 'production' ? './wwwroot/dist/app' : './wwwroot/dev/app',
    transpileDependencies: [
        'vuetify',
    ],
    chainWebpack: (config) => {
        config.entry('app').clear();
        config.entry('app').add('./src/site.ts');
        config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
        config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');
    },
};
