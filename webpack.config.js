const path = require("path");
const { ESBuildPlugin } = require('esbuild-loader');

module.exports = (env, { mode }) => {
  console.log("Building mode:", mode);

  const production = mode === "production";

  return {
    mode,
    devtool: production ? "source-map" : "inline-source-map",

    entry: {
      "react-playground": [
        "./src/index.tsx"
      ]
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      modules: [
        path.resolve("./src"),
        "node_modules"
      ]
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            configFile: path.resolve(`./tsconfig.${mode}.json`)
          }
        },
        // {
        //   test: /\.tsx?$/,
        //   loader: "esbuild-loader",
        //   options: {
        //     loader: 'tsx',
        //     target: 'es2015',
        //     tsconfigRaw: require('./tsconfig.development.json')
        //   }
        // },
        {
          test: /\.scss$/, use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },

    devServer: {
      port: 9000,
      contentBase: path.resolve("./public")
    },

    plugins: [
      new ESBuildPlugin()
    ]
  };
};
