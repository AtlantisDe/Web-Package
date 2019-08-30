(function() {
  // js/conf.js
  //JS文件配置
  window.conf = {
    include_JS: function(src) {
      document.write('<script src="' + src + '"></script>');
    },
    include_CSS: function(href) {
      document.write('<link href="' + href + '" rel="stylesheet" />');
    },
    Jmui: "js/mui.min.js",
    Jplus_extends: "js/plus_extends.js",
    Jquery: "js/jquery-3.1.1.min.js",
    Cmui: "css/mui.min.css",
    Cbootstrap: "css/bootstrap.min.css",
    Cstyle: "css/style.css",
    xxxPHP: "http://www.xxx.cn/xxx.php",
    layuistyle:
      "https://atlantisde.github.io/Web-Package/Static/layui/css/layui.css"
  };
})();
