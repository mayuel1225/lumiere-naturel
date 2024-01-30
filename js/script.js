// Adobe Fontsの読み込み
(function(d) {
  var config = {
    kitId: 'zqu4xmf',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// スマートフォン表示のヘッダーボタン
const headerBtn = document.querySelector(".header__btn")
// スマートフォン表示のメニューパネル
const headerPanel = document.querySelector(".header__nav-panel")
// メニューのリンクを取得
const navLinks = document.querySelectorAll('.header__nav-link');


// ヘッダーボタンをクリックするとメニューパネルが開閉する
headerBtn.addEventListener("click", () => {
  const expanded = headerBtn.getAttribute("aria-expanded") === "true";
  headerBtn.setAttribute("aria-expanded", !expanded);
  headerBtn.classList.toggle("is_active");
  headerPanel.classList.toggle("is_active");
});

// メニューのリンクをクリックするとメニューパネルが閉じる
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerBtn.setAttribute('aria-expanded', 'false');
    headerBtn.classList.remove('is_active');
    headerPanel.classList.remove('is_active');
  });
});