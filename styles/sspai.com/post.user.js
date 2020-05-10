// ==UserScript==
// @name         Sspai Printer
// @namespace    https://joyuer.cn
// @version      1.0
// @description  Set printing style
// @author       Joyuer
// @match        https://sspai.com/post/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  var css = `
  header, .article-side, .right-side-directory, .bgGrey, footer {
    display: none !important;
  }
  body {
    padding: 30px 50px;
  }
  `;

  GM_addStyle(`@media print { ${css} }`);
})();
