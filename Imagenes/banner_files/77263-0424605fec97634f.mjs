(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[77263],{677263:(e,t,n)=>{n.d(t,{cA:()=>N,fM:()=>F,N5:()=>z});var r=n(667294),i=n(616550),o=n(938790),a=n(39008);const c=e=>{switch(e){case"/":return"homefeed";case"/pin/:id":case"/pin/:id/sent":return"pin_closeup";case"/pin/:id/visual-search":return"flashlight";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/search/:scope":return"search";case"/ideas/:interest/:id":return"topic";default:return null}},s=e=>{switch(e){case"/pin/:id":case"/pin/:id/sent":return"pin_closeup";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/ideas/:interest/:id":return"topic";default:return null}};var u=n(574155),d=n(938085),l=n(40660),p=n(845092),f=n(335741),m=n(768337),h=n(813107),v=n(154174);const g=e=>Number(e.toFixed(2));var w=n(994405);const E={pin_closeup:{LCP:"pin_closeup_lcp",FID:"pin_closeup_fid"},board:{LCP:"board_lcp",FID:"board_fid"},other_profile:{LCP:"other_profile_lcp",FID:"other_profile_fid"},topic:{LCP:"topic_lcp",FID:"topic_fid"}},y=["CA","GB","DE","FR","AU","JP","BR","MX"],S=({surface:e,pwtStaticContext:t})=>"pin_closeup"===e?[(0,w.Uw)({isDesktop:"desktop"===t.deviceType,viewerType:(t.isBot?"bot":t.isAuthenticated&&"auth")||"unauth"})]:[],C=({pwtStaticContext:e,surface:t})=>{const n=(({pwtStaticContext:e,surface:t})=>{const n=(0,p.Jx)({annotateExperiments:S({surface:t,pwtStaticContext:e}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:E[t].LCP,pwtStaticContext:e}),r=(0,p.Jx)({name:E[t].FID,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"FID"===e&&r.stop(t)}})({pwtStaticContext:e,surface:t}),{isAuthenticated:r,isBot:i,isSocialBot:o,deviceType:a,country:c,fullPath:s,browserName:u,osName:w}=e,C={},T=(d,p,f)=>{if(!C[d]){C[d]=!0;const g=(0,h.Z)(e),E=`${g}.${t}.${d}`,S=`${g}.tags.${t}.${d}`;let T;if(T="iOS"===w&&"Chrome"===u?"iOS_Chrome":"CrUX","LCPCount"===d)l.Z.count(`${E}.sum`,p,1),l.Z.increment(`${E}.size`,1);else{const e=(0,m.Z)(c),u=(0,v.Z)(s);"FID"===d||"FIDStartTime"===d?(l.Z.timing(`${E}`,p,1),l.Z.timing(`${S}`,p,1,{timingBucket:null==f?void 0:f.timingBucket,isAuth:r,CrUXSegment:T,region:e,...u&&{pinType:u}})):(l.Z.timing(`${E}`,p,1),l.Z.timing(`${S}`,p,1,{isAuth:r,CrUXSegment:T,region:e,...u&&{pinType:u}})),!r&&y.includes(c)&&(({botType:e,deviceType:t,isChrome:n,region:r})=>{const i=`pwtlogger.${e}.${t}`,o=["all",...r?[r.toLowerCase()]:[]],a=["all",...n?["chrome"]:[]],c=[];return o.forEach((e=>{a.forEach((t=>{c.push(`${i}.region_${e}.browser_${t}`)}))})),c})({botType:(o?"socialBot":i&&"bot")||"nonbot",deviceType:a,isChrome:!0,region:e}).forEach((e=>{l.Z.timing(`${e}.tags.growthSEO.${t}_${d}`,p,1,{country:c})})),n(d,p)}}};(0,d.Tx)((({value:e})=>{const t=(0,f.Af)();let n;n=e<=100?"Good":e>100&&e<=300?"Needs Improvement":"Poor",T("FID",g(e),{timingBucket:n}),t&&T("FIDStartTime",g(t),{timingBucket:n})})),(0,d.Tb)((({value:e})=>{T("LCPCount",(0,f.Kj)()),T("LCP",(e=>10*Math.round(e/10))(e))})),(0,d.Y)((({value:e})=>T("FCP",e)))};var T=n(763795),_=n(39983);const A=(0,n(30482).XV)("LayoutShiftDebugger"),L=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&L(e.parentNode)||null,b=e=>Math.round(1e3*e);let I=[];const x=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{const r=(0,p.Jx)({annotateMarks:["initialAppLoad","RenderReactContainer"],name:"cumulative_layout_shift",pwtStaticContext:e});let i=0;const o=e=>{i=e.timeStamp};window.addEventListener("scroll",o),window.addEventListener("beforeunload",(()=>{window.removeEventListener("scroll",o)}));const a=`${(0,h.Z)(e)}.CLS`,c=()=>(e=>{let t=Object.freeze({}),n=0;I.forEach((({value:e,shift:{sources:r},route:i,params:o,hadRecentNavigation:a,hadRecentScroll:c,isAuth:s})=>{if(n+=e,!r||!r.length)return;const u=e/r.length;r.forEach((({node:e})=>{const n=e?L(e)||"ROOT":"NODE_REMOVED",r=o&&o.scope?o.scope:"none",d={route:i,searchScope:r,boundaryId:n,hadRecentNavigation:a,hadRecentScroll:c,isAuth:s},l=JSON.stringify(d);t={...t,[l]:{score:((t[l]||{}).score||0)+u,tags:d}}}))})),Object.keys(t).forEach((n=>{const{score:r,tags:i}=t[n];l.Z.count(`${e}.shifts`,b(r),1,{...i})})),A("Debug CLS boundaries",n,t,I),I=[]})(a);let s,u=0,f=0,m=0;(0,d.kz)((({entries:r,value:o})=>{if(m=o||0,r.length){const{path:a,params:c}=t();s=n();const d=r[0].startTime,l=u!==d,p=l?r:r.slice(f);l&&(u=d),I=I.concat(p.map((t=>({value:o,shift:t,route:a,params:c,hadRecentNavigation:s>0&&s+500>t.startTime,hadRecentScroll:i>0&&i+500>t.startTime,isAuth:e.isAuthenticated})))),f=r.length}}),!0);const v=setInterval((()=>{if(I.length){c();const t=(e=m)<=.1?"good":e<=.25?"adequate":"poor";l.Z.count(`${a}.${t}`,1,1),r.stop(b(m))}var e}),1e3);window.addEventListener("beforeunload",(()=>{clearInterval(v),0===m&&r.abort("no_shifts_detected")}))};let R=null;const k=(e,t)=>{let n,r=0,i=0,o=null,a=null,c=null,s=null,u=[];const d=()=>{i+=1,c=window.requestAnimationFrame(d)},l=()=>{if(s){const n=u.some((e=>null!==o&&o-e>0&&o-e<=500)),i=t(),{isAuthenticated:c}=e;if(n){const t=(0,p.Jx)({name:"scroll_session",pwtStaticContext:e});if(!t)return;const n={surface:i,isAuthenticated:c};if(null===o||null===a||0===r)if(null===o&&null===a)t.error("no_duration",n);else if(null==o)R=a,t.error("no_start",n);else if(null==a){let e;e=R&&o-R<750?"no_end.outside_window":"no_end.single_event",t.error(e,n)}else t.error("no_frames",n);else{R=a;const e=a-o,s=e/r;0===s?t.error("zero_value",n):s<0?t.error("negative_value",n):(t.addBinaryAnnotation("surface",i,"STRING"),t.addBinaryAnnotation("isAuthenticated",c,"BOOL"),t.addBinaryAnnotation("duration_ms",e,"I32"),t.addBinaryAnnotation("total_frames_rendered",r,"I16"),t.stop(s))}}else(0,T.A9)("WARN.scroll_session.not_user",{tags:{isAuthenticated:c,surface:i}})}window.cancelAnimationFrame(c),r=0,i=0,u=[],a=null,o=null,s=null},f=({timeStamp:e})=>{n&&clearTimeout(n),n=setTimeout(l,500),null===s?(s=100*Math.random()<10,s&&(c=window.requestAnimationFrame(d),o=e)):s&&(a=e,r+=i,i=0)},m=({timeStamp:e})=>{u.push(e)};["wheel","pointerdown","keydown"].forEach((e=>{window.addEventListener(e,m,{passive:!0,capture:!0})})),window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("pagehide",(()=>{window.removeEventListener("scroll",f),["wheel","pointerdown","keydown"].forEach((e=>{window.removeEventListener(e,m)}))}))};var P=n(353335),$=n(785893);const D=(0,r.createContext)(null),B=(0,r.createContext)(null),Z=()=>{(0,T.A9)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach((e=>{window.performance[e]||(0,T.A9)(`not_supported.window.performance.${e}`)})):(0,T.A9)("not_supported.window.performance"),window.PerformanceObserver||(0,T.A9)("not_supported.window.PerformanceObserer"),(0,u.v)()||(0,T.A9)("not_supported.grid_profiler")},M=()=>{var e;return null!==(e=window.performance)&&void 0!==e&&e.now?window.performance.now():null},O=e=>["/advertiser/"].reduce(((t,n)=>e.includes(n)||t),!1);function N({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:u,staticContext:d}){const l=(0,r.useRef)(null),p=(0,r.useRef)(null),m=(0,r.useRef)(t),h=(0,r.useRef)(!0),{path:v,params:g}=(0,i.useRouteMatch)(),w=(0,r.useRef)(v),E=(0,r.useRef)(g),y=!d.isCachedRender&&(0,o.Z)(d.deviceType);(0,r.useEffect)((()=>{w.current=v}),[v]),(0,r.useEffect)((()=>{E.current=g}),[g]),(0,r.useEffect)((()=>{if((0,P.X_)({size:n||1e3}),(0,f.UQ)(),Z(),h.current=!1,y&&!a.is&&(k(d,(()=>c(w.current)||w.current||"UNKNOWN_SURFACE")),"Chrome"===d.browserName)){x({staticContext:d,getCurrentRoute:()=>({path:w.current,params:E.current}),getLastNavigationTime:()=>p.current||0});const e=s(w.current);e&&C({pwtStaticContext:d,surface:e})}}),[]);if(O(t.pathname)?m.current.pathname!==t.pathname:m.current!==t){m.current=t,p.current=M();const{current:e}=p;if(!h.current){const t=!l.current;(0,T.A9)("routeStart",{tags:{action:u}}),(0,P.Eg)(t),(0,f.Ux)(t),(0,f.on)(),(0,_.tl)();const{customBufferSize:n,defaultBufferSize:r}=(0,P.LH)();e&&((0,T.A9)("routeStart.customBufferSize",{count:n}),(0,T.A9)("routeStart.defaultBufferSize",{count:r}),l.current={time:e,action:u})}}return(0,$.jsx)(D.Provider,{value:y?d:null,children:(0,$.jsx)(B.Provider,{value:l.current,children:e})})}const F=()=>(0,r.useContext)(B),z=()=>(0,r.useContext)(D)},583077:(e,t,n)=>{n.d(t,{D3:()=>o,Hd:()=>s,jh:()=>c,rX:()=>a});var r=n(941314),i=n(335741);const o=e=>({...(0,r.Z)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),a=()=>{const{firstInputDelay:e,largestContentfulPaint:t}=(0,i.v2)();return{firstInputDelayStart:(null==e?void 0:e.startTime)||0,firstInputDelayEnd:(null==e?void 0:e.endTime)||0,largestContentfulPaint:t||0}},c=(e,t)=>Object.keys(t).reduce(((n,r)=>({...n,[`${e}${r}`]:t[r]})),{}),s=(e,t)=>Object.keys(e).reduce(((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n),Object.freeze({}))},941314:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},577491:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(486986),i=n(941314),o=n(769916);const a=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function c(e,t){const{category:n,timing:c,isDeferred:s,isExternal:u,isVisuallyCompleteRequired:d}=e;return c.responseEnd&&("image"!==n||d)?{name:a(e),id:(0,o.Z)(),parentId:t,startTime:c.startTime,endTime:c.responseEnd,annotationMap:(0,i.Z)(c),binaryAnnotationMap:{category:(0,r.sk)(n),decodedBodySize:(0,r.cC)(c.decodedBodySize||0),initiatorType:(0,r.sk)(c.initiatorType),isDeferred:(0,r.qr)(s),isExternal:(0,r.qr)(u),name:(0,r.sk)(c.name),nextHopProtocol:(0,r.sk)(c.nextHopProtocol),transferSize:(0,r.cC)(c.transferSize||0)}}:null}},845092:(e,t,n)=>{n.d(t,{ku:()=>L,Jx:()=>T,PY:()=>A});var r=n(30482),i=n(763795),o=n(39983),a=n(583077),c=n(372453),s=n(363959),u=n(335741);const d=()=>(0,u.PJ)().reduce(((e,{identifier:t,loadTime:n,renderTime:r})=>e[`${t}_loadTime`]?e[`${t}_dupe_loadTime`]?{...e,[`${t}_dupe_loadTime`]:n,[`${t}_dupe_renderTime`]:r}:e:{...e,[`${t}_loadTime`]:n,[`${t}_renderTime`]:r}),Object.freeze({}));var l=n(941314),p=n(360588),f=n(353335);const m=e=>{if("pin_closeup"===e){const e=(0,p.Z)();return(e=>{const t=(0,f.y0)();return e.reduce(((e,{name:n,match:r})=>t.filter((e=>r(e))).slice(0,2).reduce(((e,t,r)=>({...e,...(0,a.jh)(`${n}${r?"_dupe1":""}_`,(0,l.Z)(t))})),e)),Object.freeze({}))})([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}return{}};var h=n(324e3),v=n(591614),g=n(577491),w=n(154174),E=n(55941),y=n(769916);const S=(0,r.XV)("LightStopwatch"),C={},T=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:r,pwtStaticContext:u})=>{const l=(()=>{let e=[],t=null;if(window.PerformanceObserver){const n=1e3;t=(0,E.Z)({entryTypes:["resource"]},(t=>{e=e.concat(t.getEntries()),e.length>n&&(e=e.slice(-n))}))}return{get:()=>e,disconnect:()=>{t&&t.disconnect()}}})(),p=(0,w.Z)(u.fullPath);let f=!0,T={...p?{pagePath:{value:p,type:"STRING"}}:{}};(0,i.A9)(`TIMING.${r}`,{tags:{isAuth:u.isAuthenticated}});const _={type:"stopwatch",name:r,navigationType:"initial_app_load"},A={abort:e=>{f?(f=!1,(0,v.Z)({metricId:_,pwtStaticContext:u,result:{type:"ABORT",reason:e}})):(0,i.H)("duplicate_abort_action",{action:r})},error:(e,t)=>{const n={...t,action:r};f?(e&&(0,i.H)(e,n),l&&l.disconnect(),f=!1):(0,i.H)("duplicate_error_action",n)},stop:p=>{if(!f)return void(0,i.H)("duplicate_stop_action",{action:r});f=!1,l.disconnect();const w=(0,y.Z)(),E=(0,s.Z)(),S=l.get(),C={type:"COMPLETE",traceId:(0,y.Z)(),startTime:0,endTime:p,spans:[{name:"network_resources",id:w,startTime:0,endTime:p,annotationMap:{},binaryAnnotationMap:{},parentId:null},...S.map((e=>(0,g.Z)((0,h.p)(e,[]),w))).filter(Boolean)],annotationMap:{...(0,a.jh)("resource_",n?m(n):{}),...(0,a.jh)("element_",d()),...(0,a.jh)("mark_",t&&t.length?(0,a.Hd)((0,o.gQ)(),t):{}),...(0,a.jh)("browser_",E?(0,a.D3)(E):{})},binaryAnnotationMap:(0,c.ng)({annotateExperiments:e,metricId:_,pwtStaticContext:u,performanceResourceTimings:S,binaryAnnotations:T})};(0,v.Z)({metricId:_,pwtStaticContext:u,result:C,isAuth:u.isAuthenticated})},addBinaryAnnotation:(e,t,n)=>{S(`adding binary annotation {${e}: ${String(t)}}`),T={...T,[e]:{value:t,type:n}}}};return C[r]=A,A},_=e=>C[e],A=e=>!!_(e),L=({stopwatchName:e,binaryAnnotationName:t,value:n,annotationType:r})=>{const i=_(e);i&&i.addBinaryAnnotation(t,n,r)}},813107:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>{const{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${(r?"socialBot":n&&"bot")||"nonbot"}.${t}`}},154174:(e,t,n)=>{function r(e){var t;const n=null!==(t=e.split("?")[0])&&void 0!==t?t:"";if(!n.startsWith("/pin/"))return null;const r=n.split("/")[3];return r?"feedback"===r||"sent"===r?r:null:"default"}n.d(t,{Z:()=>r})},360588:(e,t,n)=>{n.d(t,{Z:()=>i,f:()=>r});const r="closeupImage",i=()=>{if(!document.querySelector)return null;const e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}},938085:(e,t,n)=>{n.d(t,{Fu:()=>$,NO:()=>X,Tb:()=>X,Tx:()=>$,Y:()=>A,Yn:()=>q,a4:()=>A,kz:()=>L,mw:()=>L});var r,i,o,a,c,s=-1,u=function(e){addEventListener("pageshow",(function(t){t.persisted&&(s=t.timeStamp,e(t))}),!0)},d=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},l=function(){var e=d();return e&&e.activationStart||0},p=function(e,t){var n=d(),r="navigate";return s>=0?r="back-forward-cache":n&&(r=document.prerendering||l()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},f=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},m=function(e,t,n,r){var i,o;return function(a){t.value>=0&&(a||r)&&((o=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=o,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},h=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},v=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},g=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},w=-1,E=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(e){"hidden"===document.visibilityState&&w>-1&&(w="visibilitychange"===e.type?e.timeStamp:0,C())},S=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},C=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},T=function(){return w<0&&(w=E(),S(),u((function(){setTimeout((function(){w=E(),S()}),0)}))),{get firstHiddenTime(){return w}}},_=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},A=function(e,t){t=t||{},_((function(){var n,r=[1800,3e3],i=T(),o=p("FCP"),a=f("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(a.disconnect(),e.startTime<i.firstHiddenTime&&(o.value=Math.max(e.startTime-l(),0),o.entries.push(e),n(!0)))}))}));a&&(n=m(e,o,r,t.reportAllChanges),u((function(i){o=p("FCP"),n=m(e,o,r,t.reportAllChanges),h((function(){o.value=performance.now()-i.timeStamp,n(!0)}))})))}))},L=function(e,t){t=t||{},A(g((function(){var n,r=[.1,.25],i=p("CLS",0),o=0,a=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=a[0],n=a[a.length-1];o&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(o+=e.value,a.push(e)):(o=e.value,a=[e])}})),o>i.value&&(i.value=o,i.entries=a,n())},s=f("layout-shift",c);s&&(n=m(e,i,r,t.reportAllChanges),v((function(){c(s.takeRecords()),n(!0)})),u((function(){o=0,i=p("CLS",0),n=m(e,i,r,t.reportAllChanges),h((function(){return n()}))})),setTimeout(n,0))})))},b={passive:!0,capture:!0},I=new Date,x=function(e,t){r||(r=t,i=e,o=new Date,P(removeEventListener),R())},R=function(){if(i>=0&&i<o-I){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};a.forEach((function(t){t(e)})),a=[]}},k=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){x(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,b),removeEventListener("pointercancel",r,b)};addEventListener("pointerup",n,b),addEventListener("pointercancel",r,b)}(t,e):x(t,e)}},P=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,k,b)}))},$=function(e,t){t=t||{},_((function(){var n,o=[100,300],c=T(),s=p("FID"),d=function(e){e.startTime<c.firstHiddenTime&&(s.value=e.processingStart-e.startTime,s.entries.push(e),n(!0))},l=function(e){e.forEach(d)},h=f("first-input",l);n=m(e,s,o,t.reportAllChanges),h&&v(g((function(){l(h.takeRecords()),h.disconnect()}))),h&&u((function(){var c;s=p("FID"),n=m(e,s,o,t.reportAllChanges),a=[],i=-1,r=null,P(addEventListener),c=d,a.push(c),R()}))}))},D=0,B=1/0,Z=0,M=function(e){e.forEach((function(e){e.interactionId&&(B=Math.min(B,e.interactionId),Z=Math.max(Z,e.interactionId),D=Z?(Z-B)/7+1:0)}))},O=function(){return c?D:performance.interactionCount||0},N=function(){"interactionCount"in performance||c||(c=f("event",M,{type:"event",buffered:!0,durationThreshold:0}))},F=0,z=function(){return O()-F},j=[],H={},U=function(e){var t=j[j.length-1],n=H[e.interactionId];if(n||j.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};H[r.id]=r,j.push(r)}j.sort((function(e,t){return t.latency-e.latency})),j.splice(10).forEach((function(e){delete H[e.id]}))}},q=function(e,t){t=t||{},_((function(){var n=[200,500];N();var r,i=p("INP"),o=function(e){e.forEach((function(e){e.interactionId&&U(e),"first-input"===e.entryType&&!j.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&U(e)}));var t,n=(t=Math.min(j.length-1,Math.floor(z()/50)),j[t]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())},a=f("event",o,{durationThreshold:t.durationThreshold||40});r=m(e,i,n,t.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),v((function(){o(a.takeRecords()),i.value<0&&z()>0&&(i.value=0,i.entries=[]),r(!0)})),u((function(){j=[],F=O(),i=p("INP"),r=m(e,i,n,t.reportAllChanges)})))}))},J={},X=function(e,t){t=t||{},_((function(){var n,r=[2500,4e3],i=T(),o=p("LCP"),a=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-l(),0);r<i.firstHiddenTime&&(o.value=r,o.entries=[t],n())}},c=f("largest-contentful-paint",a);if(c){n=m(e,o,r,t.reportAllChanges);var s=g((function(){J[o.id]||(a(c.takeRecords()),c.disconnect(),J[o.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,s,!0)})),v(s),u((function(i){o=p("LCP"),n=m(e,o,r,t.reportAllChanges),h((function(){o.value=performance.now()-i.timeStamp,J[o.id]=!0,n(!0)}))}))}}))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/77263-0424605fec97634f.mjs.map