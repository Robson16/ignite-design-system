import{i as s,j as t,h as n,T as a,k as i,c}from"./iframe-_q65dlO-.js";const l=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.space[10]};
  height: 300px;
`,p={title:"Feedback/Tooltip",component:s,args:{content:"This is a Tooltip"},argTypes:{children:{control:!1},content:{control:{type:"text"}}},decorators:[e=>t.jsx(i,{children:t.jsx(l,{children:e()})})]},o={render:e=>t.jsx(s,{...e,children:t.jsx(n,{children:"Hover me"})})},r={args:{content:"This is another Tooltip"},render:e=>t.jsx(s,{...e,children:t.jsx(a,{children:"Hover over this text."})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: "This is another Tooltip"
  },
  render: args => <Tooltip {...args}>
      <Text>Hover over this text.</Text>
    </Tooltip>
}`,...r.parameters?.docs?.source}}};const d=["Primary","WithText"],x=Object.freeze(Object.defineProperty({__proto__:null,Primary:o,WithText:r,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{o as P,x as T};
