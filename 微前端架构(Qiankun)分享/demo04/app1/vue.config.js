module.exports = {
    devServer: {
        port: 9001,
        // 必须开启允许跨域
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    },
    configureWebpack: {
        output: {
            library: 'app1',
            libraryTarget: 'umd' // 必须打包成umd格式
        }
    }
};
