// MusicFree 重做零报错模板
const plugin = {
  // 【唯一标识，独一无二，绝对不会和其他插件重名，别改】
  platform: "MyNewPlugin_User20260509_OnlyOne",
  // 【插件在MusicFree里显示的名字，后续可以随便改】
  name: "我的重做新插件",
  // 【版本号，后续改代码必须把数字改大】
  version: "1.0.0",
  // 【作者名，改成你的昵称就行】
  author: "新手重做",
  // 【插件描述，随便写】
  desc: "从零重做的MusicFree插件",
  // 【固定配置，别改】
  supportedSearchType: ["music"],

  // 【核心1：搜索歌曲，先占位保证能安装】
  async searchMusic(keyword, page) {
    return {
      isEnd: true,
      data: []
    };
  },

  // 【核心2：获取播放链接，先占位保证能安装】
  async getMusicInfo(musicItem) {
    return {
      url: "",
      quality: "128k"
    };
  },
};

// 【固定导出代码，绝对不能改、不能删！】
export default plugin;
