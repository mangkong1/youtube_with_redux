const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@app": path.resolve(__dirname, "src/app/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@features": path.resolve(__dirname, "src/features/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
      "@widgets": path.resolve(__dirname, "src/widgets/"),
    },
  },
};
