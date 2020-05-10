// ==UserScript==
// @name         O'Reilly Safari Printer
// @namespace    https://joyuer.cn
// @version      1.0
// @description  Set printing style
// @author       Joyuer
// @match        https://learning.oreilly.com/library/view/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  var css = `
    #js-subscribe-nag, .sbo-reading-menu, .interface-controls, .sbo-nav-top, .sbo-nav-bottom, .sbo-site-nav, footer {
      display: none !important;
    }
    body {
      font-size: 16px;
    }
    p {
      font-family: charter !important;
    }
    #sbo-rt-content {
      max-width: 50em !important;
    }
  `;

  GM_addStyle(`@media print { ${css} }`);

  // Add "Open All" link for table of contents page
  let toc = document.querySelector(".detail-toc");
  if (toc) {
    let a = document.createElement("a");
    a.style.cursor = "pointer";
    a.onclick = () => {
      let opened = new Set();
      document.querySelectorAll(".t-chapter").forEach(t => {
        const link = t.href.split("#")[0];
        if (!opened.has(link)) {
          window.open(link);
          opened.add(link);
        }
      });
    }
    a.innerText = "Open All";
    document.querySelector(".detail-toc").insertBefore(a, toc.childNodes[0]);
  }
})();
