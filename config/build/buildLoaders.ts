import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
  
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          // will change the class names to random names
          modules: {
            //if the path section contains the module.scss, then we return true
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // in developer mode we display normal class names
            localIdentName: isDev 
              ? '[path][name]__[local]--[hash:base64:5]' 
              : '[hash:base64:8]'
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ]
}