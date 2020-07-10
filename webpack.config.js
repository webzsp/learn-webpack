/**
 * @author zsp
 * @date 2020/7/7 23:45
 * @description
 */
var path = require('path');

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            '@':path.resolve('src')
        }
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
        filename: 'a-editor.js',
        library: 'zsp',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(jsx|ts|tsx)$/,
                use:'ts-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        modules: true,
                    }
                }, {
                    loader: "less-loader", // compiles Less to CSS

                }]
            }
        ]
    },
    optimization: {
        minimize: false
    }
};
