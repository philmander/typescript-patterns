module.exports = {
    entry: {
        'abstract-factory' : './src/abstract-factory/index.ts',
        'builder' : './src/builder/index.ts'
    },
    output: {
        path: require('path').join(__dirname, 'demo'),
        filename: "[name].js"
    },

    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};