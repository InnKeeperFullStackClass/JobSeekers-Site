const withStyles = require("@webdeb/next-styles");
const path = require("path");

module.exports = withStyles({
  sass: true,
  modules: true,
  images: {
    domains: ["https://darmiobi.com"],
  },
  webpack: (config) => {
    config.resolve.alias["@/app/Components"] = path.join(
      __dirname,
      "path/to/your/Header2/component"
    );
    return config;
  },
  api: {
    bodyParser: false,
  },
});
