"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[366],{3366:(e,s,t)=>{t.d(s,{GeometryParametersPanel:()=>l});var n=t(9451),a=t(6084),d=t(3429);function l(e,s){const t=e.strings,l=new a.YC,g=s.geometry.parameters,o=g.options;o.curveSegments=null!=o.curveSegments?o.curveSegments:12,o.steps=null!=o.steps?o.steps:1,o.depth=null!=o.depth?o.depth:1;const r=void 0!==o.bevelThickness?o.bevelThickness:.2;o.bevelThickness=r,o.bevelSize=void 0!==o.bevelSize?o.bevelSize:r-.1,o.bevelOffset=void 0!==o.bevelOffset?o.bevelOffset:0,o.bevelSegments=void 0!==o.bevelSegments?o.bevelSegments:3;const b=new a.p_,i=new a.nw(o.curveSegments).onChange(K).setRange(1,1/0);b.add(new a.gL(t.getKey("sidebar/geometry/extrude_geometry/curveSegments")).setClass("Label")),b.add(i),l.add(b);const v=new a.p_,u=new a.nw(o.steps).onChange(K).setRange(1,1/0);v.add(new a.gL(t.getKey("sidebar/geometry/extrude_geometry/steps")).setClass("Label")),v.add(u),l.add(v);const y=new a.p_,m=new a.Sl(o.depth).onChange(K).setRange(1,1/0);y.add(new a.gL(t.getKey("sidebar/geometry/extrude_geometry/depth")).setClass("Label")),y.add(m),l.add(y);const p=new a.p_,c=new a.cY(o.bevelEnabled).onChange(K);p.add(new a.gL(t.getKey("sidebar/geometry/extrude_geometry/bevelEnabled")).setClass("Label")),p.add(c),l.add(p);const w=new a.p_,h=new a.Sl(o.bevelThickness).onChange(K);w.add(new a.gL(t.getKey("sidebar/geometry/extrude_geometry/bevelThickness")).setClass("Label")),w.add(h),l.add(w);const S=new a.p_,f=new a.Sl(o.bevelSize).onChange(K);S.add(new a.gL(t.getKey("sidebar/geometry/extrude_geometry/bevelSize")).setClass("Label")),S.add(f),l.add(S);const C=new a.p_,L=new a.Sl(o.bevelOffset).onChange(K);C.add(new a.gL(t.getKey("sidebar/geometry/extrude_geometry/bevelOffset")).setClass("Label")),C.add(L),l.add(C);const _=new a.p_,x=new a.nw(o.bevelSegments).onChange(K).setRange(0,1/0);_.add(new a.gL(t.getKey("sidebar/geometry/extrude_geometry/bevelSegments")).setClass("Label")),_.add(x),l.add(_),D(o.bevelEnabled);const k=new a.lD(t.getKey("sidebar/geometry/extrude_geometry/shape")).onClick((function(){e.execute(new d.s(e,s,new n.ShapeGeometry(g.shapes,o.curveSegments)))})).setClass("Label").setMarginLeft("120px");function D(e){!0===e?(w.setDisplay(""),S.setDisplay(""),C.setDisplay(""),_.setDisplay("")):(w.setDisplay("none"),S.setDisplay("none"),C.setDisplay("none"),_.setDisplay("none"))}function K(){D(c.getValue()),e.execute(new d.s(e,s,new n.ExtrudeGeometry(g.shapes,{curveSegments:i.getValue(),steps:u.getValue(),depth:m.getValue(),bevelEnabled:c.getValue(),bevelThickness:void 0!==h?h.getValue():o.bevelThickness,bevelSize:void 0!==f?f.getValue():o.bevelSize,bevelOffset:void 0!==L?L.getValue():o.bevelOffset,bevelSegments:void 0!==x?x.getValue():o.bevelSegments})))}return l.add(k),l}}}]);