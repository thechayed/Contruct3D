"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[706],{4706:(e,t,a)=>{a.d(t,{GeometryParametersPanel:()=>g});var n=a(9451),s=a(6084),d=a(3429);function g(e,t){const a=e.strings,g=new s.YC,o=t.geometry.parameters,r=new s.p_,w=(new s.Sl).setPrecision(3).setValue(o.width).onChange(L);r.add(new s.gL(a.getKey("sidebar/geometry/box_geometry/width")).setClass("Label")),r.add(w),g.add(r);const l=new s.p_,h=(new s.Sl).setPrecision(3).setValue(o.height).onChange(L);l.add(new s.gL(a.getKey("sidebar/geometry/box_geometry/height")).setClass("Label")),l.add(h),g.add(l);const i=new s.p_,y=(new s.Sl).setPrecision(3).setValue(o.depth).onChange(L);i.add(new s.gL(a.getKey("sidebar/geometry/box_geometry/depth")).setClass("Label")),i.add(y),g.add(i);const b=new s.p_,m=new s.nw(o.widthSegments).setRange(1,1/0).onChange(L);b.add(new s.gL(a.getKey("sidebar/geometry/box_geometry/widthseg")).setClass("Label")),b.add(m),g.add(b);const u=new s.p_,c=new s.nw(o.heightSegments).setRange(1,1/0).onChange(L);u.add(new s.gL(a.getKey("sidebar/geometry/box_geometry/heightseg")).setClass("Label")),u.add(c),g.add(u);const C=new s.p_,p=new s.nw(o.depthSegments).setRange(1,1/0).onChange(L);function L(){e.execute(new d.s(e,t,new n.BoxGeometry(w.getValue(),h.getValue(),y.getValue(),m.getValue(),c.getValue(),p.getValue())))}return C.add(new s.gL(a.getKey("sidebar/geometry/box_geometry/depthseg")).setClass("Label")),C.add(p),g.add(C),g}}}]);