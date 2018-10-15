const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");
const config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
          {
              test: /\.jsx?/,
              include: SRC_DIR,
              loader: "babel-loader",
              query: {
                  presets: ["react", "es2015", "stage-2"]
              }
          },
          {
            test: /\.scss$/,
            use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
          },
          {
            test: /\.css$/,
            use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader"
            ]
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
              'file-loader', {
                loader: 'image-webpack-loader',
                options: {
                  name: 'img/[name].[ext]',
                  gifsicle: {
                    interlaced: false,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  },
                  pngquant: {
                    quality: '65-90',
                    speed: 4
                  },
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  }
                }
              }
            ]
          },
          {
            test: /\.(ttf|eot|woff|woff2|otf)$/,
            loader: 'file-loader',
            options: {
                name: 'font/[name].[ext]',
            }
          }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
      })
    ]
};
 module.exports = config; 