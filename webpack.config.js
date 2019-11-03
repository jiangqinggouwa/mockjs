const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const apiMocker = require('mocker-api')
module.exports = {
    mode:"development",
    entry:"./src/index.tsx",
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dist/"),
    },
    // watch:true,这里是监听全部
    devtool:"source-map",//可能会减慢速度
    resolve:{
        extensions:[".ts",".tsx",".js","json"]
    },
    module:{
        rules:[
            {
                test:/\.ts(x?)$/,
                // loader:"awesome-typescript-loader",
                use:{
                    loader:"awesome-typescript-loader",
                    loader:"babel-loader"
                },
                exclude: /node_modules/,
                // loader:["awesome-typescript-loader","babel-loader"]错误写法
            },
            {
                test:/\.js(x?)$/,
                // loader:"awesome-typescript-loader",
                use:"babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
               },
               {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
               },
               {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
               },
               {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
               }  ,
            {enforce:"pre",test:/\.js$/,loader:"source-map-loader"}
        ]
    },
    devServer:{ 
        // before(app){
        //     apiMocker(app, path.resolve('./mocker/index.js'), {
        //       proxy: {
        //         '/repos/*': 'https://api.github.com/',
        //       },
        //       changeHost: true,
        //     })
        //   }
        contentBase:path.join(__dirname,"dist/"),
        // publicPath:"/dist",
        port:3001,
        hot:true,
        open:true,
        inline:true,
        historyApiFallback:true
    
    },   
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLPlugin ({
            filename:'index.html',
            template:'template.html'
        })
    ]
}