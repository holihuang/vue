"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[131],{7131:function(n,t,l){l.r(t),l.d(t,{default:function(){return w}});var o=l(3396),d=l(7139);const u=(0,o._)("h3",null,"son",-1),e=(0,o._)("h4",null,"从父级传递的props",-1),a=(0,o._)("h4",null,"自身state中的数据",-1),c=(0,o._)("h4",null,"从store中获取的数据",-1);function s(n,t,l,s,i,h){return(0,o.wg)(),(0,o.iD)("div",null,[u,(0,o._)("div",null,[e,(0,o._)("div",null,(0,d.zw)(s.props.num),1),(0,o._)("button",{onClick:t[0]||(t[0]=(...n)=>s.handleAdd&&s.handleAdd(...n))},"+")]),(0,o._)("div",null,[a,(0,o.Uk)(" "+(0,d.zw)(n.count)+" ",1),(0,o._)("button",{onClick:t[1]||(t[1]=(...n)=>s.handleState&&s.handleState(...n))},"+")]),(0,o._)("div",null,[c,(0,o.Uk)(" "+(0,d.zw)(s.data.count)+" ",1),(0,o._)("button",{onClick:t[2]||(t[2]=(...n)=>s.handleSonAdd&&s.handleSonAdd(...n))},"+")])])}var i=l(4870),h=l(65),r={name:"son",props:{num:Number},setup(n,{emit:t}){const l=(0,h.oR)(),o=(0,i.qj)({count:0}),d=l.state.son;function u(){t("d")}function e(){o.count++}function a(){l.commit("son/add")}return console.log(l.state,8899),console.log(n,l,1234),{...(0,i.BK)(o),props:n,data:d,handleAdd:u,handleState:e,handleSonAdd:a}}},m=l(89);const _=(0,m.Z)(r,[["render",s]]);var k=_;const p=(0,o._)("div",null,[(0,o.Uk)(" message is: "),(0,o._)("input")],-1),f=(0,o._)("h4",null,"这是props",-1),v=(0,o._)("h4",null,"这是state",-1);function A(n,t,l,u,e,a){const c=k;return(0,o.wg)(),(0,o.iD)("div",null,[p,(0,o._)("div",null,[f,(0,o.Uk)(" "+(0,d.zw)(u.data.count)+" ",1),(0,o._)("button",{onClick:t[0]||(t[0]=(...n)=>u.handleClk&&u.handleClk(...n))},"+"),(0,o._)("button",{onClick:t[1]||(t[1]=(...n)=>u.handleAddAsync&&u.handleAddAsync(...n))},"async +")]),(0,o._)("div",null,[v,(0,o.Uk)(" "+(0,d.zw)(n.num)+" ",1),(0,o._)("button",{onClick:t[2]||(t[2]=(...n)=>u.handleNum&&u.handleNum(...n))},"+")]),(0,o.Wm)(c,{num:n.num,onD:u.d},null,8,["num","onD"])])}var C={name:"ComB",components:{Son:k},setup(){const n=(0,h.oR)(),t=(0,i.qj)({num:0}),l=n.state;function o(){n.commit("add",{a:1})}function d(){n.dispatch("addAsync")}function u(){t.num++}function e(){u()}return{data:l,...(0,i.BK)(t),handleClk:o,handleAddAsync:d,handleNum:u,d:e}}};const b=(0,m.Z)(C,[["render",A]]);var w=b}}]);
//# sourceMappingURL=131.95fb1d1c.js.map