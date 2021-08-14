const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const fs = require('fs');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
};
const PAGES_DIR = `${PATHS.src}/pages/.`;

const PAGES = fs
  .readdirSync(PAGES_DIR);

let entryName = {};

function entryPoints(page) {
  entryName[page] = `./pages/${page}`;
}

const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),

    ...PAGES.map((page) => {
      entryPoints(page);
      return new HtmlWebpackPlugin({
        template: `./pages/${page}/${page}.pug`,
        filename: `./${page}.html`,
        chunks: [`${page}`],
      });
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash:5]-bundle.css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'windows.jQuery': 'jquery',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${PATHS.src}/assets/img`,
          to: `${PATHS.dist}/img`,
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ];

  if (isDev) {
    base.push(new webpack.HotModuleReplacementPlugin());
  }
  return base;
};

module.exports = {
  target: "web",
  context: PATHS.src,
  mode: 'development',
  entry: entryName,
  output: {
    filename: 'js/[name:7]-[contenthash]-bundle.js',
    path: PATHS.dist,
    publicPath: '',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    contentBase: PATHS.dist,
    compress: true,
    port: 8008,
    hot: true,
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(s[ca]ss|css)$/,
        use: [
          isDev
            ? 'style-loader'
            : {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name][contenthash].[ext]',
            outputPath: 'img/',
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        exclude: [/image/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name][contenthash:5].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          name: '[name][contenthash:5].[ext]',
          outputPath: 'img/',
        },
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
    ],
  },
};
