"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5905],{3500:(oe,O,n)=>{n.r(O),n.d(O,{default:()=>rt});var e=n(53547),v=n(79371),m=n(75878),j=n(19442),J=n(26789),g=n(50781),l=n(5504),R=n(12978),S=n(8675),M=n(36670),X=n(60793),V=n(27361),r=n.n(V),f=n(18721),T=n.n(f),b=n(18446),C=n.n(b),B=n(11700),N=n.n(B),P=n(86896),G=n(16550),Q=n(51541),ge=n(42403),fe=n(6090),_=n(62351),Z=n(78549),Le=n(62009),je=n(45697),o=n.n(je),H=n(27523),he=n(47558),x=n(90635),$=n(88972);const ye=$.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,l.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,l.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:i})=>a?`background-color: ${i.colors.primary200};`:t?`background-color: ${i.colors.primary200};`:`background: ${i.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function ae({customRowComponent:t,component:a,isFromDynamicZone:i,isNestedInDZComponent:s,firstLoopComponentUid:p}){const{modifiedData:d}=(0,H.Z)(),{schema:{attributes:h}}=r()(d,["components",a],{schema:{attributes:[]}});return e.createElement(ye,{isChildOfDynamicZone:i,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(Ce,{customRowComponent:t,items:h,targetUid:a,firstLoopComponentUid:p||a,editTarget:"components",isFromDynamicZone:i,isNestedInDZComponent:s,isSub:!0,secondLoopComponentUid:p?a:null})))}ae.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},ae.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};const Ee=ae;var Be=n(15800),Ae=n(80907),be=n(25237);function le({isActive:t,icon:a}){return e.createElement(m.k,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%"},e.createElement(Ae.J,{as:be.c[a]||be.c.cube,height:5,width:5}))}le.defaultProps={isActive:!1,icon:"Cube"},le.propTypes={isActive:o().bool,icon:o().string};const xe=(0,$.default)(g.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,l.pxToRem)(8)};

  svg {
    width: ${(0,l.pxToRem)(10)};
    height: ${(0,l.pxToRem)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Ie=(0,$.default)(m.k)`
  width: ${(0,l.pxToRem)(140)};
  height: ${(0,l.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${xe} {
      display: block;
    }

    ${Z.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`;function re({component:t,dzName:a,index:i,isActive:s,isInDevelopmentMode:p,onClick:d}){const{modifiedData:h,removeComponentFromDynamicZone:A}=(0,H.Z)(),{schema:{icon:k,displayName:D}}=r()(h,["components",t],{schema:{}}),y=c=>{c.stopPropagation(),A(a,i)};return e.createElement(Ie,{alignItems:"center",direction:"column",className:s?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:d,role:"tab",tabIndex:s?0:-1,cursor:"pointer","aria-selected":s,"aria-controls":`dz-${a}-panel-${i}`,id:`dz-${a}-tab-${i}`},e.createElement(le,{icon:k,isActive:s}),e.createElement(g.x,{marginTop:1,maxWidth:"100%"},e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},D)),p&&e.createElement(xe,{as:"button",onClick:y},e.createElement(Be.Z,null)))}re.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},re.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};const Pe=re,we=(0,$.default)(R.Z)`
  width: ${(0,l.pxToRem)(32)};
  height: ${(0,l.pxToRem)(32)};
  padding: ${(0,l.pxToRem)(9)};
  border-radius: ${(0,l.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Fe=(0,$.default)(g.x)`
  height: ${(0,l.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Oe=(0,$.default)(m.k)`
  width: 100%;
  overflow-x: auto;
`,Se=(0,$.default)(g.x)`
  padding-top: ${(0,l.pxToRem)(90)};
`,Ue=(0,$.default)(m.k)`
  flex-shrink: 0;
  width: ${(0,l.pxToRem)(140)};
  height: ${(0,l.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function ie({customRowComponent:t,components:a,addComponent:i,name:s,targetUid:p}){const{isInDevelopmentMode:d}=(0,H.Z)(),[h,A]=(0,e.useState)(0),{formatMessage:k}=(0,P.Z)(),D=c=>{h!==c&&A(c)},y=()=>{i(s)};return e.createElement(ye,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Fe,{paddingLeft:8},e.createElement(Oe,{gap:2},d&&e.createElement("button",{type:"button",onClick:y},e.createElement(Ue,{direction:"column",alignItems:"stretch",gap:1},e.createElement(we,null),e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},k({id:(0,x.Z)("button.component.add"),formatMessage:"Add a component"})))),e.createElement(m.k,{role:"tablist",gap:2},a.map((c,u)=>e.createElement(Pe,{key:c,dzName:s,index:u,component:c,isActive:h===u,isInDevelopmentMode:d,onClick:()=>D(u)}))))),e.createElement(Se,null,a.map((c,u)=>{const E={customRowComponent:t,component:c};return e.createElement(g.x,{id:`dz-${s}-panel-${u}`,role:"tabpanel",tabindex:0,"aria-labelledby":`dz-${s}-tab-${u}`,key:c,style:{display:h===u?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(Ee,{...E,isFromDynamicZone:!0,targetUid:p,key:c}))))}))))}ie.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},ie.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};const We=ie,Ne=(0,$.default)(g.x)`
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
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,ze=(0,$.default)(g.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,ve=({children:t,icon:a,color:i,...s})=>e.createElement(ze,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...s},e.createElement(m.k,null,e.createElement(Ne,{color:i,"aria-hidden":!0,background:`${i}200`},a),e.createElement(g.x,{paddingLeft:3},e.createElement(Z.Z,{variant:"pi",fontWeight:"bold",textColor:`${i}600`},t))));ve.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};const Ke=ve,Ve=(0,$.default)(g.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`;function se({addComponentToDZ:t,customRowComponent:a,editTarget:i,firstLoopComponentUid:s,isFromDynamicZone:p,isMain:d,isNestedInDZComponent:h,isSub:A,items:k,secondLoopComponentUid:D,targetUid:y}){const{formatMessage:c}=(0,P.Z)(),{trackUsage:u}=(0,l.useTracking)(),{isInDevelopmentMode:E,modifiedData:z,isInContentTypeView:w}=(0,H.Z)(),{onOpenModalAddField:U}=(0,he.Z)(),I=()=>{u("hasClickedCTBAddFieldBanner"),U({forTarget:i,targetUid:y})};return y?k.length===0&&d?e.createElement(Q.i,{colCount:2,rowCount:2},e.createElement(ge.h,null,e.createElement(fe.Tr,null,e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.EmptyBodyTable,{action:e.createElement(j.z,{onClick:I,size:"L",startIcon:e.createElement(R.Z,null),variant:"secondary"},c({id:(0,x.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:w?{id:(0,x.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,x.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(Ve,null,e.createElement(g.x,{paddingLeft:6,paddingRight:d?6:0,...d&&{style:{overflowX:"auto"}}},e.createElement("table",null,d&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,k.map(F=>{const{type:K}=F,Y=a;return e.createElement(e.Fragment,{key:F.name},e.createElement(Y,{...F,isNestedInDZComponent:h,targetUid:y,editTarget:i,firstLoopComponentUid:s,isFromDynamicZone:p,secondLoopComponentUid:D}),K==="component"&&e.createElement(Ee,{...F,customRowComponent:a,targetUid:y,isNestedInDZComponent:p,editTarget:i,firstLoopComponentUid:s}),K==="dynamiczone"&&e.createElement(We,{...F,customRowComponent:a,addComponent:t,targetUid:y}))})))),d&&E&&e.createElement(Le.c,{icon:e.createElement(R.Z,null),onClick:I},c({id:(0,x.Z)(`form.button.add.field.to.${z.contentType?z.contentType.schema.kind:i||"collectionType"}`),defaultMessage:"Add another field"})),A&&E&&e.createElement(Ke,{icon:e.createElement(R.Z,null),onClick:I,color:p?"primary":"neutral"},c({id:(0,x.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(Q.i,{colCount:2,rowCount:2},e.createElement(ge.h,null,e.createElement(fe.Tr,null,e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.name",defaultMessage:"Name"}))),e.createElement(_.Th,null,e.createElement(Z.Z,{variant:"sigma",textColor:"neutral600"},c({id:"global.type",defaultMessage:"Type"}))))),e.createElement(l.EmptyBodyTable,{colSpan:2,content:{id:(0,x.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}se.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},se.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};const Ce=se;var Te=n(37527),He=n(34263),Je=n(35575);const Xe=(0,$.default)(g.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,Ge=$.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,Ze=t=>e.createElement(Xe,null,e.createElement(Ge,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ze.propTypes={color:o().string.isRequired};const Qe=Ze;var Ye=n(71243);const ce=({content:t})=>N()(t);ce.defaultProps={content:null},ce.propTypes={content:o().string};const qe=ce,_e=(0,$.default)(g.x)`
  position: relative;
`,de=({type:t,customField:a,repeatable:i})=>{const{formatMessage:s}=(0,P.Z)();let p=t;return["integer","biginteger","float","decimal"].includes(t)?p="number":["string"].includes(t)&&(p="text"),a?e.createElement(Z.Z,null,s({id:(0,x.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(Z.Z,null,s({id:(0,x.Z)(`attribute.${p}`),defaultMessage:t}),"\xA0",i&&s({id:(0,x.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};de.defaultProps={customField:null,repeatable:!1},de.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};const et=de;function me({configurable:t,customField:a,editTarget:i,firstLoopComponentUid:s,isFromDynamicZone:p,name:d,onClick:h,relation:A,repeatable:k,secondLoopComponentUid:D,target:y,targetUid:c,type:u}){const{contentTypes:E,isInDevelopmentMode:z,removeAttribute:w}=(0,H.Z)(),{formatMessage:U}=(0,P.Z)(),I=u==="relation"&&A.includes("morph"),F=["integer","biginteger","float","decimal"].includes(u)?"number":u,K=r()(E,[y],{}),Y=r()(K,["schema","displayName"],""),q=r()(K,"plugin"),ue=y?"relation":F,ee=()=>{I||t!==!1&&h(i,D||s||c,d,u,a)};let W;return D&&s?W=2:s?W=1:W=0,e.createElement(_e,{as:"tr",...(0,l.onRowClick)({fn:ee,condition:z&&t&&!I})},e.createElement("td",{style:{position:"relative"}},W!==0&&e.createElement(Qe,{color:p?"primary200":"neutral150"}),e.createElement(m.k,{paddingLeft:2,gap:4},e.createElement(Ye.Z,{type:ue,customField:a}),e.createElement(Z.Z,{fontWeight:"bold"},d))),e.createElement("td",null,y?e.createElement(Z.Z,null,U({id:(0,x.Z)(`modelPage.attribute.${I?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(qe,{content:Y}),"\xA0",q&&`(${U({id:(0,x.Z)("from"),defaultMessage:"from"})}: ${q})`)):e.createElement(et,{type:u,customField:a,repeatable:k})),e.createElement("td",null,z?e.createElement(m.k,{justifyContent:"flex-end",...l.stopPropagation},t?e.createElement(m.k,{gap:1},!I&&e.createElement(Te.h,{onClick:ee,label:`${U({id:"app.utils.edit",defaultMessage:"Edit"})} ${d}`,noBorder:!0,icon:e.createElement(M.Z,null)}),e.createElement(Te.h,{onClick:te=>{te.stopPropagation(),w(i,d,D||s||"")},label:`${U({id:"global.delete",defaultMessage:"Delete"})} ${d}`,noBorder:!0,icon:e.createElement(He.Z,null)})):e.createElement(Je.Z,null)):e.createElement(g.x,{height:(0,l.pxToRem)(32)})))}me.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},me.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};const tt=(0,e.memo)(me),nt=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a};var ot=n(57422);const at={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},pe=({disabled:t,isTemporary:a,isInContentTypeView:i,contentTypeKind:s,targetUid:p})=>{const{formatMessage:d}=(0,P.Z)(),{push:h}=(0,G.k6)(),{collectionTypesConfigurations:A,componentsConfigurations:k,singleTypesConfigurations:D}=at,y=d({id:"content-type-builder.form.button.configure-view"});let c=A;const u=()=>(a||h(i?`/content-manager/collectionType/${p}/configurations/edit`:`/content-manager/components/${p}/configurations/edit`),!1);return i&&s==="singleType"&&(c=D),i||(c=k),e.createElement(l.CheckPermissions,{permissions:c},e.createElement(j.z,{startIcon:e.createElement(ot.Z,null),variant:"tertiary",onClick:u,disabled:a||t},y))};pe.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},pe.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};const lt=(0,e.memo)(pe),rt=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:i,isInContentTypeView:s,submitData:p}=(0,H.Z)(),{formatMessage:d}=(0,P.Z)(),{trackUsage:h}=(0,l.useTracking)(),A=(0,G.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:k,onOpenModalAddField:D,onOpenModalEditField:y,onOpenModalEditSchema:c,onOpenModalEditCustomField:u}=(0,he.Z)(),E=s?"contentType":"component",z=[E,"schema","attributes"],w=r()(a,[E,"uid"]),U=r()(a,[E,"isTemporary"],!1),I=r()(a,[E,"schema","kind"],null),F=r()(a,z,[]),K=T()(t,[E,"plugin"]),Y=!C()(a,t),q=s?"contentType":"component",ue=L=>{k({dynamicZoneTarget:L,targetUid:w})},ee=async(L,$e,Re,Me,De)=>{const ke=nt(Me);De?u({forTarget:L,targetUid:$e,attributeName:Re,attributeType:ke,customFieldUid:De}):y({forTarget:L,targetUid:$e,attributeName:Re,attributeType:ke,step:Me==="component"?"2":null})};let W=r()(a,[E,"schema","displayName"],"");const te=r()(a,[E,"schema","kind"],""),ne=A?.params.currentUID==="create-content-type";!W&&ne&&(W=d({id:(0,x.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const it=()=>{const L=te||E;L==="collectionType"&&h("willEditNameOfContentType"),L==="singleType"&&h("willEditNameOfSingleType"),c({modalType:E,forTarget:E,targetUid:w,kind:L})};return e.createElement(e.Fragment,null,e.createElement(G.NL,{message:L=>L.hash==="#back"?!1:d({id:(0,x.Z)("prompt.unsaved")}),when:Y}),e.createElement(v.T,{id:"title",primaryAction:i&&e.createElement(m.k,{gap:2},!ne&&e.createElement(j.z,{startIcon:e.createElement(R.Z,null),variant:"secondary",onClick:()=>{D({forTarget:q,targetUid:w})}},d({id:(0,x.Z)("button.attributes.add.another")})),e.createElement(j.z,{startIcon:e.createElement(S.Z,null),onClick:()=>p(),type:"submit",disabled:C()(a,t)},d({id:"global.save",defaultMessage:"Save"}))),secondaryAction:i&&!K&&!ne&&e.createElement(j.z,{startIcon:e.createElement(M.Z,null),variant:"tertiary",onClick:it},d({id:"app.utils.edit",defaultMessage:"Edit"})),title:N()(W),subtitle:d({id:(0,x.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(l.Link,{startIcon:e.createElement(X.Z,null),to:"/plugins/content-type-builder/"},d({id:"global.back",defaultMessage:"Back"}))}),e.createElement(J.D,null,e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(m.k,{gap:2},e.createElement(lt,{key:"link-to-cm-settings-view",targetUid:w,isTemporary:U,isInContentTypeView:s,contentTypeKind:I,disabled:ne}))),e.createElement(g.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(Ce,{items:F,customRowComponent:L=>e.createElement(tt,{...L,onClick:ee}),addComponentToDZ:ue,targetUid:w,editTarget:q,isMain:!0})))))}},26789:(oe,O,n)=>{n.d(O,{D:()=>m});var e=n(2790),v=n(50781);const m=({children:j})=>(0,e.jsx)(v.x,{paddingLeft:10,paddingRight:10,children:j})},79371:(oe,O,n)=>{n.d(O,{T:()=>M});var e=n(2790),v=n(53547),m=n(88972);const j=r=>{const f=(0,v.useRef)(null),[T,b]=(0,v.useState)(!0),C=([B])=>{b(B.isIntersecting)};return(0,v.useEffect)(()=>{const B=f.current,N=new IntersectionObserver(C,r);return B&&N.observe(f.current),()=>{B&&N.disconnect()}},[f,r]),[f,T]};var J=n(79698);const g=(r,f)=>{const T=(0,J.W)(f);(0,v.useLayoutEffect)(()=>{const b=new ResizeObserver(T);return Array.isArray(r)?r.forEach(C=>{C.current&&b.observe(C.current)}):r.current&&b.observe(r.current),()=>{b.disconnect()}},[r,T])};var l=n(50781),R=n(75878),S=n(78549);const M=r=>{const f=(0,v.useRef)(null),[T,b]=(0,v.useState)(null),[C,B]=j({root:null,rootMargin:"0px",threshold:0});return g(C,()=>{C.current&&b(C.current.getBoundingClientRect())}),(0,v.useEffect)(()=>{f.current&&b(f.current.getBoundingClientRect())},[f]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:T?.height},ref:C,children:B&&(0,e.jsx)(V,{ref:f,...r})}),!B&&(0,e.jsx)(V,{...r,sticky:!0,width:T?.width})]})};M.displayName="HeaderLayout";const X=(0,m.default)(l.x)`
  width: ${({width:r})=>r?`${r/16}rem`:void 0};
  z-index: ${({theme:r})=>r.zIndices[1]};
`,V=v.forwardRef(({navigationAction:r,primaryAction:f,secondaryAction:T,subtitle:b,title:C,sticky:B,width:N,...P},G)=>{const Q=typeof b=="string";return B?(0,e.jsx)(X,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:N,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(R.k,{justifyContent:"space-between",children:[(0,e.jsxs)(R.k,{children:[r&&(0,e.jsx)(l.x,{paddingRight:3,children:r}),(0,e.jsxs)(l.x,{children:[(0,e.jsx)(S.Z,{variant:"beta",as:"h1",...P,children:C}),Q?(0,e.jsx)(S.Z,{variant:"pi",textColor:"neutral600",children:b}):b]}),T?(0,e.jsx)(l.x,{paddingLeft:4,children:T}):null]}),(0,e.jsx)(R.k,{children:f?(0,e.jsx)(l.x,{paddingLeft:2,children:f}):void 0})]})}):(0,e.jsxs)(l.x,{ref:G,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0,children:[r?(0,e.jsx)(l.x,{paddingBottom:2,children:r}):null,(0,e.jsxs)(R.k,{justifyContent:"space-between",children:[(0,e.jsxs)(R.k,{minWidth:0,children:[(0,e.jsx)(S.Z,{as:"h1",variant:"alpha",...P,children:C}),T?(0,e.jsx)(l.x,{paddingLeft:4,children:T}):null]}),f]}),Q?(0,e.jsx)(S.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:b}):b]})})},62009:(oe,O,n)=>{n.d(O,{c:()=>S});var e=n(2790),v=n(88972),m=n(50781),j=n(81984),J=n(75878),g=n(78549);const l=(0,v.default)(m.x)`
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
    fill: ${({theme:M})=>M.colors.primary600};
  }
`,R=(0,v.default)(m.x)`
  border-radius: 0 0 ${({theme:M})=>M.borderRadius} ${({theme:M})=>M.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,S=({children:M,icon:X,...V})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(j.i,{}),(0,e.jsx)(R,{as:"button",background:"primary100",padding:5,...V,children:(0,e.jsxs)(J.k,{children:[(0,e.jsx)(l,{"aria-hidden":!0,background:"primary200",children:X}),(0,e.jsx)(m.x,{paddingLeft:3,children:(0,e.jsx)(g.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:M})})]})})]})}}]);
