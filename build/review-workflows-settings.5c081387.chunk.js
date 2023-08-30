(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8155],{86978:(C,v,e)=>{"use strict";e.d(v,{$k:()=>T,FT:()=>h,Nj:()=>x,Ot:()=>i,QM:()=>l,lv:()=>d,sN:()=>u,uL:()=>k,x4:()=>S});var t=e(20468);const u="settings_review-workflows",l="Settings/Review_Workflows/SET_WORKFLOWS",S="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",i="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",x="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",T="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",d={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},h=t.W.colors.primary600,k={STAGE:"stage"}},52258:(C,v,e)=>{"use strict";e.d(v,{n:()=>l});var t=e(5504),u=e(75336);function l(S={}){const{id:i="",...x}=S,T={populate:"stages"},{get:d}=(0,t.useFetchClient)(),{data:h,isLoading:k,status:b,refetch:B}=(0,u.useQuery)(["review-workflows","workflows",i],async()=>{try{const{data:{data:o}}=await d(`/admin/review-workflows/workflows/${i}`,{params:{...T,...x}});return o}catch{return null}});let n=[];return i&&h?n=[h]:Array.isArray(h)&&(n=h),{workflows:n,isLoading:k,status:b,refetch:B}}},38268:(C,v,e)=>{"use strict";e.r(v),e.d(v,{default:()=>Ze});var t=e(53547),u=e(45349),l=e(57713),S=e(79371),i=e(19442),x=e(26789),T=e(28809),d=e(5504),h=e(8675),k=e(94649),b=e(86896),B=e(75336),n=e(7694),o=e(52713);function y(a,r){const s=(0,n.oR)();(0,t.useEffect)(()=>{s.injectReducer(a,r)},[s,a,r])}var c=e(86978);function D({status:a,data:r}){return{type:c.QM,payload:{status:a,workflows:r}}}function K(a){return{type:c.x4,payload:{stageId:a}}}function G(a={}){return{type:c.Ot,payload:a}}function $(a,r){return{type:c.Nj,payload:{stageId:a,...r}}}function U(a,r){return{type:c.$k,payload:{newIndex:r,oldIndex:a}}}var m=e(75878),I=e(78549),O=e(21514),X=e(45697),w=e.n(X),F=e(88972);const re=(0,F.default)(m.k)`
  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`;function oe({name:a}){return t.createElement(m.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,d.pxToRem)(300)},t.createElement(re,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(O.Z,{width:`${8/16}rem`})),t.createElement(I.Z,{fontWeight:"bold"},a))}oe.propTypes={name:w().string.isRequired};var P=e(50781),ne=e(59533);const Y=(0,F.default)(ne.Z)`
  > circle {
    fill: ${({theme:a})=>a.colors.neutral150};
  }
  > path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,ce=(0,F.default)(P.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:a})=>a.spaces[6]};
    width: ${({theme:a})=>a.spaces[6]};

    > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:a})=>a.colors.primary600} !important;
    ${I.Z} {
      color: ${({theme:a})=>a.colors.primary600} !important;
    }

    ${Y} {
      > circle {
        fill: ${({theme:a})=>a.colors.primary600};
      }
      > path {
        fill: ${({theme:a})=>a.colors.neutral100};
      }
    }
  }

  &:active {
    ${I.Z} {
      color: ${({theme:a})=>a.colors.primary600};
    }

    ${Y} {
      > circle {
        fill: ${({theme:a})=>a.colors.primary600};
      }
      > path {
        fill: ${({theme:a})=>a.colors.neutral100};
      }
    }
  }
`;function se({children:a,...r}){return t.createElement(ce,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...r},t.createElement(m.k,{gap:2},t.createElement(Y,{"aria-hidden":!0}),t.createElement(I.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},a)))}se.propTypes={children:w().node.isRequired};var ue=e(22996),le=e(97104),ie=e(27375),J=e(37527),Ce=e(37362),Te=e(9370),he=e(61585),De=e(28469),Ee=e(47338),We=e(34263),Oe=e(5660),Me=e(61080),Ae=e(21440),Re=e(44949),ge=e(5318);const be=(0,ge.s)();function Pe(){return t.createElement(P.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function we({id:a,index:r,canDelete:s,canReorder:M,isOpen:E=!1,stagesCount:f}){const g=p=>`${p+1} of ${f}`,W=p=>{z(A({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:R.value,position:g(p)}))},N=p=>{z(A({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:R.value,position:g(p)}))},pe=()=>{z(A({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:R.value}))},Z=(p,ae)=>{z(A({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:R.value,position:g(p)})),Q(U(ae,p))},[de,z]=t.useState(null),{formatMessage:A}=(0,b.Z)(),{trackUsage:_}=(0,d.useTracking)(),Q=(0,n.I0)(),[V,fe]=t.useState(E),[R,ve]=(0,k.useField)(`stages.${r}.name`),[j,ee]=(0,k.useField)(`stages.${r}.color`),[{handlerId:L,isDragging:te,handleKeyDown:H},ze,Qe,Ve,xe]=(0,Ae.Y9)(M,{index:r,item:{name:R.value},onGrabItem:W,onDropItem:N,onMoveItem:Z,onCancel:pe,type:c.uL.STAGE}),He=(0,Re.FE)(ze,Qe),Xe=be.map(({hex:p,name:ae})=>({value:p,label:A({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:ae}),color:p}));t.useEffect(()=>{xe((0,Me.rX)(),{captureDraggingState:!1})},[xe,r]);const{themeColorName:Ye}=j.value?(0,ge.k)(j.value):{};return t.createElement(P.x,{ref:He},de&&t.createElement(ue.T,{"aria-live":"assertive"},de),te?t.createElement(Pe,null):t.createElement(le.U,{size:"S",variant:"primary",onToggle:()=>{fe(!V),V||_("willEditStage")},expanded:V,shadow:"tableShadow"},t.createElement(ie.B,{title:R.value,togglePosition:"left",action:t.createElement(m.k,null,s&&t.createElement(J.h,{background:"transparent",icon:t.createElement(We.Z,null),label:A({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>Q(K(a))}),t.createElement(J.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":L,ref:Ve,label:A({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:p=>p.stopPropagation(),onKeyDown:H},t.createElement(Oe.Z,null)))}),t.createElement(Ce.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(Te.r,{gap:4},t.createElement(he.P,{col:6},t.createElement(De.o,{...R,id:R.name,label:A({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:ve.error??!1,onChange:p=>{R.onChange(p),Q($(a,{name:p.target.value}))},required:!0})),t.createElement(he.P,{col:6},t.createElement(Ee.q4,{error:ee?.error??!1,id:j.name,required:!0,label:A({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:p=>{j.onChange({target:{value:p}}),Q($(a,{color:p}))},value:j.value.toUpperCase(),startIcon:t.createElement(m.k,{as:"span",height:2,background:j.value,borderColor:Ye==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},Xe.map(({value:p,label:ae,color:ke})=>{const{themeColorName:Je}=(0,ge.k)(ke);return t.createElement(Ee.ag,{value:p,key:p,startIcon:t.createElement(m.k,{as:"span",height:2,background:ke,borderColor:Je==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},ae)})))))))}we.propTypes=w().shape({id:w().number.isRequired,color:w().string.isRequired,canDelete:w().bool.isRequired,canReorder:w().bool.isRequired,stagesCount:w().number.isRequired}).isRequired;const Ie=(0,F.default)(P.x)`
  position: relative;
`,$e=(0,F.default)(P.x)`
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
`;function me({stages:a}){const{formatMessage:r}=(0,b.Z)(),s=(0,n.I0)(),{trackUsage:M}=(0,d.useTracking)();return t.createElement(m.k,{direction:"column",gap:6,width:"100%"},t.createElement(Ie,{spacing:4,width:"100%"},t.createElement($e,{background:"neutral200",height:"100%",width:2,zIndex:1}),t.createElement(m.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},a.map((E,f)=>{const g=E?.id??E.__temp_key__;return t.createElement(P.x,{key:`stage-${g}`,as:"li"},t.createElement(we,{id:g,index:f,canDelete:a.length>1,isOpen:!E.id,canReorder:a.length>1,stagesCount:a.length}))}))),t.createElement(m.k,{direction:"column",gap:6},t.createElement(se,{type:"button",onClick:()=>{s(G({name:""})),M("willCreateStage")}},r({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"}))))}me.defaultProps={stages:[]},me.propTypes={stages:w().arrayOf(w().shape({id:w().number,__temp_key__:w().number,name:w().string.isRequired}))};var Le=e(52258),ye=e(18172),je=e(18446),Be=e.n(je);const Se={status:"loading",serverState:{currentWorkflow:null,workflows:[]},clientState:{currentWorkflow:{data:null,isDirty:!1,hasDeletedServerStages:!1}}};function Ue(a=Se,r){return(0,ye.produce)(a,s=>{const{payload:M}=r;switch(r.type){case c.QM:{const{status:E,workflows:f}=M;if(s.status=E,f?.length>0){let g=f[0];g={...g,stages:g.stages.map(W=>({...W,color:W?.color??c.FT}))},s.serverState.workflows=f,s.serverState.currentWorkflow=g,s.clientState.currentWorkflow.data=g,s.clientState.currentWorkflow.hasDeletedServerStages=!1}break}case c.x4:{const{stageId:E}=M,{currentWorkflow:f}=a.clientState;s.clientState.currentWorkflow.data.stages=f.data.stages.filter(g=>(g?.id??g.__temp_key__)!==E),f.hasDeletedServerStages||(s.clientState.currentWorkflow.hasDeletedServerStages=!!a.serverState.currentWorkflow.stages.find(g=>g.id===E));break}case c.Ot:{const{currentWorkflow:E}=a.clientState;E.data||(s.clientState.currentWorkflow.data={stages:[]});const f=Fe(s.clientState.currentWorkflow.data.stages);s.clientState.currentWorkflow.data.stages.push({...M,color:M?.color??c.FT,__temp_key__:f});break}case c.Nj:{const{currentWorkflow:E}=a.clientState,{stageId:f,...g}=M;s.clientState.currentWorkflow.data.stages=E.data.stages.map(W=>(W.id??W.__temp_key__)===f?{...W,...g}:W);break}case c.$k:{const{currentWorkflow:{data:{stages:E}}}=a.clientState,{newIndex:f,oldIndex:g}=M;if(f>=0&&f<E.length){const W=E[g];let N=[...E];N.splice(g,1),N.splice(f,0,W),s.clientState.currentWorkflow.data.stages=N}break}default:break}a.clientState.currentWorkflow.data&&(s.clientState.currentWorkflow.isDirty=!Be()((0,ye.current)(s.clientState.currentWorkflow).data,s.serverState.currentWorkflow))})}const Fe=(a=[])=>{const r=a.map(s=>s.id??s.__temp_key__);return Math.max(...r,-1)+1};var q=e(87561);function Ne({formatMessage:a}){return q.object({stages:q.array().of(q.object().shape({name:q.string().required(a({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,a({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})),color:q.string().required(a({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)}))})}function Ke({type:a,item:r}){switch(a){case c.uL.STAGE:return t.createElement(oe,{...r});default:return null}}function Ge(){const{trackUsage:a}=(0,d.useTracking)(),{formatMessage:r}=(0,b.Z)(),s=(0,n.I0)(),{put:M}=(0,d.useFetchClient)(),{formatAPIError:E}=(0,d.useAPIErrorHandler)(),f=(0,d.useNotification)(),{workflows:g,status:W,refetch:N}=(0,Le.n)(),{status:pe,clientState:{currentWorkflow:{data:Z,isDirty:de,hasDeletedServerStages:z}}}=(0,n.v9)(L=>L?.[c.sN]??Se),[A,_]=(0,t.useState)(!1),{mutateAsync:Q,isLoading:V}=(0,B.useMutation)(async({workflowId:L,stages:te})=>{const{data:{data:H}}=await M(`/admin/review-workflows/workflows/${L}/stages`,{data:te});return H},{onSuccess(){f({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),fe=async(L,te)=>{try{return await Q({workflowId:L,stages:te})}catch(H){return f({type:"warning",message:E(H)}),null}},R=async()=>{await fe(Z.id,Z.stages),await N(),_(!1)},ve=async()=>{await R()},j=()=>{_(L=>!L)},ee=(0,k.useFormik)({enableReinitialize:!0,initialValues:Z,async onSubmit(){z?_(!0):R()},validationSchema:Ne({formatMessage:r}),validateOnChange:!1});return y(c.sN,Ue),(0,t.useEffect)(()=>{s(D({status:W,data:g}))},[W,g,s]),(0,t.useEffect)(()=>{a("didViewWorkflow")},[]),t.createElement(u.A,null,t.createElement(d.SettingsPageTitle,{name:r({id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"})}),t.createElement(l.o,{tabIndex:-1},t.createElement(o.r,{renderItem:Ke}),t.createElement(k.FormikProvider,{value:ee},t.createElement(k.Form,{onSubmit:ee.handleSubmit},t.createElement(S.T,{primaryAction:t.createElement(i.z,{startIcon:t.createElement(h.Z,null),type:"submit",size:"M",disabled:!de,loading:!A&&V},r({id:"global.save",defaultMessage:"Save"})),title:r({id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"}),subtitle:r({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:Z?.stages?.length??0})}),t.createElement(x.D,null,pe==="loading"&&t.createElement(T.a,null,r({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})),t.createElement(me,{stages:ee.values?.stages})))),t.createElement(d.ConfirmDialog,{bodyText:{id:"Settings.review-workflows.page.delete.confirm.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage. Are you sure you want to save?"},isConfirmButtonLoading:V,isOpen:A,onToggleDialog:j,onConfirm:ve})))}const Ze=Ge},5318:(C,v,e)=>{"use strict";e.d(v,{k:()=>l,s:()=>S});var t=e(20468),u=e(86978);function l(i){if(!i)return null;const T=Object.entries(t.W.colors).filter(([,d])=>d.toUpperCase()===i.toUpperCase()).reduce((d,[h])=>(u.lv?.[h]&&(d=h),d),null);return T?{themeColorName:T,name:u.lv[T]}:null}function S(){return Object.entries(u.lv).map(([i,x])=>({hex:t.W.colors[i].toUpperCase(),name:x}))}},51584:(C,v,e)=>{var t=e(44239),u=e(37005),l="[object Boolean]";function S(i){return i===!0||i===!1||u(i)&&t(i)==l}C.exports=S},7654:(C,v,e)=>{var t=e(81763);function u(l){return t(l)&&l!=+l}C.exports=u},81763:(C,v,e)=>{var t=e(44239),u=e(37005),l="[object Number]";function S(i){return typeof i=="number"||u(i)&&t(i)==l}C.exports=S},7334:(C,v,e)=>{var t=e(79833);function u(l){return t(l).toLowerCase()}C.exports=u},97104:(C,v,e)=>{"use strict";e.d(v,{U:()=>B,y:()=>k});var t=e(2790),u=e(53547),l=e(88972),S=e(7535),i=e(73879),x=e(78549),T=e(75878),d=e(50781);const h=({theme:n,expanded:o,variant:y,disabled:c,error:D})=>D?`1px solid ${n.colors.danger600} !important`:c?`1px solid ${n.colors.neutral150}`:o?`1px solid ${n.colors.primary600}`:y==="primary"?`1px solid ${n.colors.neutral0}`:`1px solid ${n.colors.neutral100}`,k=(0,l.default)(x.Z)``,b=(0,l.default)(d.x)`
  border: ${h};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:n})=>n.colors.primary600};

    ${k} {
      color: ${({theme:n,expanded:o})=>o?void 0:n.colors.primary700};
    }

    ${x.Z} {
      color: ${({theme:n,expanded:o})=>o?void 0:n.colors.primary600};
    }

    & > ${T.k} {
      background: ${({theme:n})=>n.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:n})=>n.colors.primary200};
    }
  }
`,B=({children:n,disabled:o=!1,error:y,expanded:c=!1,hasErrorMessage:D=!0,id:K,onToggle:G,toggle:$,size:U="M",variant:m="primary",shadow:I})=>{const O=(0,i.M)(K),X=u.useMemo(()=>({expanded:c,onToggle:G,toggle:$,id:O,size:U,variant:m,disabled:o}),[o,c,O,G,U,$,m]);return(0,t.jsxs)(S.S.Provider,{value:X,children:[(0,t.jsx)(b,{"data-strapi-expanded":c,disabled:o,"aria-disabled":o,expanded:c,hasRadius:!0,variant:m,error:y,shadow:I,children:n}),y&&D&&(0,t.jsx)(d.x,{paddingTop:1,children:(0,t.jsx)(x.Z,{variant:"pi",textColor:"danger600",children:y})})]})}},37362:(C,v,e)=>{"use strict";e.d(v,{v:()=>S});var t=e(2790),u=e(7535),l=e(50781);const S=({children:i,...x})=>{const{expanded:T,id:d}=(0,u.A)();if(!T)return null;const h=`accordion-content-${d}`,k=`accordion-label-${d}`,b=`accordion-desc-${d}`;return(0,t.jsx)(l.x,{role:"region",id:h,"aria-labelledby":k,"aria-describedby":b,...x,children:i})}},7535:(C,v,e)=>{"use strict";e.d(v,{A:()=>l,S:()=>u});var t=e(53547);const u=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),l=()=>(0,t.useContext)(u)},27375:(C,v,e)=>{"use strict";e.d(v,{B:()=>n});var t=e(2790),u=e(21514),l=e(88972),S=e(97104),i=e(7535);const x=({expanded:o,disabled:y,variant:c})=>{let D="neutral100";return o?D="primary100":y?D="neutral150":c==="primary"&&(D="neutral0"),D};var T=e(90139),d=e(80907),h=e(75878),k=e(78549);const b=(0,l.default)(T.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:o,expanded:y})=>y?o.colors.primary600:o.colors.neutral500};
    }
  }
`,B=(0,l.default)(h.k)`
  min-height: ${({theme:o,size:y})=>o.sizes.accordions[y]};
  border-radius: ${({theme:o,expanded:y})=>y?`${o.borderRadius} ${o.borderRadius} 0 0`:o.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.primary600};
      }
    }
  }
`,n=({title:o,description:y,as:c="span",togglePosition:D="right",action:K,...G})=>{const{onToggle:$,toggle:U,expanded:m,id:I,size:O,variant:X,disabled:w}=(0,i.A)(),F=`accordion-content-${I}`,re=`accordion-label-${I}`,oe=`accordion-desc-${I}`,P=O==="M"?6:4,ne=O==="M"?P:P-2,Y=x({expanded:m,disabled:w,variant:X}),ce={as:c,fontWeight:O==="S"?"bold":void 0,id:re,textColor:m?"primary600":"neutral700",ellipsis:!0,variant:O==="M"?"delta":void 0},se=m?"primary600":"neutral600",ue=m?"primary200":"neutral200",le=O==="M"?`${32/16}rem`:`${24/16}rem`,ie=()=>{w||(U&&!$?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),U()):$&&$())},J=(0,t.jsx)(h.k,{justifyContent:"center",borderRadius:"50%",height:le,width:le,transform:m?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ue,cursor:w?"not-allowed":"pointer",onClick:ie,shrink:0,children:(0,t.jsx)(d.J,{as:u.Z,width:O==="M"?`${11/16}rem`:`${8/16}rem`,color:m?"primary600":"neutral600"})});return(0,t.jsx)(B,{paddingBottom:ne,paddingLeft:P,paddingRight:P,paddingTop:ne,background:Y,expanded:m,size:O,justifyContent:"space-between",cursor:w?"not-allowed":"",children:(0,t.jsxs)(h.k,{gap:3,flex:1,maxWidth:"100%",children:[D==="left"&&J,(0,t.jsx)(b,{onClick:ie,"aria-disabled":w,"aria-expanded":m,"aria-controls":F,"aria-labelledby":re,"data-strapi-accordion-toggle":!0,expanded:m,type:"button",flex:1,minWidth:0,...G,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S.y,{...ce,children:o}),y&&(0,t.jsx)(k.Z,{as:"p",id:oe,textColor:se,children:y})]})}),D==="right"&&(0,t.jsxs)(h.k,{gap:3,children:[J,K]}),D==="left"&&K]})})}}}]);
