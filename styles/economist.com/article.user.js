// ==UserScript==
// @name         Economist Article Printer
// @namespace    https://joyuer.cn
// @version      1.0
// @description  Set printing style
// @author       Joyuer
// @match        https://www.economist.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  var css = `
  .ds-masthead, aside, .related-articles, .layout-article-links, .newsletter-signup, footer {
    display: none !important;
  }

  header {
    width: 30em;
  }

  .article__body-text {
    margin-left: -5em !important;
    width: 30em;
  }

  .article__lead-image {
    margin-top: -5em;
    width: 40em;
  }
  `;

  GM_addStyle(`@media print { ${css} }`);
})();
