const path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        //contentBase: path.join(__dirname, 'dist'),
        static: {
            directory: path.join(__dirname, 'dist'), // 新しい設定
        },
        open: true
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/
            }
        ]
    }
}