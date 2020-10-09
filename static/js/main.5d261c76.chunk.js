(this.webpackJsonphalflix=this.webpackJsonphalflix||[]).push([[0],{25:function(e,t,n){e.exports=n.p+"static/media/no-poster-available.e7d69c9b.jpg"},42:function(e,t,n){e.exports=n(68)},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(34),c=n.n(i),u=n(14),l=n(5),o=n(10),s=n.n(o),p=n(13),m=n(4),g=n(2),d=n(1);function f(){var e=Object(g.a)(["\n    margin-top:25px;\n    display:grid;\n    grid-template-columns:repeat(auto-fill, 125px);\n    grid-gap: 25px;\n"]);return f=function(){return e},e}function b(){var e=Object(g.a)(["\n    font-size:16px;\n    font-weight:600;\n"]);return b=function(){return e},e}function v(){var e=Object(g.a)(["\n    :not(:last-child) {\n        margin-bottom:50px;\n    }\n"]);return v=function(){return e},e}var h=d.c.div(v()),E=d.c.span(b()),x=d.c.div(f()),j=function(e){var t=e.title,n=e.children;return r.a.createElement(h,null,r.a.createElement(E,null,t),r.a.createElement(x,null,n))};function O(){var e=Object(g.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    font-size: 40px;\n    margin-top: 100px;\n"]);return O=function(){return e},e}var _=d.c.div(O()),y=function(){return r.a.createElement(_,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f3"),r.a.createElement("span",null,"Loading..."))};function k(){var e=Object(g.a)(["\n    font-size: 24px;\n    color: ",";\n"]);return k=function(){return e},e}function w(){var e=Object(g.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n"]);return w=function(){return e},e}var S=d.c.div(w()),L=d.c.span(k(),(function(e){return e.color})),R=function(e){var t=e.text,n=e.color;return r.a.createElement(S,null,r.a.createElement(L,{color:n},t))};function M(){var e=Object(g.a)(["\n    font-size: 10px;\n    color: rgba(255, 255, 255, 0.5);\n"]);return M=function(){return e},e}function z(){var e=Object(g.a)(["\n    display: block;\n    margin-bottom: 3px;\n"]);return z=function(){return e},e}function U(){var e=Object(g.a)(["\n    margin-bottom: 5px;\n    position: relative;\n    &:hover {\n        "," {\n            opacity: 0.4;\n        }\n        "," {\n            opacity: 0.8;\n        }\n    }\n"]);return U=function(){return e},e}function F(){var e=Object(g.a)(["\n    position: absolute;\n    bottom: 3px;\n    right: 3px;\n    opacity: 0;\n    transition: opacity 0.2s linear;\n"]);return F=function(){return e},e}function I(){var e=Object(g.a)(["\n    background-image: url(",");\n    height: 180px;\n    background-size: cover;\n    border-radius: 4px;\n    background-position: center center;\n    transition: opacity 0.2s linear;\n"]);return I=function(){return e},e}function P(){var e=Object(g.a)(["\n    font-size: 12px;\n"]);return P=function(){return e},e}var T=d.c.div(P()),J=d.c.div(I(),(function(e){return e.bgURL})),A=d.c.span(F()),H=d.c.div(U(),J,A),X=d.c.span(z()),C=d.c.span(M()),N=function(e){var t=e.id,a=e.imageURL,i=e.title,c=e.rating,l=e.year,o=e.isMovie,s=void 0!==o&&o;return r.a.createElement(u.b,{to:s?"movie/".concat(t):"show/".concat(t)},r.a.createElement(T,null,r.a.createElement(H,null,r.a.createElement(J,{bgURL:a?"https://image.tmdb.org/t/p/w300".concat(a):n(25)}),r.a.createElement(A,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f".repeat(Math.floor(.5*c)))," ",Math.floor(.5*c),"/5")),r.a.createElement(X,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(C,null,l)))},q=n(12);function B(){var e=Object(g.a)(["\n    padding: 20px\n"]);return B=function(){return e},e}var V=d.c.div(B()),D=function(e){var t=e.nowPlaying,n=e.upComing,a=e.popular,i=e.error,c=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.b,null,r.a.createElement("title",null,"Movies | HALFLIX")),c?r.a.createElement(y,null):r.a.createElement(V,null,t&&t.length>0&&r.a.createElement(j,{title:"Now Playing"},t.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,isMovie:!0,title:e.title,imageURL:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(j,{title:"Popular Movies"},a.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,isMovie:!0,title:e.title,imageURL:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(j,{title:"Upcoming Movies"},n.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,isMovie:!0,title:e.title,imageURL:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4)})}))),i&&r.a.createElement(R,{color:"#d63031",text:i})))},W=n(40),G=n.n(W).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"d4ccd4f00c0a2c7c876bd4a32e58cf76",language:"en-US",timezone:"Asia/Tokyo"}}),K=function(){return G.get("movie/now_playing",{params:{region:"JP",append_to_response:"images",include_image_language:"JP"}})},Q=function(){return G.get("movie/upcoming",{params:{region:"JP"}})},Y=function(){return G.get("movie/popular",{params:{append_to_response:"images",include_image_language:"jp"}})},Z=function(e){return G.get("movie/".concat(e),{params:{region:"JP",append_to_response:"videos"}})},$=function(e){return G.get("search/movie",{params:{query:e,region:"JP"}})},ee=function(){return G.get("tv/top_rated")},te=function(){return G.get("tv/popular")},ne=function(){return G.get("tv/airing_today")},ae=function(e){return G.get("tv/".concat(e),{params:{append_to_response:"videos"}})},re=function(e){return G.get("search/tv",{params:{query:e,region:"JP"}})},ie=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(null),u=Object(m.a)(c,2),l=u[0],o=u[1],g=Object(a.useState)(null),d=Object(m.a)(g,2),f=d[0],b=d[1],v=Object(a.useState)(null),h=Object(m.a)(v,2),E=h[0],x=h[1],j=Object(a.useState)(!0),O=Object(m.a)(j,2),_=O[0],y=O[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a,r,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:return t=e.sent,n=t.data.results,e.next=7,Q();case 7:return a=e.sent,r=a.data.results,e.next=11,Y();case 11:c=e.sent,u=c.data.results,i(n),o(r),b(u),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),x("\u6620\u753b\u3092\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002");case 21:return e.prev=21,y(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(D,{nowPlaying:n,upComing:l,popular:f,error:E,loading:_})};function ce(){var e=Object(g.a)(["\n    all:unset;\n    font-size:28px;\n    width: 100%;\n"]);return ce=function(){return e},e}function ue(){var e=Object(g.a)(["\n    margin-bottom:50px;\n    width: 100%;\n"]);return ue=function(){return e},e}function le(){var e=Object(g.a)(["\n    padding: 20px;\n"]);return le=function(){return e},e}var oe=d.c.div(le()),se=d.c.form(ue()),pe=d.c.input(ce()),me=function(e){var t=e.error,n=e.loading,a=e.movieResults,i=e.tvResults,c=e.searchTerm,u=e.handleSubmit,l=e.updateTerm;return r.a.createElement(oe,null,r.a.createElement(q.b,null,r.a.createElement("title",null,"Search | HALFLIX")),r.a.createElement(se,{onSubmit:u},r.a.createElement(pe,{placeholder:"What are u looking for ?",value:c,onChange:l})),n?r.a.createElement(y,null):r.a.createElement(r.a.Fragment,null,a&&a.length>0&&r.a.createElement(j,{title:"Movie Results"},a.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,isMovie:!0,title:e.title,imageURL:e.poster_path,rating:e.vote_average,year:e.release_date.substring(0,4)})}))),i&&i.length>0&&r.a.createElement(j,{title:"TV Results"},i.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,isMovie:!1,title:e.name,imageURL:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),t&&r.a.createElement(R,{color:"#d63031",text:t}),a&&i&&0===a.length&&0===i.length&&r.a.createElement(R,{text:"".concat(c,"\u306e\u691c\u7d22\u7d50\u679c\u304c\u3054\u3056\u3044\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),color:"#a5b1c2"})))},ge=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),u=Object(m.a)(c,2),l=u[0],o=u[1],g=Object(a.useState)(null),d=Object(m.a)(g,2),f=d[0],b=d[1],v=Object(a.useState)(null),h=Object(m.a)(v,2),E=h[0],x=h[1],j=Object(a.useState)(""),O=Object(m.a)(j,2),_=O[0],y=O[1],k=function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,re(_);case 4:return t=e.sent,n=t.data.results,e.next=8,$(_);case 8:a=e.sent,r=a.data.results,x(n),b(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),i("".concat(_,"\u306e\u691c\u7d22\u7d50\u679c\u304c\u3054\u3056\u3044\u307e\u305b\u3093\u3067\u3057\u305f\u3002"));case 17:return e.prev=17,o(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(me,{error:n,loading:l,movieResults:f,tvResults:E,searchTerm:_,handleSubmit:function(e){e.preventDefault(),""!==_&&k()},updateTerm:function(e){var t=e.target.value;y(t)}})};function de(){var e=Object(g.a)(["\n    padding: 20px;\n"]);return de=function(){return e},e}var fe=d.c.div(de()),be=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,c=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.b,null,r.a.createElement("title",null,"TV Shows | HALFLIX")),c?r.a.createElement(y,null):r.a.createElement(fe,null,t&&t.length>0&&r.a.createElement(j,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,isMovie:!1,title:e.name,imageURL:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(j,{title:"Popular"},n.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,isMovie:!1,title:e.name,imageURL:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(j,{title:"Airing Today"},a.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,isMovie:!1,title:e.name,imageURL:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(R,{color:"#d63031",text:i})),";")},ve=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(null),u=Object(m.a)(c,2),l=u[0],o=u[1],g=Object(a.useState)(null),d=Object(m.a)(g,2),f=d[0],b=d[1],v=Object(a.useState)(null),h=Object(m.a)(v,2),E=h[0],x=h[1],j=Object(a.useState)(!0),O=Object(m.a)(j,2),_=O[0],y=O[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a,r,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee();case 3:return t=e.sent,n=t.data.results,e.next=7,te();case 7:return a=e.sent,r=a.data.results,e.next=11,ne();case 11:c=e.sent,u=c.data.results,i(n),o(r),b(u),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),x("\u756a\u7d44\u3092\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002");case 21:return e.prev=21,y(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(be,{topRated:n,popular:l,airingToday:f,error:E,loading:_})};function he(){var e=Object(g.a)(["\n    display: flex;\n    padding-left:10px;\n"]);return he=function(){return e},e}function Ee(){var e=Object(g.a)(["\n    height:50px;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n"]);return Ee=function(){return e},e}function xe(){var e=Object(g.a)(["\n    height:50px;\n    width: 70px;\n    text-align:center;\n    border-bottom: 5px solid ","; \n    transition: border-bottom 0.3s ease-in-out;\n"]);return xe=function(){return e},e}function je(){var e=Object(g.a)(["\n    color: whitesmoke;\n    position:fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    background-color:rgba(20,20,20,0.8);\n    z-index:10;\n    box-shadow:0px 1px 5px 2px rgba(0,0,0,0.8);\n"]);return je=function(){return e},e}var Oe=d.c.header(je()),_e=d.c.li(xe(),(function(e){return e.current?"#6c5ce7":"transparent"})),ye=Object(d.c)(u.b)(Ee()),ke=d.c.ul(he()),we=Object(l.i)((function(e){var t=e.location.pathname;return r.a.createElement(Oe,null,r.a.createElement(ke,null,r.a.createElement(_e,{current:"/"===t},r.a.createElement(ye,{to:"/"},"\u30e0\u30fc\u30d3")),r.a.createElement(_e,{current:"/tv"===t},r.a.createElement(ye,{to:"/tv"},"\u30c6\u30ec\u30d3")),r.a.createElement(_e,{current:"/search"===t},r.a.createElement(ye,{to:"/search"},"\u691c\u7d22"))))}));function Se(){var e=Object(g.a)(["\n    font-size:12px;\n    opacity:0.7;\n    line-height:1.5;\n    width:50%;\n"]);return Se=function(){return e},e}function Le(){var e=Object(g.a)(["\n    margin: 0 10px;\n"]);return Le=function(){return e},e}function Re(){var e=Object(g.a)([""]);return Re=function(){return e},e}function Me(){var e=Object(g.a)(["\n    margin: 10px 0px 20px;\n"]);return Me=function(){return e},e}function ze(){var e=Object(g.a)(["\n    font-size: 32px;\n    margin-bottom: 10px;\n"]);return ze=function(){return e},e}function Ue(){var e=Object(g.a)(["\n    width:70%;\n    margin-left:10px;\n    border-radius:5px;\n"]);return Ue=function(){return e},e}function Fe(){var e=Object(g.a)(["\n    width: 30%;\n    height: 100%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    border-radius:5px;\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(g.a)(["\n    display:flex;\n    width: 100%;\n    height: 100%;\n    position:relative;\n    z-index: 1;\n"]);return Ie=function(){return e},e}function Pe(){var e=Object(g.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center center;\n    filter:blur(3px);\n    opacity:0.5;\n"]);return Pe=function(){return e},e}function Te(){var e=Object(g.a)(["\n    height: calc(100vh - 50px);\n    width: 100%;\n    position: relative;\n    padding: 50px;\n"]);return Te=function(){return e},e}var Je=d.c.div(Te()),Ae=d.c.div(Pe(),(function(e){return e.bgImg})),He=d.c.div(Ie()),Xe=d.c.div(Fe(),(function(e){return e.bgImg})),Ce=d.c.div(Ue()),Ne=d.c.h3(ze()),qe=d.c.div(Me()),Be=d.c.span(Re()),Ve=d.c.span(Le()),De=d.c.p(Se()),We=function(e){var t=e.result;e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,null,r.a.createElement("title",null,"Loading... | HALFLIX")),r.a.createElement(y,null)):r.a.createElement(Je,null,r.a.createElement(q.a,null,r.a.createElement("title",null,t.title?t.title:t.name," | HALFLIX")),r.a.createElement(Ae,{bgImg:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(He,null,r.a.createElement(Xe,{bgImg:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(25)}),r.a.createElement(Ce,null,r.a.createElement(Ne,null,t.title?t.title:t.name),r.a.createElement(qe,null,r.a.createElement(Be,null,t.release_date?String(t.release_date).replace("-",".").substring(0,7):String(t.first_air_date).replace("-",".").substring(0,7)),r.a.createElement(Ve,null,"\u2758"),r.a.createElement(Be,null,t.runtime?t.runtime:"".concat(String(t.episode_run_time),"\u5206")),r.a.createElement(Ve,null,"\u2758"),r.a.createElement(Be,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name,"/ ")})))),r.a.createElement(De,null,t.overview))))},Ge=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!0),u=Object(m.a)(c,2),o=u[0],g=u[1],d=Object(a.useState)(null),f=Object(m.a)(d,2),b=f[0],v=f[1],h=Object(l.h)().id,E=parseInt(h),x=Object(l.g)(),j=x.location.pathname.includes("/movie/");return Object(a.useEffect)((function(){if(isNaN(E))return x.push("/");(function(){var e=Object(p.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=null,e.prev=1,!j){e.next=9;break}return e.next=5,Z(E);case 5:n=e.sent,t=n.data,e.next=13;break;case 9:return e.next=11,ae(E);case 11:a=e.sent,t=a.data;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),i("\u63a2\u3059\u7269\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002");case 18:return e.prev=18,v(t),g(!1),e.finish(18);case 22:case"end":return e.stop()}}),e,null,[[1,15,18,22]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(We,{error:n,loading:o,result:b})},Ke=function(){return r.a.createElement(u.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(we,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(ie,null)),r.a.createElement(l.b,{exact:!0,path:"/tv"},r.a.createElement(ve,null)),r.a.createElement(l.b,{path:"/search"},r.a.createElement(ge,null)),r.a.createElement(l.b,{path:"/movie/:id"},r.a.createElement(Ge,null)),r.a.createElement(l.b,{path:"/show/:id"},r.a.createElement(Ge,null)),r.a.createElement(l.a,{from:"*",to:"/"}))))},Qe=n(41);function Ye(){var e=Object(g.a)(["\n    ","\n    a {\n        text-decoration:none;\n        color:inherit;\n    }\n    * {\n        box-sizing:border-box;\n    }\n    body {\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:14px;\n        background-color:rgba(20, 20, 20, 1);\n        color: white;\n        padding-top: 50px;\n    }\n"]);return Ye=function(){return e},e}var Ze=Object(d.a)(Ye(),Qe.a);var $e=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze,null),r.a.createElement(Ke,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($e,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.5d261c76.chunk.js.map