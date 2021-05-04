module.exports = {
    entry: './index.ts',
    output: {
        filename: 'index.js',
        path: __dirname,
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};