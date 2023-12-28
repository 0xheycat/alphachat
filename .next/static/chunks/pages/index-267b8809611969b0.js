(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{20640:function(e,t,n){"use strict";var o=n(11742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,r,s,l,i,c,d,u,m=!1;t||(t={}),s=t.debug||!1;try{if(i=o(),c=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=a[t.format]||a.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(u),c.selectNodeContents(u),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");m=!0}catch(o){s&&console.error("unable to copy using execCommand: ",o),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),m=!0}catch(o){s&&console.error("unable to copy using clipboardData: ",o),s&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",r=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=n.replace(/#{\s*key\s*}/g,r),window.prompt(l,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),u&&document.body.removeChild(u),i()}return m}},48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(29722)}])},90400:function(e,t,n){"use strict";n.d(t,{p:function(){return R}});var o,a,r=n(85893),s=n(67294),l=n(5152),i=n.n(l),c=n(11163),d=n(82175),u=n(42138),m=n(61802),_=n(38734),p=n(32819),h=n(25169),x=n(84498),f=n(85528),w=n(16310);(o=a||(a={})).name="name",o.password="password";let b=()=>w.Ry({[a.name]:w.Z_().test(a.name,"Invalid name entered",e=>{var t;return!!(e&&(null===(t=e.trim())||void 0===t?void 0:t.length))}).required("Required").max((0,f.i)().MAX_USER_NAME_SYMBOLS,"Must be less than ".concat((0,f.i)().MAX_USER_NAME_SYMBOLS," characters")),[a.password]:w.Z_().test(a.password,"Invalid password entered",e=>{var t;return!!(e&&(null===(t=e.trim())||void 0===t?void 0:t.length))}).required("Required")}),v={[a.name]:"",[a.password]:""};var N=n(78024),C=n.n(N);let g=(0,f.i)(),j=(0,s.memo)(e=>{let{onCreateRoom:t}=e,{error:n}=(0,x.Z)(),[o,l]=(0,s.useState)(!1),[i,c]=(0,s.useState)(!1),f=(0,s.useMemo)(()=>b(),[]),w=(0,s.useRef)(null),N=(0,s.useCallback)(()=>{w.current&&w.current.handleSubmit()},[]),j=(0,s.useCallback)(async e=>{try{c(!0);let{password:n="",name:o}=e||{};if(!n)throw Error("password required");if(!o)throw Error("name required");let a=await (0,p.pR)(n,o),{error:r}=await a.json();if(a.ok&&!r)null==t||t();else throw Error(r||"Unknown error")}catch(e){n((null==e?void 0:e.message)||"Unknown error")}finally{c(!1)}},[n,t]),k=(0,s.useCallback)(()=>{l(!0),N()},[N]),y=(0,s.useCallback)(e=>e.preventDefault(),[]);return(0,r.jsx)(d.J9,{innerRef:w,validateOnChange:o,validateOnBlur:o,initialValues:v,onSubmit:j,enableReinitialize:!0,validationSchema:f,children:(0,r.jsx)("form",{onSubmit:y,children:(0,r.jsxs)(u.x,{direction:"column",children:[i&&(0,r.jsx)(h.$,{fullscreen:!0}),(0,r.jsx)(u.x,{className:C().title,children:"Join Chat Room"}),(0,r.jsxs)(u.x,{direction:"column",className:C().wrapComponent,children:[(0,r.jsx)(_.F,{autoFocus:!0,placeholder:"User name",label:"User Name",showCounter:!0,isValidateRange:!0,max:g.MAX_USER_NAME_SYMBOLS,name:a.name,classNameWrap:C().inputWrap}),(0,r.jsx)(_.F,{placeholder:"Password",classNameWrap:C().inputWrapPassword,label:"Password",name:a.password,type:"text"})]}),(0,r.jsx)(m.z,{onClick:k,className:C().button,children:"Join"})]})})})});var k=n(56442),y=n.n(k);let S=i()(()=>Promise.all([n.e(453),n.e(639)]).then(n.bind(n,59639)),{loadableGenerated:{webpack:()=>[59639]},ssr:!1}),R=(0,s.memo)(e=>{let{isOpen:t,onClose:n}=e,{push:o}=(0,c.useRouter)(),a=(0,s.useCallback)(()=>{o("/room")},[o]);return(0,r.jsx)(S,{size:"lg",show:t,showShadow:!0,onClose:n,onHide:n,dialogClassName:y().dialog,children:(0,r.jsx)(j,{onCreateRoom:a})})})},89459:function(e,t,n){"use strict";n.d(t,{Kk:function(){return r},TN:function(){return o},bZ:function(){return l},fL:function(){return a},q$:function(){return s}});let o="Decentralized Confidential Web3 Chat",a="Created by the Super Protocol team to illustrate the capabilities of hosting dynamic Web3 apps in decentralized confidential environments. Cowabunga!",r="https://superprotocol.com",s="https://docs.superprotocol.com/developers/offers/superchat",l=["Create Chat Room","Return to Chat","Join Chat Room"]},85528:function(e,t,n){"use strict";n.d(t,{i:function(){return a}});var o=n(34155);let a=()=>({MAX_USER_NAME_SYMBOLS:Number(o.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS||0)||15,MAX_ROOM_NAME_SYMBOLS:Number(o.env.NEXT_PUBLIC_MAX_USER_NAME_SYMBOLS||0)||30,MAX_MESSAGE_SYMBOLS:Number(o.env.NEXT_PUBLIC_MAX_MESSAGE_SYMBOLS||0)||500,PAGE_SIZE:10,MAX_PAGE_SIZE:100})},29722:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eK}});var o,a,r=n(85893),s=n(67294),l=n(11163),i=n(28760),c=n(42138),d=n(64625),u=n.n(d),m=n(5152),_=n.n(m),p=n(94184),h=n.n(p),x=n(81740),f=n(79719),w=n(84498),b=n(98824),v=n(61802),N=n(84709),C=n(47357),g=n(34039),j=n(32819),k=n(73448),y=n.n(k);let S=e=>{let{roomName:t,domainUrl:n,connectPassword:o,deletePassword:a}=e||{};return"Below are admin credentials for chat room “".concat(t,"”.\nPlease do not share the Passphrase to Delete with others: they will be able to destroy the chat room and all conversations.\n\nChat URL:\n").concat(n,"\n\nPassword to Join:\n").concat(o,"\n\nPassphrase to Delete:\n").concat(a)},R=(0,s.memo)(e=>{let{connectPassword:t,deletePassword:n,userName:o,roomName:a}=e,{count:i}=(0,b.Z)(),{isMobile:d}=(0,f.XA)(),{push:u}=(0,l.useRouter)(),{error:m,success:_}=(0,w.Z)(),[p,k]=(0,s.useState)(!1),R=(0,s.useCallback)(async()=>{try{k(!0);let e=await (0,j.pR)(t,o),{error:n}=await e.json();if(e.ok&&!n)u("/room");else throw Error(n)}catch(e){m((null==e?void 0:e.message)||"Unknown error")}finally{k(!1)}},[u,o,t,m]),M=(0,s.useCallback)(()=>{_("Your room delete phrase copied")},[_]),D=(0,s.useCallback)(e=>e.preventDefault(),[]),E=(0,s.useMemo)(()=>S({connectPassword:t,domainUrl:(0,x.AT)(),roomName:a,deletePassword:n}),[t,a,n]);return(0,r.jsx)("form",{onSubmit:D,children:(0,r.jsxs)(c.x,{className:h()(y().container,{[y().containerMobile]:d}),children:[(0,r.jsx)(c.x,{direction:"column",alignItems:"center",justifyContent:"center",className:h()(y().block,y().blockAttention),children:(0,r.jsx)(c.x,{className:y().attentionWrap,children:(0,r.jsx)(N.l,{text:"Please save the Passphrase to Delete. It will not be available after this step and there is no recovery! You will need this passphrase to irrevocably delete your chat room and all conversation history.",title:"Attention!"})})}),(0,r.jsxs)(c.x,{direction:"column",className:y().block,children:[(0,r.jsx)(C.J,{connectPassword:t,domainUrl:(0,x.AT)(),roomName:a,className:y().copyInfo}),(0,r.jsx)(g.Z,{copyText:E,title:"Passphrase to Delete",text:n,className:y().block,onCopy:M}),(0,r.jsxs)(v.z,{className:y().btn,disabled:p||!!i,type:"submit",onClick:R,children:["Start Chatting",!!i&&(0,r.jsxs)(r.Fragment,{children:["\xa0(in ",i," sec)"]})]})]})]})})});var M=n(82175),D=n(25169),E=n(83246),T=n(85528);(o=a||(a={})).userName="userName",o.roomName="roomName";var A=n(16310);let B=(0,T.i)(),P=()=>A.Ry({[a.userName]:A.Z_().test(a.userName,"Invalid user name entered",e=>{var t;return!!(e&&(null===(t=e.trim())||void 0===t?void 0:t.length))}).required("Required").max(B.MAX_USER_NAME_SYMBOLS,"Must be less than ".concat(B.MAX_USER_NAME_SYMBOLS," characters")),[a.roomName]:A.Z_().test(a.roomName,"Invalid room name entered",e=>{var t;return!!(e&&(null===(t=e.trim())||void 0===t?void 0:t.length))}).required("Required").max(B.MAX_ROOM_NAME_SYMBOLS,"Must be less than ".concat(B.MAX_ROOM_NAME_SYMBOLS," characters"))}),O=()=>({userName:"",roomName:""});var U=n(40092),L=n.n(U);let I=(0,T.i)(),X=(0,s.memo)(e=>{let{onCreateRoom:t}=e,{error:n}=(0,w.Z)(),[o,l]=(0,s.useState)(!1),[i,d]=(0,s.useState)(!1),u=(0,s.useMemo)(()=>P(),[]),[m]=(0,s.useState)(O()),_=(0,s.useRef)(null),p=(0,s.useCallback)(()=>{_.current&&_.current.handleSubmit()},[]),h=(0,s.useCallback)(async()=>{l(!0),p()},[p]),x=(0,s.useCallback)(async(e,o)=>{let{resetForm:r}=o;d(!0),l(!0);try{var s;let n=await (0,j.dB)(null===(s=e[a.roomName])||void 0===s?void 0:s.trim(),e[a.userName]),{data:o,error:l}=await n.json();if(n.ok&&o&&!l)t({room:o,userName:e[a.userName]}),r({values:O()});else throw Error(l||"Unknown error")}catch(e){n(e.message)}d(!1)},[t,n]),f=(0,s.useCallback)(e=>e.preventDefault(),[]);return(0,r.jsx)(M.J9,{innerRef:_,validateOnChange:o,validateOnBlur:!1,initialValues:m,enableReinitialize:!0,validationSchema:u,onSubmit:x,children:(0,r.jsx)("form",{onSubmit:f,children:(0,r.jsxs)(c.x,{direction:"column",children:[i&&(0,r.jsx)(D.$,{fullscreen:!0}),(0,r.jsx)(c.x,{className:L().title,children:"Create New Chat Room"}),(0,r.jsxs)(c.x,{direction:"column",children:[(0,r.jsx)(E.F,{autoFocus:!0,placeholder:"Room name",label:"Enter Room Name",name:a.roomName,showCounter:!0,isValidateRange:!0,max:I.MAX_ROOM_NAME_SYMBOLS,classNameWrap:L().inputWrap}),(0,r.jsx)(E.F,{placeholder:"User name",label:"Enter User Name",name:a.userName,max:I.MAX_USER_NAME_SYMBOLS,showCounter:!0,isValidateRange:!0,classNameWrap:L().inputWrapUserName}),(0,r.jsx)(v.z,{className:L().btn,variant:"base",onClick:h,children:"Create new room"})]})]})})})});var W=n(32344),F=n.n(W);let z=_()(()=>Promise.all([n.e(453),n.e(639)]).then(n.bind(n,59639)),{loadableGenerated:{webpack:()=>[59639]},ssr:!1}),G=(0,s.memo)(e=>{let{isOpen:t,onClose:n}=e,[o,a]=(0,s.useState)(null),l=(0,s.useCallback)(e=>{a(e),null==n||n()},[n]),i=(0,s.useCallback)(()=>{a(null)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z,{size:"lg",show:t,showShadow:!0,onClose:n,onHide:n,dialogClassName:F().dialog,children:(0,r.jsx)(X,{onCreateRoom:l})}),(0,r.jsx)(z,{show:!!o,showShadow:!0,size:"xl",onClose:i,children:!!(null==o?void 0:o.room)&&(0,r.jsx)(R,{connectPassword:o.room.connectPassword,deletePassword:o.room.deletePassword,userName:o.userName,roomName:o.room.roomName})})]})});var Y=n(90400),Z=n(50019),q=n.n(Z);let J=_()(()=>Promise.all([n.e(453),n.e(639)]).then(n.bind(n,59639)),{loadableGenerated:{webpack:()=>[59639]},ssr:!1}),H=(0,s.memo)(e=>{let{show:t,onClose:n}=e;return(0,r.jsx)(J,{size:"lg",show:t,showShadow:!0,onClose:n,children:(0,r.jsxs)(c.x,{direction:"column",children:[(0,r.jsx)(N.l,{title:"Your Room has been deleted",className:q().attention}),(0,r.jsx)(v.z,{onClick:n,children:"Ok"})]})})});var V=n(85217),K=n(25675),Q=n.n(K),$=n(41664),ee=n.n($),et=n(89459),en=n(22234),eo=n.n(en);let ea=_()(()=>n.e(663).then(n.bind(n,63663)),{loadableGenerated:{webpack:()=>[63663]},ssr:!1}),er=e=>(0,r.jsx)(c.x,{className:eo().wrapper,children:(0,r.jsxs)(c.x,{className:eo().content,children:[(0,r.jsxs)(c.x,{direction:"column",className:eo().describe,children:[(0,r.jsx)("div",{className:eo().title,children:et.TN}),(0,r.jsx)(ee(),{href:et.Kk,target:"_blank",className:h()(eo().linkImage,eo().link),children:(0,r.jsx)(Q(),{src:"poweredby.svg",alt:"",width:151,height:44})}),(0,r.jsx)("div",{className:eo().text,children:et.fL}),(0,r.jsx)(ea,{...e})]}),(0,r.jsx)(c.x,{className:eo().img,children:(0,r.jsx)(Q(),{src:"/chat_bg.webp",alt:"",fill:!0})}),(0,r.jsx)(ee(),{href:et.q$,target:"_blank",className:h()(eo().linkGuideMobile,eo().link),children:"Read chat guide"})]})});var es=n(15146),el=n(86544);let ei=()=>(0,el.yF)()?"":"".concat(window.location.protocol,"//").concat(window.location.host),ec=()=>{let e=encodeURIComponent(ei()),t=encodeURIComponent("\uD83D\uDCA5Testnet Phase 4 is here – the new release from @Super__Protocol, the confidential Web3 cloud! Developers can now deploy their own solutions, like this Super Chat app, secured by #confidentialcomputing. Check it out!");return"https://twitter.com/intent/tweet?text=".concat(t,"&url=").concat(e)};var ed=n(68456),eu=n.n(ed);let em=()=>{let e=(0,s.useMemo)(()=>ec(),[]),t=(0,s.useCallback)(()=>{window.open(e,"_blank")},[e]);return(0,r.jsx)(c.x,{className:eu().content,alignItems:"center",justifyContent:"center",children:(0,r.jsxs)(c.x,{children:[(0,r.jsx)(es.J,{width:24,name:"twitter",className:eu().icon}),(0,r.jsx)("div",{className:eu().textGroup,children:(0,r.jsx)("span",{className:eu().text,onClick:t,children:"Share to Twitter"})})]})})},e_=[{title:"Decentralized",text:"This chat app is deployed on multiple instances within the Super Protocol network for increased fault tolerance. Conversations are encrypted and saved to decentralized databases."},{title:"Confidential",text:"We believe that user privacy is paramaunt. Decentralized confidential computing ensures that even the developers of this app - that’s us! - don’t have access to the conversations."},{title:"Chat",text:"Oh, just have fun with it! \uD83D\uDE42 But remember that only people with the password can read your confidential conversations. Choose wisely!"}],ep=[{title:"Participate in Testnet 4",text:"This chat app is offered for deployment on the Super Protocol Testnet and it can be yours too. Deploy it with the Marketplace GUI or CLI and have it on your own domain. It’s easier than it sounds.",hrefText:"Learn About Testnet 4",href:"https://docs.superprotocol.com/testnet"},{title:"Join Developer Community",text:"Super Protocol is operating on the forward edge of innovations: decentralized confidential computing for Web3. We strongly believe that this is the future. Do you? Be with us for the Next Big Thing!",hrefText:"Learn About Devs Community",href:"https://docs.superprotocol.com/developers/"}],eh=["gradient1","gradient2"],ex=["radial1","radial2"];var ef=n(45237),ew=n.n(ef);let eb=()=>(0,r.jsxs)(c.x,{className:ew().content,direction:"column",alignItems:"center",children:[(0,r.jsx)(c.x,{className:ew().textBoxes,children:e_.map(e=>{let{title:t,text:n}=e;return(0,r.jsxs)(c.x,{direction:"column",className:ew().textBox,children:[(0,r.jsx)("span",{className:h()(ew().textTitle,ew().ma15),children:t}),(0,r.jsx)("div",{className:ew().text,children:n})]},t)})}),(0,r.jsx)(em,{}),(0,r.jsx)(c.x,{className:ew().linkBoxes,children:ep.map((e,t)=>{let{href:n,hrefText:o,text:a,title:s}=e;return(0,r.jsx)("div",{className:h()(ew().wrap,ew()[eh[t]]),children:(0,r.jsxs)(c.x,{className:h()(ew().box,ew()[ex[t]]),direction:"column",children:[(0,r.jsx)("span",{className:h()(ew().textTitle,ew().ma10),children:s}),(0,r.jsx)("div",{className:ew().text,children:a}),(0,r.jsx)(ee(),{href:n,target:"_blank",className:ew().link,children:o})]},s)},t)})})]}),ev=["Deploy your own instance of the SuperChat.","Deploy your own dynamic Next.js applications.","Deploy ML/AI Python scripts, web pages...","...and more!"],eN=[{text:"Read Marketplace GUI Guide",href:"https://docs.superprotocol.com/developers/marketplace/walkthrough"},{text:"Read CLI Deployment Guides",href:"https://docs.dev.superprotocol.com/developers/deployment_guides"}];var eC=n(96955),eg=n.n(eC);let ej=(0,s.memo)((0,s.forwardRef)((e,t)=>{let{data:n,slideWidth:o,slideHeight:a}=e,l=(0,s.useRef)(null),[i,d]=(0,s.useState)(""),[u,m]=(0,s.useState)(!1),_=(0,s.useCallback)(()=>{var e;let t=Array.from(null===(e=l.current)||void 0===e?void 0:e.children);t.forEach((e,t)=>{e.style.left="".concat(o*(t-1),"px")})},[o]);(0,s.useEffect)(()=>{l&&_()},[_]);let p=(0,s.useCallback)((e,t)=>{l.current.style.transform=e,l.current.style.transition=t||"transform 250ms ease-in"},[]),h=(0,s.useCallback)(()=>{p("translateX(-".concat(o,"px)")),d("next"),m(!0)},[o,p]),x=(0,s.useCallback)(()=>{p("translateX(".concat(o,"px)")),d("prev"),m(!0)},[o,p]);(0,s.useImperativeHandle)(t,()=>({clickNext(){u||h()},clickPrev(){u||x()}}),[h,x,u]);let f=(0,s.useCallback)(()=>{_(),p("translateX(0)","none"),d("")},[_,p]),w=(0,s.useCallback)(e=>{var t,n,o,a;if(e.target!==l.current||!i)return;m(!1);let r=null==l?void 0:null===(t=l.current)||void 0===t?void 0:t.lastChild,s=null==l?void 0:null===(n=l.current)||void 0===n?void 0:n.firstChild;"prev"===i&&(null==l||null===(o=l.current)||void 0===o||o.insertBefore(r,s)),"next"===i&&(null==l||null===(a=l.current)||void 0===a||a.appendChild(s)),f()},[f,i]),b=(0,s.useMemo)(()=>({height:"".concat(a,"px")}),[a]),v=(0,s.useMemo)(()=>({width:"".concat(o,"px")}),[o]);return(0,r.jsx)(c.x,{className:eg().container,justifyContent:"center",style:v,children:(0,r.jsx)(c.x,{className:eg().track,ref:l,onTransitionEnd:w,style:b,children:n})})}));var ek=n(11234),ey=n(6969),eS=n(98146),eR=n.n(eS);let eM=(0,s.memo)(e=>{let{src:t,setSlideWidth:n,setSlideHeight:o,idx:a,width:l}=e,i=(0,s.useRef)(null),c=(0,ey.D)(l);(0,s.useEffect)(()=>{if(0!==a)return;let e=new Image;e.src=t,e.onload=()=>{var e,t;let a=null==i?void 0:null===(e=i.current)||void 0===e?void 0:e.getBoundingClientRect().height,r=null==i?void 0:null===(t=i.current)||void 0===t?void 0:t.getBoundingClientRect().width;o(a),n(r)}},[t,o,n,a]),(0,s.useEffect)(()=>{if(c!==l){var e,t;let a=null==i?void 0:null===(e=i.current)||void 0===e?void 0:e.getBoundingClientRect().width,r=null==i?void 0:null===(t=i.current)||void 0===t?void 0:t.getBoundingClientRect().height;n(a),o(r)}},[n,o,l,c]);let d=(0,s.useMemo)(()=>l<=770?{width:"".concat(l-60,"px")}:void 0,[l]);return(0,r.jsx)("div",{className:eR().slide,children:(0,r.jsx)(Q(),{src:t,alt:"",width:711,height:415,className:eR().image,ref:i,style:d})})});var eD=n(30182),eE=n.n(eD);let eT=e=>{let{current:t,setDirection:n,width:o}=e,a=(0,s.useCallback)((e,t)=>{e.preventDefault(),n(t)},[n]),l=(0,s.useMemo)(()=>o<=770?{width:"".concat(o/3-30,"px")}:void 0,[o]);return(0,r.jsx)(c.x,{className:eE().wrap,justifyContent:"center",children:(0,r.jsx)(c.x,{className:eE().lines,children:Array.from([,,,].keys()).map(e=>(0,r.jsxs)("div",{className:eE().box,onClick:t=>a(t,e),style:l,children:[(0,r.jsx)("span",{className:eE().line}),e===t&&(0,r.jsx)("span",{className:h()(eE().fill,eE().show)})]},e))})})},eA=()=>["/photo1.webp","/photo2.webp","/photo3.webp"];var eB=n(4841),eP=n.n(eB);let eO=(0,s.memo)(()=>{let{width:e}=(0,ek.i)(),t=(0,s.useRef)(),n=(0,s.useRef)(),[o,a]=(0,s.useState)(0),[l,i]=(0,s.useState)(710),[d,u]=(0,s.useState)(415),m=(0,s.useMemo)(()=>(0,r.jsx)(r.Fragment,{children:eA().map((t,n)=>(0,r.jsx)(eM,{key:n,src:t,setSlideWidth:i,setSlideHeight:u,idx:n,width:e}))}),[e]),_=(0,s.useCallback)(e=>{a(t=>t===e?e:t<e&&!(2===e&&0===t)||0===e&&2===t?(n.current.clickNext(),e):(n.current.clickPrev(),e))},[]),p=(0,s.useCallback)(()=>{t.current&&clearInterval(t.current),t.current=window.setInterval(()=>{n.current&&(n.current.clickNext(),a(e=>2===e?0:e+1))},6e3)},[]);return(0,s.useEffect)(()=>(p(),()=>{t.current&&clearInterval(t.current)}),[p]),(0,r.jsxs)(c.x,{direction:"column",className:eP().sliderGroup,children:[(0,r.jsx)("div",{className:eP().wrap,children:(0,r.jsx)(ej,{data:m,slideHeight:d,slideWidth:l,ref:n})}),(0,r.jsx)(eT,{current:o,setDirection:_,width:e})]})});var eU=n(50401),eL=n.n(eU);let eI=()=>(0,r.jsxs)(c.x,{className:eL().content,children:[(0,r.jsxs)(c.x,{className:eL().left,direction:"column",children:[(0,r.jsx)("div",{className:eL().title,children:"Deploy apps on Super Protocol"}),(0,r.jsx)("div",{className:eL().text,children:"Super Protocol is on a mission to provide decentralized confidential computing resources for Web3 applications."}),(0,r.jsx)("ul",{className:eL().ul,children:ev.map((e,t)=>(0,r.jsx)("li",{children:e},t))}),eN.map((e,t)=>{let{text:n,href:o}=e;return(0,r.jsx)(ee(),{href:o,target:"_blank",className:eL().link,children:n},t)})]}),(0,r.jsx)(c.x,{className:eL().right,children:(0,r.jsx)(eO,{})})]});var eX=n(86017),eW=n.n(eX);let eF=()=>(0,r.jsxs)(c.x,{className:eW().content,direction:"column",children:[(0,r.jsx)("div",{className:eW().title,children:"Architecture"}),(0,r.jsx)("div",{className:eW().text,children:"The browser connects to the chat application running in decentralized confidential environments through TLS secured tunnels. Conversations generated within the compute’s TEE are encrypted by chat room’s private key and saved to decentralized databases."}),(0,r.jsx)(c.x,{justifyContent:"center",className:eW().imgWrap,children:(0,r.jsx)("img",{src:"/scheme.webp",alt:"",className:eW().img})})]});var ez=n(36444),eG=n(89184),eY=n(41495),eZ=n(24414),eq=n(82087),eJ=n.n(eq);let eH=()=>{let{theme:e}=(0,ez.Fg)();return(0,r.jsx)(c.x,{className:eJ().content,justifyContent:"center",children:(0,r.jsxs)(c.x,{direction:"column",className:eJ().wrapper,children:[(0,r.jsx)(c.x,{className:eJ().logoMobile,children:(0,r.jsx)(eG.T,{theme:e})}),(0,r.jsxs)(c.x,{className:eJ().wrap,children:[(0,r.jsx)(c.x,{className:eJ().logo,children:(0,r.jsx)(eG.T,{theme:e})}),(0,r.jsx)(eY.b,{className:eJ().pageLinks}),(0,r.jsx)(eZ.W,{className:eJ().socialLinks})]})]})})},eV=()=>{let[e,t]=(0,s.useState)(()=>Math.random()),{query:n,replace:o}=(0,l.useRouter)(),{getAuthToken:a}=(0,i.N)(),d=(0,s.useMemo)(()=>a(),[a]),[m,_]=(0,s.useState)(!1),[p,h]=(0,s.useState)(!1),x=(0,s.useCallback)(()=>{_(!1)},[]),f=(0,s.useCallback)(()=>{h(!1)},[]),w=(0,s.useCallback)(()=>{_(!0)},[]),b=(0,s.useCallback)(e=>{e?o("/room"):h(!0)},[o]),v=(0,s.useCallback)(()=>{o("/")},[o]),N=(0,s.useCallback)(()=>{t(Math.random())},[]),{deleted:C}=n||{};return(0,r.jsxs)(c.x,{direction:"column",className:u().wrap,children:[(0,r.jsx)(H,{show:!!C,onClose:v}),(0,r.jsx)(V.h,{onLeaveRoom:N,authToken:d}),(0,r.jsxs)(c.x,{direction:"column",alignItems:"center",children:[(0,r.jsx)(G,{isOpen:m,onClose:x}),(0,r.jsx)(Y.p,{isOpen:p,onClose:f}),(0,r.jsx)(er,{onOpenCreateNewRoom:w,onOpenConnectToRoom:b,checkExpired:e}),(0,r.jsx)(eb,{}),(0,r.jsx)(eI,{}),(0,r.jsx)(eF,{})]}),(0,r.jsx)(eH,{})]})};var eK=()=>(0,r.jsx)(eV,{})},56442:function(e){e.exports={dialog:"ConnectToRoom_dialog__XuWXJ"}},78024:function(e){e.exports={title:"ConnectToRoomForm_title__VQLmz",wrapComponent:"ConnectToRoomForm_wrapComponent__OGwDt",button:"ConnectToRoomForm_button__D43w_",inputWrap:"ConnectToRoomForm_inputWrap__ev3PM",inputWrapPassword:"ConnectToRoomForm_inputWrapPassword__ajZvs"}},32344:function(e){e.exports={dialog:"CreateNewRoom_dialog__3nRmD"}},40092:function(e){e.exports={title:"CreateNewRoomForm_title__pfcb6",inputWrap:"CreateNewRoomForm_inputWrap__toCtS",inputWrapUserName:"CreateNewRoomForm_inputWrapUserName__sRUa_"}},73448:function(e){e.exports={block:"NewRoomNotification_block__PvzBN",connectPassword:"NewRoomNotification_connectPassword__l8ptP",attentionWrap:"NewRoomNotification_attentionWrap__zX_0i",btn:"NewRoomNotification_btn__mrRJO",containerMobile:"NewRoomNotification_containerMobile__1_qFX",blockAttention:"NewRoomNotification_blockAttention__CLcFf",copyInfo:"NewRoomNotification_copyInfo__7G3of"}},50019:function(e){e.exports={attention:"DeletedRoomModal_attention__W_ARV"}},86017:function(e){e.exports={content:"Architecture_content__E6F9s",title:"Architecture_title__Bhfd0",text:"Architecture_text__zx9h9",img:"Architecture_img__oSuhg",imgWrap:"Architecture_imgWrap__63xDf"}},50401:function(e){e.exports={content:"Deploy_content__JuKEJ",title:"Deploy_title__qk_8n",text:"Deploy_text__FAF4w",ul:"Deploy_ul__45AvU",link:"Deploy_link__rfRT3",left:"Deploy_left__QXheD",right:"Deploy_right__fr3hX"}},98146:function(e){e.exports={slide:"Slide_slide__kp3o_",image:"Slide_image__eZtSv"}},4841:function(e){e.exports={wrap:"SlidePhotos_wrap__dsMCd"}},30182:function(e){e.exports={wrap:"Timeline_wrap__VOijH",lines:"Timeline_lines__o_Gky",box:"Timeline_box__xQfDD",line:"Timeline_line__Mdrzw",fill:"Timeline_fill__gC0OR",show:"Timeline_show__JsZMd"}},45237:function(e){e.exports={content:"Description_content__sfNlW",share:"Description_share__7SuUK",textBoxes:"Description_textBoxes__6Cf3B",textBox:"Description_textBox___BTqR",textTitle:"Description_textTitle__UxDJd",ma15:"Description_ma15__0lylM",ma10:"Description_ma10__OIOU3",text:"Description_text__bozqm",wrap:"Description_wrap__TdzoT",gradient1:"Description_gradient1__Jbk7T",gradient2:"Description_gradient2__kmhmm",radial1:"Description_radial1__3q6f2",radial2:"Description_radial2__o87Om",linkBoxes:"Description_linkBoxes__HLYY2",box:"Description_box__1kdo3",link:"Description_link__eS49o"}},68456:function(e){e.exports={content:"Share_content__xbsmL",textGroup:"Share_textGroup__Euri5",text:"Share_text__CQP67",icon:"Share_icon__f_TY3"}},82087:function(e){e.exports={content:"Footer_content__5gaRX",wrapper:"Footer_wrapper___iZHK",wrap:"Footer_wrap__KLBfS",logo:"Footer_logo__aAOSs",pageLinks:"Footer_pageLinks__v0rYJ",logoMobile:"Footer_logoMobile__zxYYt",socialLinks:"Footer_socialLinks__2Ad0Z"}},22234:function(e){e.exports={content:"Title_content__GHiy_",wrapper:"Title_wrapper__OgDOS",describe:"Title_describe__bH8KB",title:"Title_title__fj2S8",linkImage:"Title_linkImage__LlETi",text:"Title_text__D6dXy",btns:"Title_btns__2G3ah",btn:"Title_btn__FWcZO",linkGuide:"Title_linkGuide__8TR0a",linkGuideMobile:"Title_linkGuideMobile__qNfvo",link:"Title_link__yUZUS",img:"Title_img__lsU_H",firstBtnConnected:"Title_firstBtnConnected__vmdkn",firstBtn:"Title_firstBtn__UkdrM"}},64625:function(e){e.exports={wrap:"Main_wrap__N2NMO"}},96955:function(e){e.exports={container:"Slider_container__hBzhE",track:"Slider_track__n9bCp",button:"Slider_button__Xfa_y",left:"Slider_left__Ns5wp",right:"Slider_right__43643",transform:"Slider_transform__JpLuE"}},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[952,675,382,736,774,888,377],function(){return e(e.s=48312)}),_N_E=e.O()}]);