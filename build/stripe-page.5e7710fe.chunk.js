"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[1092],{81202:(j,u,t)=>{t.r(u),t.d(u,{default:()=>U});var e=t(53547),o=t(86896),g=t(64593),m=t(52861),f=t(5504),v=t(45349),s=t(57713),p=t(79371),E=t(19442),y=t(26789),C=t(50781),h=t(9370),a=t(61585),n=t(28469),r=t(50614),l=t(473),i=t(78549),x=t(51503),P=t(8675);const B=[{value:"text-davinci-003",label:"higher quality, longer output, better instruction following"},{value:"text-curie-001",label:"faster and lower cost, suited for Q&A, translation, service bot"}],R=()=>{const{formatMessage:b}=(0,o.Z)(),O=(0,f.useNotification)(),[G,M]=(0,e.useState)(!1),D=(0,e.useRef)(""),L=(0,e.useRef)("text-davinci-003"),A=(0,e.useRef)(2048),N=m.default.create({baseURL:"",headers:{Authorization:`Bearer ${f.auth.getToken()}`,"Content-Type":"application/json"}}),[T,I]=(0,e.useState)({apiKey:"",modelName:"text-davinci-003",maxTokens:2048}),W=d=>{I(d),D.current=d.apiKey,L.current=d.modelName,A.current=d.maxTokens},K=d=>c=>{switch(console.log("key",c),I(d==="modelName"?{...T,[d]:c}:{...T,[d]:c.target.value}),d){case"apiKey":D.current=c.target.value;break;case"modelName":L.current=c;break;case"maxTokens":A.current=c.target.value;break;default:break}};(0,e.useEffect)(()=>{M(!0),(async()=>{try{const{data:c}=await N.get("/strapi-chatgpt/config");W(c)}catch(c){console.log(c),O({type:"warning",message:{id:"chatgpt-config-fetch-error",defaultMessage:"Error while fetching the chatGPT configurations"}})}})(),M(!1)},[]);const $=async()=>{if(!{apiKey:D.current,modelName:L.current,maxTokens:A.current}.apiKey){O({type:"warning",message:{id:"chatgpt-config-api-key-required",defaultMessage:"Please enter the api key"}});return}M(!0);try{const{data:c}=await N.post("/strapi-chatgpt/config/update",{...T});c&&c.value&&W(JSON.parse(c.value)),M(!1),O({type:"success",message:{id:"chatgpt-config-save-success",defaultMessage:"ChatGPT configurations saved successfully"}})}catch(c){M(!1),console.log(c),O({type:"warning",message:{id:"chatgpt-config-save-error",defaultMessage:"Error while saving the chatGPT configurations"}})}};return e.createElement(v.A,null,e.createElement(g.q,{title:"Strapi ChatGPT Configuration"}),e.createElement(s.o,{"aria-busy":!1},e.createElement(p.T,{title:"ChatGPT Configurations",subtitle:b({id:"chatgpt-config-headder",defaultMessage:"Configure the api key, model name and other parameters"}),primaryAction:e.createElement(E.z,{startIcon:e.createElement(P.Z,null),onClick:$,loading:G},"Save")}),e.createElement(y.D,null,e.createElement(C.x,{shadow:"tableShadow",background:"neutral0",paddingTop:6,paddingLeft:7,paddingRight:7,paddingBottom:6,hasRadius:!0},e.createElement(h.r,{gap:6},e.createElement(a.P,{col:6},e.createElement(n.o,{type:"text",id:"apiKey",name:"apiKey",placeholder:"sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",label:"API Key",refs:D,value:T.apiKey,onChange:K("apiKey")})),e.createElement(a.P,{col:6},e.createElement(n.o,{type:"text",id:"maxTokens",name:"maxTokens",label:"Max Tokens",placeholder:"2048",refs:A,value:T.maxTokens,onChange:K("maxTokens")})),e.createElement(a.P,null,e.createElement(r.P,{name:"modelName",id:"modelName",label:"Model Name",placeholder:"Select a model",refs:L,value:T.modelName,onChange:K("modelName")},B.map(d=>e.createElement(l.W,{key:d.value,value:d.value},d.value," - ",d.label))))),e.createElement(C.x,{paddingTop:5},e.createElement(i.Z,null,"You can set additional parameters"," (",e.createElement("span",null,e.createElement(x.r,{href:"https://platform.openai.com/docs/api-reference/completions",target:"_blank"},"ChatGPT doc")),") ","with the API Integration, available from Plugin > ChatGPT menu."))))))},U=()=>e.createElement(R,null)},26789:(j,u,t)=>{t.d(u,{D:()=>g});var e=t(2790),o=t(50781);const g=({children:m})=>(0,e.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:m})},79371:(j,u,t)=>{t.d(u,{T:()=>y});var e=t(2790),o=t(53547),g=t(88972);const m=a=>{const n=(0,o.useRef)(null),[r,l]=(0,o.useState)(!0),i=([x])=>{l(x.isIntersecting)};return(0,o.useEffect)(()=>{const x=n.current,P=new IntersectionObserver(i,a);return x&&P.observe(n.current),()=>{x&&P.disconnect()}},[n,a]),[n,r]};var f=t(79698);const v=(a,n)=>{const r=(0,f.W)(n);(0,o.useLayoutEffect)(()=>{const l=new ResizeObserver(r);return Array.isArray(a)?a.forEach(i=>{i.current&&l.observe(i.current)}):a.current&&l.observe(a.current),()=>{l.disconnect()}},[a,r])};var s=t(50781),p=t(75878),E=t(78549);const y=a=>{const n=(0,o.useRef)(null),[r,l]=(0,o.useState)(null),[i,x]=m({root:null,rootMargin:"0px",threshold:0});return v(i,()=>{i.current&&l(i.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{n.current&&l(n.current.getBoundingClientRect())},[n]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:r?.height},ref:i,children:x&&(0,e.jsx)(h,{ref:n,...a})}),!x&&(0,e.jsx)(h,{...a,sticky:!0,width:r?.width})]})};y.displayName="HeaderLayout";const C=(0,g.default)(s.x)`
  width: ${({width:a})=>a?`${a/16}rem`:void 0};
  z-index: ${({theme:a})=>a.zIndices[1]};
`,h=o.forwardRef(({navigationAction:a,primaryAction:n,secondaryAction:r,subtitle:l,title:i,sticky:x,width:P,...B},S)=>{const R=typeof l=="string";return x?(0,e.jsx)(C,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:P,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{children:[a&&(0,e.jsx)(s.x,{paddingRight:3,children:a}),(0,e.jsxs)(s.x,{children:[(0,e.jsx)(E.Z,{variant:"beta",as:"h1",...B,children:i}),R?(0,e.jsx)(E.Z,{variant:"pi",textColor:"neutral600",children:l}):l]}),r?(0,e.jsx)(s.x,{paddingLeft:4,children:r}):null]}),(0,e.jsx)(p.k,{children:n?(0,e.jsx)(s.x,{paddingLeft:2,children:n}):void 0})]})}):(0,e.jsxs)(s.x,{ref:S,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:a?6:8,background:"neutral100","data-strapi-header":!0,children:[a?(0,e.jsx)(s.x,{paddingBottom:2,children:a}):null,(0,e.jsxs)(p.k,{justifyContent:"space-between",children:[(0,e.jsxs)(p.k,{minWidth:0,children:[(0,e.jsx)(E.Z,{as:"h1",variant:"alpha",...B,children:i}),r?(0,e.jsx)(s.x,{paddingLeft:4,children:r}):null]}),n]}),R?(0,e.jsx)(E.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:l}):l]})})},45349:(j,u,t)=>{t.d(u,{A:()=>v});var e=t(2790),o=t(88972),g=t(50781);const m=(0,o.default)(g.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,f=(0,o.default)(g.x)`
  overflow-x: hidden;
`,v=({sideNav:s,children:p})=>(0,e.jsxs)(m,{hasSideNav:!!s,children:[s,(0,e.jsx)(f,{paddingBottom:10,children:p})]})},51503:(j,u,t)=>{t.d(u,{r:()=>C});var e=t(2790),o=t(53547),g=t(91393),m=t(73727),f=t(88972),v=t(27882),s=t(78549),p=t(50781);const E=f.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:h})=>h?"none":void 0};
  color: ${({disabled:h,theme:a})=>h?a.colors.neutral600:a.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${s.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:h})=>h.colors.primary500};
  }

  &:active {
    color: ${({theme:h})=>h.colors.primary700};
  }

  ${v.BF};
`,y=(0,f.default)(p.x)`
  display: flex;
`,C=o.forwardRef(({children:h,href:a,to:n,disabled:r=!1,startIcon:l,endIcon:i,...x},P)=>(0,e.jsxs)(E,{as:n&&!r?m.NavLink:"a",target:a?"_blank":void 0,rel:a?"noreferrer noopener":void 0,to:r?void 0:n,href:r?"#":a,disabled:r,ref:P,...x,children:[l&&(0,e.jsx)(y,{as:"span","aria-hidden":!0,paddingRight:2,children:l}),(0,e.jsx)(s.Z,{children:h}),i&&!a&&(0,e.jsx)(y,{as:"span","aria-hidden":!0,paddingLeft:2,children:i}),a&&(0,e.jsx)(y,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(g.Z,{})})]}))},57713:(j,u,t)=>{t.d(u,{o:()=>f});var e=t(2790),o=t(88972),g=t(50781);const m=(0,o.default)(g.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,f=({labelledBy:v="main-content-title",...s})=>(0,e.jsx)(m,{"aria-labelledby":v,as:"main",id:"main-content",tabIndex:-1,...s})}}]);
