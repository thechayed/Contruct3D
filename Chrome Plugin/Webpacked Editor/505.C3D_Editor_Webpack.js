"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[505],{7505:(e,n,a)=>{a.d(n,{GeometryParametersPanel:()=>g});var t=a(9451),d=a(6084),s=a(3429);function g(e,n){const a=e.strings,g=new d.YC,r=n.geometry.parameters,o=new d.p_,l=new d.Sl(r.radiusTop).onChange(L);o.add(new d.gL(a.getKey("sidebar/geometry/cylinder_geometry/radiustop")).setClass("Label")),o.add(l),g.add(o);const y=new d.p_,i=new d.Sl(r.radiusBottom).onChange(L);y.add(new d.gL(a.getKey("sidebar/geometry/cylinder_geometry/radiusbottom")).setClass("Label")),y.add(i),g.add(y);const w=new d.p_,m=new d.Sl(r.height).onChange(L);w.add(new d.gL(a.getKey("sidebar/geometry/cylinder_geometry/height")).setClass("Label")),w.add(m),g.add(w);const c=new d.p_,u=new d.nw(r.radialSegments).setRange(1,1/0).onChange(L);c.add(new d.gL(a.getKey("sidebar/geometry/cylinder_geometry/radialsegments")).setClass("Label")),c.add(u),g.add(c);const h=new d.p_,C=new d.nw(r.heightSegments).setRange(1,1/0).onChange(L);h.add(new d.gL(a.getKey("sidebar/geometry/cylinder_geometry/heightsegments")).setClass("Label")),h.add(C),g.add(h);const b=new d.p_,p=new d.cY(r.openEnded).onChange(L);function L(){e.execute(new s.s(e,n,new t.CylinderGeometry(l.getValue(),i.getValue(),m.getValue(),u.getValue(),C.getValue(),p.getValue())))}return b.add(new d.gL(a.getKey("sidebar/geometry/cylinder_geometry/openended")).setClass("Label")),b.add(p),g.add(b),g}}}]);