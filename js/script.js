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
// ローディング画面を取得
const loadingScreen = document.getElementById('loading');


// ローディング画面を表示して読み込み後に上に引いて非表示にする
window.addEventListener('load', () => {
  loadingScreen.animate(
    {
      translate: ['0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards'
    }
  );
});

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

// fadeinクラスをつけたアイテムを下から上にふわっと表示させる
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ["blur(.3rem)", "blur(0)"],
          translate: ["0 3rem", 0],
        },
        {
          duration: 1800,
          easing: "ease",
          fill: "forwards",
        }
      );
      // 一度表示されたら監視をやめる
      obs.unobserve(entry.target);
    }
  });
};
// 監視設定
const fadeObserver =new IntersectionObserver(animateFade);
// 監視対象
const fadeElements =document.querySelectorAll(".fadein");
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});