"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9514],{47670:(st,v,t)=>{t.r(v),t.d(v,{default:()=>X});var e=t(53547),R=t(45349),B=t(57713),W=t(79371),z=t(19442),I=t(26789),r=t(5504),O=t(60793),h=t(8675),$=t(18446),G=t.n($),P=t(45697),d=t.n(P),y=t(86896),b=t(4396),c=t(18206),o=t(93593),F=t(50781),H=t(9370),E=t(61585),p=t(50614),C=t(473),D=t(11727);const Z=({sort:s="",pageSize:l=10,onChange:n})=>{const{formatMessage:i}=(0,y.Z)();return e.createElement(F.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(H.r,{gap:4},e.createElement(E.P,{s:12,col:6},e.createElement(p.P,{label:i({id:(0,o.Z)("config.entries.title"),defaultMessage:"Entries per page"}),hint:i({id:(0,o.Z)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:a=>n({target:{name:"pageSize",value:a}}),name:"pageSize",value:l},D.ay.map(a=>e.createElement(C.W,{key:a,value:a},a)))),e.createElement(E.P,{s:12,col:6},e.createElement(p.P,{label:i({id:(0,o.Z)("config.sort.title"),defaultMessage:"Default sort order"}),hint:i({id:(0,o.Z)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:a=>n({target:{name:"sort",value:a}}),name:"sort",value:s,"test-sort":s,"data-testid":"sort-select"},D.Fo.map(a=>e.createElement(C.W,{"data-testid":`sort-option-${a.value}`,key:a.key,value:a.value},i({id:(0,o.Z)(a.key),defaultMessage:`${a.value}`})))))))};Z.propTypes={sort:d().string.isRequired,pageSize:d().number.isRequired,onChange:d().func.isRequired};const M=`${c.Z}/ON_CHANGE`,S=`${c.Z}/SET_LOADED`,j=({name:s,value:l})=>({type:M,keys:s,value:l}),x=()=>({type:S}),m={initialData:{},modifiedData:{}},L=s=>({...m,initialData:s,modifiedData:s});var U=t(18172),V=t(27361),Y=t.n(V),J=t(36968),K=t.n(J);const Q=(s=m,l)=>(0,U.default)(s,n=>{switch(l.type){case M:{K()(n,["modifiedData",...l.keys.split(".")],l.value);break}case S:{const i=L(Y()(n,["modifiedData"],{}));n.initialData=i.initialData,n.modifiedData=i.modifiedData;break}default:return n}}),T=({config:s})=>{const{trackUsage:l}=(0,r.useTracking)(),{formatMessage:n}=(0,y.Z)(),i=(0,r.useNotification)(),{mutateConfig:a}=(0,b.Z)(),{isLoading:A}=a,[k,w]=(0,e.useState)(!1),f=()=>w(g=>!g),[q,N]=(0,e.useReducer)(Q,m,()=>L(s)),{initialData:_,modifiedData:u}=q,tt=g=>{g.preventDefault(),f()},et=async()=>{l("willEditMediaLibraryConfig"),await a.mutateAsync(u),f(),N(x()),i({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},at=({target:{name:g,value:nt}})=>{N(j({name:g,value:nt}))};return(0,r.useFocusWhenNavigate)(),e.createElement(R.A,null,e.createElement(B.o,{"aria-busy":A},e.createElement("form",{onSubmit:tt},e.createElement(W.T,{navigationAction:e.createElement(r.Link,{startIcon:e.createElement(O.Z,null),to:`/plugins/${c.Z}`,id:"go-back"},n({id:(0,o.Z)("config.back"),defaultMessage:"Back"})),primaryAction:e.createElement(z.z,{size:"S",startIcon:e.createElement(h.Z,null),disabled:G()(u,_),type:"submit"},n({id:"global.save",defaultMessage:"Save"})),subtitle:n({id:(0,o.Z)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:n({id:(0,o.Z)("config.title"),defaultMessage:"Configure the view - Media Library"})}),e.createElement(I.D,null,e.createElement(Z,{"data-testid":"settings",pageSize:u.pageSize||"",sort:u.sort||"",onChange:at})),e.createElement(r.ConfirmDialog,{bodyText:{id:(0,o.Z)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(h.Z,null),isConfirmButtonLoading:A,isOpen:k,onToggleDialog:f,onConfirm:et,variantRightButton:"success-light"}))))};T.propTypes={config:d().shape({pageSize:d().number,sort:d().string}).isRequired};const X=T}}]);
