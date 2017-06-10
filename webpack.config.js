module.exports = {
    entry: "./src/addressbook.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    }
};