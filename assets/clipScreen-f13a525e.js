import{i as a,r as n,j as e}from"./main-63cdee0e.js";import{B as s}from"./button-4029dead.js";import{M as d}from"./MinusOutlined-121b12c0.js";import{C as p}from"./CloseOutlined-ce7f2ba1.js";const m="_clipScreen_1jon1_1",x={clipScreen:m},j=()=>{const[t,c]=n.useState(!1);n.useEffect(()=>{var i;(i=window.electronAPI)==null||i.handleCsSetIsPlay((u,r)=>{c(r)})},[]);async function o(){var i;(i=window.electronAPI)==null||i.sendCsCloseWin()}function l(){var i;(i=window.electronAPI)==null||i.sendCsMinimizeWin()}return e.jsx("div",{id:"clipScreen",className:x.clipScreen,children:e.jsx("div",{className:"header",children:t?e.jsx(e.Fragment,{}):e.jsxs("div",{className:"right",children:[e.jsx(s,{type:"text",icon:e.jsx(d,{rev:void 0}),title:"最小化",onClick:l}),e.jsx(s,{type:"text",icon:e.jsx(p,{rev:void 0}),title:"关闭",onClick:o})]})})})};a(j);
