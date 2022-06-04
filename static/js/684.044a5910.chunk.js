"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[684],{9684:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var a=t(1413),o=(t(2791),t(3044)),n=t(3736),i=t(6686),l=t(1889),s=t(4554),c=t(403),d=t(890),u=t(1614),m=t(3504),v=t(9434),f=t(4704),h=t(1134),p=t(184);function g(e){return(0,p.jsxs)(d.Z,(0,a.Z)((0,a.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ","PhoneBook",(new Date).getFullYear(),"."]}))}function x(){var e,r,t,x,Z,y,b,w,j=(0,h.cI)(),k=j.register,S=j.handleSubmit,z=j.reset,q=j.formState.errors,P=(0,v.I0)();return(0,p.jsxs)(u.Z,{component:"main",maxWidth:"xs",children:[(0,p.jsxs)(s.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,p.jsx)(o.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,p.jsx)(c.Z,{})}),(0,p.jsx)(d.Z,{component:"h1",variant:"h5",children:"Register"}),(0,p.jsxs)(s.Z,{component:"form",noValidate:!0,onSubmit:S((function(e){P(f.r5.register(e)),z()})),sx:{mt:3},children:[(0,p.jsx)(i.Z,(0,a.Z)({error:"required"===(null===(e=q.name)||void 0===e?void 0:e.type),autoComplete:"name",margin:"normal",required:!0,fullWidth:!0,type:"text",id:"name",label:"Name",autoFocus:!0,helperText:null===(r=q.name)||void 0===r?void 0:r.message},k("name",{required:"Name is required"}))),(0,p.jsx)(i.Z,(0,a.Z)({error:"pattern"===(null===(t=q.email)||void 0===t?void 0:t.type)||"required"===(null===(x=q.email)||void 0===x?void 0:x.type),required:!0,margin:"normal",fullWidth:!0,type:"email",id:"email",label:"Email Address",autoComplete:"email",helperText:null===(Z=q.email)||void 0===Z?void 0:Z.message},k("email",{required:"Email is required",pattern:{value:/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,message:"Invalid email"}}))),(0,p.jsx)(i.Z,(0,a.Z)({error:"required"===(null===(y=q.password)||void 0===y?void 0:y.type)||"minLength"===(null===(b=q.password)||void 0===b?void 0:b.type),margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"new-password",helperText:null===(w=q.password)||void 0===w?void 0:w.message},k("password",{required:"Password is required",minLength:{value:7,message:"Min length 7"}}))),(0,p.jsx)(n.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Register"}),(0,p.jsx)(l.ZP,{container:!0,justifyContent:"flex-end",children:(0,p.jsx)(l.ZP,{item:!0,children:(0,p.jsx)(m.rU,{to:"/login",children:"Already have an account? Login"})})})]})]}),(0,p.jsx)(g,{sx:{mt:5}})]})}},403:function(e,r,t){var a=t(5318);r.Z=void 0;var o=a(t(5649)),n=t(184),i=(0,o.default)((0,n.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=i},3044:function(e,r,t){t.d(r,{Z:function(){return y}});var a=t(885),o=t(3366),n=t(7462),i=t(2791),l=t(8182),s=t(4419),c=t(6934),d=t(1402),u=t(9201),m=t(184),v=(0,u.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=t(1217);function h(e){return(0,f.Z)("MuiAvatar",e)}(0,t(5878).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:r.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:r.palette.background.default,backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]})})),x=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,c.ZP)(v,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var y=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiAvatar"}),c=t.alt,u=t.children,v=t.className,f=t.component,y=void 0===f?"div":f,b=t.imgProps,w=t.sizes,j=t.src,k=t.srcSet,S=t.variant,z=void 0===S?"circular":S,q=(0,o.Z)(t,p),P=null,R=function(e){var r=e.crossOrigin,t=e.referrerPolicy,o=e.src,n=e.srcSet,l=i.useState(!1),s=(0,a.Z)(l,2),c=s[0],d=s[1];return i.useEffect((function(){if(o||n){d(!1);var e=!0,a=new Image;return a.onload=function(){e&&d("loaded")},a.onerror=function(){e&&d("error")},a.crossOrigin=r,a.referrerPolicy=t,a.src=o,n&&(a.srcset=n),function(){e=!1}}}),[r,t,o,n]),c}((0,n.Z)({},b,{src:j,srcSet:k})),_=j||k,M=_&&"error"!==R,A=(0,n.Z)({},t,{colorDefault:!M,component:y,variant:z}),C=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(t,h,r)}(A);return P=M?(0,m.jsx)(x,(0,n.Z)({alt:c,src:j,srcSet:k,sizes:w,ownerState:A,className:C.img},b)):null!=u?u:_&&c?c[0]:(0,m.jsx)(Z,{className:C.fallback}),(0,m.jsx)(g,(0,n.Z)({as:y,ownerState:A,className:(0,l.Z)(C.root,v),ref:r},q,{children:P}))}))}}]);
//# sourceMappingURL=684.044a5910.chunk.js.map