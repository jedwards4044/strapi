(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2282],{8884:(b,v,e)=>{"use strict";e.r(v),e.d(v,{ProvidersPage:()=>ue,default:()=>Ae});var t=e(53547),a=e(86896),n=e(5504),s=e(18721),i=e.n(s),l=e(11700),r=e.n(l),d=e(46683),m=e(45349),x=e(57713),g=e(79371),f=e(26789),c=e(51541),E=e(42403),P=e(6090),u=e(62351),y=e(78549),C=e(22996),W=e(94487),$=e(37527),Q=e(36670),I=e(75336),h=e(87561),B=e(42722);const ne={id:(0,B.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},re={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},X={id:(0,B.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,B.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ae={id:(0,B.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},se={id:(0,B.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},N={id:(0,B.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ie={id:(0,B.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:X,size:6}]],schema:h.object().shape({enabled:h.bool().required(n.translatedErrors.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:X,size:6,validations:{required:!0}}],[{intlLabel:ae,name:"key",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:ie,name:"secret",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:ne,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:se,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:h.object().shape({enabled:h.bool().required(n.translatedErrors.required),key:h.string().when("enabled",{is:!0,then:h.string().required(n.translatedErrors.required),otherwise:h.string()}),secret:h.string().when("enabled",{is:!0,then:h.string().required(n.translatedErrors.required),otherwise:h.string()}),callback:h.string().when("enabled",{is:!0,then:h.string().required(n.translatedErrors.required),otherwise:h.string()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:X,size:6,validations:{required:!0}}],[{intlLabel:ae,name:"key",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:ie,name:"secret",type:"text",placeholder:N,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,B.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:N,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,B.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,B.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ne,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:se,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:h.object().shape({enabled:h.bool().required(n.translatedErrors.required),key:h.string().when("enabled",{is:!0,then:h.string().required(n.translatedErrors.required),otherwise:h.string()}),secret:h.string().when("enabled",{is:!0,then:h.string().required(n.translatedErrors.required),otherwise:h.string()}),subdomain:h.string().when("enabled",{is:!0,then:h.string().required(n.translatedErrors.required),otherwise:h.string()}),callback:h.string().when("enabled",{is:!0,then:h.string().required(n.translatedErrors.required),otherwise:h.string()})})}},ge=async p=>{try{const{get:O}=(0,n.getFetchClient)(),{data:T}=await O((0,B.Gc)("providers"));return T}catch{throw p({type:"warning",message:{id:"notification.error"}}),new Error("error")}},he=p=>{const{put:O}=(0,n.getFetchClient)();return O((0,B.Gc)("providers"),p)};var fe=e(89734),pe=e.n(fe);const ve=p=>pe()(Object.keys(p).reduce((O,T)=>{const{icon:A,enabled:j,subdomain:F}=p[T],R=A==="envelope"?["fas","envelope"]:["fab",A];return F!==void 0?O.push({name:T,icon:R,enabled:j,subdomain:F}):O.push({name:T,icon:R,enabled:j}),O},[]),"name");var oe=e(51725),Ee=e(60881),ye=e(18189),le=e(78784),be=e(48683),xe=e(75878),Pe=e(9370),Me=e(61585),Be=e(45124),de=e(19442),Oe=e(45697),o=e.n(Oe),Le=e(94649),je=e(58885),Te=e(28469);const k=({description:p,disabled:O,intlLabel:T,error:A,name:j,onChange:F,placeholder:R,providerToEditName:Z,type:S,value:M})=>{const{formatMessage:U}=(0,a.Z)(),z=j==="noName"?`${strapi.backendURL}/api/connect/${Z}/callback`:M,K=U({id:T.id,defaultMessage:T.defaultMessage},{provider:Z,...T.values}),D=p?U({id:p.id,defaultMessage:p.defaultMessage},{provider:Z,...p.values}):"";if(S==="bool")return t.createElement(je.s,{"aria-label":j,checked:M,disabled:O,hint:D,label:K,name:j,offLabel:U({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:U({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:H=>{F({target:{name:j,value:H.target.checked}})}});const q=R?U({id:R.id,defaultMessage:R.defaultMessage},{...R.values}):"",_=A?U({id:A,defaultMessage:A}):"";return t.createElement(Te.o,{"aria-label":j,disabled:O,error:_,label:K,name:j,onChange:F,placeholder:q,type:S,value:z})};k.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},k.propTypes={description:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),disabled:o().bool,error:o().string,intlLabel:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}).isRequired,name:o().string.isRequired,onChange:o().func.isRequired,placeholder:o().shape({id:o().string.isRequired,defaultMessage:o().string.isRequired,values:o().object}),providerToEditName:o().string.isRequired,type:o().string.isRequired,value:o().oneOfType([o().bool,o().string])};const Ce=k,w=({headerBreadcrumbs:p,initialData:O,isSubmiting:T,layout:A,isOpen:j,onSubmit:F,onToggle:R,providerToEditName:Z})=>{const{formatMessage:S}=(0,a.Z)();return j?t.createElement(Ee.P,{onClose:R,labelledBy:"title"},t.createElement(ye.x,null,t.createElement(le.O,{label:p.join(", ")},p.map(M=>t.createElement(le.$,{key:M},M)))),t.createElement(Le.Formik,{onSubmit:M=>F(M),initialValues:O,validationSchema:A.schema,validateOnChange:!1},({errors:M,handleChange:U,values:z})=>t.createElement(n.Form,null,t.createElement(be.f,null,t.createElement(xe.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(Pe.r,{gap:5},A.form.map(K=>K.map(D=>t.createElement(Me.P,{key:D.name,col:D.size,xs:12},t.createElement(Ce,{...D,error:M[D.name],onChange:U,value:z[D.name],providerToEditName:Z}))))))),t.createElement(Be.m,{startActions:t.createElement(de.z,{variant:"tertiary",onClick:R,type:"button"},S({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(de.z,{type:"submit",loading:T},S({id:"global.save",defaultMessage:"Save"}))})))):null};w.defaultProps={initialData:null,providerToEditName:null},w.propTypes={headerBreadcrumbs:o().arrayOf(o().string).isRequired,initialData:o().object,layout:o().shape({form:o().arrayOf(o().array),schema:o().object}).isRequired,isOpen:o().bool.isRequired,isSubmiting:o().bool.isRequired,onSubmit:o().func.isRequired,onToggle:o().func.isRequired,providerToEditName:o().string};const Re=w,ue=()=>{const{formatMessage:p}=(0,a.Z)();(0,n.useFocusWhenNavigate)();const{notifyStatus:O}=(0,d.G)(),T=(0,I.useQueryClient)(),{trackUsage:A}=(0,n.useTracking)(),j=(0,t.useRef)(A),[F,R]=(0,t.useState)(!1),[Z,S]=(0,t.useState)(!1),[M,U]=(0,t.useState)(null),z=(0,n.useNotification)(),{lockApp:K,unlockApp:D}=(0,n.useOverlayBlocker)(),q=(0,t.useMemo)(()=>({update:oe.Z.updateProviders}),[]),{isLoading:_,allowedActions:{canUpdate:H}}=(0,n.useRBAC)(q),{isLoading:Ue,data:G,isFetching:De}=(0,I.useQuery)("get-providers",()=>ge(z),{onSuccess(){O(p({id:(0,B.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Fe=Ue||De,Se=(0,I.useMutation)(he,{async onSuccess(){await T.invalidateQueries("get-providers"),z({type:"info",message:{id:(0,B.OB)("notification.success.submit")}}),j.current("didEditAuthenticationProvider"),S(!1),ee(),D()},onError(){z({type:"warning",message:{id:"notification.error"}}),D(),S(!1)},refetchActive:!1}),V=(0,t.useMemo)(()=>ve(G),[G]),We=V.length,ce=(0,t.useMemo)(()=>{if(!M)return!1;const L=V.find(te=>te.name===M);return i()(L,"subdomain")},[V,M]),Ze=p({id:(0,B.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),ze=(0,t.useMemo)(()=>M==="email"?Y.email:ce?Y.providersWithSubdomain:Y.providers,[M,ce]),ee=()=>{R(L=>!L)},me=L=>{H&&(U(L.name),ee())},$e=async L=>{S(!0),K(),j.current("willEditAuthenticationProvider");const te={...G,[M]:L};Se.mutate({providers:te})};return t.createElement(m.A,null,t.createElement(n.SettingsPageTitle,{name:Ze}),t.createElement(x.o,null,t.createElement(g.T,{title:p({id:(0,B.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Fe||_?t.createElement(n.LoadingIndicatorPage,null):t.createElement(f.D,null,t.createElement(c.i,{colCount:3,rowCount:We+1},t.createElement(E.h,null,t.createElement(P.Tr,null,t.createElement(u.Th,null,t.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.name",defaultMessage:"Name"}))),t.createElement(u.Th,null,t.createElement(y.Z,{variant:"sigma",textColor:"neutral600"},p({id:(0,B.OB)("Providers.status"),defaultMessage:"Status"}))),t.createElement(u.Th,null,t.createElement(y.Z,{variant:"sigma"},t.createElement(C.T,null,p({id:"global.settings",defaultMessage:"Settings"})))))),t.createElement(W.p,null,V.map(L=>t.createElement(P.Tr,{key:L.name,...(0,n.onRowClick)({fn:()=>me(L),condition:H})},t.createElement(u.Td,{width:"45%"},t.createElement(y.Z,{fontWeight:"semiBold",textColor:"neutral800"},L.name)),t.createElement(u.Td,{width:"65%"},t.createElement(y.Z,{textColor:L.enabled?"success600":"danger600","data-testid":`enable-${L.name}`},L.enabled?p({id:"global.enabled",defaultMessage:"Enabled"}):p({id:"global.disabled",defaultMessage:"Disabled"}))),t.createElement(u.Td,{...n.stopPropagation},H&&t.createElement($.h,{onClick:()=>me(L),noBorder:!0,icon:t.createElement(Q.Z,null),label:"Edit"})))))))),t.createElement(Re,{initialData:G[M],isOpen:F,isSubmiting:Z,layout:ze,headerBreadcrumbs:[p({id:(0,B.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),r()(M)],onToggle:ee,onSubmit:$e,providerToEditName:M}))},Ae=()=>t.createElement(n.CheckPagePermissions,{permissions:oe.Z.readProviders},t.createElement(ue,null))},42722:(b,v,e)=>{"use strict";e.d(v,{YX:()=>s,Gc:()=>r,OB:()=>d.Z});var t=e(41609),a=e.n(t);const s=m=>Object.keys(m).reduce((x,g)=>{const f=m[g].controllers,c=Object.keys(f).reduce((E,P)=>(a()(f[P])||(E[P]=f[P]),E),{});return a()(c)||(x[g]={controllers:c}),x},{});var i=e(83086);const r=m=>`/${i.Z}/${m}`;var d=e(97961)},89881:(b,v,e)=>{var t=e(47816),a=e(99291),n=a(t);b.exports=n},69199:(b,v,e)=>{var t=e(89881),a=e(98612);function n(s,i){var l=-1,r=a(s)?Array(s.length):[];return t(s,function(d,m,x){r[++l]=i(d,m,x)}),r}b.exports=n},82689:(b,v,e)=>{var t=e(29932),a=e(97786),n=e(67206),s=e(69199),i=e(71131),l=e(7518),r=e(85022),d=e(6557),m=e(1469);function x(g,f,c){f.length?f=t(f,function(u){return m(u)?function(y){return a(y,u.length===1?u[0]:u)}:u}):f=[d];var E=-1;f=t(f,l(n));var P=s(g,function(u,y,C){var W=t(f,function($){return $(u)});return{criteria:W,index:++E,value:u}});return i(P,function(u,y){return r(u,y,c)})}b.exports=x},71131:b=>{function v(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}b.exports=v},26393:(b,v,e)=>{var t=e(33448);function a(n,s){if(n!==s){var i=n!==void 0,l=n===null,r=n===n,d=t(n),m=s!==void 0,x=s===null,g=s===s,f=t(s);if(!x&&!f&&!d&&n>s||d&&m&&g&&!x&&!f||l&&m&&g||!i&&g||!r)return 1;if(!l&&!d&&!f&&n<s||f&&i&&r&&!l&&!d||x&&i&&r||!m&&r||!g)return-1}return 0}b.exports=a},85022:(b,v,e)=>{var t=e(26393);function a(n,s,i){for(var l=-1,r=n.criteria,d=s.criteria,m=r.length,x=i.length;++l<m;){var g=t(r[l],d[l]);if(g){if(l>=x)return g;var f=i[l];return g*(f=="desc"?-1:1)}}return n.index-s.index}b.exports=a},99291:(b,v,e)=>{var t=e(98612);function a(n,s){return function(i,l){if(i==null)return i;if(!t(i))return n(i,l);for(var r=i.length,d=s?r:-1,m=Object(i);(s?d--:++d<r)&&l(m[d],d,m)!==!1;);return i}}b.exports=a},89734:(b,v,e)=>{var t=e(21078),a=e(82689),n=e(5976),s=e(16612),i=n(function(l,r){if(l==null)return[];var d=r.length;return d>1&&s(l,r[0],r[1])?r=[]:d>2&&s(r[0],r[1],r[2])&&(r=[r[0]]),a(l,t(r,1),[])});b.exports=i},78784:(b,v,e)=>{"use strict";e.d(v,{$:()=>m,O:()=>x});var t=e(2790),a=e(51682),n=e(88972),s=e(22996),i=e(75878),l=e(50781),r=e(78549);const d=(0,n.default)(i.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:g})=>g.colors.neutral500};
    }
  }
  :last-of-type ${l.x} {
    display: none;
  }
  :last-of-type ${r.Z} {
    color: ${({theme:g})=>g.colors.neutral800};
    font-weight: ${({theme:g})=>g.fontWeights.bold};
  }
`,m=({children:g})=>(0,t.jsxs)(d,{inline:!0,as:"li",children:[(0,t.jsx)(r.Z,{variant:"pi",textColor:"neutral600",children:g}),(0,t.jsx)(l.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,t.jsx)(a.Z,{})})]});m.displayName="Crumb";const x=({children:g,label:f,...c})=>(0,t.jsxs)(i.k,{...c,children:[(0,t.jsx)(s.T,{children:f}),(0,t.jsx)("ol",{"aria-hidden":!0,children:g})]});x.displayName="Breadcrumbs"},26789:(b,v,e)=>{"use strict";e.d(v,{D:()=>n});var t=e(2790),a=e(50781);const n=({children:s})=>(0,t.jsx)(a.x,{paddingLeft:10,paddingRight:10,children:s})},79371:(b,v,e)=>{"use strict";e.d(v,{T:()=>x});var t=e(2790),a=e(53547),n=e(88972);const s=c=>{const E=(0,a.useRef)(null),[P,u]=(0,a.useState)(!0),y=([C])=>{u(C.isIntersecting)};return(0,a.useEffect)(()=>{const C=E.current,W=new IntersectionObserver(y,c);return C&&W.observe(E.current),()=>{C&&W.disconnect()}},[E,c]),[E,P]};var i=e(79698);const l=(c,E)=>{const P=(0,i.W)(E);(0,a.useLayoutEffect)(()=>{const u=new ResizeObserver(P);return Array.isArray(c)?c.forEach(y=>{y.current&&u.observe(y.current)}):c.current&&u.observe(c.current),()=>{u.disconnect()}},[c,P])};var r=e(50781),d=e(75878),m=e(78549);const x=c=>{const E=(0,a.useRef)(null),[P,u]=(0,a.useState)(null),[y,C]=s({root:null,rootMargin:"0px",threshold:0});return l(y,()=>{y.current&&u(y.current.getBoundingClientRect())}),(0,a.useEffect)(()=>{E.current&&u(E.current.getBoundingClientRect())},[E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:P?.height},ref:y,children:C&&(0,t.jsx)(f,{ref:E,...c})}),!C&&(0,t.jsx)(f,{...c,sticky:!0,width:P?.width})]})};x.displayName="HeaderLayout";const g=(0,n.default)(r.x)`
  width: ${({width:c})=>c?`${c/16}rem`:void 0};
  z-index: ${({theme:c})=>c.zIndices[1]};
`,f=a.forwardRef(({navigationAction:c,primaryAction:E,secondaryAction:P,subtitle:u,title:y,sticky:C,width:W,...$},Q)=>{const I=typeof u=="string";return C?(0,t.jsx)(g,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:W,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(d.k,{justifyContent:"space-between",children:[(0,t.jsxs)(d.k,{children:[c&&(0,t.jsx)(r.x,{paddingRight:3,children:c}),(0,t.jsxs)(r.x,{children:[(0,t.jsx)(m.Z,{variant:"beta",as:"h1",...$,children:y}),I?(0,t.jsx)(m.Z,{variant:"pi",textColor:"neutral600",children:u}):u]}),P?(0,t.jsx)(r.x,{paddingLeft:4,children:P}):null]}),(0,t.jsx)(d.k,{children:E?(0,t.jsx)(r.x,{paddingLeft:2,children:E}):void 0})]})}):(0,t.jsxs)(r.x,{ref:Q,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,t.jsx)(r.x,{paddingBottom:2,children:c}):null,(0,t.jsxs)(d.k,{justifyContent:"space-between",children:[(0,t.jsxs)(d.k,{minWidth:0,children:[(0,t.jsx)(m.Z,{as:"h1",variant:"alpha",...$,children:y}),P?(0,t.jsx)(r.x,{paddingLeft:4,children:P}):null]}),E]}),I?(0,t.jsx)(m.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:u}):u]})})},45349:(b,v,e)=>{"use strict";e.d(v,{A:()=>l});var t=e(2790),a=e(88972),n=e(50781);const s=(0,a.default)(n.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:r})=>r?"auto 1fr":"1fr"};
`,i=(0,a.default)(n.x)`
  overflow-x: hidden;
`,l=({sideNav:r,children:d})=>(0,t.jsxs)(s,{hasSideNav:!!r,children:[r,(0,t.jsx)(i,{paddingBottom:10,children:d})]})},57713:(b,v,e)=>{"use strict";e.d(v,{o:()=>i});var t=e(2790),a=e(88972),n=e(50781);const s=(0,a.default)(n.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,i=({labelledBy:l="main-content-title",...r})=>(0,t.jsx)(s,{"aria-labelledby":l,as:"main",id:"main-content",tabIndex:-1,...r})}}]);
