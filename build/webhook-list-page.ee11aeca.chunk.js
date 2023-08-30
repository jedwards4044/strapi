"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[4121],{10998:(Z,u,t)=>{t.r(u),t.d(u,{default:()=>me});var e=t(53547),s=t(5504),c=t(7694),m=t(36364),g=t(46683),T=t(45349),D=t(57713),P=t(79371),k=t(15483),l=t(78549),y=t(19442),S=t(26789),U=t(50781),_=t(51541),ee=t(62009),te=t(42403),F=t(6090),i=t(62351),K=t(62779),ae=t(22996),ne=t(94487),j=t(75878),E=t(2790),V=t(88972);const w=V.default.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=V.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${w} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${w}:before {
    transform: translateX(1rem);
  }
`,oe=e.forwardRef(({label:o,onChange:h,onLabel:f="On",offLabel:d="Off",selected:x,visibleLabels:n=!1,...b},v)=>(0,E.jsx)(se,{ref:v,role:"switch","aria-checked":x,"aria-label":o,onClick:h,visibleLabels:n,type:"button",...b,children:(0,E.jsxs)(j.k,{children:[(0,E.jsxs)(w,{children:[(0,E.jsx)("span",{children:f}),(0,E.jsx)("span",{children:d})]}),n&&(0,E.jsx)(U.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:x?"success600":"danger600",children:x?f:d})]})}));var N=t(37527),le=t(81391),$=t(12978),z=t(34263),re=t(36670),ie=t(58252),de=t(86896),A=t(75336),H=t(16550);const ce=()=>{const[o,h]=(0,e.useState)(!1),[f,d]=(0,e.useState)([]),x=(0,c.v9)(m._),{formatMessage:n}=(0,de.Z)(),{formatAPIError:b}=(0,s.useAPIErrorHandler)(),v=(0,s.useNotification)();(0,s.useFocusWhenNavigate)();const{push:he}=(0,H.k6)(),{pathname:G}=(0,H.TH)(),{isLoading:ue,allowedActions:{canCreate:B,canUpdate:Q,canDelete:Y}}=(0,s.useRBAC)(x.settings.webhooks),{get:ge,post:Ee,put:fe}=(0,s.useFetchClient)(),{notifyStatus:X}=(0,g.G)(),be="webhooks",{isLoading:ve,data:C,error:O,refetch:J}=(0,A.useQuery)(be,async()=>{const{data:{data:a}}=await ge("/admin/webhooks");return a});(0,e.useEffect)(()=>{if(O){v({type:"warning",message:b(O)});return}C&&X(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[C,O,v,n,X,b]);const q=(0,A.useMutation)(async()=>{await Ee("/admin/webhooks/batch-delete",{ids:f})},{onError(a){v({type:"warning",message:b(a)}),h(!1)},onSuccess(){d([]),h(!1),J()}}),Ce=(0,A.useMutation)(async({isEnabled:a,id:r})=>{const{id:L,...I}=C.find(Le=>Le.id===r)??{},Me={...I,isEnabled:a};await fe(`/admin/webhooks/${r}`,Me)},{onError(a){v({type:"warning",message:b(a)})},onSuccess(){J()}}),xe=()=>q.mutate(),pe=a=>d(a?C.map(r=>r.id):[]),ye=(a,r)=>d(a?L=>[...L,r]:L=>L.filter(I=>I!==r)),W=a=>he(`${G}/${a}`),R=ue||ve,M=C?.length??0,p=f.length;return e.createElement(T.A,null,e.createElement(s.SettingsPageTitle,{name:"Webhooks"}),e.createElement(D.o,{"aria-busy":R},e.createElement(P.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:B&&!R&&e.createElement(s.LinkButton,{startIcon:e.createElement($.Z,null),variant:"default",to:`${G}/create`,size:"S"},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),p>0&&Y&&e.createElement(k.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:p})),e.createElement(y.z,{onClick:()=>h(!0),startIcon:e.createElement(z.Z,null),size:"L",variant:"danger-light"},n({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(S.D,null,R?e.createElement(U.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.LoadingIndicatorPage,null)):M>0?e.createElement(_.i,{colCount:5,rowCount:M+1,footer:e.createElement(ee.c,{onClick:()=>B?W("create"):{},icon:e.createElement($.Z,null)},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.h,null,e.createElement(F.Tr,null,e.createElement(i.Th,null,e.createElement(K.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:p>0&&p<M,value:p===M,onValueChange:pe})),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(ae.T,null,n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ne.p,null,C.map(a=>e.createElement(F.Tr,{key:a.id,...(0,s.onRowClick)({fn:()=>W(a.id),condition:Q})},e.createElement(i.Td,{...s.stopPropagation},e.createElement(K.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:f?.includes(a.id),onValueChange:r=>ye(r,a.id),name:"select"})),e.createElement(i.Td,null,e.createElement(l.Z,{fontWeight:"semiBold",textColor:"neutral800"},a.name)),e.createElement(i.Td,null,e.createElement(l.Z,{textColor:"neutral800"},a.url)),e.createElement(i.Td,null,e.createElement(j.k,null,e.createElement(oe,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:r=>{r.stopPropagation(),Ce.mutate({isEnabled:!a.isEnabled,id:a.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(j.k,{gap:1},Q&&e.createElement(N.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(re.Z,null),noBorder:!0}),Y&&e.createElement(N.h,{onClick:r=>{r.stopPropagation(),d([a.id]),h(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(z.Z,null),noBorder:!0}))))))):e.createElement(le.x,{icon:e.createElement(ie.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(y.z,{variant:"secondary",startIcon:e.createElement($.Z,null),onClick:()=>B?W("create"):{}},n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.ConfirmDialog,{isOpen:o,onToggleDialog:()=>h(a=>!a),onConfirm:xe,isConfirmButtonLoading:q.isLoading}))},me=()=>{const o=(0,c.v9)(m._);return e.createElement(s.CheckPagePermissions,{permissions:o.settings.webhooks.main},e.createElement(ce,null))}},15483:(Z,u,t)=>{t.d(u,{Z:()=>c});var e=t(2790),s=t(75878);const c=({startActions:m,endActions:g})=>!m&&!g?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:m}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:g})]})},62009:(Z,u,t)=>{t.d(u,{c:()=>k});var e=t(2790),s=t(88972),c=t(50781),m=t(81984),g=t(75878),T=t(78549);const D=(0,s.default)(c.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,P=(0,s.default)(c.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,k=({children:l,icon:y,...S})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(m.i,{}),(0,e.jsx)(P,{as:"button",background:"primary100",padding:5,...S,children:(0,e.jsxs)(g.k,{children:[(0,e.jsx)(D,{"aria-hidden":!0,background:"primary200",children:y}),(0,e.jsx)(c.x,{paddingLeft:3,children:(0,e.jsx)(T.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
