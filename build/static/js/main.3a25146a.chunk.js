(this.webpackJsonpclickygame2=this.webpackJsonpclickygame2||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),c=t(3),r=t.n(c),s=(t(14),t(1)),l=t(4),m=t(5),g=t(7),o=t(6),u=t(8),d=[{id:1,image:"./images/image1.jpg",clicked:!1},{id:2,image:"./images/image2.jpg",clicked:!1},{id:3,image:"./images/image3.jpg",clicked:!1},{id:4,image:"./images/image4.jpg",clicked:!1},{id:5,image:"./images/image5.jpg",clicked:!1},{id:6,image:"./images/image6.jpg",clicked:!1},{id:7,image:"./images/image7.jpg",clicked:!1},{id:8,image:"./images/image8.jpg",clicked:!1},{id:9,image:"./images/image9.jpg",clicked:!1}],h=(t(15),function(e){return n.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light navbar-fluid"},n.a.createElement("div",{class:"navbar-brand mr-auto"},"Clicky Game"),n.a.createElement("div",{class:"navbar-brand mr-auto"},"Score:",e.score),n.a.createElement("div",{class:"navbar-brand mr-auto"},"High Score:",e.highscore))}),f=(t(16),function(){return n.a.createElement("div",{class:"jumbotron jumbotron-fluid"},n.a.createElement("div",{class:"container"},n.a.createElement("h1",{class:"display-4"},"Clicky Game!"),n.a.createElement("p",{class:"lead"},"Click on any image to earn point, but be sure not to click the same image twice.")))}),v=(t(17),function(){return n.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light navbar-fluid"},n.a.createElement("div",{class:"navbar-brand"},"Clicky Game"))}),b=(t(18),function(e){return n.a.createElement("img",{class:"images",src:e.image,alt:e.id,onClick:function(){return e.handleClick(e.id)}})}),k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={images:d,score:0,highscore:0},t.shuffleImages=function(){var e=Object(s.a)(t.state.images);e.sort((function(){return Math.random()-.5})),t.setState({images:e})},t.handleClick=function(e){for(var a=Object(s.a)(t.state.images),i=0;i<t.state.images.length;i++){var n=a[i],c=n.id;if(console.log(c),c===e)if(!0===n.clicked){if(t.state.score>t.state.highscore){var r=t.state.images.map((function(e){return e.clicked=!1,e}));t.setState({highscore:t.state.score,score:0,images:r})}t.shuffleImages()}else n.clicked=!0,t.setState({images:a,score:t.state.score+1}),t.shuffleImages()}},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(h,{score:this.state.score,highscore:this.state.highscore}),n.a.createElement(f,null),n.a.createElement("div",{class:"container"},this.state.images.map((function(a){return n.a.createElement(b,{image:a.image,handleClick:e.handleClick,id:a.id})}))),n.a.createElement(v,null))}}]),a}(i.Component);var p=function(){return n.a.createElement(k,null)};r.a.render(n.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.3a25146a.chunk.js.map