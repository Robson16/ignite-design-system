import{j as o,g as s,u as r,h as a,c as n}from"./iframe-_q65dlO-.js";const i=()=>{const{showToast:e}=r();return o.jsx(a,{onClick:()=>e({title:"Appointment Completed",description:"Wednesday, October 23rd at 4 PM"}),children:"Show Toast"})},c=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.space[10]};
  height: 300px;
`,d={title:"Feedback/Toast",component:i,decorators:[e=>o.jsx(s,{children:o.jsx(c,{children:o.jsx(e,{})})})],parameters:{layout:"fullscreen",docs:{description:{component:"To use Toast, the application needs to be wrapped by `ToastProvider`. This is an interactive demonstration."}}}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const p=["Primary"],m=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{t as P,m as T};
