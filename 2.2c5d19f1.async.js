(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"7CJS":function(e,t,a){e.exports={exception:"antd-pro-components-exception-index-exception",imgBlock:"antd-pro-components-exception-index-imgBlock",imgEle:"antd-pro-components-exception-index-imgEle",content:"antd-pro-components-exception-index-content",desc:"antd-pro-components-exception-index-desc",actions:"antd-pro-components-exception-index-actions"}},O90f:function(e,t,a){"use strict";var l=a("g09b"),n=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("4eJr");var u=l(a("3LgI"));a("1YHl");var o=l(a("VNzZ"));a("14J3");var r=l(a("BMrR"));a("jCWc");var d=l(a("kPKH"));a("Pwec");var s=l(a("CtXQ"));a("lUTK");var c=l(a("BvKs")),i=l(a("2Taf")),f=l(a("vZ4D")),m=l(a("l4Ni")),p=l(a("ujKo")),g=l(a("MhPg"));a("B9cy");var h,y,v,E=l(a("Ol7k")),x=n(a("q1tI")),b=l(a("mOP9")),k=l(a("luV/")),M=l(a("ZFw/")),w=l(a("hTIJ")),N=a("7Qib"),K=l(a("fcSX")),C=a("4zCG"),j=l(a("usdK")),S=a("MuoO"),P=!1;(0,C.enquireScreen)(function(e){P=e});var I=E.default.Header,A=E.default.Footer,O=(h=(0,S.connect)(function(e){var t=e.content;return{project:t.project.data}}),h((v=function(e){function t(){var e,a;(0,i.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,m.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(n))),a.state={isMobile:P,openKeys:[],selectedKeys:["/?page=home"],menus:[]},a.openSubMenu=function(e){e.length>1&&e.shift(),a.setState({openKeys:e})},a.handleMenuClick=function(e){var t=e.key;if(t.startsWith("/"))return a.setState({selectedKeys:[t]}),j.default.push(t);(t.startsWith("http://")||t.startsWith("https://"))&&window.open(t,"_blank")},a.renderMenus=function(e){return e.map(function(e){var t=e.title,l=e.children;return Array.isArray(l)&&l.length>0?x.default.createElement(c.default.SubMenu,{key:"sub1",title:t},a.renderMenus(l)):x.default.createElement(c.default.Item,{key:e.url},x.default.createElement("span",null,t))})},a.getMenuItems=function(){var e=a.state,t=e.openKeys,l=e.selectedKeys,n=(0,N.get)(a.props.project,"menus",[])||[];return n&&Array.isArray(n)&&n.length>0?x.default.createElement(c.default,{className:"aside-container menu-site",openKeys:t,selectedKeys:l,mode:"inline",onOpenChange:a.openSubMenu,onClick:a.handleMenuClick},a.renderMenus(n)):x.default.createElement("div",{className:w.default.emptyMenu},x.default.createElement(s.default,{type:"smile",style:{fontSize:20}}),x.default.createElement("p",null,"\u7a7a\u7a7a\u5982\u4e5f"))},a}return(0,g.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"content/getProjectAction"});var t=(0,N.get)(this.props,"location.query.page");t&&this.setState({selectedKeys:["/?page="+t]})}},{key:"render",value:function(){var e=this.state,t=e.isMobile,a=e.selectedKeys,l=this.props,n=l.project,i=l.error,f=l.children,m=(0,N.get)(n,"title")||"\u6587\u6863\u7cfb\u7edf",p=(0,N.get)(n,"top_menus",[])||[],g=(0,N.get)(n,"top_menus_map",{})||{},h=(0,N.get)(a,0,"/?page=home")||"/?page=home",y=(0,N.get)(g,h)?h:"/?page=home",v=this.getMenuItems();return x.default.createElement(M.default,{title:m},x.default.createElement(E.default,null,i?x.default.createElement(k.default,{style:{background:"#fff"},type:"403",title:"Sorry!",desc:"\u60a8\u6ca1\u6709\u6743\u9650\u8bbf\u95ee\u8be5\u6587\u6863",backText:"\u8fd4\u56de\u4e3b\u9875"}):x.default.createElement(x.Fragment,null,x.default.createElement(I,{className:w.default.header},x.default.createElement(r.default,null,x.default.createElement(d.default,{xxl:4,xl:5,lg:5,md:5,sm:24,xs:24,style:{overflow:"hidden",textOverflow:"ellipsis"}},x.default.createElement("span",{className:w.default.logo,title:m},x.default.createElement(b.default,{to:(0,N.get)(n,"home","/")},(0,N.get)(n,"logo")&&x.default.createElement("img",{src:n.logo,alt:"logo",width:"32",height:"32",style:{borderRadius:"50%"}})),m)),x.default.createElement(d.default,{xxl:20,xl:19,lg:19,md:19,sm:0,xs:0},x.default.createElement("div",{style:{float:"right",marginRight:24}},x.default.createElement(c.default,{mode:"horizontal",className:w.default.menu,onClick:this.handleMenuClick,selectedKeys:[y]},this.renderMenus(p)))))),x.default.createElement(E.default,{style:{background:"#fff"}},x.default.createElement("div",{className:"main-wrapper"},x.default.createElement(r.default,null,t?x.default.createElement(K.default,{iconChild:[x.default.createElement(s.default,{type:"menu-unfold"}),x.default.createElement(s.default,{type:"menu-fold"})],key:"Mobile-menu",wrapperClassName:"drawer-wrapper"},v):x.default.createElement(d.default,{xxl:4,xl:5,lg:6,md:24,sm:24,xs:24,className:"main-menu"},x.default.createElement(o.default,null,x.default.createElement("section",{className:"main-menu-inner"},v))),x.default.createElement(d.default,{xxl:20,xl:19,lg:18,md:24,sm:24,xs:24},f,x.default.createElement(u.default,null),x.default.createElement(A,{style:{padding:"0 0 15px 0",textAlign:"center",background:"#fff"}},"Copyright \xa9 2019 ",x.default.createElement("a",{href:(0,N.get)(n,"home","/")},"\u6587\u6863\u7cfb\u7edf")))))))))}}]),t}(x.Component),y=v))||y),T=O;t.default=T},"f+e3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"\u62b1\u6b49\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"\u62b1\u6b49\uff0c\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"\u62b1\u6b49\uff0c\u670d\u52a1\u5668\u51fa\u9519\u4e86"}},n=l;t.default=n},hTIJ:function(e,t,a){e.exports={menu:"antd-pro-layouts-docs-layout-menu",emptyMenu:"antd-pro-layouts-docs-layout-emptyMenu",header:"antd-pro-layouts-docs-layout-header","home-nav-bottom":"antd-pro-layouts-docs-layout-home-nav-bottom",search:"antd-pro-layouts-docs-layout-search","header-link":"antd-pro-layouts-docs-layout-header-link","ant-menu-item-active":"antd-pro-layouts-docs-layout-ant-menu-item-active",logo:"antd-pro-layouts-docs-layout-logo"}},"luV/":function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a("jehZ"));a("+L6B");var o=n(a("2/Rp")),r=n(a("Y/ft")),d=n(a("2Taf")),s=n(a("vZ4D")),c=n(a("l4Ni")),i=n(a("ujKo")),f=n(a("MhPg")),m=l(a("q1tI")),p=n(a("TSYQ")),g=n(a("f+e3")),h=n(a("7CJS")),y=function(e){function t(e){var a;return(0,d.default)(this,t),a=(0,c.default)(this,(0,i.default)(t).call(this,e)),a.state={},a}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.backText,l=e.linkElement,n=void 0===l?"a":l,d=e.type,s=e.title,c=e.desc,i=e.img,f=e.actions,y=e.redirect,v=(0,r.default)(e,["className","backText","linkElement","type","title","desc","img","actions","redirect"]),E=d in g.default?d:"404",x=(0,p.default)(h.default.exception,t);return m.default.createElement("div",(0,u.default)({className:x},v),m.default.createElement("div",{className:h.default.imgBlock},m.default.createElement("div",{className:h.default.imgEle,style:{backgroundImage:"url(".concat(i||g.default[E].img,")")}})),m.default.createElement("div",{className:h.default.content},m.default.createElement("h1",null,s||g.default[E].title),m.default.createElement("div",{className:h.default.desc},c||g.default[E].desc),m.default.createElement("div",{className:h.default.actions},f||(0,m.createElement)(n,{to:y,href:y},m.default.createElement(o.default,{type:"primary"},a)))))}}]),t}(m.default.PureComponent);y.defaultProps={backText:"back to home",redirect:"/"};var v=y;t.default=v}}]);