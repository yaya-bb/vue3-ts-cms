module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "element-plus",
        // 同时引用其自定义的样式
        customStyleName: (name) => {
          return `element-plus/theme-chalk/${name}.css`;
        }
      }
    ]
  ],
  presets: ["@vue/cli-plugin-babel/preset"]
};
