"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98],{7098:(e,t,r)=>{r.d(t,{DRACOLoader:()=>n});var o=r(9451);const s=new WeakMap;class n extends o.Loader{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,r,s){const n=new o.FileLoader(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,(e=>{this.parse(e,t,s)}),r,s)}parse(e,t,r=(()=>{})){this.decodeDracoFile(e,t,null,null,o.SRGBColorSpace,r).catch(r)}decodeDracoFile(e,t,r,s,n=o.LinearSRGBColorSpace,i=(()=>{})){const a={attributeIDs:r||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!r,vertexColorSpace:n};return this.decodeGeometry(e,a).then(t).catch(i)}decodeGeometry(e,t){const r=JSON.stringify(t);if(s.has(e)){const t=s.get(e);if(t.key===r)return t.promise;if(0===e.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let o;const n=this.workerNextTaskID++,i=e.byteLength,a=this._getWorker(n,i).then((r=>(o=r,new Promise(((r,s)=>{o._callbacks[n]={resolve:r,reject:s},o.postMessage({type:"decode",id:n,taskConfig:t,buffer:e},[e])}))))).then((e=>this._createGeometry(e.geometry)));return a.catch((()=>!0)).then((()=>{o&&n&&this._releaseTask(o,n)})),s.set(e,{key:r,promise:a}),a}_createGeometry(e){const t=new o.BufferGeometry;e.index&&t.setIndex(new o.BufferAttribute(e.index.array,1));for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r],n=s.name,i=s.array,a=s.itemSize,c=new o.BufferAttribute(i,a);"color"===n&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=i instanceof Float32Array==0),t.setAttribute(n,c)}return t}_assignVertexColorSpace(e,t){if(t!==o.SRGBColorSpace)return;const r=new o.Color;for(let t=0,o=e.count;t<o;t++)r.fromBufferAttribute(e,t).convertSRGBToLinear(),e.setXYZ(t,r.r,r.g,r.b)}_loadLibrary(e,t){const r=new o.FileLoader(this.manager);return r.setPath(this.decoderPath),r.setResponseType(t),r.setWithCredentials(this.withCredentials),new Promise(((t,o)=>{r.load(e,t,void 0,o)}))}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then((t=>{const r=t[0];e||(this.decoderConfig.wasmBinary=t[1]);const o=i.toString(),s=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([s]))})),this.decoderPending}_getWorker(e,t){return this._initDecoder().then((()=>{if(this.workerPool.length<this.workerLimit){const e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:"init",decoderConfig:this.decoderConfig}),e.onmessage=function(t){const r=t.data;switch(r.type){case"decode":e._callbacks[r.id].resolve(r);break;case"error":e._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(e)}else this.workerPool.sort((function(e,t){return e._taskLoad>t._taskLoad?-1:1}));const r=this.workerPool[this.workerPool.length-1];return r._taskCosts[e]=t,r._taskLoad+=t,r}))}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map((e=>e._taskLoad)))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,""!==this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),this}}function i(){let e,t;function r(e,t,r,o,s,n){const i=n.num_components(),a=r.num_points()*i,c=a*s.BYTES_PER_ELEMENT,d=function(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(e,s),l=e._malloc(c);t.GetAttributeDataArrayForAllPoints(r,n,d,c,l);const u=new s(e.HEAPF32.buffer,l,a).slice();return e._free(l),{name:o,array:u,itemSize:i}}onmessage=function(o){const s=o.data;switch(s.type){case"init":e=s.decoderConfig,t=new Promise((function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)}));break;case"decode":const o=s.buffer,n=s.taskConfig;t.then((e=>{const t=e.draco,i=new t.Decoder;try{const e=function(e,t,o,s){const n=s.attributeIDs,i=s.attributeTypes;let a,c;const d=t.GetEncodedGeometryType(o);if(d===e.TRIANGULAR_MESH)a=new e.Mesh,c=t.DecodeArrayToMesh(o,o.byteLength,a);else{if(d!==e.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");a=new e.PointCloud,c=t.DecodeArrayToPointCloud(o,o.byteLength,a)}if(!c.ok()||0===a.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+c.error_msg());const l={index:null,attributes:[]};for(const o in n){const c=self[i[o]];let d,u;if(s.useUniqueIDs)u=n[o],d=t.GetAttributeByUniqueId(a,u);else{if(u=t.GetAttributeId(a,e[n[o]]),-1===u)continue;d=t.GetAttribute(a,u)}const h=r(e,t,a,o,c,d);"color"===o&&(h.vertexColorSpace=s.vertexColorSpace),l.attributes.push(h)}return d===e.TRIANGULAR_MESH&&(l.index=function(e,t,r){const o=3*r.num_faces(),s=4*o,n=e._malloc(s);t.GetTrianglesUInt32Array(r,s,n);const i=new Uint32Array(e.HEAPF32.buffer,n,o).slice();return e._free(n),{array:i,itemSize:1}}(e,t,a)),e.destroy(a),l}(t,i,new Int8Array(o),n),a=e.attributes.map((e=>e.array.buffer));e.index&&a.push(e.index.array.buffer),self.postMessage({type:"decode",id:s.id,geometry:e},a)}catch(e){console.error(e),self.postMessage({type:"error",id:s.id,error:e.message})}finally{t.destroy(i)}}))}}}}}]);