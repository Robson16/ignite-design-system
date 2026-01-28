import{e as t,j as o,T as c,c as n,B as p}from"./iframe-CN3JFdo2.js";import"./preload-helper-CfUeG-vA.js";const i=n(p)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.space[2]};
`,l={title:"Form/Text Input",component:t,args:{},decorators:[a=>o.jsxs(i,{as:"label",children:[o.jsx(c,{size:"sm",children:"Email address"}),a()]})]},e={args:{placeholder:"Type your name"}},r={args:{disabled:!0}},s={args:{prefix:"cal.com/",placeholder:"your-username"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your name"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: "cal.com/",
    placeholder: "your-username"
  }
}`,...s.parameters?.docs?.source}}};const u=["Primary","Disabled","WithPrefix"];export{r as Disabled,e as Primary,s as WithPrefix,u as __namedExportsOrder,l as default};
