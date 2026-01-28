import{j as o}from"./iframe-CN3JFdo2.js";import{useMDXComponents as t}from"./index-DyjuyRyy.js";import{M as a,C as i,S as s,a as c}from"./blocks-CZeRFiE9.js";import{T as p,P as d}from"./Tooltip.stories--nebvh2f.js";import"./preload-helper-CfUeG-vA.js";function r(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:p}),`
`,o.jsx(e.h1,{id:"tooltip",children:"Tooltip"}),`
`,o.jsx(e.p,{children:"Dica de texto que aparece quando o usuário passa o mouse, foca ou toca em um elemento."}),`
`,o.jsx(i,{children:o.jsx(s,{of:d})}),`
`,o.jsx(e.h2,{id:"como-usar",children:"Como Usar"}),`
`,o.jsxs(e.p,{children:["O componente ",o.jsx(e.code,{children:"Tooltip"}),' é um wrapper. Envolva o elemento que irá disparar o tooltip (o "gatilho") com ele e passe o conteúdo a ser exibido na propriedade ',o.jsx(e.code,{children:"content"}),"."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { Tooltip, Button } from "@beryl-ui/react";
import { Star } from "phosphor-react";

export function MyComponent() {
  return (
    <Tooltip content="Adicionar aos favoritos">
      <Button>
        <Star />
      </Button>
    </Tooltip>
  );
}
`})}),`
`,o.jsx(e.h3,{id:"provider-opcional",children:"Provider (Opcional)"}),`
`,o.jsxs(e.p,{children:["Para um controle mais refinado sobre todos os tooltips da sua aplicação (como a duração do delay para aparecer), você pode envolver sua aplicação com o ",o.jsx(e.code,{children:"TooltipProvider"})," (exportado do nosso pacote)."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { TooltipProvider } from "@beryl-ui/react";

export function App() {
  return (
    <TooltipProvider delayDuration={300}>
      {/* O resto da sua aplicação */}
    </TooltipProvider>
  );
}
`})}),`
`,o.jsx(e.h2,{id:"api",children:"API"}),`
`,o.jsx(c,{})]})}function j(n={}){const{wrapper:e}={...t(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(r,{...n})}):r(n)}export{j as default};
