(function(){"use strict";var t={9875:function(t,e,s){var i,a,r=s(6848),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("b-jumbotron",[e("p",{staticClass:"h1 mb-2"},[e("b-icon",{attrs:{icon:"list-task",variant:"success"}}),t._v(" Organizador de tareas")],1),t._v(" TO-DO Herramienta que permite tener presente los pendientes y que se ha hecho ")]),e("div",{attrs:{id:"container"}},[e("nav",[e("div",{attrs:{id:"container-nav-router"}},[e("router-link",{attrs:{to:"/"}},[t._v("To-Do")]),e("router-link",{attrs:{to:"/breakoutGame"}},[t._v("Breakout Game")]),e("router-link",{attrs:{to:"/chat"}},[t._v(" Socket Chat")])],1)]),e("router-view",{attrs:{id:"routerView"}})],1)],1)},o=[],c=s(1656),h={},l=(0,c.A)(h,n,o,!1,null,"6786cb90",null),d=l.exports,u=s(6178),f=function(){var t=this,e=t._self._c;return e("div",[e("CheckList")],1)},v=[],p=function(){var t=this,e=t._self._c;return e("div",[e("b-form",{attrs:{id:"containerForm"},on:{submit:function(e){return e.preventDefault(),t.saveTask.apply(null,arguments)}}},[e("b-form-input",{attrs:{placeholder:"Ingresa tu pendiente",autofocus:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Agregar")])],1),e("div",{attrs:{id:"containerCards"}},[e("b-card",{staticClass:"mb-2",attrs:{title:"Tareas por realizar",tag:"article"}},t._l(t.tasks,(function(s,i){return e("b-card-text",{key:i,staticClass:"CardDo"},[e("b-row",{staticClass:"text-center"},[e("b-col",[e("button",{attrs:{id:"btnDone"},on:{click:function(e){return t.saveDone(i)}}},[e("b-icon",{attrs:{icon:"circle"}})],1)]),e("b-col",{staticStyle:{"text-align":"justify"},attrs:{cols:"7"}},[e("span",{on:{click:function(e){return t.updateTask(i)}}},[t._v(" "+t._s(s))])]),e("b-col",[e("button",{staticClass:"btnDelete",on:{click:function(e){return t.deleteTask(t.tasks,i)}}},[e("b-icon",{attrs:{variant:"danger",icon:"trash-fill"}})],1)])],1)],1)})),1),e("b-card",{staticClass:"mb-2",attrs:{title:"Tarea realizadas",tag:"article"}},t._l(t.doneTasks,(function(s,i){return e("b-card-text",{key:i,staticClass:"CardDone"},[e("b-row",{staticClass:"text-center"},[e("b-col",[e("button",{attrs:{id:"btnRemoveDo"},on:{click:function(e){return t.removeDone(i)}}},[e("b-icon",{staticStyle:{height:"25px"},attrs:{icon:"check2-circle"}})],1)]),e("b-col",{attrs:{cols:"8"}},[e("span",{staticStyle:{"text-decoration-line":"line-through"}},[t._v(" "+t._s(s))])]),e("b-col",[e("button",{staticClass:"btnDelete done",on:{click:function(e){return t.deleteTask(t.doneTasks,i)}}},[e("b-icon",{attrs:{variant:"danger",icon:"trash-fill"}})],1)])],1)],1)})),1)],1)],1)},D=[],_=(s(4114),s(4874)),k=s.n(_),m={name:"CheckList",components:{},data(){return{text:"",tasks:[],doneTasks:[]}},mounted(){this.getLocal()},methods:{saveTask(){""!==this.text.trim()?(this.tasks.push(this.text),this.text="",this.saveLocal()):alert("Para crear una tarea ingrese el texto antes de crearla")},saveDone(t){let e=this.tasks[t];this.doneTasks.push(e),this.tasks.splice(t,1),this.saveLocal()},updateTask(t){k().fire({title:"Ingrese el nuevo contenido del pendiente",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Actualizar",showLoaderOnConfirm:!0,preConfirm:e=>{""!==e.trim()?(this.tasks[t]=e,this.tasks=[...this.tasks],this.saveLocal()):k().fire({title:"Cambio en tarea vacio,no es posible actualizar",icon:"warning",showCloseButton:!0})}})},removeDone(t){this.tasks.push(this.doneTasks[t]),this.doneTasks.splice(t,1),this.saveLocal()},deleteTask(t,e){try{k().fire({title:"Confirma si deseas eliminar la tarea: ",text:this.tasks[e],showDenyButton:!0,confirmButtonText:"Eliminar",denyButtonText:"Cancelar"}).then((s=>{s.isConfirmed?(t.splice(e,1),this.saveLocal(),k().fire({title:"Borrada!",text:"La tarea ha sido borrada.",icon:"success"})):s.isDenied&&k().fire("Operacion cancelada","","")}))}catch(s){alert("Se encontro el siguiente error",s)}},saveLocal(){localStorage.setItem("tasks",JSON.stringify(this.tasks)),localStorage.setItem("doneTasks",JSON.stringify(this.doneTasks))},getLocal(){localStorage.tasks&&(this.tasks=[...JSON.parse(localStorage.getItem("tasks"))]),localStorage.doneTasks&&(this.doneTasks=[...JSON.parse(localStorage.getItem("doneTasks"))])}}},b=m,C=(0,c.A)(b,p,D,!1,null,"93fc6a10",null),T=C.exports,x={name:"HomeView",components:{CheckList:T}},I=x,g=(0,c.A)(I,f,v,!1,null,null,null),y=g.exports,O=function(){var t=this,e=t._self._c;return e("div",[e("BreakoutGame")],1)},L=[],w=function(){var t=this,e=t._self._c;return e("canvas",{attrs:{id:"myCanvas",width:"480",height:"320"}})},B=[],A={name:"BreakoutGame",data(){return{canvas:"",ctx:"",coorX:"",coorY:"",DX:2,DY:-2,BALL_RADIUS:10,PADDLE_HEIGHT:10,PADDLE_WIDTH:75,paddleX:0,rightPressed:!1,leftPressed:!1,BRICK_ROW_COUNT:3,BRICK_COLUMN_COUNT:5,BRICK_WIDTH:75,BRICK_HEIGHT:20,BRICK_PADDING:10,BRICK_OFF_SET_TOP:30,BRICK_OFF_SET_LEFT:30,bricks:[],score:0,lives:3}},methods:{draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawBricks(),this.drawBall(),this.drawPaddle(),this.collisionDetection(),this.drawScore(),this.drawLives(),this.coorX+=this.DX,this.coorY+=this.DY,(this.coorX+this.DX>this.canvas.width-this.BALL_RADIUS||this.coorX+this.DX<this.BALL_RADIUS)&&(this.DX=-this.DX),this.coorY+this.DY<this.BALL_RADIUS?this.DY=-this.DY:this.coorY+this.DY>this.canvas.height-this.BALL_RADIUS&&(this.coorX>this.paddleX&&this.coorX<this.paddleX+this.PADDLE_WIDTH?this.DY=-this.DY:(this.lives--,0==this.lives?(alert("Has perdido esta vez"),document.location.reload()):(this.coorX=this.canvas.width/2,this.coorY=this.canvas.height-30,this.DX=2,this.DY=-2,this.paddleX=(this.canvas.width-this.PADDLE_WIDTH)/2))),requestAnimationFrame(this.draw)},drawBall(){this.ctx.beginPath(),this.ctx.arc(this.coorX,this.coorY,10,0,2*Math.PI),this.ctx.fillStyle="#0095DD",this.ctx.fill(),this.ctx.closePath()},pinterCanvas(){let t,e;for(this.canvas=document.getElementById("myCanvas"),this.ctx=this.canvas.getContext("2d"),this.coorX=this.canvas.width/2,this.coorY=this.canvas.height-30,this.paddleX=(this.canvas.width-this.PADDLE_WIDTH)/2,document.addEventListener("keydown",this.keyDownHandler,!1),document.addEventListener("keyup",this.keyUpHandler,!1),document.addEventListener("mousemove",this.mouseMoveHandler,!1),t=0;t<this.BRICK_COLUMN_COUNT;t++)for(this.bricks[t]=[],e=0;e<this.BRICK_ROW_COUNT;e++)this.bricks[t][e]={x:0,y:0,status:1};this.draw()},drawPaddle(){this.rightPressed&&this.paddleX<this.canvas.width-this.PADDLE_WIDTH?this.paddleX+=7:this.leftPressed&&this.paddleX>0&&(this.paddleX-=7),this.ctx.beginPath(),this.ctx.rect(this.paddleX,this.canvas.height-this.PADDLE_HEIGHT,this.PADDLE_WIDTH,this.PADDLE_HEIGHT),this.ctx.fillStyle="#0095DD",this.ctx.fill(),this.ctx.closePath()},keyDownHandler(t){39==t.keyCode?this.rightPressed=!0:37==t.keyCode&&(this.leftPressed=!0)},keyUpHandler(t){39==t.keyCode?this.rightPressed=!1:37==t.keyCode&&(this.leftPressed=!1)},mouseMoveHandler(t){var e=t.clientX-this.canvas.offsetLeft;e>0&&e<this.canvas.width&&(this.paddleX=e-this.PADDLE_WIDTH/2)},drawBricks(){let t,e;for(t=0;t<this.BRICK_COLUMN_COUNT;t++)for(e=0;e<this.BRICK_ROW_COUNT;e++)if(1==this.bricks[t][e].status){let s=t*(this.BRICK_WIDTH+this.BRICK_PADDING)+this.BRICK_OFF_SET_LEFT,i=e*(this.BRICK_HEIGHT+this.BRICK_PADDING)+this.BRICK_OFF_SET_TOP;this.bricks[t][e].x=s,this.bricks[t][e].y=i,this.ctx.beginPath(),this.ctx.rect(s,i,this.BRICK_WIDTH,this.BRICK_HEIGHT),this.ctx.fillStyle="#0095DD",this.ctx.fill(),this.ctx.closePath()}},collisionDetection(){let t,e;for(t=0;t<this.BRICK_COLUMN_COUNT;t++)for(e=0;e<this.BRICK_ROW_COUNT;e++){let s=this.bricks[t][e];1==s.status&&this.coorX>s.x&&this.coorX<s.x+this.BRICK_WIDTH&&this.coorY>s.y&&this.coorY<s.y+this.BRICK_HEIGHT&&(this.DY=-this.DY,s.status=0,this.score++,this.score==this.BRICK_ROW_COUNT*this.BRICK_COLUMN_COUNT&&(alert("FELICIDADES HAS GANADO!"),document.location.reload()))}},drawScore(){this.ctx.font="16px Arial",this.ctx.fillStyle="#0095DD",this.ctx.fillText("Score: "+this.score,8,20)},drawLives(){this.ctx.font="16px Arial",this.ctx.fillStyle="#0095DD",this.ctx.fillText("Lives: "+this.lives,this.canvas.width-65,20)}}},S=A,P=(0,c.A)(S,w,B,!1,null,"04271cb6",null),R=P.exports,H={name:"BreakoutView",components:{BreakoutGame:R}},E=H,X=(0,c.A)(E,O,L,!1,null,"136fcd04",null),K=X.exports,N={},U=(0,c.A)(N,i,a,!1,null,null,null),Y=U.exports;r["default"].use(u.Ay);const G=[{path:"/",name:"home",component:y},{path:"/breakoutGame",name:"breakout",component:K},{path:"/chat",name:"chat",component:Y}],W=new u.Ay({mode:"history",base:"/",routes:G});var F=W,M=s(1641),j=s(4486);s(9313);r["default"].use(M.vGs),r["default"].use(j.YS),r["default"].config.productionTip=!1,new r["default"]({router:F,render:t=>t(d)}).$mount("#app")}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,r){if(!i){var n=1/0;for(l=0;l<t.length;l++){i=t[l][0],a=t[l][1],r=t[l][2];for(var o=!0,c=0;c<i.length;c++)(!1&r||n>=r)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(o=!1,r<n&&(n=r));if(o){t.splice(l--,1);var h=a();void 0!==h&&(e=h)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[i,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,r,n=i[0],o=i[1],c=i[2],h=0;if(n.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var l=c(s)}for(e&&e(i);h<n.length;h++)r=n[h],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(l)},i=self["webpackChunkto_do"]=self["webpackChunkto_do"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(9875)}));i=s.O(i)})();
//# sourceMappingURL=app.8e9704da.js.map