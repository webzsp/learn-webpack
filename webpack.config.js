/**
 * @author zsp
 * @date 2020/7/7 23:45
 * @description
 */
var path = require('path');

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    externals:{
        react:{
            commonjs: 'react',
            commonjs2: 'react',
             amd: 'react',
        }
    },
    watch: true,
    watchOptions: {
        ignored: '/node_modules/'
    },
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        library: 'zsp',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|ts|tsx)$/,
                use:'ts-loader'
            }
        ]
    },
    optimization: {
        minimize: false
    }
};
