module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
        loader: "svgo-loader",
      },
    ],
  },
};
