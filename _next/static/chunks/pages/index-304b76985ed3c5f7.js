(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(t){var e,n,r,i,s,a,u,o,h,c,l,d,f,m,$,p,_,g,y,v,w;t.exports=(e="millisecond",n="second",r="minute",i="hour",s="week",a="month",u="quarter",o="year",h="date",c="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},($={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},p=function(t){return t instanceof v},_=function t(e,n,r){var i;if(!e)return m;if("string"==typeof e){var s=e.toLowerCase();$[s]&&(i=s),n&&($[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;$[u]=e,i=u}return!r&&i&&(m=i),i||!r&&m},g=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},(y={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,u=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:o,w:s,d:"day",D:h,h:i,m:r,s:n,ms:e,Q:u})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=_,y.i=p,y.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},w=(v=function(){function t(t){this.$L=_(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return g(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<g(t)},f.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var u=this,c=!!y.u(e)||e,l=y.p(t),d=function(t,e){var n=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return c?n:n.endOf("day")},f=function(t,e){return y.w(u.toDate()[t].apply(u.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,$=this.$M,p=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case o:return c?d(1,0):d(31,11);case a:return c?d(1,$):d(0,$+1);case s:var g=this.$locale().weekStart||0,v=(m<g?m+7:m)-g;return d(c?p-v:p+(6-v),$);case"day":case h:return f(_+"Hours",0);case i:return f(_+"Minutes",1);case r:return f(_+"Seconds",2);case n:return f(_+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,s){var u,c=y.p(t),l="set"+(this.$u?"UTC":""),d=((u={}).day=l+"Date",u[h]=l+"Date",u[a]=l+"Month",u[o]=l+"FullYear",u[i]=l+"Hours",u[r]=l+"Minutes",u[n]=l+"Seconds",u[e]=l+"Milliseconds",u)[c],f="day"===c?this.$D+(s-this.$W):s;if(c===a||c===o){var m=this.clone().set(h,1);m.$d[d](f),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,e){var u,h=this;t=Number(t);var c=y.p(e),l=function(e){var n=g(h);return y.w(n.date(n.date()+Math.round(e*t)),h)};if(c===a)return this.set(a,this.$M+t);if(c===o)return this.set(o,this.$y+t);if("day"===c)return l(1);if(c===s)return l(7);var d=((u={})[r]=6e4,u[i]=36e5,u[n]=1e3,u)[c]||1,f=this.$d.getTime()+t*d;return y.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,h=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return y.s(s%12||12,t,"0")},m=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:y.s(u+1,2,"0"),MMM:l(n.monthsShort,u,h,3),MMMM:l(h,u),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:y.s(s,2,"0"),h:f(1),hh:f(2),a:m(s,a,!0),A:m(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return r.replace(d,function(t,e){return e||$[t]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,h){var c,l=y.p(e),d=g(t),f=(d.utcOffset()-this.utcOffset())*6e4,m=this-d,$=y.m(this,d);return $=((c={})[o]=$/12,c[a]=$,c[u]=$/3,c[s]=(m-f)/6048e5,c.day=(m-f)/864e5,c[i]=m/36e5,c[r]=m/6e4,c[n]=m/1e3,c)[l]||m,h?$:y.a($)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return $[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=_(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,g.prototype=w,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",a],["$y",o],["$D",h]].forEach(function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),g.extend=function(t,e){return t.$i||(t(e,v,g),t.$i=!0),g},g.locale=_,g.isDayjs=p,g.unix=function(t){return g(1e3*t)},g.en=$[m],g.Ls=$,g.p={},g)},1752:function(t,e,n){t.exports=n(6949)},8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8280)}])},8280:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var r=n(5893),i=n(9008),s=n.n(i),a=n(3915),u=n.n(a),o=n(7294),h=n(1752),c=n.n(h);let l=t=>{let{label:e,name:n,url:i}=t;return(0,r.jsx)("div",{className:u().linkButton,children:(0,r.jsxs)("a",{href:i,children:[(0,r.jsx)("img",{src:function(t){let{publicRuntimeConfig:e}=c()();return e.urlPrefix+t}("/images/iconmonstr-"+n+".png"),alt:"link_button",width:120,height:120}),(0,r.jsx)("h3",{className:u().linkButtonLabel,children:e})]})})};var d=n(7484),f=n.n(d);let m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$=t=>{let{time:e}=t,n=f()(e).format("HH:mm:ss"),i=f()(e).month(),s=f()(e).format("DD"),a=(s.endsWith("1")?s.endsWith("11")?s+"th":s+"st":s.endsWith("2")?s.endsWith("12")?s+"th":s+"nd":s.endsWith("3")?s.endsWith("13")?s+"th":s+"rd":s+"th")+"/"+m[i];return(0,r.jsxs)("div",{className:u().clock,children:[(0,r.jsx)("h3",{className:u().timeStr,suppressHydrationWarning:!0,children:n}),(0,r.jsx)("h3",{className:u().dateStr,suppressHydrationWarning:!0,children:a})]})},p=t=>{let[e,n]=(0,o.useState)(Date.now());return(0,o.useEffect)(()=>{let e=setTimeout(()=>n(Date.now()),t);return()=>{clearTimeout(e)}},[e]),e};function _(){let t=t=>{t.preventDefault(),document.location.href="https://www.google.com/search?q="+n},e=p(1e3),[n,i]=(0,o.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"New Tab"}),(0,r.jsx)("meta",{name:"description",content:"New Tab Page"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/images/iconmonstr-plus.png"})]}),(0,r.jsxs)("main",{className:u().main,children:[(0,r.jsx)($,{time:e}),(0,r.jsx)("form",{className:u().searchForm,onSubmit:t,children:(0,r.jsx)("input",{onChange:t=>i(t.target.value),value:n,className:u().searchInput,id:"searchInput",placeholder:"Search Google"})}),(0,r.jsxs)("div",{className:u().bookmarks,children:[(0,r.jsx)(l,{label:"GitHub",name:"github",url:"https://github.com/"}),(0,r.jsx)(l,{label:"YouTube",name:"youtube",url:"https://youtube.com/"}),(0,r.jsx)(l,{label:"Amazon",name:"amazon",url:"https://amazon.com/"}),(0,r.jsx)(l,{label:"Twitter",name:"twitter",url:"https://twitter.com/home"})]})]})]})}},3915:function(t){t.exports={main:"Home_main__EtNt2",searchForm:"Home_searchForm__g0AEW",searchInput:"Home_searchInput__pGRsp",bookmarks:"Home_bookmarks__ByYv5",linkButton:"Home_linkButton__9NbZl",linkButtonLabel:"Home_linkButtonLabel__Snxof",timeStr:"Home_timeStr__doFMc",dateStr:"Home_dateStr__aV57D"}},9008:function(t,e,n){t.exports=n(3121)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);