"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[375],{3375:(e,t,r)=>{r.d(t,{LDrawLoader:()=>w});var a=r(9451);const n="16",o="24",i=a.SRGBColorSpace,s=new a.Vector3,l=new a.Vector3;class c extends a.ShaderMaterial{constructor(e){super({uniforms:a.UniformsUtils.merge([a.UniformsLib.fog,{diffuse:{value:new a.Color},opacity:{value:1}}]),vertexShader:"\n\t\t\t\tattribute vec3 control0;\n\t\t\t\tattribute vec3 control1;\n\t\t\t\tattribute vec3 direction;\n\t\t\t\tvarying float discardFlag;\n\n\t\t\t\t#include <common>\n\t\t\t\t#include <color_pars_vertex>\n\t\t\t\t#include <fog_pars_vertex>\n\t\t\t\t#include <logdepthbuf_pars_vertex>\n\t\t\t\t#include <clipping_planes_pars_vertex>\n\t\t\t\tvoid main() {\n\t\t\t\t\t#include <color_vertex>\n\n\t\t\t\t\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\tgl_Position = projectionMatrix * mvPosition;\n\n\t\t\t\t\t// Transform the line segment ends and control points into camera clip space\n\t\t\t\t\tvec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );\n\t\t\t\t\tvec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );\n\t\t\t\t\tvec4 p0 = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\tvec4 p1 = projectionMatrix * modelViewMatrix * vec4( position + direction, 1.0 );\n\n\t\t\t\t\tc0.xy /= c0.w;\n\t\t\t\t\tc1.xy /= c1.w;\n\t\t\t\t\tp0.xy /= p0.w;\n\t\t\t\t\tp1.xy /= p1.w;\n\n\t\t\t\t\t// Get the direction of the segment and an orthogonal vector\n\t\t\t\t\tvec2 dir = p1.xy - p0.xy;\n\t\t\t\t\tvec2 norm = vec2( -dir.y, dir.x );\n\n\t\t\t\t\t// Get control point directions from the line\n\t\t\t\t\tvec2 c0dir = c0.xy - p1.xy;\n\t\t\t\t\tvec2 c1dir = c1.xy - p1.xy;\n\n\t\t\t\t\t// If the vectors to the controls points are pointed in different directions away\n\t\t\t\t\t// from the line segment then the line should not be drawn.\n\t\t\t\t\tfloat d0 = dot( normalize( norm ), normalize( c0dir ) );\n\t\t\t\t\tfloat d1 = dot( normalize( norm ), normalize( c1dir ) );\n\t\t\t\t\tdiscardFlag = float( sign( d0 ) != sign( d1 ) );\n\n\t\t\t\t\t#include <logdepthbuf_vertex>\n\t\t\t\t\t#include <clipping_planes_vertex>\n\t\t\t\t\t#include <fog_vertex>\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\t\t\tuniform vec3 diffuse;\n\t\t\tuniform float opacity;\n\t\t\tvarying float discardFlag;\n\n\t\t\t#include <common>\n\t\t\t#include <color_pars_fragment>\n\t\t\t#include <fog_pars_fragment>\n\t\t\t#include <logdepthbuf_pars_fragment>\n\t\t\t#include <clipping_planes_pars_fragment>\n\t\t\tvoid main() {\n\n\t\t\t\tif ( discardFlag > 0.5 ) discard;\n\n\t\t\t\t#include <clipping_planes_fragment>\n\t\t\t\tvec3 outgoingLight = vec3( 0.0 );\n\t\t\t\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t\t\t\t#include <logdepthbuf_fragment>\n\t\t\t\t#include <color_fragment>\n\t\t\t\toutgoingLight = diffuseColor.rgb; // simple shader\n\t\t\t\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t\t\t\t#include <tonemapping_fragment>\n\t\t\t\t#include <colorspace_fragment>\n\t\t\t\t#include <fog_fragment>\n\t\t\t\t#include <premultiplied_alpha_fragment>\n\t\t\t}\n\t\t\t"}),Object.defineProperties(this,{opacity:{get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},color:{get:function(){return this.uniforms.diffuse.value}}}),this.setValues(e),this.isLDrawConditionalLineMaterial=!0}}class h extends a.LineSegments{constructor(e,t){super(e,t),this.isConditionalLine=!0}}const d=new a.Ray;function u(e){return"Part"===e||"Unofficial_Part"===e}class g{constructor(e,t){this.line=e,this.lineLength=e.length,this.currentCharIndex=0,this.currentChar=" ",this.lineNumber=t}seekNonSpace(){for(;this.currentCharIndex<this.lineLength;){if(this.currentChar=this.line.charAt(this.currentCharIndex)," "!==this.currentChar&&"\t"!==this.currentChar)return;this.currentCharIndex++}}getToken(){const e=this.currentCharIndex++;for(;this.currentCharIndex<this.lineLength&&(this.currentChar=this.line.charAt(this.currentCharIndex)," "!==this.currentChar&&"\t"!==this.currentChar);)this.currentCharIndex++;const t=this.currentCharIndex;return this.seekNonSpace(),this.line.substring(e,t)}getVector(){return new a.Vector3(parseFloat(this.getToken()),parseFloat(this.getToken()),parseFloat(this.getToken()))}getRemainingString(){return this.line.substring(this.currentCharIndex,this.lineLength)}isAtTheEnd(){return this.currentCharIndex>=this.lineLength}setToEnd(){this.currentCharIndex=this.lineLength}getLineNumberString(){return this.lineNumber>=0?" at line "+this.lineNumber:""}}class m{constructor(e){this.loader=e,this._cache={}}cloneResult(e){const t={};return t.faces=e.faces.map((e=>({colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((e=>e.clone())),normals:e.normals.map((()=>null)),faceNormal:null}))),t.conditionalSegments=e.conditionalSegments.map((e=>({colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((e=>e.clone())),controlPoints:e.controlPoints.map((e=>e.clone()))}))),t.lineSegments=e.lineSegments.map((e=>({colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((e=>e.clone()))}))),t.type=e.type,t.category=e.category,t.keywords=e.keywords,t.author=e.author,t.subobjects=e.subobjects,t.fileName=e.fileName,t.totalFaces=e.totalFaces,t.startingBuildingStep=e.startingBuildingStep,t.materials=e.materials,t.group=null,t}async fetchData(e){let t=!1,r=0;for(;6!==r;){let n=e;switch(r){case 3:r+=1;break;case 0:n="parts/"+n,r+=1;break;case 1:n="p/"+n,r+=1;break;case 2:n="models/"+n,r+=1;break;case 4:n=e.substring(0,e.lastIndexOf("/")+1)+n,r+=1;break;case 5:t?r=6:(n=e=e.toLowerCase(),t=!0,r=0)}const o=this.loader,i=new a.FileLoader(o.manager);i.setPath(o.partsLibraryPath),i.setRequestHeader(o.requestHeader),i.setWithCredentials(o.withCredentials);try{return await i.loadAsync(n)}catch(e){continue}}throw new Error('LDrawLoader: Subobject "'+e+'" could not be loaded.')}parse(e,t=null){const r=this.loader,n=[],o=[],i=[],s=[],l={},c=e=>l[e]||null;let h="Model",d=null,u=null,m=null,p=0;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n"));const f=e.split("\n"),C=f.length;let M=!1,w=null,b=null,L=!1,y=!0,k=!1,v=!0,x=!1;for(let e=0;e<C;e++){const t=f[e];if(0===t.length)continue;if(M){t.startsWith("0 FILE ")?(this.setData(w,b),w=t.substring(7),b=""):b+=t+"\n";continue}const C=new g(t,e+1);if(C.seekNonSpace(),C.isAtTheEnd())continue;const E=C.getToken();let S,T,D,N,_,A,F,V,I,R,P;switch(E){case"0":const t=C.getToken();if(t)switch(t){case"!LDRAW_ORG":h=C.getToken();break;case"!COLOUR":S=r.parseColorMetaDirective(C),S?l[S.userData.code]=S:console.warn("LDrawLoader: Error parsing material"+C.getLineNumberString());break;case"!CATEGORY":d=C.getToken();break;case"!KEYWORDS":const t=C.getRemainingString().split(",");t.length>0&&(u||(u=[]),t.forEach((function(e){u.push(e.trim())})));break;case"FILE":e>0&&(M=!0,w=C.getRemainingString(),b="",L=!1,y=!0);break;case"BFC":for(;!C.isAtTheEnd();){const e=C.getToken();switch(e){case"CERTIFY":case"NOCERTIFY":L="CERTIFY"===e,y=!0;break;case"CW":case"CCW":y="CCW"===e;break;case"INVERTNEXT":k=!0;break;case"CLIP":case"NOCLIP":v="CLIP"===e;break;default:console.warn('THREE.LDrawLoader: BFC directive "'+e+'" is unknown.')}}break;case"STEP":x=!0;break;case"Author:":m=C.getToken()}break;case"1":T=C.getToken(),S=c(T);const g=parseFloat(C.getToken()),f=parseFloat(C.getToken()),B=parseFloat(C.getToken()),W=parseFloat(C.getToken()),O=parseFloat(C.getToken()),z=parseFloat(C.getToken()),U=parseFloat(C.getToken()),G=parseFloat(C.getToken()),j=parseFloat(C.getToken()),H=parseFloat(C.getToken()),q=parseFloat(C.getToken()),$=parseFloat(C.getToken()),Y=(new a.Matrix4).set(W,O,z,g,U,G,j,f,H,q,$,B,0,0,0,1);let K=C.getRemainingString().trim().replace(/\\/g,"/");r.fileMap[K]?K=r.fileMap[K]:K.startsWith("s/")?K="parts/"+K:K.startsWith("48/")&&(K="p/"+K),s.push({material:S,colorCode:T,matrix:Y,fileName:K,inverted:k,startingBuildingStep:x}),x=!1,k=!1;break;case"2":T=C.getToken(),S=c(T),A=C.getVector(),F=C.getVector(),D={material:S,colorCode:T,vertices:[A,F]},o.push(D);break;case"5":T=C.getToken(),S=c(T),A=C.getVector(),F=C.getVector(),R=C.getVector(),P=C.getVector(),D={material:S,colorCode:T,vertices:[A,F],controlPoints:[R,P]},i.push(D);break;case"3":T=C.getToken(),S=c(T),N=y,_=!L||!v,!0===N?(A=C.getVector(),F=C.getVector(),V=C.getVector()):(V=C.getVector(),F=C.getVector(),A=C.getVector()),n.push({material:S,colorCode:T,faceNormal:null,vertices:[A,F,V],normals:[null,null,null]}),p++,!0===_&&(n.push({material:S,colorCode:T,faceNormal:null,vertices:[V,F,A],normals:[null,null,null]}),p++);break;case"4":T=C.getToken(),S=c(T),N=y,_=!L||!v,!0===N?(A=C.getVector(),F=C.getVector(),V=C.getVector(),I=C.getVector()):(I=C.getVector(),V=C.getVector(),F=C.getVector(),A=C.getVector()),n.push({material:S,colorCode:T,faceNormal:null,vertices:[A,F,V,I],normals:[null,null,null,null]}),p+=2,!0===_&&(n.push({material:S,colorCode:T,faceNormal:null,vertices:[I,V,F,A],normals:[null,null,null,null]}),p+=2);break;default:throw new Error('LDrawLoader: Unknown line type "'+E+'"'+C.getLineNumberString()+".")}}return M&&this.setData(w,b),{faces:n,conditionalSegments:i,lineSegments:o,type:h,category:d,keywords:u,author:m,subobjects:s,totalFaces:p,startingBuildingStep:x,materials:l,fileName:t,group:null}}getData(e,t=!0){const r=e.toLowerCase(),a=this._cache[r];return null===a||a instanceof Promise?null:t?this.cloneResult(a):a}async ensureDataLoaded(e){const t=e.toLowerCase();t in this._cache||(this._cache[t]=this.fetchData(e).then((r=>{const a=this.parse(r,e);return this._cache[t]=a,a}))),await this._cache[t]}setData(e,t){const r=e.toLowerCase();this._cache[r]=this.parse(t,e)}}function p(e,t,r,a){return(!a&&e===n||a&&e===o)&&(e=t),r[e]||null}class f{constructor(e){this.loader=e,this.parseCache=new m(e),this._cache={}}async processIntoMesh(e){const t=this.loader,r=this.parseCache,i=new Set,c=async(e,s=null)=>{const l=e.subobjects,h=[];for(let e=0,t=l.length;e<t;e++){const t=l[e],a=r.ensureDataLoaded(t.fileName).then((()=>{return e=r.getData(t.fileName,!1).type,/primitive/i.test(e)||"Subpart"===e?c(r.getData(t.fileName),t):this.loadModel(t.fileName).catch((e=>(console.warn(e),null)));var e}));h.push(a)}const d=new a.Group;d.userData.category=e.category,d.userData.keywords=e.keywords,d.userData.author=e.author,d.userData.type=e.type,d.userData.fileName=e.fileName,e.group=d;const u=await Promise.all(h);for(let r=0,a=u.length;r<a;r++){const a=e.subobjects[r],s=u[r];if(null===s)continue;if(s.isGroup){const r=s;a.matrix.decompose(r.position,r.quaternion,r.scale),r.userData.startingBuildingStep=a.startingBuildingStep,r.name=a.fileName,t.applyMaterialsToMesh(r,a.colorCode,e.materials),r.userData.colorCode=a.colorCode,d.add(r);continue}s.group.children.length&&d.add(s.group);const l=e.lineSegments,c=e.conditionalSegments,h=e.faces,g=s.lineSegments,m=s.conditionalSegments,f=s.faces,C=a.matrix,M=a.inverted,w=C.determinant()<0,b=a.colorCode,L=b===n?o:b;for(let t=0,r=g.length;t<r;t++){const r=g[t],a=r.vertices;a[0].applyMatrix4(C),a[1].applyMatrix4(C),r.colorCode=r.colorCode===o?L:r.colorCode,r.material=r.material||p(r.colorCode,r.colorCode,e.materials,!0),l.push(r)}for(let t=0,r=m.length;t<r;t++){const r=m[t],a=r.vertices,n=r.controlPoints;a[0].applyMatrix4(C),a[1].applyMatrix4(C),n[0].applyMatrix4(C),n[1].applyMatrix4(C),r.colorCode=r.colorCode===o?L:r.colorCode,r.material=r.material||p(r.colorCode,r.colorCode,e.materials,!0),c.push(r)}for(let t=0,r=f.length;t<r;t++){const r=f[t],a=r.vertices;for(let e=0,t=a.length;e<t;e++)a[e].applyMatrix4(C);r.colorCode=r.colorCode===n?b:r.colorCode,r.material=r.material||p(r.colorCode,b,e.materials,!1),i.add(r.colorCode),w!==M&&a.reverse(),h.push(r)}e.totalFaces+=s.totalFaces}return s&&(t.applyMaterialsToMesh(d,s.colorCode,e.materials),d.userData.colorCode=s.colorCode),e};for(let t=0,r=e.faces;t<r;t++)i.add(e.faces[t].colorCode);if(await c(e),t.smoothNormals){const t=i.size>1;!function(e){for(let t=0,r=e.length;t<r;t++){const r=e[t],n=r.vertices,o=n[0],i=n[1],c=n[2];s.subVectors(i,o),l.subVectors(c,i),r.faceNormal=(new a.Vector3).crossVectors(s,l).normalize()}}(e.faces),function(e,t,r=!1){const n=100*(1+1e-10);function o(e){return`${~~(e.x*n)},${~~(e.y*n)},${~~(e.z*n)}`}function i(e,t){return`${o(e)}_${o(t)}`}function s(e,t,r){r.direction.subVectors(t,e).normalize();const a=e.dot(r.direction);return r.origin.copy(e).addScaledVector(r.direction,-a),r}function l(e){return i(e.origin,e.direction)}const c=new Set,h=new Map,u={},g=[];for(let e=0,n=t.length;e<n;e++){const n=t[e].vertices,o=n[0],d=n[1];if(c.add(i(o,d)),c.add(i(d,o)),r){const e=s(o,d,new a.Ray),t=l(e);if(!h.has(t)){s(d,o,e);const r=l(e),a={ray:e,distances:[]};h.set(t,a),h.set(r,a)}const r=h.get(t);let n=r.ray.direction.dot(o),i=r.ray.direction.dot(d);n>i&&([n,i]=[i,n]),r.distances.push(n,i)}}for(let t=0,a=e.length;t<a;t++){const a=e[t],n=a.vertices,o=n.length;for(let e=0;e<o;e++){const t=e,g=(e+1)%o,m=n[t],p=n[g],f=i(m,p);if(c.has(f))continue;if(r){s(m,p,d);const e=l(d);if(h.has(e)){const t=h.get(e),{ray:r,distances:a}=t;let n=r.direction.dot(m),o=r.direction.dot(p);n>o&&([n,o]=[o,n]);let i=!1;for(let e=0,t=a.length;e<t;e+=2)if(n>=a[e]&&o<=a[e+1]){i=!0;break}if(i)continue}}const C={index:t,tri:a};u[f]=C}}for(;;){let e=null;for(const t in u){e=u[t];break}if(null===e)break;const t=[e];for(;t.length>0;){const e=t.pop().tri,r=e.vertices,n=e.normals,o=e.faceNormal,s=r.length;for(let l=0;l<s;l++){const c=l,h=(l+1)%s,d=r[c],m=r[h];delete u[i(d,m)];const p=i(m,d),f=u[p];if(f){const r=f.tri,i=f.index,s=r.normals,l=s.length,d=r.faceNormal;if(Math.abs(r.faceNormal.dot(e.faceNormal))<.25)continue;p in u&&(t.push(f),delete u[p]);const m=(i+1)%l;n[c]&&s[m]&&n[c]!==s[m]&&(s[m].norm.add(n[c].norm),n[c].norm=s[m].norm);let C=n[c]||s[m];null===C&&(C={norm:new a.Vector3},g.push(C.norm)),null===n[c]&&(n[c]=C,C.norm.add(o)),null===s[m]&&(s[m]=C,C.norm.add(d)),n[h]&&s[i]&&n[h]!==s[i]&&(s[i].norm.add(n[h].norm),n[h].norm=s[i].norm);let M=n[h]||s[i];null===M&&(M={norm:new a.Vector3},g.push(M.norm)),null===n[h]&&(n[h]=M,M.norm.add(o)),null===s[i]&&(s[i]=M,M.norm.add(d))}}}}for(let e=0,t=g.length;e<t;e++)g[e].normalize()}(e.faces,e.lineSegments,t)}const h=e.group;return e.faces.length>0&&h.add(M(this.loader,e.faces,3,!1,e.totalFaces)),e.lineSegments.length>0&&h.add(M(this.loader,e.lineSegments,2)),e.conditionalSegments.length>0&&h.add(M(this.loader,e.conditionalSegments,2,!0)),h}hasCachedModel(e){return null!==e&&e.toLowerCase()in this._cache}async getCachedModel(e){if(null!==e&&this.hasCachedModel(e)){const t=e.toLowerCase();return(await this._cache[t]).clone()}return null}async loadModel(e){const t=this.parseCache,r=e.toLowerCase();if(this.hasCachedModel(e))return this.getCachedModel(e);{await t.ensureDataLoaded(e);const a=t.getData(e),n=this.processIntoMesh(a);return this.hasCachedModel(e)?this.getCachedModel(e):(u(a.type)&&(this._cache[r]=n),(await n).clone())}}async parseModel(e){const t=this.parseCache.parse(e);return u(t.type)&&this.hasCachedModel(t.fileName)?this.getCachedModel(t.fileName):this.processIntoMesh(t)}}function C(e,t){return e.colorCode===t.colorCode?0:e.colorCode<t.colorCode?-1:1}function M(e,t,r,n=!1,o=null){t.sort(C),null===o&&(o=t.length);const i=new Float32Array(r*o*3),c=3===r?new Float32Array(r*o*3):null,d=[],u=new Array(6),g=new a.BufferGeometry;let m=null,p=0,f=0,M=0;for(let o=0,h=t.length;o<h;o++){const h=t[o];let C=h.vertices;4===C.length&&(u[0]=C[0],u[1]=C[1],u[2]=C[2],u[3]=C[0],u[4]=C[2],u[5]=C[3],C=u);for(let e=0,t=C.length;e<t;e++){const t=C[e],r=M+3*e;i[r+0]=t.x,i[r+1]=t.y,i[r+2]=t.z}if(3===r){if(!h.faceNormal){const e=C[0],t=C[1],r=C[2];s.subVectors(t,e),l.subVectors(r,t),h.faceNormal=(new a.Vector3).crossVectors(s,l).normalize()}let e=h.normals;4===e.length&&(u[0]=e[0],u[1]=e[1],u[2]=e[2],u[3]=e[0],u[4]=e[2],u[5]=e[3],e=u);for(let t=0,r=e.length;t<r;t++){let r=h.faceNormal;e[t]&&(r=e[t].norm);const a=M+3*t;c[a+0]=r.x,c[a+1]=r.y,c[a+2]=r.z}}if(m!==h.colorCode){null!==m&&g.addGroup(p,f,d.length-1);const t=h.material;if(null!==t){if(3===r)d.push(t);else if(2===r)if(n){const r=e.edgeMaterialCache.get(t);d.push(e.conditionalEdgeMaterialCache.get(r))}else d.push(e.edgeMaterialCache.get(t))}else d.push(h.colorCode);m=h.colorCode,p=M/3,f=C.length}else f+=C.length;M+=3*C.length}f>0&&g.addGroup(p,1/0,d.length-1),g.setAttribute("position",new a.BufferAttribute(i,3)),null!==c&&g.setAttribute("normal",new a.BufferAttribute(c,3));let w=null;if(2===r?w=n?new h(g,1===d.length?d[0]:d):new a.LineSegments(g,1===d.length?d[0]:d):3===r&&(w=new a.Mesh(g,1===d.length?d[0]:d)),n){w.isConditionalLine=!0;const e=new Float32Array(3*t.length*2),r=new Float32Array(3*t.length*2),n=new Float32Array(3*t.length*2);for(let a=0,o=t.length;a<o;a++){const o=t[a],i=o.vertices,s=o.controlPoints,l=s[0],c=s[1],h=i[0],d=i[1],u=3*a*2;e[u+0]=l.x,e[u+1]=l.y,e[u+2]=l.z,e[u+3]=l.x,e[u+4]=l.y,e[u+5]=l.z,r[u+0]=c.x,r[u+1]=c.y,r[u+2]=c.z,r[u+3]=c.x,r[u+4]=c.y,r[u+5]=c.z,n[u+0]=d.x-h.x,n[u+1]=d.y-h.y,n[u+2]=d.z-h.z,n[u+3]=d.x-h.x,n[u+4]=d.y-h.y,n[u+5]=d.z-h.z}g.setAttribute("control0",new a.BufferAttribute(e,3,!1)),g.setAttribute("control1",new a.BufferAttribute(r,3,!1)),g.setAttribute("direction",new a.BufferAttribute(n,3,!1))}return w}class w extends a.Loader{constructor(e){super(e),this.materials=[],this.materialLibrary={},this.edgeMaterialCache=new WeakMap,this.conditionalEdgeMaterialCache=new WeakMap,this.partsCache=new f(this),this.fileMap={},this.setMaterials([]),this.smoothNormals=!0,this.partsLibraryPath="",this.missingColorMaterial=new a.MeshStandardMaterial({name:a.Loader.DEFAULT_MATERIAL_NAME,color:16711935,roughness:.3,metalness:0}),this.missingEdgeColorMaterial=new a.LineBasicMaterial({name:a.Loader.DEFAULT_MATERIAL_NAME,color:16711935}),this.missingConditionalEdgeColorMaterial=new c({name:a.Loader.DEFAULT_MATERIAL_NAME,fog:!0,color:16711935}),this.edgeMaterialCache.set(this.missingColorMaterial,this.missingEdgeColorMaterial),this.conditionalEdgeMaterialCache.set(this.missingEdgeColorMaterial,this.missingConditionalEdgeColorMaterial)}setPartsLibraryPath(e){return this.partsLibraryPath=e,this}async preloadMaterials(e){const t=new a.FileLoader(this.manager);t.setPath(this.path),t.setRequestHeader(this.requestHeader),t.setWithCredentials(this.withCredentials);const r=/^0 !COLOUR/,n=(await t.loadAsync(e)).split(/[\n\r]/g),o=[];for(let e=0,t=n.length;e<t;e++){const t=n[e];if(r.test(t)){const e=t.replace(r,""),a=this.parseColorMetaDirective(new g(e));o.push(a)}}this.setMaterials(o)}load(e,t,r,o){const i=new a.FileLoader(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,(r=>{this.partsCache.parseModel(r,this.materialLibrary).then((r=>{this.applyMaterialsToMesh(r,n,this.materialLibrary,!0),this.computeBuildingSteps(r),r.userData.fileName=e,t(r)})).catch(o)}),r,o)}parse(e,t,r){this.partsCache.parseModel(e,this.materialLibrary).then((e=>{this.applyMaterialsToMesh(e,n,this.materialLibrary,!0),this.computeBuildingSteps(e),e.userData.fileName="",t(e)})).catch(r)}setMaterials(e){this.materialLibrary={},this.materials=[];for(let t=0,r=e.length;t<r;t++)this.addMaterial(e[t]);return this.addMaterial(this.parseColorMetaDirective(new g("Main_Colour CODE 16 VALUE #FF8080 EDGE #333333"))),this.addMaterial(this.parseColorMetaDirective(new g("Edge_Colour CODE 24 VALUE #A0A0A0 EDGE #333333"))),this}setFileMap(e){return this.fileMap=e,this}addMaterial(e){const t=this.materialLibrary;return t[e.userData.code]||(this.materials.push(e),t[e.userData.code]=e),this}getMaterial(e){if(e.startsWith("0x2")){const t=e.substring(3);return this.parseColorMetaDirective(new g("Direct_Color_"+t+" CODE -1 VALUE #"+t+" EDGE #"+t))}return this.materialLibrary[e]||null}applyMaterialsToMesh(e,t,r,a=!1){const i=this,s=t===n;function l(e,l){if(s&&!(l in r)&&!a)return l;const c=e.isLineSegments||e.isConditionalLine;(!c&&l===n||c&&l===o)&&(l=t);let h=null;if(l in r)h=r[l];else{if(!a)return l;h=i.getMaterial(l),null===h&&(console.warn(`LDrawLoader: Material properties for code ${l} not available.`),h=i.missingColorMaterial)}return e.isLineSegments&&(h=i.edgeMaterialCache.get(h),e.isConditionalLine&&(h=i.conditionalEdgeMaterialCache.get(h))),h}e.traverse((e=>{if(e.isMesh||e.isLineSegments)if(Array.isArray(e.material))for(let t=0,r=e.material.length;t<r;t++)e.material[t].isMaterial||(e.material[t]=l(e,e.material[t]));else e.material.isMaterial||(e.material=l(e,e.material))}))}getMainMaterial(){return this.getMaterial(n)}getMainEdgeMaterial(){const e=this.getMaterial(o);return e?this.edgeMaterialCache.get(e):null}parseColorMetaDirective(e){let t=null,r="#FF00FF",n="#FF00FF",o=1,s=!1,l=0,h=0,d=null;const u=e.getToken();if(!u)throw new Error('LDrawLoader: Material name was expected after "!COLOUR tag'+e.getLineNumberString()+".");let m=null;for(;m=e.getToken(),m;)if(!f(m))switch(m.toUpperCase()){case"CODE":t=e.getToken();break;case"VALUE":if(r=e.getToken(),r.startsWith("0x"))r="#"+r.substring(2);else if(!r.startsWith("#"))throw new Error("LDrawLoader: Invalid color while parsing material"+e.getLineNumberString()+".");break;case"EDGE":if(n=e.getToken(),n.startsWith("0x"))n="#"+n.substring(2);else if(!n.startsWith("#")){if(d=this.getMaterial(n),!d)throw new Error("LDrawLoader: Invalid edge color while parsing material"+e.getLineNumberString()+".");d=this.edgeMaterialCache.get(d)}break;case"ALPHA":if(o=parseInt(e.getToken()),isNaN(o))throw new Error("LDrawLoader: Invalid alpha value in material definition"+e.getLineNumberString()+".");o=Math.max(0,Math.min(1,o/255)),o<1&&(s=!0);break;case"LUMINANCE":if(!f(e.getToken()))throw new Error("LDrawLoader: Invalid luminance value in material definition"+g.getLineNumberString()+".");break;case"CHROME":h=1;break;case"PEARLESCENT":h=2;break;case"RUBBER":h=3;break;case"MATTE_METALLIC":h=4;break;case"METAL":h=5;break;case"MATERIAL":e.setToEnd();break;default:throw new Error('LDrawLoader: Unknown token "'+m+'" while parsing material'+e.getLineNumberString()+".")}let p=null;switch(h){case 0:p=new a.MeshStandardMaterial({roughness:.3,metalness:0});break;case 2:p=new a.MeshStandardMaterial({roughness:.3,metalness:.25});break;case 1:p=new a.MeshStandardMaterial({roughness:0,metalness:1});break;case 3:p=new a.MeshStandardMaterial({roughness:.9,metalness:0});break;case 4:p=new a.MeshStandardMaterial({roughness:.8,metalness:.4});break;case 5:p=new a.MeshStandardMaterial({roughness:.2,metalness:.85})}if(p.color.setStyle(r,i),p.transparent=s,p.premultipliedAlpha=!0,p.opacity=o,p.depthWrite=!s,p.polygonOffset=!0,p.polygonOffsetFactor=1,0!==l&&p.emissive.setStyle(r,i).multiplyScalar(l),!d){d=new a.LineBasicMaterial({color:(new a.Color).setStyle(n,i),transparent:s,opacity:o,depthWrite:!s}),d.color,d.userData.code=t,d.name=u+" - Edge";const e=new c({fog:!0,transparent:s,depthWrite:!s,color:(new a.Color).setStyle(n,i),opacity:o});e.userData.code=t,e.name=u+" - Conditional Edge",this.conditionalEdgeMaterialCache.set(d,e)}return p.userData.code=t,p.name=u,this.edgeMaterialCache.set(p,d),this.addMaterial(p),p;function f(e){let t;return t=e.startsWith("LUMINANCE")?parseInt(e.substring(9)):parseInt(e),!isNaN(t)&&(l=Math.max(0,Math.min(1,t/255)),!0)}}computeBuildingSteps(e){let t=0;e.traverse((e=>{e.isGroup&&(e.userData.startingBuildingStep&&t++,e.userData.buildingStep=t)})),e.userData.numBuildingSteps=t+1}}}}]);