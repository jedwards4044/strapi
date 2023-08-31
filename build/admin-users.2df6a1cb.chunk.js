"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5199],{54920:(B,d,e)=>{e.d(d,{R:()=>n});var t=e(5504),l=e(75336);function n(o={},i={}){const{id:a="",...s}=o,{get:c}=(0,t.useFetchClient)(),{data:r,isError:E,isLoading:f,refetch:P}=(0,l.useQuery)(["users",a,s],async()=>{const{data:{data:p}}=await c(`/admin/users/${a}`,{params:s});return p},i);let C=[];return a&&r?C=[r]:Array.isArray(r?.results)&&(C=r.results),{users:C,pagination:r?.pagination??null,isLoading:f,isError:E,refetch:P}}},71359:(B,d,e)=>{e.d(d,{Z:()=>E});var t=e(53547),l=e(50781),n=e(19442),o=e(5504),i=e(36002),a=e(45697),s=e.n(a),c=e(86896);const r=({displayedFilters:f})=>{const[P,C]=(0,t.useState)(!1),{formatMessage:p}=(0,c.Z)(),A=(0,t.useRef)(),L=()=>{C(O=>!O)};return t.createElement(t.Fragment,null,t.createElement(l.x,{paddingTop:1,paddingBottom:1},t.createElement(n.z,{variant:"tertiary",ref:A,startIcon:t.createElement(i.Z,null),onClick:L,size:"S"},p({id:"app.utils.filters",defaultMessage:"Filters"})),P&&t.createElement(o.FilterPopoverURLQuery,{displayedFilters:f,isVisible:P,onToggle:L,source:A})),t.createElement(o.FilterListURLQuery,{filtersSchema:f}))};r.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const E=r},61611:(B,d,e)=>{e.d(d,{W:()=>pe,Z:()=>Fe});var t=e(53547),l=e(57713),n=e(79371),o=e(15483),i=e(26789),a=e(5504),s=e(80129),c=e.n(s),r=e(86896),E=e(75336),f=e(7694),P=e(16550),C=e(54920),p=e(80902),A=e(36364),L=e(71359),O=e(19442),F=e(46948),se=e(45697),g=e.n(se);const q=({onClick:m})=>{const{formatMessage:h}=(0,r.Z)();return t.createElement(O.z,{onClick:m,startIcon:t.createElement(F.Z,null),size:"S"},h({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};q.propTypes={onClick:g().func.isRequired};var ne=e(94487),b=e(6090),X=e(62351),re=e(62779),Z=e(78549),j=e(75878),ee=e(37527),M=e(50781),fe=e(36670),Me=e(34263),le=e(25804);const oe=({canDelete:m,headers:h,entriesToDelete:R,onClickDelete:k,onSelectRow:$,withMainAction:z,withBulkActions:W,rows:I})=>{const{push:D,location:{pathname:Q}}=(0,P.k6)(),{formatMessage:T}=(0,r.Z)();return t.createElement(ne.p,null,I.map(u=>{const N=R.findIndex(S=>S===u.id)!==-1;return t.createElement(b.Tr,{key:u.id,...(0,a.onRowClick)({fn:()=>D(`${Q}/${u.id}`),condition:W})},z&&t.createElement(X.Td,{...a.stopPropagation},t.createElement(re.C,{"aria-label":T({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,le.Pp)(u.firstname,u.lastname)}),checked:N,onChange:()=>{$({name:u.id,value:!N})}})),h.map(({key:S,cellFormatter:H,name:K,...V})=>t.createElement(X.Td,{key:S},typeof H=="function"?H(u,{key:S,name:K,formatMessage:T,...V}):t.createElement(Z.Z,{textColor:"neutral800"},u[K]||"-"))),W&&t.createElement(X.Td,null,t.createElement(j.k,{justifyContent:"end"},t.createElement(ee.h,{onClick:()=>D(`${Q}/${u.id}`),label:T({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,le.Pp)(u.firstname,u.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)}),m&&t.createElement(M.x,{paddingLeft:1,...a.stopPropagation},t.createElement(ee.h,{onClick:()=>k(u.id),label:T({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,le.Pp)(u.firstname,u.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)})))))}))};oe.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},oe.propTypes={canDelete:g().bool,entriesToDelete:g().array,headers:g().array.isRequired,onClickDelete:g().func,onSelectRow:g().func,rows:g().array,withBulkActions:g().bool,withMainAction:g().bool};const he=oe;var ye=e(60881),ve=e(18189),Pe=e(48683),me=e(9370),ie=e(61585),Ce=e(45124),Oe=e(63321),Ae=e(36773),De=e(94649),Te=e(30164),Le=e(85078),J=e(87561);const ue={firstname:"",lastname:"",email:"",roles:[]},Re=[],Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Be=J.object().shape({firstname:J.string().trim().required(a.translatedErrors.required),lastname:J.string(),email:J.string().email(a.translatedErrors.email).required(a.translatedErrors.required),roles:J.array().min(1,a.translatedErrors.required).required(a.translatedErrors.required)}),Ie={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Ee=({onSuccess:m,onToggle:h})=>{const[R,k]=(0,t.useState)("create"),[$,z]=(0,t.useState)(!1),[W,I]=(0,t.useState)(null),{formatMessage:D}=(0,r.Z)(),Q=(0,a.useNotification)(),{lockApp:T,unlockApp:u}=(0,a.useOverlayBlocker)(),{post:N}=(0,a.useFetchClient)(),S=(0,p.c)(Re,async()=>(await e.e(9329).then(e.bind(e,99329))).ROLE_LAYOUT,{combine(v,x){return[...v,x]},defaultValue:[]}),H=(0,p.c)(ue,async()=>(await e.e(9329).then(e.bind(e,99329))).FORM_INITIAL_VALUES,{combine(v,x){return{...v,...x}},defaultValue:ue}),K=(0,p.c)(Te.A,async()=>(await e.e(566).then(e.bind(e,20566))).MagicLinkEE),V=(0,E.useMutation)(v=>N("/admin/users",v),{async onSuccess({data:v}){I(v.data.registrationToken),await m(),ae(),z(!1)},onError(v){throw z(!1),Q({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),v},onSettled(){u()}}),w=D({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),te=async(v,{setErrors:x})=>{T(),z(!0);try{await V.mutateAsync(v)}catch(G){u(),G?.response?.data?.error.message==="Email already taken"&&x({email:G.response.data.error.message})}},ae=()=>{y?k(y):h()},{buttonSubmitLabel:_,isDisabled:Y,next:y}=Ie[R],be=R==="create"?t.createElement(O.z,{type:"submit",loading:$},D(_)):t.createElement(O.z,{type:"button",loading:$,onClick:h},D(_));return K?t.createElement(ye.P,{onClose:h,labelledBy:"title"},t.createElement(ve.x,null,t.createElement(Oe.O,{label:w},t.createElement(Ae.$,{isCurrent:!0},w))),t.createElement(De.Formik,{enableReinitialize:!0,initialValues:H,onSubmit:te,validationSchema:Be,validateOnChange:!1},({errors:v,handleChange:x,values:G})=>t.createElement(a.Form,null,t.createElement(Pe.f,null,t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:6},R!=="create"&&t.createElement(K,{registrationToken:W}),t.createElement(M.x,null,t.createElement(Z.Z,{variant:"beta",as:"h2"},D({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(M.x,{paddingTop:4},t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(me.r,{gap:5},Ue.map(ce=>ce.map(U=>t.createElement(ie.P,{key:U.name,...U.size},t.createElement(a.GenericInput,{...U,disabled:Y,error:v[U.name],onChange:x,value:G[U.name]})))))))),t.createElement(M.x,null,t.createElement(Z.Z,{variant:"beta",as:"h2"},D({id:"global.roles",defaultMessage:"User's role"})),t.createElement(M.x,{paddingTop:4},t.createElement(me.r,{gap:5},t.createElement(ie.P,{col:6,xs:12},t.createElement(Le.Z,{disabled:Y,error:v.roles,onChange:x,value:G.roles})),S.map(ce=>ce.map(U=>t.createElement(ie.P,{key:U.name,...U.size},t.createElement(a.GenericInput,{...U,disabled:Y,onChange:x,value:G[U.name]}))))))))),t.createElement(Ce.m,{startActions:t.createElement(O.z,{variant:"tertiary",onClick:h,type:"button"},D({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:be})))):null};Ee.propTypes={onToggle:g().func.isRequired,onSuccess:g().func.isRequired};const Se=Ee,de=({pagination:m})=>t.createElement(M.x,{paddingTop:4},t.createElement(j.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.PageSizeURLQuery,null),t.createElement(a.PaginationURLQuery,{pagination:m})));de.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},de.propTypes={pagination:g().shape({page:g().number,pageCount:g().number,pageSize:g().number,total:g().number})};const xe=de,We=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Ke=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:m},{formatMessage:h}){return t.createElement(Z.Z,{textColor:"neutral800"},m.map(R=>h({id:`Settings.permissions.users.${R.code}`,defaultMessage:R.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:m},{formatMessage:h}){return t.createElement(j.k,null,t.createElement(a.Status,{isActive:m,variant:m?"success":"danger"}),t.createElement(Z.Z,{textColor:"neutral800"},h({id:m?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:m?"Active":"Inactive"})))}}],ge=["ee","license-limit-info"],pe=()=>{const{post:m}=(0,a.useFetchClient)(),{formatAPIError:h}=(0,a.useAPIErrorHandler)(),[R,k]=(0,t.useState)(!1),$=(0,f.v9)(A._),{allowedActions:{canCreate:z,canDelete:W,canRead:I}}=(0,a.useRBAC)($.settings.users),D=(0,E.useQueryClient)(),Q=(0,a.useNotification)(),{formatMessage:T}=(0,r.Z)(),{search:u}=(0,P.TH)();(0,a.useFocusWhenNavigate)();const{users:N,pagination:S,isError:H,isLoading:K,refetch:V}=(0,C.R)(c().parse(u,{ignoreQueryPrefix:!0}),{enabled:I}),w=(0,p.c)(q,async()=>(await e.e(5833).then(e.bind(e,85833))).CreateActionEE),te=Ke.map(y=>({...y,metadatas:{...y.metadatas,label:T(y.metadatas.label)}})),ae=T({id:"global.users",defaultMessage:"Users"}),_=()=>{k(y=>!y)},Y=(0,E.useMutation)(async y=>{await m("/admin/users/batch-delete",{ids:y})},{async onSuccess(){await V(),await D.refetchQueries(ge)},onError(y){Q({type:"warning",message:{id:"notification.error",message:h(y),defaultMessage:"An error occured"}})}});return w?t.createElement(l.o,{"aria-busy":K},t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(n.T,{primaryAction:z&&t.createElement(w,{onClick:_}),title:ae,subtitle:T({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),I&&t.createElement(o.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.SearchURLQuery,{label:T({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ae})}),t.createElement(L.Z,{displayedFilters:We}))}),t.createElement(i.D,{canRead:I},!I&&t.createElement(a.NoPermissions,null),H&&t.createElement("div",null,"TODO: An error occurred"),I&&t.createElement(t.Fragment,null,t.createElement(a.DynamicTable,{contentType:"Users",isLoading:K,onConfirmDeleteAll:Y.mutateAsync,onConfirmDelete:y=>Y.mutateAsync([y]),headers:te,rows:N,withBulkActions:!0,withMainAction:W},t.createElement(he,{canDelete:W,headers:te,rows:N,withBulkActions:!0,withMainAction:W})),S&&t.createElement(xe,{pagination:S}))),R&&t.createElement(Se,{onSuccess:async()=>{await V(),await D.refetchQueries(ge)},onToggle:_})):null},Fe=()=>{const m=(0,p.c)(pe,async()=>(await e.e(5481).then(e.bind(e,17403))).UserListPageEE);return m?t.createElement(m,null):null}},87901:(B,d,e)=>{e.r(d),e.d(d,{default:()=>s});var t=e(53547),l=e(5504),n=e(7694),o=e(36364),i=e(61611);const s=()=>{const c=(0,n.v9)(o._);return t.createElement(l.CheckPagePermissions,{permissions:c.settings.users.main},t.createElement(i.Z,null))}},6324:(B,d,e)=>{e.d(d,{Z:()=>r});var t=e(53547),l=e(37527),n=e(5504),o=e(70780),i=e(45697),a=e.n(i),s=e(86896);const c=({children:E,target:f})=>{const P=(0,n.useNotification)(),{formatMessage:C}=(0,s.Z)(),{copy:p}=(0,n.useClipboard)(),A=C({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),L=async()=>{await p(f)&&P({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(n.ContentBox,{endAction:t.createElement(l.h,{label:A,noBorder:!0,icon:t.createElement(o.Z,null),onClick:L}),title:f,titleEllipsis:!0,subtitle:E,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};c.propTypes={children:a().oneOfType([a().element,a().string]).isRequired,target:a().string.isRequired};const r=c},30164:(B,d,e)=>{e.d(d,{A:()=>s});var t=e(53547),l=e(45697),n=e.n(l),o=e(86896),i=e(95651),a=e(6324);const s=({registrationToken:c})=>{const{formatMessage:r}=(0,o.Z)(),E=`${window.location.origin}${i.Z}auth/register?registrationToken=${c}`;return t.createElement(a.Z,{target:E},r({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:n().string}},85078:(B,d,e)=>{e.d(d,{Z:()=>L});var t=e(53547),l=e(50614),n=e(473),o=e(5504),i=e(64518),a=e(45697),s=e.n(a),c=e(86896),r=e(75336),E=e(88972);const f=(0,E.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,P=E.default.div`
  animation: ${f} 2s infinite linear;
`,C=()=>t.createElement(P,null,t.createElement(i.Z,null)),p=async()=>{const{get:O}=(0,o.getFetchClient)(),{data:F}=await O("/admin/roles");return F.data},A=({disabled:O,error:F,onChange:se,value:g})=>{const{status:q,data:ne}=(0,r.useQuery)(["roles"],p,{staleTime:5e4}),{formatMessage:b}=(0,c.Z)(),X=F?b({id:F,defaultMessage:F}):"",re=b({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),Z=b({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),j=b({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ee=q==="loading"?t.createElement(C,null):void 0;return t.createElement(l.P,{id:"roles",disabled:O,error:X,hint:Z,label:re,name:"roles",onChange:M=>{se({target:{name:"roles",value:M}})},placeholder:j,multi:!0,startIcon:ee,value:g.map(M=>M.toString()),withTags:!0,required:!0},(ne||[]).map(M=>t.createElement(n.W,{key:M.id,value:M.id.toString()},b({id:`global.${M.code}`,defaultMessage:M.name}))))};A.defaultProps={disabled:!1,error:void 0},A.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const L=A},15483:(B,d,e)=>{e.d(d,{Z:()=>n});var t=e(2790),l=e(75878);const n=({startActions:o,endActions:i})=>!o&&!i?null:(0,t.jsxs)(l.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(l.k,{gap:2,wrap:"wrap",children:o}),(0,t.jsx)(l.k,{gap:2,shrink:0,wrap:"wrap",children:i})]})},63321:(B,d,e)=>{e.d(d,{O:()=>E});var t=e(85893),l=e(53547),n=e(45697),o=e(88972),i=e(41580),a=e(75515);const s=()=>(0,t.jsx)(i.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(a.Z,{variant:"pi",textColor:"neutral500",children:"/"})});s.displayName="Divider";var c=e(11047);const r=(0,o.default)(c.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:f})=>`calc(-1*${f.spaces[2]})`};
  }
`,E=({label:f,children:P,...C})=>{const p=l.Children.toArray(P);return(0,t.jsx)(i.x,{"aria-label":f,...C,children:(0,t.jsx)(r,{as:"ol",horizontal:!0,children:l.Children.map(p,(A,L)=>{const O=p.length>1&&L+1<p.length;return(0,t.jsxs)(c.k,{inline:!0,as:"li",children:[A,O&&(0,t.jsx)(s,{})]})})})})};E.displayName="Breadcrumbs",E.propTypes={children:n.oneOfType([n.arrayOf(n.node),n.node]).isRequired,label:n.string.isRequired}},36773:(B,d,e)=>{e.d(d,{$:()=>a});var t=e(85893),l=e(53547),n=e(45697),o=e(41580),i=e(75515);const a=({children:s,isCurrent:c,...r})=>(0,t.jsx)(o.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(i.Z,{variant:"pi",textColor:"neutral800",fontWeight:c?"bold":"normal","aria-current":c,...r,children:s})});a.displayName="Crumb",a.defaultProps={isCurrent:!1},a.propTypes={children:n.node.isRequired,isCurrent:n.bool}}}]);