"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[739],{4739:(t,e,n)=>{n.d(e,{SVGLoader:()=>i});var r=n(9451);const o=r.SRGBColorSpace;class i extends r.Loader{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,o){const i=this,s=new r.FileLoader(i.manager);s.setPath(i.path),s.setRequestHeader(i.requestHeader),s.setWithCredentials(i.withCredentials),s.load(t,(function(n){try{e(i.parse(n))}catch(e){o?o(e):console.error(e),i.manager.itemError(t)}}),n,o)}parse(t){const e=this;function n(t,e,n,r,o,s,a,c){if(0==e||0==n)return void t.lineTo(c.x,c.y);r=r*Math.PI/180,e=Math.abs(e),n=Math.abs(n);const l=(a.x-c.x)/2,u=(a.y-c.y)/2,y=Math.cos(r)*l+Math.sin(r)*u,h=-Math.sin(r)*l+Math.cos(r)*u;let f=e*e,p=n*n;const d=y*y,x=h*h,b=d/f+x/p;if(b>1){const t=Math.sqrt(b);f=(e*=t)*e,p=(n*=t)*n}const g=f*x+p*d,m=(f*p-g)/g;let A=Math.sqrt(Math.max(0,m));o===s&&(A=-A);const k=A*e*h/n,w=-A*n*y/e,M=Math.cos(r)*k-Math.sin(r)*w+(a.x+c.x)/2,v=Math.sin(r)*k+Math.cos(r)*w+(a.y+c.y)/2,P=i(1,0,(y-k)/e,(h-w)/n),S=i((y-k)/e,(h-w)/n,(-y-k)/e,(-h-w)/n)%(2*Math.PI);t.currentPath.absellipse(M,v,e,n,P,P+S,0===s,r)}function i(t,e,n,r){const o=t*n+e*r,i=Math.sqrt(t*t+e*e)*Math.sqrt(n*n+r*r);let s=Math.acos(Math.max(-1,Math.min(1,o/i)));return t*r-e*n<0&&(s=-s),s}function s(t,e){e=Object.assign({},e);let n={};if(t.hasAttribute("class")){const e=t.getAttribute("class").split(/\s/).filter(Boolean).map((t=>t.trim()));for(let t=0;t<e.length;t++)n=Object.assign(n,b["."+e[t]])}function r(r,o,i){void 0===i&&(i=function(t){return t.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),t}),t.hasAttribute(r)&&(e[o]=i(t.getAttribute(r))),n[r]&&(e[o]=i(n[r])),t.style&&""!==t.style[r]&&(e[o]=i(t.style[r]))}function o(t){return Math.max(0,Math.min(1,y(t)))}function i(t){return Math.max(0,y(t))}return t.hasAttribute("id")&&(n=Object.assign(n,b["#"+t.getAttribute("id")])),r("fill","fill"),r("fill-opacity","fillOpacity",o),r("fill-rule","fillRule"),r("opacity","opacity",o),r("stroke","stroke"),r("stroke-opacity","strokeOpacity",o),r("stroke-width","strokeWidth",i),r("stroke-linejoin","strokeLineJoin"),r("stroke-linecap","strokeLineCap"),r("stroke-miterlimit","strokeMiterLimit",i),r("visibility","visibility"),e}function a(t,e){return t-(e-t)}function c(t,e,n){if("string"!=typeof t)throw new TypeError("Invalid input: "+typeof t);const r={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/};let o=0,i=!0,s="",a="";const c=[];function l(t,e,n){const r=new SyntaxError('Unexpected character "'+t+'" at index '+e+".");throw r.partial=n,r}function u(){""!==s&&(""===a?c.push(Number(s)):c.push(Number(s)*Math.pow(10,Number(a)))),s="",a=""}let y;const h=t.length;for(let f=0;f<h;f++)if(y=t[f],Array.isArray(e)&&e.includes(c.length%n)&&r.FLAGS.test(y))o=1,s=y,u();else{if(0===o){if(r.WHITESPACE.test(y))continue;if(r.DIGIT.test(y)||r.SIGN.test(y)){o=1,s=y;continue}if(r.POINT.test(y)){o=2,s=y;continue}r.COMMA.test(y)&&(i&&l(y,f,c),i=!0)}if(1===o){if(r.DIGIT.test(y)){s+=y;continue}if(r.POINT.test(y)){s+=y,o=2;continue}if(r.EXP.test(y)){o=3;continue}r.SIGN.test(y)&&1===s.length&&r.SIGN.test(s[0])&&l(y,f,c)}if(2===o){if(r.DIGIT.test(y)){s+=y;continue}if(r.EXP.test(y)){o=3;continue}r.POINT.test(y)&&"."===s[s.length-1]&&l(y,f,c)}if(3===o){if(r.DIGIT.test(y)){a+=y;continue}if(r.SIGN.test(y)){if(""===a){a+=y;continue}1===a.length&&r.SIGN.test(a)&&l(y,f,c)}}r.WHITESPACE.test(y)?(u(),o=0,i=!1):r.COMMA.test(y)?(u(),o=0,i=!0):r.SIGN.test(y)?(u(),o=1,s=y):r.POINT.test(y)?(u(),o=2,s=y):l(y,f,c)}return u(),c}const l=["mm","cm","in","pt","pc","px"],u={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:12,pc:1,px:-1},px:{px:1}};function y(t){let n,r="px";if("string"==typeof t||t instanceof String)for(let e=0,n=l.length;e<n;e++){const n=l[e];if(t.endsWith(n)){r=n,t=t.substring(0,t.length-n.length);break}}return"px"===r&&"px"!==e.defaultUnit?n=u.in[e.defaultUnit]/e.defaultDPI:(n=u[r][e.defaultUnit],n<0&&(n=u[r].in*e.defaultDPI)),n*parseFloat(t)}function h(t){const e=t.elements;return e[0]*e[4]-e[1]*e[3]<0}function f(t){const e=t.elements,n=e[0]*e[3]+e[1]*e[4];if(0===n)return!1;const r=p(t),o=d(t);return Math.abs(n/(r*o))>Number.EPSILON}function p(t){const e=t.elements;return Math.sqrt(e[0]*e[0]+e[1]*e[1])}function d(t){const e=t.elements;return Math.sqrt(e[3]*e[3]+e[4]*e[4])}const x=[],b={},g=[],m=new r.Matrix3,A=new r.Matrix3,k=new r.Matrix3,w=new r.Matrix3,M=new r.Vector2,v=new r.Vector3,P=new r.Matrix3,S=(new DOMParser).parseFromString(t,"image/svg+xml");return function t(e,i){if(1!==e.nodeType)return;const l=function(t){if(!(t.hasAttribute("transform")||"use"===t.nodeName&&(t.hasAttribute("x")||t.hasAttribute("y"))))return null;const e=function(t){const e=new r.Matrix3,n=m;if("use"===t.nodeName&&(t.hasAttribute("x")||t.hasAttribute("y"))){const n=y(t.getAttribute("x")),r=y(t.getAttribute("y"));e.translate(n,r)}if(t.hasAttribute("transform")){const r=t.getAttribute("transform").split(")");for(let t=r.length-1;t>=0;t--){const o=r[t].trim();if(""===o)continue;const i=o.indexOf("("),s=o.length;if(i>0&&i<s){const t=o.slice(0,i),e=c(o.slice(i+1));switch(n.identity(),t){case"translate":if(e.length>=1){const t=e[0];let r=0;e.length>=2&&(r=e[1]),n.translate(t,r)}break;case"rotate":if(e.length>=1){let t=0,r=0,o=0;t=e[0]*Math.PI/180,e.length>=3&&(r=e[1],o=e[2]),A.makeTranslation(-r,-o),k.makeRotation(t),w.multiplyMatrices(k,A),A.makeTranslation(r,o),n.multiplyMatrices(A,w)}break;case"scale":if(e.length>=1){const t=e[0];let r=t;e.length>=2&&(r=e[1]),n.scale(t,r)}break;case"skewX":1===e.length&&n.set(1,Math.tan(e[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":1===e.length&&n.set(1,0,0,Math.tan(e[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":6===e.length&&n.set(e[0],e[2],e[4],e[1],e[3],e[5],0,0,1)}}e.premultiply(n)}}return e}(t);return g.length>0&&e.premultiply(g[g.length-1]),P.copy(e),g.push(e),e}(e);let u=!1,S=null;switch(e.nodeName){case"svg":case"g":i=s(e,i);break;case"style":!function(t){if(t.sheet&&t.sheet.cssRules&&t.sheet.cssRules.length)for(let e=0;e<t.sheet.cssRules.length;e++){const n=t.sheet.cssRules[e];if(1!==n.type)continue;const r=n.selectorText.split(/,/gm).filter(Boolean).map((t=>t.trim()));for(let t=0;t<r.length;t++){const e=Object.fromEntries(Object.entries(n.style).filter((([,t])=>""!==t)));b[r[t]]=Object.assign(b[r[t]]||{},e)}}}(e);break;case"path":i=s(e,i),e.hasAttribute("d")&&(S=function(t){const e=new r.ShapePath,o=new r.Vector2,i=new r.Vector2,s=new r.Vector2;let l=!0,u=!1;const y=t.getAttribute("d");if(""===y||"none"===y)return null;const h=y.match(/[a-df-z][^a-df-z]*/gi);for(let t=0,r=h.length;t<r;t++){const r=h[t],y=r.charAt(0),f=r.slice(1).trim();let p;switch(!0===l&&(u=!0,l=!1),y){case"M":p=c(f);for(let t=0,n=p.length;t<n;t+=2)o.x=p[t+0],o.y=p[t+1],i.x=o.x,i.y=o.y,0===t?e.moveTo(o.x,o.y):e.lineTo(o.x,o.y),0===t&&s.copy(o);break;case"H":p=c(f);for(let t=0,n=p.length;t<n;t++)o.x=p[t],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"V":p=c(f);for(let t=0,n=p.length;t<n;t++)o.y=p[t],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"L":p=c(f);for(let t=0,n=p.length;t<n;t+=2)o.x=p[t+0],o.y=p[t+1],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"C":p=c(f);for(let t=0,n=p.length;t<n;t+=6)e.bezierCurveTo(p[t+0],p[t+1],p[t+2],p[t+3],p[t+4],p[t+5]),i.x=p[t+2],i.y=p[t+3],o.x=p[t+4],o.y=p[t+5],0===t&&!0===u&&s.copy(o);break;case"S":p=c(f);for(let t=0,n=p.length;t<n;t+=4)e.bezierCurveTo(a(o.x,i.x),a(o.y,i.y),p[t+0],p[t+1],p[t+2],p[t+3]),i.x=p[t+0],i.y=p[t+1],o.x=p[t+2],o.y=p[t+3],0===t&&!0===u&&s.copy(o);break;case"Q":p=c(f);for(let t=0,n=p.length;t<n;t+=4)e.quadraticCurveTo(p[t+0],p[t+1],p[t+2],p[t+3]),i.x=p[t+0],i.y=p[t+1],o.x=p[t+2],o.y=p[t+3],0===t&&!0===u&&s.copy(o);break;case"T":p=c(f);for(let t=0,n=p.length;t<n;t+=2){const n=a(o.x,i.x),r=a(o.y,i.y);e.quadraticCurveTo(n,r,p[t+0],p[t+1]),i.x=n,i.y=r,o.x=p[t+0],o.y=p[t+1],0===t&&!0===u&&s.copy(o)}break;case"A":p=c(f,[3,4],7);for(let t=0,r=p.length;t<r;t+=7){if(p[t+5]==o.x&&p[t+6]==o.y)continue;const r=o.clone();o.x=p[t+5],o.y=p[t+6],i.x=o.x,i.y=o.y,n(e,p[t],p[t+1],p[t+2],p[t+3],p[t+4],r,o),0===t&&!0===u&&s.copy(o)}break;case"m":p=c(f);for(let t=0,n=p.length;t<n;t+=2)o.x+=p[t+0],o.y+=p[t+1],i.x=o.x,i.y=o.y,0===t?e.moveTo(o.x,o.y):e.lineTo(o.x,o.y),0===t&&s.copy(o);break;case"h":p=c(f);for(let t=0,n=p.length;t<n;t++)o.x+=p[t],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"v":p=c(f);for(let t=0,n=p.length;t<n;t++)o.y+=p[t],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"l":p=c(f);for(let t=0,n=p.length;t<n;t+=2)o.x+=p[t+0],o.y+=p[t+1],i.x=o.x,i.y=o.y,e.lineTo(o.x,o.y),0===t&&!0===u&&s.copy(o);break;case"c":p=c(f);for(let t=0,n=p.length;t<n;t+=6)e.bezierCurveTo(o.x+p[t+0],o.y+p[t+1],o.x+p[t+2],o.y+p[t+3],o.x+p[t+4],o.y+p[t+5]),i.x=o.x+p[t+2],i.y=o.y+p[t+3],o.x+=p[t+4],o.y+=p[t+5],0===t&&!0===u&&s.copy(o);break;case"s":p=c(f);for(let t=0,n=p.length;t<n;t+=4)e.bezierCurveTo(a(o.x,i.x),a(o.y,i.y),o.x+p[t+0],o.y+p[t+1],o.x+p[t+2],o.y+p[t+3]),i.x=o.x+p[t+0],i.y=o.y+p[t+1],o.x+=p[t+2],o.y+=p[t+3],0===t&&!0===u&&s.copy(o);break;case"q":p=c(f);for(let t=0,n=p.length;t<n;t+=4)e.quadraticCurveTo(o.x+p[t+0],o.y+p[t+1],o.x+p[t+2],o.y+p[t+3]),i.x=o.x+p[t+0],i.y=o.y+p[t+1],o.x+=p[t+2],o.y+=p[t+3],0===t&&!0===u&&s.copy(o);break;case"t":p=c(f);for(let t=0,n=p.length;t<n;t+=2){const n=a(o.x,i.x),r=a(o.y,i.y);e.quadraticCurveTo(n,r,o.x+p[t+0],o.y+p[t+1]),i.x=n,i.y=r,o.x=o.x+p[t+0],o.y=o.y+p[t+1],0===t&&!0===u&&s.copy(o)}break;case"a":p=c(f,[3,4],7);for(let t=0,r=p.length;t<r;t+=7){if(0==p[t+5]&&0==p[t+6])continue;const r=o.clone();o.x+=p[t+5],o.y+=p[t+6],i.x=o.x,i.y=o.y,n(e,p[t],p[t+1],p[t+2],p[t+3],p[t+4],r,o),0===t&&!0===u&&s.copy(o)}break;case"Z":case"z":e.currentPath.autoClose=!0,e.currentPath.curves.length>0&&(o.copy(s),e.currentPath.currentPoint.copy(o),l=!0);break;default:console.warn(r)}u=!1}return e}(e));break;case"rect":i=s(e,i),S=function(t){const e=y(t.getAttribute("x")||0),n=y(t.getAttribute("y")||0),o=y(t.getAttribute("rx")||t.getAttribute("ry")||0),i=y(t.getAttribute("ry")||t.getAttribute("rx")||0),s=y(t.getAttribute("width")),a=y(t.getAttribute("height")),c=.448084975506,l=new r.ShapePath;return l.moveTo(e+o,n),l.lineTo(e+s-o,n),(0!==o||0!==i)&&l.bezierCurveTo(e+s-o*c,n,e+s,n+i*c,e+s,n+i),l.lineTo(e+s,n+a-i),(0!==o||0!==i)&&l.bezierCurveTo(e+s,n+a-i*c,e+s-o*c,n+a,e+s-o,n+a),l.lineTo(e+o,n+a),(0!==o||0!==i)&&l.bezierCurveTo(e+o*c,n+a,e,n+a-i*c,e,n+a-i),l.lineTo(e,n+i),(0!==o||0!==i)&&l.bezierCurveTo(e,n+i*c,e+o*c,n,e+o,n),l}(e);break;case"polygon":i=s(e,i),S=function(t){const e=new r.ShapePath;let n=0;return t.getAttribute("points").replace(/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,(function(t,r,o){const i=y(r),s=y(o);0===n?e.moveTo(i,s):e.lineTo(i,s),n++})),e.currentPath.autoClose=!0,e}(e);break;case"polyline":i=s(e,i),S=function(t){const e=new r.ShapePath;let n=0;return t.getAttribute("points").replace(/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,(function(t,r,o){const i=y(r),s=y(o);0===n?e.moveTo(i,s):e.lineTo(i,s),n++})),e.currentPath.autoClose=!1,e}(e);break;case"circle":i=s(e,i),S=function(t){const e=y(t.getAttribute("cx")||0),n=y(t.getAttribute("cy")||0),o=y(t.getAttribute("r")||0),i=new r.Path;i.absarc(e,n,o,0,2*Math.PI);const s=new r.ShapePath;return s.subPaths.push(i),s}(e);break;case"ellipse":i=s(e,i),S=function(t){const e=y(t.getAttribute("cx")||0),n=y(t.getAttribute("cy")||0),o=y(t.getAttribute("rx")||0),i=y(t.getAttribute("ry")||0),s=new r.Path;s.absellipse(e,n,o,i,0,2*Math.PI);const a=new r.ShapePath;return a.subPaths.push(s),a}(e);break;case"line":i=s(e,i),S=function(t){const e=y(t.getAttribute("x1")||0),n=y(t.getAttribute("y1")||0),o=y(t.getAttribute("x2")||0),i=y(t.getAttribute("y2")||0),s=new r.ShapePath;return s.moveTo(e,n),s.lineTo(o,i),s.currentPath.autoClose=!1,s}(e);break;case"defs":u=!0;break;case"use":i=s(e,i);const o=(e.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),l=e.viewportElement.getElementById(o);l?t(l,i):console.warn("SVGLoader: 'use node' references non-existent node id: "+o)}S&&(void 0!==i.fill&&"none"!==i.fill&&S.color.setStyle(i.fill,o),function(t,e){function n(t){v.set(t.x,t.y,1).applyMatrix3(e),t.set(v.x,v.y)}function o(t){const n=t.xRadius,o=t.yRadius,i=Math.cos(t.aRotation),s=Math.sin(t.aRotation),a=new r.Vector3(n*i,n*s,0),c=new r.Vector3(-o*s,o*i,0),l=a.applyMatrix3(e),u=c.applyMatrix3(e),y=m.set(l.x,u.x,0,l.y,u.y,0,0,0,1),f=A.copy(y).invert(),p=k.copy(f).transpose().multiply(f).elements,d=function(t,e,n){let r,o,i,s,a;const c=t+n,l=t-n,u=Math.sqrt(l*l+4*e*e);return c>0?(r=.5*(c+u),a=1/r,o=t*a*n-e*a*e):c<0?o=.5*(c-u):(r=.5*u,o=-.5*u),i=l>0?l+u:l-u,Math.abs(i)>2*Math.abs(e)?(a=-2*e/i,s=1/Math.sqrt(1+a*a),i=a*s):0===Math.abs(e)?(i=1,s=0):(a=-.5*i/e,i=1/Math.sqrt(1+a*a),s=a*i),l>0&&(a=i,i=-s,s=a),{rt1:r,rt2:o,cs:i,sn:s}}(p[0],p[1],p[4]),x=Math.sqrt(d.rt1),b=Math.sqrt(d.rt2);if(t.xRadius=1/x,t.yRadius=1/b,t.aRotation=Math.atan2(d.sn,d.cs),!((t.aEndAngle-t.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const n=A.set(x,0,0,0,b,0,0,0,1),o=k.set(d.cs,d.sn,0,-d.sn,d.cs,0,0,0,1),i=n.multiply(o).multiply(y),s=t=>{const{x:e,y:n}=new r.Vector3(Math.cos(t),Math.sin(t),0).applyMatrix3(i);return Math.atan2(n,e)};t.aStartAngle=s(t.aStartAngle),t.aEndAngle=s(t.aEndAngle),h(e)&&(t.aClockwise=!t.aClockwise)}}function i(t){const n=p(e),r=d(e);t.xRadius*=n,t.yRadius*=r;const o=n>Number.EPSILON?Math.atan2(e.elements[1],e.elements[0]):Math.atan2(-e.elements[3],e.elements[4]);t.aRotation+=o,h(e)&&(t.aStartAngle*=-1,t.aEndAngle*=-1,t.aClockwise=!t.aClockwise)}const s=t.subPaths;for(let t=0,r=s.length;t<r;t++){const r=s[t].curves;for(let t=0;t<r.length;t++){const s=r[t];s.isLineCurve?(n(s.v1),n(s.v2)):s.isCubicBezierCurve?(n(s.v0),n(s.v1),n(s.v2),n(s.v3)):s.isQuadraticBezierCurve?(n(s.v0),n(s.v1),n(s.v2)):s.isEllipseCurve&&(M.set(s.aX,s.aY),n(M),s.aX=M.x,s.aY=M.y,f(e)?o(s):i(s))}}}(S,P),x.push(S),S.userData={node:e,style:i});const T=e.childNodes;for(let e=0;e<T.length;e++){const n=T[e];u&&"style"!==n.nodeName&&"defs"!==n.nodeName||t(n,i)}l&&(g.pop(),g.length>0?P.copy(g[g.length-1]):P.identity())}(S.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:x,xml:S.documentElement}}static createShapes(t){const e=999999999,n={loc:0,t:0};function o(t,e,r,o){const s=t.x,a=e.x,c=r.x,l=o.x,u=t.y,y=e.y,h=r.y,f=o.y,p=(l-c)*(u-h)-(f-h)*(s-c),d=(f-h)*(a-s)-(l-c)*(y-u),x=p/d,b=((a-s)*(u-h)-(y-u)*(s-c))/d;if(0===d&&0!==p||x<=0||x>=1||b<0||b>1)return null;if(0===p&&0===d){for(let c=0;c<2;c++){if(i(0===c?r:o,t,e),0==n.loc){const t=0===c?r:o;return{x:t.x,y:t.y,t:n.t}}if(2==n.loc)return{x:+(s+n.t*(a-s)).toPrecision(10),y:+(u+n.t*(y-u)).toPrecision(10),t:n.t}}return null}for(let s=0;s<2;s++)if(i(0===s?r:o,t,e),0==n.loc){const t=0===s?r:o;return{x:t.x,y:t.y,t:n.t}}return{x:+(s+x*(a-s)).toPrecision(10),y:+(u+x*(y-u)).toPrecision(10),t:x}}function i(t,e,r){const o=r.x-e.x,i=r.y-e.y,s=t.x-e.x,a=t.y-e.y,c=o*a-s*i;if(t.x===e.x&&t.y===e.y)return n.loc=0,void(n.t=0);if(t.x===r.x&&t.y===r.y)return n.loc=1,void(n.t=1);if(c<-Number.EPSILON)return void(n.loc=3);if(c>Number.EPSILON)return void(n.loc=4);if(o*s<0||i*a<0)return void(n.loc=5);if(Math.sqrt(o*o+i*i)<Math.sqrt(s*s+a*a))return void(n.loc=6);let l;l=0!==o?s/o:a/i,n.loc=2,n.t=l}let s=e,a=-999999999,c=t.subPaths.map((t=>{const n=t.getPoints();let o=-999999999,i=e,c=-999999999,l=e;for(let t=0;t<n.length;t++){const e=n[t];e.y>o&&(o=e.y),e.y<i&&(i=e.y),e.x>c&&(c=e.x),e.x<l&&(l=e.x)}return a<=c&&(a=c+1),s>=l&&(s=l-1),{curves:t.curves,points:n,isCW:r.ShapeUtils.isClockWise(n),identifier:-1,boundingBox:new r.Box2(new r.Vector2(l,i),new r.Vector2(c,o))}}));c=c.filter((t=>t.points.length>1));for(let t=0;t<c.length;t++)c[t].identifier=t;const l=c.map((e=>function(t,e,n,i,s){null!=s&&""!==s||(s="nonzero");const a=new r.Vector2;t.boundingBox.getCenter(a);const c=function(t,e,n){const i=new r.Vector2;e.getCenter(i);const s=[];return n.forEach((e=>{e.boundingBox.containsPoint(i)&&function(t,e){const n=[],i=[];for(let s=1;s<t.length;s++){const a=t[s-1],c=t[s];for(let t=1;t<e.length;t++){const s=o(a,c,e[t-1],e[t]);null!==s&&void 0===n.find((t=>t.t<=s.t+Number.EPSILON&&t.t>=s.t-Number.EPSILON))&&(n.push(s),i.push(new r.Vector2(s.x,s.y)))}}return i}(t,e.points).forEach((t=>{s.push({identifier:e.identifier,isCW:e.isCW,point:t})}))})),s.sort(((t,e)=>t.point.x-e.point.x)),s}([new r.Vector2(n,a.y),new r.Vector2(i,a.y)],t.boundingBox,e);c.sort(((t,e)=>t.point.x-e.point.x));const l=[],u=[];c.forEach((e=>{e.identifier===t.identifier?l.push(e):u.push(e)}));const y=l[0].point.x,h=[];let f=0;for(;f<u.length&&u[f].point.x<y;)h.length>0&&h[h.length-1]===u[f].identifier?h.pop():h.push(u[f].identifier),f++;if(h.push(t.identifier),"evenodd"===s){const e=h.length%2==0,n=h[h.length-2];return{identifier:t.identifier,isHole:e,for:n}}if("nonzero"===s){let n=!0,r=null,o=null;for(let t=0;t<h.length;t++){const i=h[t];n?(o=e[i].isCW,n=!1,r=i):o!==e[i].isCW&&(o=e[i].isCW,n=!0)}return{identifier:t.identifier,isHole:n,for:r}}console.warn('fill-rule: "'+s+'" is currently not implemented.')}(e,c,s,a,t.userData?t.userData.style.fillRule:void 0))),u=[];return c.forEach((t=>{if(!l[t.identifier].isHole){const e=new r.Shape;e.curves=t.curves,l.filter((e=>e.isHole&&e.for===t.identifier)).forEach((t=>{const n=c[t.identifier],o=new r.Path;o.curves=n.curves,e.holes.push(o)})),u.push(e)}})),u}static getStrokeStyle(t,e,n,r,o){return{strokeColor:e=void 0!==e?e:"#000",strokeWidth:t=void 0!==t?t:1,strokeLineJoin:n=void 0!==n?n:"miter",strokeLineCap:r=void 0!==r?r:"butt",strokeMiterLimit:o=void 0!==o?o:4}}static pointsToStroke(t,e,n,o){const s=[],a=[],c=[];if(0===i.pointsToStrokeWithBuffers(t,e,n,o,s,a,c))return null;const l=new r.BufferGeometry;return l.setAttribute("position",new r.Float32BufferAttribute(s,3)),l.setAttribute("normal",new r.Float32BufferAttribute(a,3)),l.setAttribute("uv",new r.Float32BufferAttribute(c,2)),l}static pointsToStrokeWithBuffers(t,e,n,o,i,s,a,c){const l=new r.Vector2,u=new r.Vector2,y=new r.Vector2,h=new r.Vector2,f=new r.Vector2,p=new r.Vector2,d=new r.Vector2,x=new r.Vector2,b=new r.Vector2,g=new r.Vector2,m=new r.Vector2,A=new r.Vector2,k=new r.Vector2,w=new r.Vector2,M=new r.Vector2,v=new r.Vector2,P=new r.Vector2;n=void 0!==n?n:12,o=void 0!==o?o:.001,c=void 0!==c?c:0;const S=(t=function(t){let e=!1;for(let n=1,r=t.length-1;n<r;n++)if(t[n].distanceTo(t[n+1])<o){e=!0;break}if(!e)return t;const n=[];n.push(t[0]);for(let e=1,r=t.length-1;e<r;e++)t[e].distanceTo(t[e+1])>=o&&n.push(t[e]);return n.push(t[t.length-1]),n}(t)).length;if(S<2)return 0;const T=t[0].equals(t[S-1]);let C,V,I=t[0];const N=e.strokeWidth/2,E=1/(S-1);let L,O,q,R,z=0,G=!1,W=0,B=3*c,D=2*c;H(t[0],t[1],l).multiplyScalar(N),x.copy(t[0]).sub(l),b.copy(t[0]).add(l),g.copy(x),m.copy(b);for(let n=1;n<S;n++){C=t[n],V=n===S-1?T?t[1]:void 0:t[n+1];const r=l;if(H(I,C,r),y.copy(r).multiplyScalar(N),A.copy(C).sub(y),k.copy(C).add(y),L=z+E,O=!1,void 0!==V){H(C,V,u),y.copy(u).multiplyScalar(N),w.copy(C).sub(y),M.copy(C).add(y),q=!0,y.subVectors(V,I),r.dot(y)<0&&(q=!1),1===n&&(G=q),y.subVectors(V,C),y.normalize();const t=Math.abs(r.dot(y));if(t>Number.EPSILON){const n=N/t;y.multiplyScalar(-n),h.subVectors(C,I),f.copy(h).setLength(n).add(y),v.copy(f).negate();const r=f.length(),o=h.length();h.divideScalar(o),p.subVectors(V,C);const i=p.length();switch(p.divideScalar(i),h.dot(v)<o&&p.dot(v)<i&&(O=!0),P.copy(f).add(C),v.add(C),R=!1,O?q?(M.copy(v),k.copy(v)):(w.copy(v),A.copy(v)):U(),e.strokeLineJoin){case"bevel":X(q,O,L);break;case"round":J(q,O),q?j(C,A,w,L,0):j(C,M,k,L,1);break;default:const t=N*e.strokeMiterLimit/r;if(t<1){if("miter-clip"!==e.strokeLineJoin){X(q,O,L);break}J(q,O),q?(p.subVectors(P,A).multiplyScalar(t).add(A),d.subVectors(P,w).multiplyScalar(t).add(w),F(A,L,0),F(p,L,0),F(C,L,.5),F(C,L,.5),F(p,L,0),F(d,L,0),F(C,L,.5),F(d,L,0),F(w,L,0)):(p.subVectors(P,k).multiplyScalar(t).add(k),d.subVectors(P,M).multiplyScalar(t).add(M),F(k,L,1),F(p,L,1),F(C,L,.5),F(C,L,.5),F(p,L,1),F(d,L,1),F(C,L,.5),F(d,L,1),F(M,L,1))}else O?(q?(F(b,z,1),F(x,z,0),F(P,L,0),F(b,z,1),F(P,L,0),F(v,L,1)):(F(b,z,1),F(x,z,0),F(P,L,1),F(x,z,0),F(v,L,0),F(P,L,1)),q?w.copy(P):M.copy(P)):q?(F(A,L,0),F(P,L,0),F(C,L,.5),F(C,L,.5),F(P,L,0),F(w,L,0)):(F(k,L,1),F(P,L,1),F(C,L,.5),F(C,L,.5),F(P,L,1),F(M,L,1)),R=!0}}else U()}else U();T||n!==S-1||Y(t[0],g,m,q,!0,z),z=L,I=C,x.copy(w),b.copy(M)}if(T){if(O&&i){let t=P,e=v;G!==q&&(t=v,e=P),q?(R||G)&&(e.toArray(i,0),e.toArray(i,9),R&&t.toArray(i,3)):!R&&G||(e.toArray(i,3),e.toArray(i,9),R&&t.toArray(i,0))}}else Y(C,A,k,q,!1,L);return W;function H(t,e,n){return n.subVectors(e,t),n.set(-n.y,n.x).normalize()}function F(t,e,n){i&&(i[B]=t.x,i[B+1]=t.y,i[B+2]=0,s&&(s[B]=0,s[B+1]=0,s[B+2]=1),B+=3,a&&(a[D]=e,a[D+1]=n,D+=2)),W+=3}function j(t,e,r,o,i){l.copy(e).sub(t).normalize(),u.copy(r).sub(t).normalize();let s=Math.PI;const a=l.dot(u);Math.abs(a)<1&&(s=Math.abs(Math.acos(a))),s/=n,y.copy(e);for(let e=0,r=n-1;e<r;e++)h.copy(y).rotateAround(t,s),F(y,o,i),F(h,o,i),F(t,o,.5),y.copy(h);F(h,o,i),F(r,o,i),F(t,o,.5)}function U(){F(b,z,1),F(x,z,0),F(A,L,0),F(b,z,1),F(A,L,0),F(k,L,1)}function X(t,e,n){e?t?(F(b,z,1),F(x,z,0),F(A,L,0),F(b,z,1),F(A,L,0),F(v,L,1),F(A,n,0),F(w,n,0),F(v,n,.5)):(F(b,z,1),F(x,z,0),F(k,L,1),F(x,z,0),F(v,L,0),F(k,L,1),F(k,n,1),F(v,n,0),F(M,n,1)):t?(F(A,n,0),F(w,n,0),F(C,n,.5)):(F(k,n,1),F(M,n,0),F(C,n,.5))}function J(t,e){e&&(t?(F(b,z,1),F(x,z,0),F(A,L,0),F(b,z,1),F(A,L,0),F(v,L,1),F(A,z,0),F(C,L,.5),F(v,L,1),F(C,L,.5),F(w,z,0),F(v,L,1)):(F(b,z,1),F(x,z,0),F(k,L,1),F(x,z,0),F(v,L,0),F(k,L,1),F(k,z,1),F(v,L,0),F(C,L,.5),F(C,L,.5),F(v,L,0),F(M,z,1)))}function Y(t,n,r,o,s,c){switch(e.strokeLineCap){case"round":s?j(t,r,n,c,.5):j(t,n,r,c,.5);break;case"square":if(s)l.subVectors(n,t),u.set(l.y,-l.x),y.addVectors(l,u).add(t),h.subVectors(u,l).add(t),o?(y.toArray(i,3),h.toArray(i,0),h.toArray(i,9)):(y.toArray(i,3),1===a[7]?h.toArray(i,9):y.toArray(i,9),h.toArray(i,0));else{l.subVectors(r,t),u.set(l.y,-l.x),y.addVectors(l,u).add(t),h.subVectors(u,l).add(t);const e=i.length;o?(y.toArray(i,e-3),h.toArray(i,e-6),h.toArray(i,e-12)):(h.toArray(i,e-6),y.toArray(i,e-3),h.toArray(i,e-12))}}}}}}}]);