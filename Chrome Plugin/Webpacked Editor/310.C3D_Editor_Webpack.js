"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[310],{2310:(e,t,s)=>{s.d(t,{GeometryParametersPanel:()=>g});var n=s(9451),a=s(6084),r=s(3429);function g(e,t){const s=e.strings,g=new a.YC,u=t.geometry.parameters,o=new a.p_,c=new a.nw(u.curveSegments||12).onChange((function(){e.execute(new r.s(e,t,new n.ShapeGeometry(u.shapes,c.getValue())))})).setRange(1,1/0);o.add(new a.gL(s.getKey("sidebar/geometry/shape_geometry/curveSegments")).setClass("Label")),o.add(c),g.add(o);const d=new a.lD(s.getKey("sidebar/geometry/shape_geometry/extrude")).onClick((function(){e.execute(new r.s(e,t,new n.ExtrudeGeometry(u.shapes,{curveSegments:c.getValue()})))})).setClass("Label").setMarginLeft("120px");return g.add(d),g}}}]);