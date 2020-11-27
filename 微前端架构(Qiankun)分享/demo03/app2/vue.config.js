module.exports = {
    devServer: {
        port: 9002,
        // 必须开启允许跨域
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: 'app2',
            libraryTarget: 'umd', // 必须打包成umd格式
        },
    },
};
