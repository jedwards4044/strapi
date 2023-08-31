"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2812],{54920:(A,y,t)=>{t.d(y,{R:()=>c});var e=t(5504),s=t(75336);function c(f={},L={}){const{id:p="",...d}=f,{get:C}=(0,e.useFetchClient)(),{data:E,isError:T,isLoading:h,refetch:R}=(0,s.useQuery)(["users",p,d],async()=>{const{data:{data:D}}=await C(`/admin/users/${p}`,{params:d});return D},L);let M=[];return p&&E?M=[E]:Array.isArray(E?.results)&&(M=E.results),{users:M,pagination:E?.pagination??null,isLoading:h,isError:T,refetch:R}}},71359:(A,y,t)=>{t.d(y,{Z:()=>T});var e=t(53547),s=t(50781),c=t(19442),f=t(5504),L=t(36002),p=t(45697),d=t.n(p),C=t(86896);const E=({displayedFilters:h})=>{const[R,M]=(0,e.useState)(!1),{formatMessage:D}=(0,C.Z)(),S=(0,e.useRef)(),U=()=>{M(b=>!b)};return e.createElement(e.Fragment,null,e.createElement(s.x,{paddingTop:1,paddingBottom:1},e.createElement(c.z,{variant:"tertiary",ref:S,startIcon:e.createElement(L.Z,null),onClick:U,size:"S"},D({id:"app.utils.filters",defaultMessage:"Filters"})),R&&e.createElement(f.FilterPopoverURLQuery,{displayedFilters:h,isVisible:R,onToggle:U,source:S})),e.createElement(f.FilterListURLQuery,{filtersSchema:h}))};E.propTypes={displayedFilters:d().arrayOf(d().shape({name:d().string.isRequired,metadatas:d().shape({label:d().string}),fieldSchema:d().shape({type:d().string})})).isRequired};const T=E},67220:(A,y,t)=>{t.r(y),t.d(y,{default:()=>Le});var e=t(53547),s=t(5504),c=t(7694),f=t(36364),L=t(45349),p=t(26789),d=t(50781),C=t(57713),E=t(79371),T=t(15483),h=t(86896),R=t(71359),M=t(75336),D=t(16550),S=t(54920);const b=({canReadAuditLogs:a,canReadUsers:m})=>{const{get:g}=(0,s.useFetchClient)(),{search:i}=(0,D.TH)(),u=(0,s.useNotification)(),[{query:l}]=(0,s.useQueryParams)(),n={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:P=>u({type:"warning",message:P.message})},{users:r,isError:v,isLoading:O}=(0,S.R)({},{...n,enabled:m,staleTime:2*(1e3*60)}),{data:x,isLoading:j,isError:W}=(0,M.useQuery)(["auditLogs",i],async()=>{const{data:P}=await g("/admin/audit-logs",{params:l});return P},{...n,enabled:a});return{auditLogs:x,users:r,isLoading:O||j,hasError:W||v}};var w=t(60881),k=t(18189),q=t(48683),_=t(63321),ee=t(36773),te=t(45697),o=t.n(te),ae=t(23855);const Q=()=>{const{formatDate:a}=(0,h.Z)();return g=>{const i=(0,ae.Z)(g),u=a(i,{dateStyle:"long"}),l=a(i,{timeStyle:"medium",hourCycle:"h24"});return`${u}, ${l}`}};var B=t(75878),se=t(28809),I=t(78549),ne=t(9370),oe=t(91132);const z={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},Z=a=>z[a]||a,H=({actionLabel:a,actionName:m})=>e.createElement(B.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(I.Z,{textColor:"neutral600",variant:"sigma"},a),e.createElement(I.Z,{textColor:"neutral600"},m));H.propTypes={actionLabel:o().string.isRequired,actionName:o().string.isRequired};const F=H,N=({status:a,data:m,formattedDate:g})=>{const{formatMessage:i}=(0,h.Z)();if(a==="loading")return e.createElement(B.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(se.a,null,"Loading content..."));const{action:u,user:l,payload:n}=m;return e.createElement(e.Fragment,null,e.createElement(d.x,{marginBottom:3},e.createElement(I.Z,{variant:"delta",id:"title"},i({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(ne.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(F,{actionLabel:i({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:i({id:`Settings.permissions.auditLogs.${u}`,defaultMessage:Z(u)},{model:n?.model})}),e.createElement(F,{actionLabel:i({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:g}),e.createElement(F,{actionLabel:i({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:l?.displayName||"-"}),e.createElement(F,{actionLabel:i({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:l?.id.toString()||"-"})),e.createElement(oe.V,{value:JSON.stringify(n,null,2),disabled:!0,label:i({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};N.defaultProps={data:{}},N.propTypes={status:o().oneOf(["idle","loading","error","success"]).isRequired,data:o().shape({action:o().string,date:o().string,payload:o().object,user:o().object}),formattedDate:o().string.isRequired};const ie=N,J=({handleClose:a,logId:m})=>{const{get:g}=(0,s.useFetchClient)(),i=(0,s.useNotification)(),u=async O=>{const{data:x}=await g(`/admin/audit-logs/${O}`);if(!x)throw new Error("Audit log not found");return x},{data:l,status:n}=(0,M.useQuery)(["audit-log",m],()=>u(m),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),a()}}),r=Q(),v=l?r(l.date):"";return e.createElement(w.P,{onClose:a,labelledBy:"title"},e.createElement(k.x,null,e.createElement(_.O,{label:v,id:"title"},e.createElement(ee.$,{isCurrent:!0},v))),e.createElement(q.f,null,e.createElement(ie,{status:n,data:l,formattedDate:v})))};J.propTypes={handleClose:o().func.isRequired,logId:o().string.isRequired};const re=J,K=({pagination:a})=>e.createElement(d.x,{paddingTop:4},e.createElement(B.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(s.PageSizeURLQuery,null),e.createElement(s.PaginationURLQuery,{pagination:a})));K.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},K.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};const le=K;var de=t(94487),me=t(6090),Y=t(62351),ue=t(37527),ce=t(2953);const $=({headers:a,rows:m,onOpenModal:g})=>{const{formatMessage:i}=(0,h.Z)(),u=Q(),l=({type:n,value:r,model:v})=>n==="date"?u(r):n==="action"?i({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:Z(r)},{model:v}):r||"-";return e.createElement(de.p,null,m.map(n=>e.createElement(me.Tr,{key:n.id,...(0,s.onRowClick)({fn:()=>g(n.id)})},a.map(({key:r,name:v,cellFormatter:O})=>e.createElement(Y.Td,{key:r},e.createElement(I.Z,{textColor:"neutral800"},l({type:r,value:O?O(n[v]):n[v],model:n.payload?.model})))),e.createElement(Y.Td,{...s.stopPropagation},e.createElement(B.k,{justifyContent:"end"},e.createElement(ue.h,{onClick:()=>g(n.id),"aria-label":i({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${n.action} action`}),noBorder:!0,icon:e.createElement(ce.Z,null)}))))))};$.defaultProps={rows:[]},$.propTypes={headers:o().array.isRequired,rows:o().array,onOpenModal:o().func.isRequired};const ge=$;var pe=t(63122),ye=t(85612);const V=({value:a,options:m,onChange:g})=>{const{formatMessage:i}=(0,h.Z)(),u=i({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(pe.hQ,{"aria-label":u,value:a,onChange:g},m.map(({label:l,customValue:n})=>e.createElement(ye.O,{key:n,value:n},l)))};V.defaultProps={value:null},V.propTypes={value:o().string,options:o().arrayOf(o().shape({label:o().string.isRequired,customValue:o().string.isRequired}).isRequired).isRequired,onChange:o().func.isRequired};const G=V,X=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],fe=({formatMessage:a,users:m,canReadUsers:g})=>{const i=Object.keys(z).map(l=>({label:a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:Z(l)},{model:void 0}),customValue:l})),u=[{name:"action",metadatas:{customOperators:X,label:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:i,customInput:G},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(g&&m){const l=r=>r.username?r.username:r.firstname&&r.lastname?a({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:r.firstname,lastname:r.lastname}):r.email,n=m.map(r=>({label:l(r),customValue:r.id.toString()}));return[...u,{name:"user",metadatas:{customOperators:X,label:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:n,customInput:G},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return u},Ee=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:a=>a?a.displayName:""}],he=()=>{const{formatMessage:a}=(0,h.Z)(),m=(0,c.v9)(f._),{allowedActions:{canRead:g,canReadUsers:i}}=(0,s.useRBAC)({...m.settings.auditLogs,readUsers:m.settings.users.read}),[{query:u},l]=(0,s.useQueryParams)(),{auditLogs:n,users:r,isLoading:v,hasError:O}=b({canReadAuditLogs:g,canReadUsers:i});(0,s.useFocusWhenNavigate)();const x=fe({formatMessage:a,users:r,canReadUsers:i}),j=a({id:"global.auditLogs",defaultMessage:"Audit Logs"}),W=Ee.map(P=>({...P,metadatas:{...P.metadatas,label:a(P.metadatas.label)}}));return O?e.createElement(L.A,null,e.createElement(p.D,null,e.createElement(d.x,{paddingTop:8},e.createElement(s.AnErrorOccurred,null)))):e.createElement(C.o,{"aria-busy":v},e.createElement(s.SettingsPageTitle,{name:j}),e.createElement(E.T,{title:j,subtitle:a({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(T.Z,{startActions:e.createElement(R.Z,{displayedFilters:x})}),e.createElement(p.D,{canRead:g},e.createElement(s.DynamicTable,{contentType:"Audit logs",headers:W,rows:n?.results||[],withBulkActions:!0,isLoading:v},e.createElement(ge,{headers:W,rows:n?.results||[],onOpenModal:P=>l({id:P})})),e.createElement(le,{pagination:n?.pagination})),u?.id&&e.createElement(re,{handleClose:()=>l({id:null},"remove"),logId:u.id}))},Le=()=>{const a=(0,c.v9)(f._);return e.createElement(s.CheckPagePermissions,{permissions:a.settings.auditLogs.main},e.createElement(he,null))}},85612:(A,y,t)=>{t.d(y,{O:()=>s});var e=t(63122);const s=e.Wx},15483:(A,y,t)=>{t.d(y,{Z:()=>c});var e=t(2790),s=t(75878);const c=({startActions:f,endActions:L})=>!f&&!L?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:f}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:L})]})},63321:(A,y,t)=>{t.d(y,{O:()=>T});var e=t(85893),s=t(53547),c=t(45697),f=t(88972),L=t(41580),p=t(75515);const d=()=>(0,e.jsx)(L.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(p.Z,{variant:"pi",textColor:"neutral500",children:"/"})});d.displayName="Divider";var C=t(11047);const E=(0,f.default)(C.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:h})=>`calc(-1*${h.spaces[2]})`};
  }
`,T=({label:h,children:R,...M})=>{const D=s.Children.toArray(R);return(0,e.jsx)(L.x,{"aria-label":h,...M,children:(0,e.jsx)(E,{as:"ol",horizontal:!0,children:s.Children.map(D,(S,U)=>{const b=D.length>1&&U+1<D.length;return(0,e.jsxs)(C.k,{inline:!0,as:"li",children:[S,b&&(0,e.jsx)(d,{})]})})})})};T.displayName="Breadcrumbs",T.propTypes={children:c.oneOfType([c.arrayOf(c.node),c.node]).isRequired,label:c.string.isRequired}},36773:(A,y,t)=>{t.d(y,{$:()=>p});var e=t(85893),s=t(53547),c=t(45697),f=t(41580),L=t(75515);const p=({children:d,isCurrent:C,...E})=>(0,e.jsx)(f.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)(L.Z,{variant:"pi",textColor:"neutral800",fontWeight:C?"bold":"normal","aria-current":C,...E,children:d})});p.displayName="Crumb",p.defaultProps={isCurrent:!1},p.propTypes={children:c.node.isRequired,isCurrent:c.bool}}}]);