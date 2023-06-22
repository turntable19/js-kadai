let app = new Vue({
    el: '#app',             // 関連付けるDOM要素
    data: {
      msgs1: ["おはよう", "こんばんは", "お元気ですか"],
      msgs2: [
        { jp: "おはよう", eng: "good morning" },
        { jp: "こんばんは", eng: "good evening" },
        { jp: "お元気ですか", eng: "How are you doing?" }]
    }
  });