module.exports = {
  entry: {
    main: "./src/index",
    vendor: "./src/vendor",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
            publicPath: "./imgs",
          },
        },
      },
    ],
  },
};
