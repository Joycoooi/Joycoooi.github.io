if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const l=e=>a(e,r),b={module:{uri:r},exports:d,require:l};i[r]=Promise.all(s.map((e=>b[e]||l(e)))).then((e=>(c(...e),d)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/30/06-第1周汇报/index.html",revision:"f996cb09e3cad23fdd794ab6550a027f"},{url:"2023/08/30/hello-world/index.html",revision:"49f228a43f584dfb1f4c0d8c40670f6f"},{url:"2023/08/30/my-first-paper/index.html",revision:"3124391c437e996147abab66ca1c2086"},{url:"2023/08/30/恋爱哪些事/index.html",revision:"78882198ca308bc9cac9be74d2189f11"},{url:"2023/08/30/我的第一篇博客文章”/index.html",revision:"73b9434dd6dfeab7bab3dd5f0dd8a6b0"},{url:"2023/08/30/记一次晚霞/index.html",revision:"482f14aa3eb045c7b2c88fe36f02962d"},{url:"2023/08/31/testing/index.html",revision:"f7ca534b700875335ca29873b7333d6a"},{url:"2023/09/01/timeline/index.html",revision:"f541ca8703dba635ef4fc29549299899"},{url:"2023/09/01/测试时间/index.html",revision:"5f9f2c508cee6459161406bc6f45522f"},{url:"404.html",revision:"8076dbe6fbba2c548344226da56c250f"},{url:"about/index.html",revision:"eab31a8994eb75aa9476f9c162bc9bd4"},{url:"anzhiyu/random.js",revision:"d090d7da52b5b2756c9cdda4c2b95bc5"},{url:"archives/2023/08/index.html",revision:"01450f6a7e5922fc9fc7b264b6fc505b"},{url:"archives/2023/09/index.html",revision:"17843f617a2c7bd76dc410d77804ae2b"},{url:"archives/2023/index.html",revision:"99bd24daeea302765d61aff533131517"},{url:"archives/index.html",revision:"2d7a876c58cedb70ba1318bd6bc2ce0e"},{url:"categories/Diary/index.html",revision:"d4983386f477feca6d1e9257f42ebb49"},{url:"categories/Diary/PlayStation/index.html",revision:"8787ff5afd45352519a4734e5beadae8"},{url:"categories/index.html",revision:"6ee54274cf62534d078f72b5b13e1f46"},{url:"categories/Ultra/index.html",revision:"6a8480cbe2678cbfe7effc26bfc7e625"},{url:"categories/前端开发/index.html",revision:"045df413a8997795e7a7e1950fbdb0be"},{url:"css/index.css",revision:"b751526a8d00e33431dbf68d2adf6e08"},{url:"css/lizi.css",revision:"3b35358c3882bf20c236dc76161815e8"},{url:"css/twikoo-style.css",revision:"4408621dd80baae077f0f3eb5a7e9d7c"},{url:"css/universe.css",revision:"ad5639c8ef4c90a530ba97942728e0ea"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"50ec0f0f70f37617a01c7709a891c381"},{url:"fcircle/index.html",revision:"3d67e86d86caf422ecb0a0d05499fd0f"},{url:"img/22.png",revision:"396443f34c0cfc7553f3e937c51663db"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/640.jpg",revision:"52ea81b0956d85114e6d14fb93694eff"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-splash-1125-2436.jpg",revision:"20ccc4b2655c31ced99616fb89083b5b"},{url:"img/siteicon/apple-splash-1136-640.jpg",revision:"97d9eedda90e198bf2f9050e67232dfd"},{url:"img/siteicon/apple-splash-1170-2532.jpg",revision:"90540abb1361a1ce4c6e52abf7615e98"},{url:"img/siteicon/apple-splash-1179-2556.jpg",revision:"0e53ff785be622e59456940e2d8cee54"},{url:"img/siteicon/apple-splash-1242-2208.jpg",revision:"2580380fd081b1197b16a7a98c1000a0"},{url:"img/siteicon/apple-splash-1242-2688.jpg",revision:"5fd00b3c5a467cadd7f966409cba28e1"},{url:"img/siteicon/apple-splash-1284-2778.jpg",revision:"7e23a37bae0b1e790a72826887745633"},{url:"img/siteicon/apple-splash-1290-2796.jpg",revision:"8f2f9c769b227093b3c793c7cd4b369c"},{url:"img/siteicon/apple-splash-1334-750.jpg",revision:"1460e10508447d1b0330ffd1cb167df8"},{url:"img/siteicon/apple-splash-1536-2048.jpg",revision:"d5cfedd94ba8b0f2f406e999344a817f"},{url:"img/siteicon/apple-splash-1620-2160.jpg",revision:"de5e47321b1bfd25df41046aa20bb976"},{url:"img/siteicon/apple-splash-1668-2224.jpg",revision:"7ad96a557b37b3267d44995098a349e8"},{url:"img/siteicon/apple-splash-1668-2388.jpg",revision:"ca9d786423577999a2e1230a8c02a224"},{url:"img/siteicon/apple-splash-1792-828.jpg",revision:"f8baf3bd4af23a022060a49adfa66f41"},{url:"img/siteicon/apple-splash-2048-1536.jpg",revision:"e3005aab973eb61b61ab46603e339f2e"},{url:"img/siteicon/apple-splash-2048-2732.jpg",revision:"d6d4c30a4df8fe4a24a19b9a6cc960a5"},{url:"img/siteicon/apple-splash-2160-1620.jpg",revision:"1f780e869c77847872959602165ea35b"},{url:"img/siteicon/apple-splash-2208-1242.jpg",revision:"8e3b8a60b10fb432bf1b41ced395db95"},{url:"img/siteicon/apple-splash-2224-1668.jpg",revision:"77b51bfa6e5ee8eb1c6db6b7221268f1"},{url:"img/siteicon/apple-splash-2388-1668.jpg",revision:"2f2fa15665baffd6a2f373f7a9366116"},{url:"img/siteicon/apple-splash-2436-1125.jpg",revision:"7160caf9ce67239b8763afd16bde7394"},{url:"img/siteicon/apple-splash-2532-1170.jpg",revision:"4d6b730ed67e8fcb35ca3650842d4c0b"},{url:"img/siteicon/apple-splash-2556-1179.jpg",revision:"d320872d7cc36fa9fd01abe20447d3f1"},{url:"img/siteicon/apple-splash-2688-1242.jpg",revision:"e1a98e03ccf491c59851113748dffac4"},{url:"img/siteicon/apple-splash-2732-2048.jpg",revision:"3d240189fe715e0343f4308b77d93348"},{url:"img/siteicon/apple-splash-2778-1284.jpg",revision:"d2bed13f39980cf94c510c2374b4402e"},{url:"img/siteicon/apple-splash-2796-1290.jpg",revision:"fe22396b3be732549811961a2f940a57"},{url:"img/siteicon/apple-splash-640-1136.jpg",revision:"4a858ef19ad8694697320adce6aabb46"},{url:"img/siteicon/apple-splash-750-1334.jpg",revision:"77ac8f425a1a02c67f75202272bad88e"},{url:"img/siteicon/apple-splash-828-1792.jpg",revision:"6f68beea66cffae2cde5b4f5b4f7be38"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"img/xinyi.jpg",revision:"c4d3194d0a3abea1c65d92471121af2c"},{url:"index.html",revision:"385e65fd6258419d708f701f4cc29a35"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/lizi.js",revision:"272b76431d5c4cbb56558cd50fd1766f"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/mouse_move.js",revision:"572d3d92b5291ef114a0878b86e10249"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/title.js",revision:"ed53ff0ed333bdc3b02390a536019bae"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/universe.js",revision:"1b2c20e9450830407c881abe078ae049"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"9bb3cdb57de9c80e060e168417fefa96"},{url:"page/2/index.html",revision:"07068f51b4884b172f33a3310e7a2c14"},{url:"tags/1/index.html",revision:"7b2b393c9e0c787124bcf3522f1945e9"},{url:"tags/index.html",revision:"a6635eb8ecfb1c2cd0f9edac53dd5a43"},{url:"tags/ultra/index.html",revision:"0401a2b2c10c17f55c5953b630a6a8eb"},{url:"tags/周记/index.html",revision:"52933053a8e6f6c7bdbffb06cf7477ad"},{url:"tags/随笔记录/index.html",revision:"073a90f54f71edad3f839785d372ed27"}],{})}));
//# sourceMappingURL=service-worker.js.map
