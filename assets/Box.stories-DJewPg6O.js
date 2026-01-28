import{B as n,j as a,T as t,c as d}from"./iframe-RLzFgCyM.js";import"./preload-helper-CfUeG-vA.js";const c=d(n)`
  background-color: ${({theme:r})=>r.colors.emerald800};
  padding: ${({theme:r})=>r.space[6]};
  border: 2px solid ${({theme:r})=>r.colors.emerald400};
  border-radius: ${({theme:r})=>r.radii.md};
`,l={title:"Surfaces/Box",component:n,args:{children:a.jsx(t,{children:"Testing the Box element"})},argTypes:{children:{control:!1}}},e={},s={args:{as:"form",children:a.jsx(t,{children:"This is a Box rendering as a Form tag"})}},o={render:r=>a.jsx(c,{...r,children:a.jsx(t,{children:"Stylized Composition Box"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    as: "form",
    children: <Text>This is a Box rendering as a Form tag</Text>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <StyledBox {...args}>
        <Text>Stylized Composition Box</Text>
      </StyledBox>;
  }
}`,...o.parameters?.docs?.source}}};const p=["Primary","CustomTag","Styled"];export{s as CustomTag,e as Primary,o as Styled,p as __namedExportsOrder,l as default};
