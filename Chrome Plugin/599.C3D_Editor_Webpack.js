"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[599],{2599:(e,t,a)=>{a.d(t,{GeometryParametersPanel:()=>d});var s=a(9451),n=a(6084),r=a(3429);function d(e,t){const a=e.strings,d=new n.YC,g=t.geometry.parameters,l=new n.p_,i=new n.Sl(g.radius).onChange(u);l.add(new n.gL(a.getKey("sidebar/geometry/circle_geometry/radius")).setClass("Label")),l.add(i),d.add(l);const o=new n.p_,c=new n.nw(g.segments).setRange(3,1/0).onChange(u);o.add(new n.gL(a.getKey("sidebar/geometry/circle_geometry/segments")).setClass("Label")),o.add(c),d.add(o);const w=new n.p_,h=new n.Sl(g.thetaStart*s.MathUtils.RAD2DEG).setUnit("°").setStep(10).onChange(u);w.add(new n.gL(a.getKey("sidebar/geometry/circle_geometry/thetastart")).setClass("Label")),w.add(h),d.add(w);const m=new n.p_,y=new n.Sl(g.thetaLength*s.MathUtils.RAD2DEG).setUnit("°").setStep(10).onChange(u);function u(){e.execute(new r.s(e,t,new s.CircleGeometry(i.getValue(),c.getValue(),h.getValue()*s.MathUtils.DEG2RAD,y.getValue()*s.MathUtils.DEG2RAD)))}return m.add(new n.gL(a.getKey("sidebar/geometry/circle_geometry/thetalength")).setClass("Label")),m.add(y),d.add(m),d}}}]);