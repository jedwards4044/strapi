"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2573],{62573:(I,_,e)=>{e.r(_),e.d(_,{default:()=>p});var t=e(53547),P=e(45697),s=e.n(P),g=e(16364),i=e(50781),c=e(19442),m=e(60881),u=e(18189),D=e(78549),M=e(48683),O=e(86896);const n=({onChange:v,name:a,intlLabel:h,attribute:C,description:E,placeholder:y,error:T,value:r})=>{const{formatMessage:o}=(0,O.Z)(),[B,R]=(0,t.useState)(""),[A,d]=(0,t.useState)(!1);return t.createElement(i.x,null,t.createElement(g.o,{placeholder:y,label:o(h),name:a,id:a,hint:E&&o(E),error:T,onChange:l=>{R(l.target.value),v({target:{name:a,value:l.target.value,type:C.type}})},value:r,withTags:!0}),t.createElement(i.x,{paddingTop:2},t.createElement(c.z,{onClick:()=>d(l=>!l)},"Preview")),A&&t.createElement(m.P,{style:{width:"95vw",height:"95vh"},onClose:()=>d(l=>!l),labelledBy:"title"},t.createElement(u.x,null,t.createElement(D.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},"Page Preview")),t.createElement(M.f,{style:{maxHeight:"none"}},t.createElement("iframe",{src:"https://jremodeling.vercel.app/"+r,style:{height:"83vh"},title:"https://jremodeling.vercel.app/"+r,width:"100%",allowFullScreen:"true"}))))};n.defaultProps={description:null,error:null,labelAction:null,required:!1,value:""},n.propTypes={intlLabel:s().object.isRequired,onChange:s().func.isRequired,attribute:s().object.isRequired,name:s().string.isRequired,description:s().object,error:s().string,labelAction:s().object,required:s().bool,value:s().string};const p=n}}]);