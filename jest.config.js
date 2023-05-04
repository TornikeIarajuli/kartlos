module.exports = {
  transform: {},
  transformIgnorePatterns: ["/node_modules/(?!(my-module)/)"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsConfig: "path/to/tsconfig.json",
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ["js", "mjs", "jsx", "json", "ts", "tsx", "node"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
