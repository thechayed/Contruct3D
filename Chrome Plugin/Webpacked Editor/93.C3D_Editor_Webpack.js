"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93],{9093:(e,t,n)=>{n.d(t,{AMFLoader:()=>r});var o=n(9451),a=n(7680);class r extends o.Loader{constructor(e){super(e)}load(e,t,n,a){const r=this,l=new o.FileLoader(r.manager);l.setPath(r.path),l.setResponseType("arraybuffer"),l.setRequestHeader(r.requestHeader),l.setWithCredentials(r.withCredentials),l.load(e,(function(n){try{t(r.parse(n))}catch(t){a?a(t):console.error(t),r.manager.itemError(e)}}),n,a)}parse(e){function t(e){let t="AMF Material";const a=e.attributes.id.textContent;let r={r:1,g:1,b:1,a:1},l=null;for(let o=0;o<e.childNodes.length;o++){const a=e.childNodes[o];"metadata"===a.nodeName&&void 0!==a.attributes.type?"name"===a.attributes.type.value&&(t=a.textContent):"color"===a.nodeName&&(r=n(a))}return l=new o.MeshPhongMaterial({flatShading:!0,color:new o.Color(r.r,r.g,r.b),name:t}),1!==r.a&&(l.transparent=!0,l.opacity=r.a),{id:a,material:l}}function n(e){const t={r:1,g:1,b:1,a:1};for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n];"r"===o.nodeName?t.r=o.textContent:"g"===o.nodeName?t.g=o.textContent:"b"===o.nodeName?t.b=o.textContent:"a"===o.nodeName&&(t.a=o.textContent)}return t}function r(e){const t={name:"",triangles:[],materialid:null};let n=e.firstElementChild;for(void 0!==e.attributes.materialid&&(t.materialId=e.attributes.materialid.nodeValue);n;){if("metadata"===n.nodeName)void 0!==n.attributes.type&&"name"===n.attributes.type.value&&(t.name=n.textContent);else if("triangle"===n.nodeName){const e=n.getElementsByTagName("v1")[0].textContent,o=n.getElementsByTagName("v2")[0].textContent,a=n.getElementsByTagName("v3")[0].textContent;t.triangles.push(e,o,a)}n=n.nextElementSibling}return t}function l(e){const t=[],n=[];let o=e.firstElementChild;for(;o;){if("vertex"===o.nodeName){let e=o.firstElementChild;for(;e;){if("coordinates"===e.nodeName){const n=e.getElementsByTagName("x")[0].textContent,o=e.getElementsByTagName("y")[0].textContent,a=e.getElementsByTagName("z")[0].textContent;t.push(n,o,a)}else if("normal"===e.nodeName){const t=e.getElementsByTagName("nx")[0].textContent,o=e.getElementsByTagName("ny")[0].textContent,a=e.getElementsByTagName("nz")[0].textContent;n.push(t,o,a)}e=e.nextElementSibling}}o=o.nextElementSibling}return{vertices:t,normals:n}}function s(e){const t=e.attributes.id.textContent,o={name:"amfobject",meshes:[]};let a=null,s=e.firstElementChild;for(;s;){if("metadata"===s.nodeName)void 0!==s.attributes.type&&"name"===s.attributes.type.value&&(o.name=s.textContent);else if("color"===s.nodeName)a=n(s);else if("mesh"===s.nodeName){let e=s.firstElementChild;const t={vertices:[],normals:[],volumes:[],color:a};for(;e;){if("vertices"===e.nodeName){const n=l(e);t.normals=t.normals.concat(n.normals),t.vertices=t.vertices.concat(n.vertices)}else"volume"===e.nodeName&&t.volumes.push(r(e));e=e.nextElementSibling}o.meshes.push(t)}s=s.nextElementSibling}return{id:t,obj:o}}const i=function(e){let t=new DataView(e);if("PK"===String.fromCharCode(t.getUint8(0),t.getUint8(1))){let n=null,o=null;console.log("THREE.AMFLoader: Loading Zip");try{n=a.AO(new Uint8Array(e))}catch(e){if(e instanceof ReferenceError)return console.log("THREE.AMFLoader: fflate missing and file is compressed."),null}for(o in n)if(".amf"===o.toLowerCase().slice(-4))break;console.log("THREE.AMFLoader: Trying to load file asset: "+o),t=new DataView(n[o].buffer)}const n=(new TextDecoder).decode(t),o=(new DOMParser).parseFromString(n,"application/xml");return"amf"!==o.documentElement.nodeName.toLowerCase()?(console.log("THREE.AMFLoader: Error loading AMF - no AMF document found."),null):o}(e);let m="",d="";const c=function(e){let t=1,n="millimeter";void 0!==e.documentElement.attributes.unit&&(n=e.documentElement.attributes.unit.value.toLowerCase());const o={millimeter:1,inch:25.4,feet:304.8,meter:1e3,micron:.001};return void 0!==o[n]&&(t=o[n]),console.log("THREE.AMFLoader: Unit scale: "+t),t}(i),u={},f={},g=i.documentElement.childNodes;let h,b;for(h=0;h<g.length;h++){const e=g[h];if("metadata"===e.nodeName)void 0!==e.attributes.type&&("name"===e.attributes.type.value?m=e.textContent:"author"===e.attributes.type.value&&(d=e.textContent));else if("material"===e.nodeName){const n=t(e);u[n.id]=n.material}else if("object"===e.nodeName){const t=s(e);f[t.id]=t.obj}}const E=new o.Group,C=new o.MeshPhongMaterial({name:o.Loader.DEFAULT_MATERIAL_NAME,color:11184895,flatShading:!0});E.name=m,E.userData.author=d,E.userData.loader="AMF";for(const e in f){const t=f[e],n=t.meshes,a=new o.Group;for(a.name=t.name||"",h=0;h<n.length;h++){let e=C;const t=n[h],r=new o.Float32BufferAttribute(t.vertices,3);let l=null;if(t.normals.length&&(l=new o.Float32BufferAttribute(t.normals,3)),t.color){const n=t.color;e=C.clone(),e.color=new o.Color(n.r,n.g,n.b),1!==n.a&&(e.transparent=!0,e.opacity=n.a)}const s=t.volumes;for(b=0;b<s.length;b++){const t=s[b],n=new o.BufferGeometry;let i=e;n.setIndex(t.triangles),n.setAttribute("position",r.clone()),l&&n.setAttribute("normal",l.clone()),void 0!==u[t.materialId]&&(i=u[t.materialId]),n.scale(c,c,c),a.add(new o.Mesh(n,i.clone()))}}E.add(a)}return E}}}}]);