(this["webpackJsonpdelay-widget"]=this["webpackJsonpdelay-widget"]||[]).push([[0],{10:function(e,t,n){},29:function(e,t,n){},33:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),i=n.n(r),s=(n(29),n(10),n(6)),o=n(3),j=n(21),d=[{header:"Line",accessor:"lineName"},{header:"Status",accessor:"status"},{header:"Info",accessor:"link"}],u=(n(33),n(1));function l(e){var t=e.tableData,n=Object(c.useMemo)((function(){return d}),[]),a=Object(c.useMemo)((function(){return t}),[t]),r=Object(j.useTable)({columns:n,data:a}),i=r.getTableProps,s=r.getTableBodyProps,l=r.headerGroups,b=r.rows,O=r.prepareRow;return Object(u.jsxs)("table",Object(o.a)(Object(o.a)({},i()),{},{children:[Object(u.jsx)("thead",{children:l.map((function(e){return Object(u.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(u.jsx)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps()),{},{children:e.render("header")}))}))}))}))}),Object(u.jsx)("tbody",Object(o.a)(Object(o.a)({},s()),{},{children:b.map((function(e){return O(e),Object(u.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(u.jsx)("td",Object(o.a)(Object(o.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}var b=n(4),O=n(24),h="f719f0f104734bbda1a142ad6f90e2f6",f=n.n(O).a.create({baseURL:"https://api.tfl.gov.uk"});n(7);function p(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(s.a)(r,2),o=i[0],j=i[1];return Object(c.useEffect)((function(){f.get("/Line/Mode/tube/Status",{headers:{Authorization:"Basic ".concat(h)}}).then((function(e){return e.data})).then((function(e){!function(e){var t=e.map((function(e){return{lineName:e.name,status:e.lineStatuses[0].statusSeverityDescription,link:Object(u.jsx)(b.a,{to:"".concat(e.id),children:"View more"})}}));a(t)}(e),j(!0)})).catch((function(e){console.log(e)}))}),[]),Object(u.jsx)("div",{className:"info-container",children:o?Object(u.jsx)(l,{tableData:n}):Object(u.jsx)("p",{children:"Loading..."})})}function x(){return Object(u.jsx)(b.a,{to:"/travel",className:"Header",children:"TRAVEL WIDGET"})}function m(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),o=Object(s.a)(i,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){var t;(t=e.line_id,f.get("/Line/".concat(t,"/Status"),{headers:{Authorization:"Basic ".concat(h)}}).then((function(e){var t=e.data,n=t[0].lineStatuses[0].reason,c=t[0].name;return n||"There are currently no reported disruptions on the ".concat(c," line.")}))).then((function(e){r(e),d(!0)}))}),[]),Object(u.jsx)("div",{className:"info-container",children:j?Object(u.jsxs)("div",{id:"description-container",children:[Object(u.jsx)("div",{id:"description",children:a}),Object(u.jsx)("div",{id:"go-back",children:Object(u.jsx)(b.a,{to:"/travel",children:"Go back"})})]}):Object(u.jsx)("p",{children:"Please wait..."})})}function v(e){var t=e.line_id,n=Date.now(),c=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(n);return Object(u.jsxs)("div",{className:"Widget",children:[Object(u.jsxs)("div",{id:"last-updated",children:["LAST UPDATED: ",c]}),t?Object(u.jsx)(m,{line_id:t}):Object(u.jsx)(p,{})]})}var g=n(61);function w(){return Object(u.jsx)("div",{className:"show-table",children:Object(u.jsx)(b.a,{to:"/travel",children:Object(u.jsx)(g.a,{id:"show-lines",children:"View all line statuses"})})})}var S=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{}),Object(u.jsxs)(b.b,{children:[Object(u.jsx)(w,{default:!0}),Object(u.jsx)(v,{path:"/travel"}),Object(u.jsx)(v,{path:"/travel/:line_id"})]})]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.60c040a2.chunk.js.map