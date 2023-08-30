"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[3981],{96753:(R,v,t)=>{t.r(v),t.d(v,{HomePageCE:()=>U,default:()=>be});var e=t(53547),r=t(50781),C=t(45349),h=t(57713),y=t(9370),E=t(61585),a=t(5504),P=t(64593),L=t(44012),c=t(16550),l=t(88972),i=t(75878),p=t(78549),k=t(19442),T=t(69858),g=t(86896),b=t(99571),I=t(45697),d=t.n(I),u=t(16334),D=t(43234),$=t(2364);const j=({type:n,title:s,number:o,content:m,hasLine:f})=>{const{formatMessage:x}=(0,g.Z)();return e.createElement(r.x,null,e.createElement(i.k,null,e.createElement(r.x,{minWidth:(0,a.pxToRem)(30),marginRight:5},e.createElement($.Z,{type:n,number:o})),e.createElement(p.Z,{variant:"delta",as:"h3"},x(s))),e.createElement(i.k,{alignItems:"flex-start"},e.createElement(i.k,{justifyContent:"center",minWidth:(0,a.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},f&&e.createElement(D.Z,{type:n,minHeight:n===u.lW?(0,a.pxToRem)(85):(0,a.pxToRem)(65)})),e.createElement(r.x,{marginTop:2},n===u.lW&&m)))};j.defaultProps={content:void 0,number:void 0,type:u.VM,hasLine:!0},j.propTypes={content:d().node,number:d().number,title:d().shape({id:d().string,defaultMessage:d().string}).isRequired,type:d().oneOf([u.lW,u.hx,u.VM]),hasLine:d().bool};const F=j,z=(n,s)=>n===-1||s<n?u.hx:s>n?u.VM:u.lW,H=({sections:n,currentSectionKey:s})=>{const o=n.findIndex(m=>m.key===s);return e.createElement(r.x,null,n.map((m,f)=>e.createElement(F,{key:m.key,title:m.title,content:m.content,number:f+1,type:z(o,f),hasLine:f!==n.length-1})))};H.defaultProps={currentSectionKey:void 0},H.propTypes={sections:d().arrayOf(d().shape({key:d().string.isRequired,title:d().shape({id:d().string,defaultMessage:d().string}).isRequired,content:d().node})).isRequired,currentSectionKey:d().string};const N=H,V=()=>{const{guidedTourState:n,setSkipped:s}=(0,a.useGuidedTour)(),{formatMessage:o}=(0,g.Z)(),{trackUsage:m}=(0,a.useTracking)(),f=Object.entries(b.Z).map(([M,B])=>({key:M,title:B.home.title,content:e.createElement(a.LinkButton,{onClick:()=>m(B.home.trackingEvent),to:B.home.cta.target,endIcon:e.createElement(T.Z,null)},o(B.home.cta.title))})),A=f.map(M=>({isDone:Object.entries(n[M.key]).every(([,B])=>B),...M})).find(M=>!M.isDone)?.key,G=()=>{s(!0),m("didSkipGuidedtour")};return e.createElement(r.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(i.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(p.Z,{variant:"beta",as:"h2"},o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(N,{sections:f,currentSectionKey:A})),e.createElement(i.k,{justifyContent:"flex-end"},e.createElement(k.z,{variant:"tertiary",onClick:G},o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},Q=n=>Object.entries(n).every(([,s])=>Object.entries(s).every(([,o])=>o));var J=t(92686),Y=t(80902);const X=t.p+"7e9af4fb7e723fcebf1f.svg";var w=t(28077),q=t(37855),_=t(12951),ee=t(2204);const te=t.p+"27d16aefee06412db90a.png",ne=t.p+"bb4d0d527bdfb161bc5a.svg",ae=t.p+"bb3108f7fd1e6179bde1.svg",oe=l.default.a`
  text-decoration: none;
`,le=(0,l.default)(r.x)`
  background-image: url(${({backgroundImage:n})=>n});
`,se=(0,l.default)(i.k)`
  background: rgba(255, 255, 255, 0.3);
`,re=()=>{const{formatMessage:n}=(0,g.Z)(),{trackUsage:s}=(0,a.useTracking)();return e.createElement(oe,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{s("didClickOnTryStrapiCloudSection")}},e.createElement(i.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(le,{backgroundImage:te,hasRadius:!0,padding:3},e.createElement(se,{width:(0,a.pxToRem)(32),height:(0,a.pxToRem)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:ae,alt:n({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(i.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(i.k,null,e.createElement(p.Z,{fontWeight:"semiBold",variant:"pi"},n({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(p.Z,{textColor:"neutral600"},n({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(r.x,{src:ne,position:"absolute",top:0,right:0,as:"img"}))))},O=l.default.a`
  text-decoration: none;
`,ie=()=>{const{formatMessage:n}=(0,g.Z)(),{trackUsage:s}=(0,a.useTracking)(),o=m=>{s(m)};return e.createElement(i.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(re,null),e.createElement(O,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(a.ContentBox,{title:n({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:n({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(w.Z,null),iconBackground:"primary100"})),e.createElement(O,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(a.ContentBox,{title:n({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:n({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(q.Z,null),iconBackground:"warning100"})),e.createElement(O,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(a.ContentBox,{title:n({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:n({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(_.Z,null),iconBackground:"secondary100"})),e.createElement(O,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(a.ContentBox,{title:n({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:n({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ee.Z,null),iconBackground:"alternative100"})))};var K=t(36182);const de=(0,l.default)(p.Z)`
  word-break: break-word;
`,W=({hasCreatedContentType:n,onCreateCT:s})=>{const{formatMessage:o}=(0,g.Z)();return e.createElement("div",null,e.createElement(r.x,{paddingLeft:6,paddingBottom:10},e.createElement(i.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(p.Z,{as:"h1",variant:"alpha"},o(n?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(de,{textColor:"neutral600",variant:"epsilon"},o(n?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),n?e.createElement(K.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(k.z,{size:"L",onClick:s,endIcon:e.createElement(T.Z,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};W.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},W.propTypes={hasCreatedContentType:d().bool,onCreateCT:d().func};const ce=W;var me=t(80994),pe=t(88514),ue=t(93768),ge=t(34012),fe=t(52551),he=t(93570),Ee=t(86820),ye=t(91393);const ve=(0,l.default)(pe.Z)`
  path {
    fill: #7289da !important;
  }
`,Ce=(0,l.default)(ue.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,Z=(0,l.default)(ge.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,ke=(0,l.default)(fe.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Me=(0,l.default)(he.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Be=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(Ee.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(ve,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(Ce,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(ke,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Me,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(Z,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(Z,null),alt:"career"}],Pe=(0,l.default)(me.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:n})=>n.spaces[6]};
    height: ${({theme:n})=>n.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Te=(0,l.default)(y.r)`
  row-gap: ${({theme:n})=>n.spaces[2]};
  column-gap: ${({theme:n})=>n.spaces[4]};
`,xe=()=>{const{formatMessage:n}=(0,g.Z)(),{communityEdition:s}=(0,a.useAppInfo)(),o=[...Be,{icon:e.createElement(Z,null),link:s?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(r.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(r.x,{paddingBottom:7},e.createElement(i.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(i.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(p.Z,{variant:"delta",as:"h2",id:"join-the-community"},n({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(p.Z,{textColor:"neutral600"},n({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(K.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(ye.Z,null)},n({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Te,null,o.map(({icon:m,link:f,name:x})=>e.createElement(E.P,{col:6,s:12,key:x.id},e.createElement(Pe,{size:"L",startIcon:m,variant:"tertiary",href:f,isExternal:!0},n(x))))))},Le=(0,l.default)(r.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,U=()=>{const{collectionTypes:n,singleTypes:s,isLoading:o}=(0,J.G)(),{guidedTourState:m,isGuidedTourVisible:f,isSkipped:x}=(0,a.useGuidedTour)(),A=!Q(m)&&f&&!x,{push:G}=(0,c.k6)(),M=S=>{S.preventDefault(),G("/plugins/content-type-builder/content-types/create-content-type")},B=(0,e.useMemo)(()=>{const S=De=>De.filter(Oe=>Oe.isDisplayed);return S(n).length>1||S(s).length>0},[n,s]);return o?e.createElement(a.LoadingIndicatorPage,null):e.createElement(C.A,null,e.createElement(L.Z,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},S=>e.createElement(P.q,{title:S[0]})),e.createElement(h.o,null,e.createElement(Le,null,e.createElement("img",{alt:"","aria-hidden":!0,src:X})),e.createElement(r.x,{padding:10},e.createElement(y.r,null,e.createElement(E.P,{col:8,s:12},e.createElement(ce,{onCreateCT:M,hasCreatedContentType:B}))),e.createElement(y.r,{gap:6},e.createElement(E.P,{col:8,s:12},A?e.createElement(V,null):e.createElement(ie,null)),e.createElement(E.P,{col:4,s:12},e.createElement(xe,null))))))};function Se(){const n=(0,Y.c)(U,async()=>(await t.e(8296).then(t.bind(t,66831))).HomePageEE);return n?e.createElement(n,null):null}const be=Se},45349:(R,v,t)=>{t.d(v,{A:()=>E});var e=t(2790),r=t(88972),C=t(50781);const h=(0,r.default)(C.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,y=(0,r.default)(C.x)`
  overflow-x: hidden;
`,E=({sideNav:a,children:P})=>(0,e.jsxs)(h,{hasSideNav:!!a,children:[a,(0,e.jsx)(y,{paddingBottom:10,children:P})]})},36182:(R,v,t)=>{t.d(v,{r:()=>L});var e=t(85893),r=t(53547),C=t(91393),h=t(88972),y=t(15585),E=t(63507),a=t(75515);const P=(0,h.default)(E.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:c})=>c.spaces[2]};
  pointer-events: ${({disabled:c})=>c?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:c,theme:l})=>c?l.colors.neutral600:l.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:c})=>c.colors.primary500};
  }

  &:active {
    color: ${({theme:c})=>c.colors.primary700};
  }

  ${y.BF};
`,L=r.forwardRef(({children:c,href:l,disabled:i=!1,startIcon:p,endIcon:k,isExternal:T=!0,...g},b)=>(0,e.jsxs)(P,{ref:b,href:l,disabled:i,isExternal:T,...g,children:[p,(0,e.jsx)(a.Z,{textColor:i?"neutral600":"primary600",children:c}),k,l&&!k&&T&&(0,e.jsx)(C.Z,{})]}));L.displayName="Link"},80994:(R,v,t)=>{t.d(v,{Q:()=>c});var e=t(85893),r=t(53547),C=t(88972),h=t(92577),y=t(21817),E=t(63507),a=t(11047),P=t(75515);const L=(0,C.default)(y.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${h.sg}
    &:active {
      ${h.sg}
    }
  }

  &:hover {
    ${h.yP}
  }

  &:active {
    ${h.tB}
  }

  ${h.PD}
`,c=r.forwardRef(({variant:l="default",startIcon:i,endIcon:p,disabled:k=!1,children:T,size:g="S",as:b=E.f,...I},d)=>{const u=g==="S"?2:"10px",D=4;return(0,e.jsxs)(L,{ref:d,"aria-disabled":k,size:g,variant:l,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:u,paddingLeft:D,paddingRight:D,paddingTop:u,pointerEvents:k?"none":void 0,...I,as:b||E.f,children:[i&&(0,e.jsx)(a.k,{"aria-hidden":!0,children:i}),(0,e.jsx)(P.Z,{variant:g==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:T}),p&&(0,e.jsx)(a.k,{"aria-hidden":!0,children:p})]})});c.displayName="LinkButton"}}]);
