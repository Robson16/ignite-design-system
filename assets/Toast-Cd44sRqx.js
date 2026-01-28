import{j as e}from"./iframe-CN3JFdo2.js";import{useMDXComponents as s}from"./index-DyjuyRyy.js";import{M as r,C as i,S as a}from"./blocks-CZeRFiE9.js";import{T as c,P as d}from"./Toast.stories-CeRCD1XN.js";import"./preload-helper-CfUeG-vA.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(o.h1,{id:"toast",children:"Toast"}),`
`,e.jsx(o.p,{children:"Feedback messages for the user, which appear temporarily on the screen to confirm an action or display important information."}),`
`,e.jsxs(o.p,{children:["Beryl UI's ",e.jsx(o.code,{children:"Toast"})," is designed to be triggered imperatively from any component of your application. To make this work, you need to follow two simple steps:"]}),`
`,e.jsx(o.h2,{id:"how-to-use",children:"How to Use"}),`
`,e.jsxs(o.h3,{id:"step-1-configure-the-toastprovider",children:["Step 1: Configure the ",e.jsx(o.code,{children:"ToastProvider"})]}),`
`,e.jsxs(o.p,{children:["First, wrap the root of your application (or the part of it that needs to display toasts) with ",e.jsx(o.code,{children:"ToastProvider"}),". This is done only once."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// In your main file (e.g., App.tsx)
import { ToastProvider } from "@beryl-ui/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@beryl-ui/react/styles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastProvider>{/* The rest of your application */}</ToastProvider>
    </ThemeProvider>
  );
}
`})}),`
`,e.jsxs(o.h3,{id:"step-2-launch-the-toast-with-usetoast",children:["Step 2: Launch the Toast with ",e.jsx(o.code,{children:"useToast"})]}),`
`,e.jsxs(o.p,{children:["In any child component of ",e.jsx(o.code,{children:"ToastProvider"}),", import the ",e.jsx(o.code,{children:"useToast"})," hook to obtain the ",e.jsx(o.code,{children:"showToast"})," function. Call this function whenever you want to display a message."]}),`
`,e.jsx(i,{children:e.jsx(a,{of:d})}),`
`,e.jsx(o.p,{children:"The code for the example above is:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { Button, useToast } from "@beryl-ui/react";

export function MyComponent() {
  const { showToast } = useToast();

  function handleAction() {
    showToast({
      title: "Appointment Completed",
      description: "Wednesday, October 23rd at 4 PM",
    });
  }

  return <Button onClick={handleAction}>Execute Action</Button>;
}
`})}),`
`,e.jsx(o.h2,{id:"api",children:"API"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.code,{children:"showToast"})," function accepts an object with the following properties (",e.jsx(o.code,{children:"ToastProps"}),"):"]}),`
`,e.jsxs(o.p,{children:[`| Property      | Type     | Required | Description                                 |
| ------------- | -------- | -------- | ------------------------------------------- |
| `,e.jsx(o.code,{children:"title"}),"       | ",e.jsx(o.code,{children:"string"}),` | Yes      | The main title of the toast.                |
| `,e.jsx(o.code,{children:"description"})," | ",e.jsx(o.code,{children:"string"})," | No       | An optional descriptive text for the toast. |"]})]})}function u(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{u as default};
