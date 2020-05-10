// ==UserScript==
// @name         IBM DeveloperWorks Printer
// @namespace    https://joyuer.cn
// @version      1.0
// @description  Set printing style
// @author       Joyuer
// @match        https://www.ibm.com/developerworks/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  var css = `
  header, #dw-article-toc-container, footer {
    display: none !important;
  }
  .ibm-columns {
    width: 600px;
  }
  `;

  GM_addStyle(`@media print { ${css} }`);
})();
