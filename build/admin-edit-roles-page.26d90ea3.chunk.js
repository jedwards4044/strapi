(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2544],{25545:(z,I,s)=>{"use strict";s.r(I),s.d(I,{CreatePage:()=>Ee,default:()=>Oe});var e=s(53547),b=s(57713),v=s(79371),R=s(75878),$=s(19442),A=s(26789),S=s(50781),E=s(78549),M=s(9370),X=s(61585),r=s(28469),W=s(20603),p=s(5504),P=s(60793),N=s(66115),g=s(94649),C=s(27361),w=s.n(C),ue=s(41609),re=s.n(ue),ie=s(86896),y=s(7694),le=s(16550),Q=s(88972),G=s(14900),_=s(36364),xe=s(442),me=s(87561);const oe=me.object().shape({name:me.string().required(p.translatedErrors.required),description:me.string().required(p.translatedErrors.required)}),Te=Q.default.div`
  border: 1px solid ${({theme:O})=>O.colors.primary200};
  background: ${({theme:O})=>O.colors.primary100};
  padding: ${({theme:O})=>`${O.spaces[2]} ${O.spaces[4]}`};
  color: ${({theme:O})=>O.colors.primary600};
  border-radius: ${({theme:O})=>O.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Ee=()=>{const O=(0,p.useNotification)(),{lockApp:ne,unlockApp:Y}=(0,p.useOverlayBlocker)(),{formatMessage:B}=(0,ie.Z)(),[q,pe]=(0,e.useState)(!1),{replace:de}=(0,le.k6)(),ee=(0,e.useRef)(),{trackUsage:ce}=(0,p.useTracking)(),Ie=(0,le.$B)("/settings/roles/duplicate/:id"),Ae=w()(Ie,"params.id",null),{isLoading:Fe,data:he}=(0,G.U_)(),{permissions:$e,isLoading:je}=(0,G.Dq)(Ae),{post:Ne,put:De}=(0,p.useFetchClient)(),He=ae=>{ne(),pe(!0),ce(Ae?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(Ne("/admin/roles",ae)).then(async({data:V})=>{const{permissionsToSend:K}=ee.current.getPermissions();return ce(Ae?"didDuplicateRole":"didCreateNewRole"),V.data.id&&!re()(K)&&await De(`/admin/roles/${V.data.id}/permissions`,{permissions:K}),V}).then(V=>{pe(!1),O({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),de(`/settings/roles/${V.data.id}`)}).catch(V=>{console.error(V),pe(!1),O({type:"warning",message:{id:"notification.error"}})}).finally(()=>{Y()})},Le=`${B({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,N.Z)(new Date,"PPP")}`;return e.createElement(b.o,null,e.createElement(p.SettingsPageTitle,{name:"Roles"}),e.createElement(g.Formik,{initialValues:{name:"",description:Le},onSubmit:He,validationSchema:oe,validateOnChange:!1},({handleSubmit:ae,values:V,errors:K,handleReset:ye,handleChange:Ce})=>e.createElement(p.Form,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(v.T,{primaryAction:e.createElement(R.k,{gap:2},e.createElement($.z,{variant:"secondary",onClick:()=>{ye(),ee.current.resetForm()},size:"L"},B({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement($.z,{onClick:ae,loading:q,size:"L"},B({id:"global.save",defaultMessage:"Save"}))),title:B({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:B({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(p.Link,{startIcon:e.createElement(P.Z,null),to:"/settings/roles"},B({id:"global.back",defaultMessage:"Back"}))}),e.createElement(A.D,null,e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(S.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(S.x,null,e.createElement(S.x,null,e.createElement(E.Z,{fontWeight:"bold"},B({id:"global.details",defaultMessage:"Details"}))),e.createElement(S.x,null,e.createElement(E.Z,{variant:"pi",textColor:"neutral600"},B({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(Te,null,B({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(M.r,{gap:4},e.createElement(X.P,{col:6},e.createElement(r.o,{name:"name",error:K.name&&B({id:K.name}),label:B({id:"global.name",defaultMessage:"Name"}),onChange:Ce,value:V.name})),e.createElement(X.P,{col:6},e.createElement(W.g,{label:B({id:"global.description",defaultMessage:"Description"}),id:"description",error:K.description&&B({id:K.description}),onChange:Ce},V.description))))),!Fe&&!je?e.createElement(S.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(xe.Z,{isFormDisabled:!1,ref:ee,permissions:$e,layout:he})):e.createElement(S.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(p.LoadingIndicatorPage,null))))))))};function Oe(){const O=(0,y.v9)(_._);return e.createElement(p.CheckPagePermissions,{permissions:O.settings.roles.create},e.createElement(Ee,null))}},442:(z,I,s)=>{"use strict";s.d(I,{Z:()=>es});var e=s(53547),b=s(20107),v=s(61738),R=s(54375),$=s(5504),A=s(18721),S=s.n(A),E=s(41609),M=s.n(E),X=s(45697),r=s.n(X),W=s(86896),p=s(50781),P=s(89734),N=s.n(P),g=s(88972),C=s(75878),w=s(62779),ue=s(84189),re=s(3340),ie=s(27361),y=s.n(ie),le=s(57557),Q=s.n(le),G=s(14900),_=s(19442),xe=s(80606);const me=g.default.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:a})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?a.colors.neutral100:a.colors.primary600};
    }
  `}
`,Re=({onClick:t,className:n,hasConditions:a,variant:o})=>{const{formatMessage:i}=(0,W.Z)();return e.createElement(me,{hasConditions:a,className:n},e.createElement(_.z,{variant:o,startIcon:e.createElement(xe.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};Re.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},Re.propTypes={onClick:r().func.isRequired,className:r().string,hasConditions:r().bool,variant:r().string};const oe=(0,g.default)(Re)``;var Te=s(60881),Ee=s(18189),Oe=s(48683),O=s(78549),ne=s(45124),Y=s(63321),B=s(36773),q=s(18172),pe=s(7739),de=s.n(pe),ee=s(11700),ce=s.n(ee),Ie=s(31439);const Ae=t=>Object.values(t).map(n=>Object.entries(n).filter(([,a])=>a).map(([a])=>a)).flat(),Fe=t=>t.reduce((n,[a,o])=>(n.push({label:ce()(a),children:o.map(i=>({label:i.displayName,value:i.id}))}),n),[]),he=(t,n)=>t.map(([,a])=>a).flat().reduce((a,o)=>({[o.id]:n.includes(o.id),...a}),{}),$e=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:a,label:o,name:i,onChange:l,value:d})=>{const{formatMessage:c}=(0,W.Z)(),m=u=>{l(i,he(t,u))};return e.createElement(C.k,{as:"li",background:a?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(C.k,{paddingLeft:6,style:{width:180}},e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},c({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(O.Z,{variant:"sigma",title:o,textColor:"primary600",ellipsis:!0},c({id:`Settings.roles.form.permissions.${o.toLowerCase()}`,defaultMessage:o})),e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",c({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(p.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Ie.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:m,value:Ae(d),options:Fe(t),disabled:n})))};$e.propTypes={arrayOfOptionsGroupedByCategory:r().array.isRequired,isFormDisabled:r().bool.isRequired,isGrey:r().bool.isRequired,label:r().string.isRequired,name:r().string.isRequired,value:r().object.isRequired,onChange:r().func.isRequired};const je=$e,Ne=(t,n)=>t.reduce((a,o)=>(a[o.id]=y()(n,o.id,!1),a),{}),De=(t,n)=>t.reduce((a,o)=>{const[i,l]=o,d=Ne(l,n);return a[i]=d,a},{}),Le=(t,n,a)=>t.reduce((o,i)=>{const l=y()(n,[...i.pathToConditionsObject,"conditions"],{}),d=De(a,l);return o[i.pathToConditionsObject.join("..")]=d,o},{}),ae=({actions:t,headerBreadCrumbs:n,isFormDisabled:a,onClosed:o,onToggle:i})=>{const{formatMessage:l}=(0,W.Z)(),{availableConditions:d,modifiedData:c,onChangeConditions:m}=(0,G.$_)(),u=(0,e.useMemo)(()=>Object.entries(de()(d,"category")),[d]),f=t.filter(({isDisplayed:h,hasSomeActionsSelected:k,hasAllActionsSelected:D})=>h&&(k||D)),x=(0,e.useMemo)(()=>Le(f,c,u),[f,c,u]),[j,Z]=(0,e.useState)(x),L=(h,k)=>{Z((0,q.default)(D=>{D[h]||(D[h]={}),D[h].default||(D[h].default={}),D[h].default=k}))},T=()=>{const h=Object.entries(j).reduce((k,D)=>{const[F,te]=D,U=Object.values(te).reduce((J,H)=>({...J,...H}),{});return k[F]=U,k},{});m(h),i()};return e.createElement(Te.P,{labelledBy:"condition-modal-breadcrumbs",onClose:o},e.createElement(Ee.x,null,e.createElement(Y.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((h,k,D)=>e.createElement(B.$,{isCurrent:k===D.length-1,key:h},ce()(l({id:h,defaultMessage:h})))))),e.createElement(Oe.f,null,f.length===0&&e.createElement(O.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,f.map(({actionId:h,label:k,pathToConditionsObject:D},F)=>{const te=D.join("..");return e.createElement(je,{key:h,arrayOfOptionsGroupedByCategory:u,label:k,isFormDisabled:a,isGrey:F%2===0,name:te,onChange:L,value:y()(j,te,{})})}))),e.createElement(ne.m,{startActions:e.createElement(_.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(_.z,{onClick:T},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};ae.propTypes={actions:r().arrayOf(r().shape({actionId:r().string.isRequired,checkboxName:r().string,hasSomeActionsSelected:r().bool.isRequired,hasAllActionsSelected:r().bool,isDisplayed:r().bool.isRequired,label:r().string})).isRequired,headerBreadCrumbs:r().arrayOf(r().string).isRequired,isFormDisabled:r().bool.isRequired,onClosed:r().func.isRequired,onToggle:r().func.isRequired};const V=ae,K=`${120/16}rem`,ye=`${200/16}rem`,Ce=`${53/16}rem`,Ke=g.default.div`
  width: ${K};
`,ot=(0,g.default)(C.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ue=({children:t,isCollapsable:n,isActive:a,isFormDisabled:o,label:i,onChange:l,onClick:d,checkboxName:c,someChecked:m,value:u})=>{const{formatMessage:f}=(0,W.Z)();return e.createElement(C.k,{alignItems:"center",paddingLeft:6,style:{width:ye,flexShrink:0}},e.createElement(p.x,{paddingRight:2},e.createElement(w.C,{name:c,"aria-label":f({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:o,onValueChange:x=>l({target:{name:c,value:x}}),indeterminate:m,value:u})),e.createElement(ot,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:d,"aria-expanded":a,onKeyDown:({key:x})=>(x==="Enter"||x===" ")&&d(),tabIndex:0,role:"button"}},e.createElement(O.Z,{fontWeight:a?"bold":"",textColor:a?"primary600":"neutral800",ellipsis:!0},ce()(i)),t))};Ue.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ue.propTypes={checkboxName:r().string,children:r().node,label:r().string.isRequired,isCollapsable:r().bool,isFormDisabled:r().bool.isRequired,onChange:r().func,onClick:r().func.isRequired,someChecked:r().bool,value:r().bool,isActive:r().bool.isRequired};const at=(0,e.memo)(Ue);var Nt=s(42348),Wt=s.n(Nt),Zt=s(13218),be=s.n(Zt);const rt=t=>be()(t)?Wt()(Object.values(t).map(n=>be()(n)?rt(n):n)):[],ke=rt,ze=t=>t?Object.keys(t).reduce((n,a)=>(a!=="conditions"&&(n[a]=t[a]),n),{}):null,Se=t=>{const n=ze(t),a=ke(n);if(!a.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const o=a.every(l=>l),i=a.some(l=>l)&&!o;return{hasAllActionsSelected:o,hasSomeActionsSelected:i}};var Vt=s(21514);const We=(0,g.default)(Vt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ze=t=>`
  ${O.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${We} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ht=(t,n,a)=>t.map(({actionId:o,isDisplayed:i,applyToProperties:l,label:d})=>{if(!i)return{actionId:o,hasSomeActionsSelected:!1,isDisplayed:i};const c=[...a.split(".."),o],m=M()(l)?[...c,"properties","enabled"]:c,u=m.join(".."),f=y()(n,[...c,"conditions"],null),x=ke(f).some(T=>T);if(M()(l)){const T=y()(n,m,!1);return{actionId:o,checkboxName:u,hasAllActionsSelected:T,hasConditions:x,hasSomeActionsSelected:T,isDisplayed:i,isParentCheckbox:!1,label:d,pathToConditionsObject:c}}const j=y()(n,m,null),{hasAllActionsSelected:Z,hasSomeActionsSelected:L}=Se(j);return{actionId:o,checkboxName:u,hasAllActionsSelected:Z,hasConditions:x,hasSomeActionsSelected:L,isDisplayed:i,isParentCheckbox:!0,label:d,pathToConditionsObject:c}}),Xe=(t,n)=>`
  ${it} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${dt} {
    display: flex;
  }
  ${oe} {
    display: block;
  }
  &:hover {
   ${Ze(t)}
  }

  &:focus-within {
    ${({theme:a,isActive:o})=>Xe(a,o)}
  }
  
`,it=g.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ce};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Gt=g.default.div`
  display: inline-flex;
  min-width: 100%;

  ${oe} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Xe(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Xe(t,n)}
  }
`,lt=(0,g.default)(C.k)`
  width: ${K};
  position: relative;
`,dt=(0,g.default)(p.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ct=g.default.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Kt=(0,g.default)(p.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,ut=({availableActions:t,isActive:n,isGrey:a,isFormDisabled:o,label:i,onClickToggle:l,pathToData:d})=>{const[c,m]=(0,e.useState)(!1),{formatMessage:u}=(0,W.Z)(),{modifiedData:f,onChangeParentCheckbox:x,onChangeSimpleCheckbox:j}=(0,G.$_)(),Z=()=>{m(U=>!U)},L=()=>{m(!1)},T=y()(f,d.split(".."),{}),h=(0,e.useMemo)(()=>Object.keys(T).reduce((U,J)=>(U[J]=Q()(T[J],"conditions"),U),{}),[T]),{hasAllActionsSelected:k,hasSomeActionsSelected:D}=Se(h),F=(0,e.useMemo)(()=>Ht(t,f,d),[t,f,d]),te=F.some(({hasConditions:U})=>U);return e.createElement(Gt,{isActive:n},e.createElement(it,{isGrey:a},e.createElement(at,{isCollapsable:!0,isFormDisabled:o,label:i,checkboxName:d,onChange:x,onClick:l,someChecked:D,value:k,isActive:n},e.createElement(dt,{paddingLeft:2},n?e.createElement(ue.Z,null):e.createElement(re.Z,null))),e.createElement(C.k,{style:{flex:1}},F.map(({actionId:U,hasConditions:J,hasAllActionsSelected:H,hasSomeActionsSelected:fe,isDisplayed:Be,isParentCheckbox:se,checkboxName:ve,label:Ve})=>Be?se?e.createElement(lt,{key:U,justifyContent:"center",alignItems:"center"},J&&e.createElement(ct,null),e.createElement(w.C,{disabled:o,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ve} ${i}`}),onValueChange:Pe=>{x({target:{name:ve,value:Pe}})},indeterminate:fe,value:H})):e.createElement(lt,{key:U,justifyContent:"center",alignItems:"center"},J&&e.createElement(ct,null),e.createElement(w.C,{disabled:o,indeterminate:J,name:ve,onValueChange:Pe=>{j({target:{name:ve,value:Pe}})},value:H})):e.createElement(Ke,{key:U}))),c&&e.createElement(V,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:F,isFormDisabled:o,onClosed:L,onToggle:Z})),e.createElement(Kt,null,e.createElement(oe,{onClick:Z,hasConditions:te})))};ut.propTypes={availableActions:r().array.isRequired,isActive:r().bool.isRequired,isGrey:r().bool.isRequired,isFormDisabled:r().bool.isRequired,label:r().string.isRequired,onClickToggle:r().func.isRequired,pathToData:r().string.isRequired};const Ut=ut,zt=g.default.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,mt=()=>e.createElement(zt,null,"*"),Xt=(t,n)=>t.map(a=>{const o=Array.isArray(a.subjects)&&a.subjects.indexOf(n)!==-1;return{...a,isDisplayed:o}}),Yt=(0,g.default)(p.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,wt=g.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,Ye=t=>e.createElement(Yt,null,e.createElement(wt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Ye.defaultProps={fill:"primary200"},Ye.propTypes={fill:r().string};const Qt=(0,e.memo)(Ye),pt=(0,g.default)(C.k)`
  width: ${K};
  position: relative;
`,Jt=(0,g.default)(C.k)`
  height: ${Ce};
`,qt=(0,g.default)(p.x)`
  padding-left: ${31/16}rem;
`,_t=(0,g.default)(p.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,en=(0,g.default)(C.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${We} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ze(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ze(n)};
`,tn=g.default.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,we=({childrenForm:t,isFormDisabled:n,recursiveLevel:a,pathToDataFromActionRow:o,propertyActions:i,parentName:l,propertyName:d})=>{const{formatMessage:c}=(0,W.Z)(),{modifiedData:m,onChangeParentCheckbox:u,onChangeSimpleCheckbox:f}=(0,G.$_)(),[x,j]=(0,e.useState)(null),Z=T=>{j(h=>h===T?null:T)},L=(0,e.useMemo)(()=>x?t.find(({value:T})=>T===x):null,[x,t]);return e.createElement(qt,null,e.createElement(tn,null),t.map(({label:T,value:h,required:k,children:D},F)=>{const te=F+1<t.length,U=Array.isArray(D),J=x===h;return e.createElement(_t,{key:h,isVisible:te},e.createElement(Jt,null,e.createElement(Qt,{color:"primary200"}),e.createElement(C.k,{style:{flex:1}},e.createElement(en,{level:a,isActive:J,isCollapsable:U},e.createElement(ot,{alignItems:"center",isCollapsable:U,...U&&{onClick:()=>Z(h),"aria-expanded":J,onKeyDown:({key:H})=>(H==="Enter"||H===" ")&&Z(h),tabIndex:0,role:"button"},title:T},e.createElement(O.Z,{ellipsis:!0},ce()(T)),k&&e.createElement(mt,null),e.createElement(We,{$isActive:J}))),e.createElement(C.k,{style:{flex:1}},i.map(({actionId:H,label:fe,isActionRelatedToCurrentProperty:Be})=>{if(!Be)return e.createElement(Ke,{key:H});const se=[...o.split(".."),H,"properties",d,...l.split(".."),h],ve=y()(m,se,!1);if(!D)return e.createElement(pt,{key:fe,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:n,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${T} ${fe}`}),onValueChange:Me=>{f({target:{name:se.join(".."),value:Me}})},value:ve}));const{hasAllActionsSelected:Ve,hasSomeActionsSelected:Pe}=Se(ve);return e.createElement(pt,{key:fe,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{key:fe,disabled:n,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${T} ${fe}`}),onValueChange:Me=>{u({target:{name:se.join(".."),value:Me}})},value:Ve,indeterminate:Pe}))})))),L&&J&&e.createElement(p.x,{paddingBottom:2},e.createElement(we,{isFormDisabled:n,parentName:`${l}..${h}`,pathToDataFromActionRow:o,propertyActions:i,propertyName:d,recursiveLevel:a+1,childrenForm:L.children})))}))};we.propTypes={childrenForm:r().array.isRequired,isFormDisabled:r().bool.isRequired,parentName:r().string.isRequired,pathToDataFromActionRow:r().string.isRequired,propertyActions:r().array.isRequired,propertyName:r().string.isRequired,recursiveLevel:r().number.isRequired};const nn=(0,e.memo)(we),sn=t=>t.reduce((a,o)=>(o.isActionRelatedToCurrentProperty&&a.push(o.actionId),a),[]),on=(t,n,a,o,i)=>{const d=sn(t).reduce((c,m)=>{const u=[...a.split(".."),m,"properties",o,i],f=y()(n,u,!1);return c[m]=f,c},{});return Se(d)},gt=(0,g.default)(C.k)`
  width: ${K};
  position: relative;
`,an=(0,g.default)(C.k)`
  height: ${Ce};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${We} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${Ze(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&Ze(n)};
`,Qe=({childrenForm:t,label:n,isFormDisabled:a,name:o,required:i,pathToData:l,propertyActions:d,propertyName:c,isOdd:m})=>{const{formatMessage:u}=(0,W.Z)(),[f,x]=(0,e.useState)(null),{modifiedData:j,onChangeCollectionTypeLeftActionRowCheckbox:Z,onChangeParentCheckbox:L,onChangeSimpleCheckbox:T}=(0,G.$_)(),h=f===o,k=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),D=k.length>0,F=(0,e.useCallback)(()=>{D&&x(H=>H===o?null:o)},[D,o]),te=({target:{value:H}})=>{Z(l,c,o,H)},{hasAllActionsSelected:U,hasSomeActionsSelected:J}=(0,e.useMemo)(()=>on(d,j,l,c,o),[d,j,l,c,o]);return e.createElement(e.Fragment,null,e.createElement(an,{alignItems:"center",isCollapsable:D,isActive:h,background:m?"neutral100":"neutral0"},e.createElement(C.k,null,e.createElement(at,{onChange:te,onClick:F,isCollapsable:D,isFormDisabled:a,label:n,someChecked:J,value:U,isActive:h},i&&e.createElement(mt,null),e.createElement(We,{$isActive:h})),e.createElement(C.k,null,d.map(({label:H,isActionRelatedToCurrentProperty:fe,actionId:Be})=>{if(!fe)return e.createElement(Ke,{key:H});const se=[...l.split(".."),Be,"properties",c,o];if(!D){const Me=y()(j,se,!1);return e.createElement(gt,{key:Be,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:a,name:se.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${H}`}),onValueChange:ts=>{T({target:{name:se.join(".."),value:ts}})},value:Me}))}const ve=y()(j,se,{}),{hasAllActionsSelected:Ve,hasSomeActionsSelected:Pe}=Se(ve);return e.createElement(gt,{key:H,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:a,name:se.join(".."),onValueChange:Me=>{L({target:{name:se.join(".."),value:Me}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${H}`}),value:Ve,indeterminate:Pe}))})))),h&&e.createElement(nn,{childrenForm:k,isFormDisabled:a,parentName:o,pathToDataFromActionRow:l,propertyName:c,propertyActions:d,recursiveLevel:0}))};Qe.defaultProps={childrenForm:[],required:!1},Qe.propTypes={childrenForm:r().array,label:r().string.isRequired,isFormDisabled:r().bool.isRequired,name:r().string.isRequired,pathToData:r().string.isRequired,propertyActions:r().array.isRequired,propertyName:r().string.isRequired,required:r().bool,isOdd:r().bool.isRequired};const rn=(0,e.memo)(Qe),ft=(0,g.default)(C.k)`
  width: ${K};
  flex-shrink: 0;
`,ln=(0,g.default)(C.k)`
  width: ${ye};
  height: ${Ce};
  flex-shrink: 0;
`,ht=({headers:t,label:n})=>{const{formatMessage:a}=(0,W.Z)(),o=a({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(C.k,null,e.createElement(ln,{alignItems:"center",paddingLeft:6},e.createElement(O.Z,{variant:"sigma",textColor:"neutral500"},o)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ft,{justifyContent:"center",key:i.label},e.createElement(O.Z,{variant:"sigma",textColor:"neutral500"},a({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ft,{key:i.label})))};ht.propTypes={headers:r().arrayOf(r().shape({label:r().string.isRequired,isActionRelatedToCurrentProperty:r().bool.isRequired})).isRequired,label:r().string.isRequired};const dn=ht,cn=(t,n)=>t.map(a=>{const o=Array.isArray(a.applyToProperties)&&a.applyToProperties.indexOf(n)!==-1&&a.isDisplayed;return{label:a.label,actionId:a.actionId,isActionRelatedToCurrentProperty:o}}),un=g.default.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,yt=({availableActions:t,childrenForm:n,isFormDisabled:a,label:o,pathToData:i,propertyName:l})=>{const d=(0,e.useMemo)(()=>cn(t,l),[t,l]);return e.createElement(un,null,e.createElement(dn,{label:o,headers:d}),e.createElement(p.x,null,n.map(({children:c,label:m,value:u,required:f},x)=>e.createElement(rn,{childrenForm:c,key:u,label:m,isFormDisabled:a,name:u,required:f,propertyActions:d,pathToData:i,propertyName:l,isOdd:x%2===0}))))};yt.propTypes={childrenForm:r().array.isRequired,availableActions:r().array.isRequired,isFormDisabled:r().bool.isRequired,label:r().string.isRequired,pathToData:r().string.isRequired,propertyName:r().string.isRequired};const mn=yt,pn=g.default.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,Ct=({allActions:t,contentTypeName:n,label:a,index:o,isActive:i,isFormDisabled:l,onClickToggleCollapse:d,pathToData:c,properties:m})=>{const u=(0,e.useCallback)(()=>{d(n)},[n,d]),f=(0,e.useMemo)(()=>Xt(t,n),[t,n]);return e.createElement(pn,{isActive:i},e.createElement(Ut,{availableActions:f,isActive:i,isGrey:o%2===0,isFormDisabled:l,label:a,onClickToggle:u,pathToData:c}),i&&m.map(({label:x,value:j,children:Z})=>e.createElement(mn,{availableActions:f,childrenForm:Z,isFormDisabled:l,label:x,pathToData:c,propertyName:j,key:j})))};Ct.propTypes={allActions:r().array.isRequired,contentTypeName:r().string.isRequired,index:r().number.isRequired,isActive:r().bool.isRequired,isFormDisabled:r().bool.isRequired,label:r().string.isRequired,onClickToggleCollapse:r().func.isRequired,pathToData:r().string.isRequired,properties:r().array.isRequired};const gn=Ct,Je=({actions:t,isFormDisabled:n,pathToData:a,subjects:o})=>{const[i,l]=(0,e.useState)(null),d=c=>{l(i===c?null:c)};return o.map(({uid:c,label:m,properties:u},f)=>e.createElement(gn,{allActions:t,key:c,contentTypeName:c,label:m,isActive:i===c,isFormDisabled:n,index:f,onClickToggleCollapse:d,pathToData:`${a}..${c}`,properties:u}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:r().array.isRequired,isFormDisabled:r().bool.isRequired,pathToData:r().string.isRequired,subjects:r().arrayOf(r().shape({uid:r().string.isRequired,label:r().string.isRequired,properties:r().array.isRequired}))};const fn=(0,e.memo)(Je),hn=t=>t.filter(({subjects:n})=>n&&n.length),yn=t=>t.map(({actionId:n})=>n),Cn=(t,n)=>t.reduce((a,o)=>(Object.keys(n).forEach(i=>{const l=y()(n,[i,o],{}),d={[i]:ze(l)};a[o]?a[o]={...a[o],...d}:a[o]=d}),a),{}),vn=(t,n)=>{const a=yn(t),o=Cn(a,n);return Object.keys(o).reduce((l,d)=>(l[d]=Se(o[d]),l),{})},En=(0,g.default)(C.k)`
  width: ${K};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:n,kind:a})=>{const{formatMessage:o}=(0,W.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,G.$_)(),d=(0,e.useMemo)(()=>hn(t),[t]),c=(0,e.useMemo)(()=>vn(d,i[a]),[i,d,a]);return e.createElement(p.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ye}},e.createElement(C.k,{gap:0},d.map(({label:m,actionId:u})=>e.createElement(En,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement(O.Z,{variant:"sigma",textColor:"neutral500"},o({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})),e.createElement(w.C,{disabled:n,onValueChange:f=>{l(a,u,f)},name:u,"aria-label":o({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:o({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})}),value:y()(c,[u,"hasAllActionsSelected"],!1),indeterminate:y()(c,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:r().arrayOf(r().shape({label:r().string.isRequired,actionId:r().string.isRequired,subjects:r().array.isRequired})),isFormDisabled:r().bool.isRequired,kind:r().string.isRequired};const bn=(0,e.memo)(qe),xn=(0,g.default)(p.x)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:n,layout:{actions:a,subjects:o}})=>{const i=N()([...o],"label");return e.createElement(xn,{background:"neutral0"},e.createElement(bn,{actions:a,kind:n,isFormDisabled:t}),e.createElement(fn,{actions:a,isFormDisabled:t,pathToData:n,subjects:i}))};vt.propTypes={isFormDisabled:r().bool.isRequired,kind:r().string.isRequired,layout:r().shape({actions:r().array,subjects:r().arrayOf(r().shape({uid:r().string.isRequired,label:r().string.isRequired,properties:r().array.isRequired}))}).isRequired};const Et=(0,e.memo)(vt);var Rn=s(18542);const bt=({children:t,value:n})=>e.createElement(Rn.$l.Provider,{value:n},t);bt.propTypes={children:r().node.isRequired,value:r().exact({availableConditions:r().array.isRequired,modifiedData:r().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:r().func.isRequired,onChangeConditions:r().func.isRequired,onChangeSimpleCheckbox:r().func.isRequired,onChangeParentCheckbox:r().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:r().func.isRequired}).isRequired};const Tn=bt;var An=s(97104),Sn=s(27375),Pn=s(37362),xt=s(13539),Mn=s(9370),On=s(61585);const $n=(t,n,a)=>t.map(o=>{const i=[...a,o.action,"properties","enabled"],l=y()(n,i,!1),d=y()(n,[...a,o.action,"conditions"],{}),c=ke(d).some(m=>m);return{...o,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:c,label:o.displayName,actionId:o.action,pathToConditionsObject:[...a,o.action]}}),jn=t=>{const n=Object.entries(t).reduce((o,i)=>{const[l,{conditions:d}]=i;return o[l]=d,o},{});return ke(n).some(o=>o)},Dn=g.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,Ln=g.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:a})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?a.colors.neutral100:a.colors.primary600};
    }
  `}
`,Rt=({categoryName:t,isFormDisabled:n,subCategoryName:a,actions:o,pathToData:i})=>{const[l,d]=(0,e.useState)(!1),{modifiedData:c,onChangeParentCheckbox:m,onChangeSimpleCheckbox:u}=(0,G.$_)(),{formatMessage:f}=(0,W.Z)(),x=y()(c,i,{}),j=(0,e.useMemo)(()=>Object.keys(x).reduce((F,te)=>(F[te]=ze(x[te]),F),{}),[x]),{hasAllActionsSelected:Z,hasSomeActionsSelected:L}=Se(j),T=()=>{d(F=>!F)},h=()=>{d(!1)},k=$n(o,c,i),D=jn(y()(c,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(p.x,null,e.createElement(C.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(p.x,{paddingRight:4},e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},a)),e.createElement(Dn,null),e.createElement(p.x,{paddingLeft:4},e.createElement(xt.X,{name:i.join(".."),disabled:n,onValueChange:F=>{m({target:{name:i.join(".."),value:F}})},indeterminate:L,value:Z},f({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(C.k,{paddingTop:6,paddingBottom:6},e.createElement(Mn.r,{gap:2,style:{flex:1}},k.map(({checkboxName:F,value:te,action:U,displayName:J,hasConditions:H})=>e.createElement(On.P,{col:3,key:U},e.createElement(Ln,{disabled:n,hasConditions:H},e.createElement(xt.X,{name:F,disabled:n,onValueChange:fe=>{u({target:{name:F,value:fe}})},value:te},J))))),e.createElement(oe,{hasConditions:D,onClick:T}))),l&&e.createElement(V,{headerBreadCrumbs:[t,a],actions:k,isFormDisabled:n,onClosed:h,onToggle:T}))};Rt.propTypes={actions:r().array.isRequired,categoryName:r().string.isRequired,isFormDisabled:r().bool.isRequired,subCategoryName:r().string.isRequired,pathToData:r().array.isRequired};const kn=Rt,_e=({childrenForm:t,kind:n,name:a,isOpen:o,isFormDisabled:i,isWhite:l,onOpenCategory:d,pathToData:c})=>{const{formatMessage:m}=(0,W.Z)(),u=()=>{d(a)},f=(0,e.useMemo)(()=>a.split("::").pop(),[a]);return e.createElement(An.U,{expanded:o,onToggle:u,id:`accordion-${a}`,variant:l?"primary":"secondary"},e.createElement(Sn.B,{title:ce()(f),description:`${m({id:"Settings.permissions.category"},{category:f})} ${n==="plugins"?"plugin":n}`}),e.createElement(Pn.v,null,e.createElement(p.x,{padding:6},t.map(({actions:x,subCategoryName:j,subCategoryId:Z})=>e.createElement(kn,{key:j,actions:x,categoryName:f,isFormDisabled:i,subCategoryName:j,pathToData:[...c,Z]})))))};_e.defaultProps={},_e.propTypes={childrenForm:r().array.isRequired,isOpen:r().bool.isRequired,isFormDisabled:r().bool.isRequired,isWhite:r().bool.isRequired,kind:r().string.isRequired,name:r().string.isRequired,onOpenCategory:r().func.isRequired,pathToData:r().array.isRequired};const Bn=_e,Tt=({isFormDisabled:t,kind:n,layout:a})=>{const[o,i]=(0,e.useState)(null),l=d=>{i(d===o?null:d)};return e.createElement(p.x,{padding:6,background:"neutral0"},a.map(({category:d,categoryId:c,childrenForm:m},u)=>e.createElement(Bn,{key:d,childrenForm:m,kind:n,isFormDisabled:t,isOpen:o===d,isWhite:u%2===1,name:d,onOpenCategory:l,pathToData:[n,c]})))};Tt.propTypes={isFormDisabled:r().bool.isRequired,kind:r().string.isRequired,layout:r().arrayOf(r().shape({category:r().string.isRequired,categoryId:r().string.isRequired,childrenForm:r().arrayOf(r().shape({actions:r().array.isRequired})).isRequired}).isRequired).isRequired};const At=Tt;var In=s(82492),Fn=s.n(In),Nn=s(36968),ge=s.n(Nn);const St=(t,n,a)=>t.find(o=>o.action===n&&o.subject===a),Pt=(t,n=[])=>t.reduce((a,o)=>(a[o.id]=n.indexOf(o.id)!==-1,a),{}),Mt=({children:t},n,a="")=>t.reduce((o,i)=>{if(i.children)return{...o,[i.value]:Mt(i,n,`${a}${i.value}.`)};const l=n.indexOf(`${a}${i.value}`)!==-1;return o[i.value]=l,o},{}),Wn=(t,n,a)=>t.reduce((o,i)=>{const l=n.properties.find(({value:d})=>d===i);if(l){const d=y()(a,["properties",l.value],[]),c=Mt(l,d);o.properties[i]=c}return o},{properties:{}}),Zn=(t,n)=>n.reduce((a,o)=>{const i=t.find(({uid:l})=>l===o)||null;return i&&(a[o]=i),a},{}),Ot=({subjects:t},n,a,o=[])=>n.reduce((i,l)=>{const d=l.subjects,c=Zn(t,d);if(M()(c))return i;const m=Object.keys(c).reduce((u,f)=>{const{actionId:x,applyToProperties:j}=l,T=c[f].properties.map(({value:F})=>F).every(F=>(j||[]).indexOf(F)===-1),h=St(o,x,f),k=Pt(a,y()(h,"conditions",[]));if(M()(j)||T)return ge()(u,[f,x],{properties:{enabled:h!==void 0},conditions:k}),u;const D=Wn(j,c[f],h);return ge()(u,[f,x],{...D,conditions:k}),u},{});return Fn()(i,m)},{}),Vn=(t,n,a)=>t.reduce((o,i)=>{const l=St(a,i.action,null);return o[i.action]={properties:{enabled:l!==void 0},conditions:Pt(n,l?.conditions??[])},o},{}),Hn=(t,n,a)=>t.reduce((o,i)=>(o[i.subCategoryId]=Vn(i.actions,n,a),o),{}),$t=(t,n,a=[])=>t.reduce((o,{categoryId:i,childrenForm:l})=>{const d=Hn(l,n,a);return o[i]=d,o},{}),jt=t=>t.split(" ").join("-"),Dt=(t,n)=>Object.entries(de()(t,n)).map(([a,o])=>({category:a,categoryId:jt(a),childrenForm:Object.entries(de()(o,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:jt(i),actions:l}))})),Gn=(t,n)=>{const{conditions:a,sections:{collectionTypes:o,singleTypes:i,plugins:l,settings:d}}=t,c={collectionTypes:o,singleTypes:i,plugins:Dt(l,"plugin"),settings:Dt(d,"category")},m={collectionTypes:Ot(o,o.actions||[],a,n),singleTypes:Ot(i,i.actions||[],a,n),plugins:$t(c.plugins,a,n),settings:$t(c.settings,a,n)};return{initialData:m,modifiedData:m,layouts:c}};var Kn=s(50361),et=s.n(Kn);const Lt=t=>Object.keys(t).reduce((n,a)=>{const o=t[a];if(be()(o)&&!S()(o,"conditions"))return{...n,[a]:Lt(o)};if(be()(o)&&S()(o,"conditions")&&!ke(Q()(o,"conditions")).some(l=>l)){const l=Object.keys(o.conditions).reduce((d,c)=>(d[c]=!1,d),{});return{...n,[a]:{...o,conditions:l}}}return n[a]=o,n},{}),tt=Lt,kt=(t,n,a=!1)=>Object.keys(t).reduce((o,i)=>{const l=t[i];return i==="conditions"&&!a?(o[i]=l,o):be()(l)?{...o,[i]:kt(l,n,i==="fields")}:(o[i]=n,o)},{}),Ge=kt,Un={initialData:{},modifiedData:{},layouts:{}},zn=(t,n)=>(0,q.default)(t,a=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:o,actionId:i,value:l}=n,d=["modifiedData",o];Object.keys(y()(t,d)).forEach(c=>{const m=y()(t,[...d,c,i],void 0);if(m){let u=Ge(m,l);if(!l&&u.conditions){const f=Ge(u.conditions,!1);u={...u,conditions:f}}ge()(a,[...d,c,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:o,propertyName:i,rowName:l,value:d}=n;let c=et()(t.modifiedData);const m=o.split(".."),u=y()(c,m,{});Object.keys(u).forEach(f=>{if(S()(u[f],`properties.${i}`)){const x=y()(u,[f,"properties",i,l]),j=[...m,f,"properties",i,l];if(!be()(x))ge()(c,j,d);else{const Z=Ge(x,d);ge()(c,j,Z)}}}),d||(c=tt(c)),ge()(a,"modifiedData",c);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(o=>{const[i,l]=o;ge()(a,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let o=et()(t.modifiedData);ge()(o,[...n.keys.split("..")],n.value),n.value||(o=tt(o)),ge()(a,"modifiedData",o);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:o,value:i}=n,l=[...o.split("..")];let d=et()(t.modifiedData);const c=y()(d,l,{}),m=Ge(c,i);ge()(d,l,m),i||(d=tt(d)),ge()(a,["modifiedData"],d);break}case"RESET_FORM":{a.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{a.initialData=t.modifiedData;break}default:return a}}),nt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Xn=t=>{const[n,{conditions:a}]=t;return{action:n,subject:null,conditions:nt(a),properties:{}}},Yn=t=>Object.values(t).reduce((n,a)=>{const o=Object.entries(a).reduce((i,l)=>{const[,{properties:{enabled:d}}]=l;if(!d)return i;const c=Xn(l);return i.push(c),i},[]);return[...n,...o]},[]),Bt=t=>Object.values(t).reduce((n,a)=>{const o=Yn(a);return[...n,...o]},[]),It=(t,n="")=>Object.entries(t).reduce((a,o)=>{const[i,l]=o;return be()(l)?[...a,...It(l,`${n}${i}.`)]:(l&&!be()(l)&&a.push(`${n}${i}`),a)},[]),wn=(t,n,{conditions:a,properties:o})=>Object.entries(o).reduce((i,l)=>{const[d,c]=l;return i.properties[d]=It(c),i},{action:t,subject:n,conditions:nt(a),properties:{}}),Qn=(t,n,{conditions:a})=>({action:t,subject:n,properties:{},conditions:nt(a)}),Jn=(t,n)=>Object.entries(n).reduce((o,i)=>{const[l,d]=i;if(!ke(d).some(u=>u))return o;if(!d?.properties?.enabled){const u=wn(l,t,d);return[...o,u]}if(!d.properties.enabled)return o;const m=Qn(l,t,d);return o.push(m),o},[]),Ft=t=>Object.entries(t).reduce((a,o)=>{const[i,l]=o,d=Jn(i,l);return[...a,...d]},[]),qn=t=>{const n=Bt(t.plugins),a=Bt(t.settings),o=Ft(t.collectionTypes),i=Ft(t.singleTypes);return[...n,...a,...o,...i]},_n=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:a},o)=>{const[{initialData:i,layouts:l,modifiedData:d},c]=(0,e.useReducer)(zn,Un,()=>Gn(t,a)),{formatMessage:m}=(0,W.Z)();(0,e.useImperativeHandle)(o,()=>({getPermissions(){const L=(0,$.difference)(i.collectionTypes,d.collectionTypes),T=(0,$.difference)(i.singleTypes,d.singleTypes),h={...L,...T};let k;return M()(h)?k=!1:k=Object.values(h).some(D=>Object.values(D).some(F=>S()(F,"conditions"))),{permissionsToSend:qn(d),didUpdateConditions:k}},resetForm(){c({type:"RESET_FORM"})},setFormAfterSubmit(){c({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(L,T,h,k)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:L,propertyName:T,rowName:h,value:k})},f=(L,T,h)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:L,actionId:T,value:h})},x=L=>{c({type:"ON_CHANGE_CONDITIONS",conditions:L})},j=(0,e.useCallback)(({target:{name:L,value:T}})=>{c({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:L,value:T})},[]),Z=(0,e.useCallback)(({target:{name:L,value:T}})=>{c({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:L,value:T})},[]);return e.createElement(Tn,{value:{availableConditions:t.conditions,modifiedData:d,onChangeConditions:x,onChangeSimpleCheckbox:j,onChangeParentCheckbox:Z,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:f}},e.createElement(b.v,{id:"tabs",label:m({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(v.m,null,_n.map(L=>e.createElement(v.O,{key:L.id},m({id:L.labelId,defaultMessage:L.defaultMessage})))),e.createElement(R.n,{style:{position:"relative"}},e.createElement(R.x,null,e.createElement(Et,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(R.x,null,e.createElement(Et,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(R.x,null,e.createElement(At,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(R.x,null,e.createElement(At,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:r().object,isFormDisabled:r().bool.isRequired,permissions:r().array};const es=(0,e.memo)(st)},63727:(z,I,s)=>{"use strict";s.r(I),s.d(I,{default:()=>O});var e=s(53547),b=s(5504),v=s(7694),R=s(16550),$=s(36364),A=s(57713),S=s(79371),E=s(75878),M=s(19442),X=s(26789),r=s(50781),W=s(60793),p=s(94649),P=s(27361),N=s.n(P),g=s(86896),C=s(14900),w=s(442),ue=s(78549),re=s(9370),ie=s(61585),y=s(28469),le=s(20603),Q=s(45697),G=s.n(Q);const _=({disabled:ne,role:Y,values:B,errors:q,onChange:pe,onBlur:de})=>{const{formatMessage:ee}=(0,g.Z)();return e.createElement(r.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.k,{justifyContent:"space-between"},e.createElement(r.x,null,e.createElement(r.x,null,e.createElement(ue.Z,{fontWeight:"bold"},Y?Y.name:ee({id:"global.details",defaultMessage:"Details"}))),e.createElement(r.x,null,e.createElement(ue.Z,{textColor:"neutral500",variant:"pi"},Y?Y.description:ee({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(M.z,{disabled:!0,variant:"secondary"},ee({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:Y.usersCount}))),e.createElement(re.r,{gap:4},e.createElement(ie.P,{col:6},e.createElement(y.o,{disabled:ne,name:"name",error:q.name&&ee({id:q.name}),label:ee({id:"global.name",defaultMessage:"Name"}),onChange:pe,onBlur:de,value:B.name||""})),e.createElement(ie.P,{col:6},e.createElement(le.g,{disabled:ne,label:ee({id:"global.description",defaultMessage:"Description"}),id:"description",error:q.name&&ee({id:q.name}),onChange:pe,onBlur:de},B.description||"")))))};_.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},_.propTypes={disabled:G().bool,errors:G().object.isRequired,onBlur:G().func.isRequired,onChange:G().func.isRequired,role:G().object,values:G().object};const xe=_;var me=s(87561);const oe=me.object().shape({name:me.string().required(b.translatedErrors.required)}),Ee=()=>{const ne=(0,b.useNotification)(),{formatMessage:Y}=(0,g.Z)(),{params:{id:B}}=(0,R.$B)("/settings/roles/:id"),[q,pe]=(0,e.useState)(!1),de=(0,e.useRef)(),{lockApp:ee,unlockApp:ce}=(0,b.useOverlayBlocker)(),{trackUsage:Ie}=(0,b.useTracking)(),{isLoading:Ae,data:Fe}=(0,C.U_)(B),{role:he,permissions:$e,isLoading:je,onSubmitSucceeded:Ne}=(0,C.Dq)(B),{put:De}=(0,b.useFetchClient)(),He=async ae=>{try{ee(),pe(!0);const{permissionsToSend:V,didUpdateConditions:K}=de.current.getPermissions();await De(`/admin/roles/${B}`,ae),he.code!=="strapi-super-admin"&&(await De(`/admin/roles/${B}/permissions`,{permissions:V}),K&&Ie("didUpdateConditions")),de.current.setFormAfterSubmit(),Ne({name:ae.name,description:ae.description}),ne({type:"success",message:{id:"notification.success.saved"}})}catch(V){console.error(V.response);const K=N()(V,"response.payload.message","An error occured"),ye=N()(V,"response.payload.data.permissions[0]",K);ne({type:"warning",message:ye})}finally{pe(!1),ce()}},Le=he.code==="strapi-super-admin";return e.createElement(A.o,null,e.createElement(b.SettingsPageTitle,{name:"Roles"}),e.createElement(p.Formik,{enableReinitialize:!0,initialValues:{name:he.name,description:he.description},onSubmit:He,validationSchema:oe,validateOnChange:!1},({handleSubmit:ae,values:V,errors:K,handleChange:ye,handleBlur:Ce})=>e.createElement("form",{onSubmit:ae},e.createElement(S.T,{primaryAction:e.createElement(E.k,{gap:2},e.createElement(M.z,{disabled:he.code==="strapi-super-admin",onClick:ae,loading:q,size:"L"},Y({id:"global.save",defaultMessage:"Save"}))),title:Y({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:Y({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(b.Link,{startIcon:e.createElement(W.Z,null),to:"/settings/roles"},Y({id:"global.back",defaultMessage:"Back"}))}),e.createElement(X.D,null,e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(xe,{isLoading:je,disabled:Le,errors:K,values:V,onChange:ye,onBlur:Ce,role:he}),!Ae&&!je?e.createElement(r.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(w.Z,{isFormDisabled:Le,permissions:$e,ref:de,layout:Fe})):e.createElement(r.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(b.LoadingIndicatorPage,null)))))))},O=()=>{const ne=(0,v.v9)($._),{isLoading:Y,allowedActions:{canRead:B,canUpdate:q}}=(0,b.useRBAC)({read:ne.settings.roles.read,update:ne.settings.roles.update});return Y?e.createElement(b.LoadingIndicatorPage,null):!B&&!q?e.createElement(R.l_,{to:"/"}):e.createElement(Ee,null)}},44174:z=>{function I(s,e,b,v){for(var R=-1,$=s==null?0:s.length;++R<$;){var A=s[R];e(v,A,b(A),s)}return v}z.exports=I},81119:(z,I,s)=>{var e=s(89881);function b(v,R,$,A){return e(v,function(S,E,M){R(A,S,$(S),M)}),A}z.exports=b},55189:(z,I,s)=>{var e=s(44174),b=s(81119),v=s(67206),R=s(1469);function $(A,S){return function(E,M){var X=R(E)?e:b,r=S?S():{};return X(E,A,v(M,2),r)}}z.exports=$},42348:(z,I,s)=>{var e=s(21078),b=1/0;function v(R){var $=R==null?0:R.length;return $?e(R,b):[]}z.exports=v},7739:(z,I,s)=>{var e=s(89465),b=s(55189),v=Object.prototype,R=v.hasOwnProperty,$=b(function(A,S,E){R.call(A,E)?A[E].push(S):e(A,E,[S])});z.exports=$},97104:(z,I,s)=>{"use strict";s.d(I,{U:()=>W,y:()=>X});var e=s(2790),b=s(53547),v=s(88972),R=s(7535),$=s(73879),A=s(78549),S=s(75878),E=s(50781);const M=({theme:p,expanded:P,variant:N,disabled:g,error:C})=>C?`1px solid ${p.colors.danger600} !important`:g?`1px solid ${p.colors.neutral150}`:P?`1px solid ${p.colors.primary600}`:N==="primary"?`1px solid ${p.colors.neutral0}`:`1px solid ${p.colors.neutral100}`,X=(0,v.default)(A.Z)``,r=(0,v.default)(E.x)`
  border: ${M};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:p})=>p.colors.primary600};

    ${X} {
      color: ${({theme:p,expanded:P})=>P?void 0:p.colors.primary700};
    }

    ${A.Z} {
      color: ${({theme:p,expanded:P})=>P?void 0:p.colors.primary600};
    }

    & > ${S.k} {
      background: ${({theme:p})=>p.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:p})=>p.colors.primary200};
    }
  }
`,W=({children:p,disabled:P=!1,error:N,expanded:g=!1,hasErrorMessage:C=!0,id:w,onToggle:ue,toggle:re,size:ie="M",variant:y="primary",shadow:le})=>{const Q=(0,$.M)(w),G=b.useMemo(()=>({expanded:g,onToggle:ue,toggle:re,id:Q,size:ie,variant:y,disabled:P}),[P,g,Q,ue,ie,re,y]);return(0,e.jsxs)(R.S.Provider,{value:G,children:[(0,e.jsx)(r,{"data-strapi-expanded":g,disabled:P,"aria-disabled":P,expanded:g,hasRadius:!0,variant:y,error:N,shadow:le,children:p}),N&&C&&(0,e.jsx)(E.x,{paddingTop:1,children:(0,e.jsx)(A.Z,{variant:"pi",textColor:"danger600",children:N})})]})}},37362:(z,I,s)=>{"use strict";s.d(I,{v:()=>R});var e=s(2790),b=s(7535),v=s(50781);const R=({children:$,...A})=>{const{expanded:S,id:E}=(0,b.A)();if(!S)return null;const M=`accordion-content-${E}`,X=`accordion-label-${E}`,r=`accordion-desc-${E}`;return(0,e.jsx)(v.x,{role:"region",id:M,"aria-labelledby":X,"aria-describedby":r,...A,children:$})}},7535:(z,I,s)=>{"use strict";s.d(I,{A:()=>v,S:()=>b});var e=s(53547);const b=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),v=()=>(0,e.useContext)(b)},27375:(z,I,s)=>{"use strict";s.d(I,{B:()=>p});var e=s(2790),b=s(21514),v=s(88972),R=s(97104),$=s(7535);const A=({expanded:P,disabled:N,variant:g})=>{let C="neutral100";return P?C="primary100":N?C="neutral150":g==="primary"&&(C="neutral0"),C};var S=s(90139),E=s(80907),M=s(75878),X=s(78549);const r=(0,v.default)(S.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:P,expanded:N})=>N?P.colors.primary600:P.colors.neutral500};
    }
  }
`,W=(0,v.default)(M.k)`
  min-height: ${({theme:P,size:N})=>P.sizes.accordions[N]};
  border-radius: ${({theme:P,expanded:N})=>N?`${P.borderRadius} ${P.borderRadius} 0 0`:P.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:P})=>P.colors.primary600};
      }
    }
  }
`,p=({title:P,description:N,as:g="span",togglePosition:C="right",action:w,...ue})=>{const{onToggle:re,toggle:ie,expanded:y,id:le,size:Q,variant:G,disabled:_}=(0,$.A)(),xe=`accordion-content-${le}`,me=`accordion-label-${le}`,Re=`accordion-desc-${le}`,oe=Q==="M"?6:4,Te=Q==="M"?oe:oe-2,Ee=A({expanded:y,disabled:_,variant:G}),Oe={as:g,fontWeight:Q==="S"?"bold":void 0,id:me,textColor:y?"primary600":"neutral700",ellipsis:!0,variant:Q==="M"?"delta":void 0},O=y?"primary600":"neutral600",ne=y?"primary200":"neutral200",Y=Q==="M"?`${32/16}rem`:`${24/16}rem`,B=()=>{_||(ie&&!re?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ie()):re&&re())},q=(0,e.jsx)(M.k,{justifyContent:"center",borderRadius:"50%",height:Y,width:Y,transform:y?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ne,cursor:_?"not-allowed":"pointer",onClick:B,shrink:0,children:(0,e.jsx)(E.J,{as:b.Z,width:Q==="M"?`${11/16}rem`:`${8/16}rem`,color:y?"primary600":"neutral600"})});return(0,e.jsx)(W,{paddingBottom:Te,paddingLeft:oe,paddingRight:oe,paddingTop:Te,background:Ee,expanded:y,size:Q,justifyContent:"space-between",cursor:_?"not-allowed":"",children:(0,e.jsxs)(M.k,{gap:3,flex:1,maxWidth:"100%",children:[C==="left"&&q,(0,e.jsx)(r,{onClick:B,"aria-disabled":_,"aria-expanded":y,"aria-controls":xe,"aria-labelledby":me,"data-strapi-accordion-toggle":!0,expanded:y,type:"button",flex:1,minWidth:0,...ue,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(R.y,{...Oe,children:P}),N&&(0,e.jsx)(X.Z,{as:"p",id:Re,textColor:O,children:N})]})}),C==="right"&&(0,e.jsxs)(M.k,{gap:3,children:[q,w]}),C==="left"&&w]})})}},31439:(z,I,s)=>{"use strict";s.d(I,{Q:()=>R});var e=s(2790),b=s(88972),v=s(55482);const R=({options:A,...S})=>(0,e.jsx)(v.NU,{...S,children:A.map(E=>"children"in E?(0,e.jsx)(v.Ab,{label:E.label,values:E.children.map(M=>M.value.toString()),children:E.children.map(M=>(0,e.jsx)($,{value:M.value,children:M.label},M.value))},E.label):(0,e.jsx)(v.ML,{value:E.value,children:E.label},E.value))}),$=(0,b.default)(v.ML)`
  padding-left: ${({theme:A})=>A.spaces[7]};
`},63321:(z,I,s)=>{"use strict";s.d(I,{O:()=>X});var e=s(85893),b=s(53547),v=s(45697),R=s(88972),$=s(41580),A=s(75515);const S=()=>(0,e.jsx)($.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(A.Z,{variant:"pi",textColor:"neutral500",children:"/"})});S.displayName="Divider";var E=s(11047);const M=(0,R.default)(E.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:r})=>`calc(-1*${r.spaces[2]})`};
  }
`,X=({label:r,children:W,...p})=>{const P=b.Children.toArray(W);return(0,e.jsx)($.x,{"aria-label":r,...p,children:(0,e.jsx)(M,{as:"ol",horizontal:!0,children:b.Children.map(P,(N,g)=>{const C=P.length>1&&g+1<P.length;return(0,e.jsxs)(E.k,{inline:!0,as:"li",children:[N,C&&(0,e.jsx)(S,{})]})})})})};X.displayName="Breadcrumbs",X.propTypes={children:v.oneOfType([v.arrayOf(v.node),v.node]).isRequired,label:v.string.isRequired}},36773:(z,I,s)=>{"use strict";s.d(I,{$:()=>A});var e=s(85893),b=s(53547),v=s(45697),R=s(41580),$=s(75515);const A=({children:S,isCurrent:E,...M})=>(0,e.jsx)(R.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)($.Z,{variant:"pi",textColor:"neutral800",fontWeight:E?"bold":"normal","aria-current":E,...M,children:S})});A.displayName="Crumb",A.defaultProps={isCurrent:!1},A.propTypes={children:v.node.isRequired,isCurrent:v.bool}}}]);
