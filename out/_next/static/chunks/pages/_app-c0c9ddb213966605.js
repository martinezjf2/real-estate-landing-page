(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({html:e,height:t=null,width:r=null,children:o,dataNtpc:i=""}){return(0,a.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${i}`}})},[i]),(0,n.jsxs)(n.Fragment,{children:[o,e?(0,n.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=r?`${r}px`:"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:e}}):null]})};let n=r(5893),a=r(7294)},7834:function(e,t,r){"use strict";let n;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:r,dataLayerName:a="dataLayer",nonce:u}=e;return void 0===n&&(n=a),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`
          window['${a}'] = window['${a}'] || [];
          function gtag(){window['${a}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}' ${r?",{ 'debug_mode': true }":""});`},nonce:u}),(0,o.jsx)(l.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`,nonce:u})]})},t.sendGAEvent=function(...e){if(void 0===n){console.warn("@next/third-parties: GA has not been initialized");return}window[n]?window[n].push(arguments):console.warn(`@next/third-parties: GA dataLayer ${n} does not exist`)};let o=r(5893),i=r(7294),l=a(r(4298))},3632:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{apiKey:t,...r}=e,n={...r,key:t},{html:l}=(0,o.GoogleMapsEmbed)(n);return(0,a.jsx)(i.default,{height:n.height||null,width:n.width||null,html:l,dataNtpc:"GoogleMapsEmbed"})};let a=r(5893),o=r(6257),i=n(r(9477))},674:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:r="https://www.googletagmanager.com/gtm.js",dataLayerName:n="dataLayer",auth:u,preview:s,dataLayer:d,nonce:c}=e;l=n;let f="dataLayer"!==n?`&l=${n}`:"",g=u?`&gtm_auth=${u}`:"",p=s?`&gtm_preview=${s}&gtm_cookies_win=x`:"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${d?`w[l].push(${JSON.stringify(d)})`:""}
      })(window,'${n}');`},nonce:c}),(0,a.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:`${r}?id=${t}${f}${g}${p}`})]})};let a=r(5893),o=r(7294),i=n(r(4298)),l="dataLayer";t.sendGTMEvent=(e,t)=>{let r=t||l;window[r]=window[r]||[],window[r].push(e)}},9692:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var a=r(3632);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return n(a).default}});var o=r(1494);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return n(o).default}});var i=r(674);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return i.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return i.sendGTMEvent}});var l=r(7834);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return l.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return l.sendGAEvent}})},1494:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,scripts:r,stylesheets:n}=(0,i.YouTubeEmbed)(e);return(0,a.jsx)(l.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==r?void 0:r.map(e=>(0,a.jsx)(o.default,{src:e.url,strategy:u[e.strategy],stylesheets:n},e.url))})};let a=r(5893),o=n(r(4298)),i=r(6257),l=n(r(9477)),u={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"}},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3414)}])},3414:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(5893);r(4298),r(7090);var a=r(9692);function o(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.GoogleAnalytics,{gaId:"G-T94Q6D7ZC3",debug:!0}),(0,n.jsx)(t,{...r})]})}},7090:function(){},4298:function(e,t,r){e.exports=r(2892)},6257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var n=r(3494);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return n.GoogleAnalytics}});var a=r(4248);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return a.GoogleMapsEmbed}});var o=r(2239);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return o.YouTubeEmbed}})},3494:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let o=a(r(9426)),i=r(7058);t.GoogleAnalytics=e=>{var t=n(e,[]);return(0,i.formatData)(o.default,t)}},4248:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let o=a(r(7395)),i=r(7058);t.GoogleMapsEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(o.default,t)}},2239:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let o=a(r(8420)),i=r(7058);t.YouTubeEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(o.default,t)}},7058:function(e,t){"use strict";function r(e,t,r=!1){return t?Object.keys(e).filter(e=>r?!t.includes(e):t.includes(e)).reduce((t,r)=>(t[r]=e[r],t),{}):{}}function n(e,t,r,n){let a=n&&Object.keys(n).length>0?new URL(Object.values(n)[0],e):new URL(e);return t&&r&&t.forEach(e=>{r[e]&&a.searchParams.set(e,r[e])}),a.toString()}function a(e,t,r,a,o){var i;if(!t)return`<${e}></${e}>`;let l=(null===(i=t.src)||void 0===i?void 0:i.url)?Object.assign(Object.assign({},t),{src:n(t.src.url,t.src.params,a,o)}):t,u=Object.keys(Object.assign(Object.assign({},l),r)).reduce((e,t)=>{let n=null==r?void 0:r[t],a=l[t],o=null!=n?n:a,i=!0===o?t:`${t}="${o}"`;return o?e+` ${i}`:e},"");return`<${e}${u}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=n,t.createHtml=a,t.formatData=function(e,t){var o,i,l,u,s;let d=r(t,null===(o=e.scripts)||void 0===o?void 0:o.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),c=r(t,null===(l=null===(i=e.html)||void 0===i?void 0:i.attributes.src)||void 0===l?void 0:l.params),f=r(t,[null===(s=null===(u=e.html)||void 0===u?void 0:u.attributes.src)||void 0===s?void 0:s.slugParam]),g=r(t,[...Object.keys(d),...Object.keys(c),...Object.keys(f)],!0);return Object.assign(Object.assign({},e),{html:e.html?a(e.html.element,e.html.attributes,g,c,f):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:n(e.url,e.params,d)})):null})}},9426:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},7395:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},8420:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);