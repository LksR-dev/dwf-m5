function n(n,e,t,s){Object.defineProperty(n,e,{get:t,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},o=e.parcelRequire93c5;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in s){var e=s[n];delete s[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){s[n]=e},e.parcelRequire93c5=o),o.register("27Lyk",(function(e,t){var s,o;n(e.exports,"register",(()=>s),(n=>s=n)),n(e.exports,"resolve",(()=>o),(n=>o=n));var r={};s=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)r[e[t]]=n[e[t]]},o=function(n){var e=r[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o.register("ly6pJ",(function(n,e){n.exports=new URL(o("27Lyk").resolve("7gKSl"),import.meta.url).toString()})),o.register("9c8ns",(function(n,e){n.exports=new URL(o("27Lyk").resolve("1CC8G"),import.meta.url).toString()})),o.register("2r2WI",(function(n,e){n.exports=new URL(o("27Lyk").resolve("C6esP"),import.meta.url).toString()})),o.register("99MHT",(function(n,e){n.exports=new URL(o("27Lyk").resolve("bUnx8"),import.meta.url).toString()})),o.register("2Xbar",(function(n,e){n.exports=new URL(o("27Lyk").resolve("2qMS6"),import.meta.url).toString()})),o.register("k3V2l",(function(n,e){n.exports=new URL(o("27Lyk").resolve("jPdlM"),import.meta.url).toString()})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.72063d72.js","7gKSl":"rock.2312c16f.png","1CC8G":"scissors.ad4321ba.png","C6esP":"paper.343f43f3.png","bUnx8":"StarTie.1cb971e6.svg","2qMS6":"StarWins.925a67b3.svg","jPdlM":"StarLoss.9846907e.svg"}')),customElements.define("btn-comp",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("style"),t=document.createElement("button");t.textContent=this.textContent,t.className="btn",e.innerHTML='\n        .btn{\n          width: 322px;\n          height: 87px;\n          background-color: #006CFC;\n          color: #ffff;\n          font-size: 40px;\n          font-family: "Patrick Hand", sans-serif;\n          border: 10px solid #001997;\n          border-radius: 10px;\n        }\n\n        .btn:hover {\n          cursor: pointer;\n        }\n      ',n.appendChild(e),n.appendChild(t)}}),customElements.define("text-comp",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant")||"body",e=this.attachShadow({mode:"open"}),t=document.createElement("div"),s=document.createElement("style");t.className="text",s.innerHTML="\n      .text {\n        padding-top: 40px;\n        text-align: center\n      }\n      .title {\n        font-size: 80px;\n        margin-bottom: 100px;\n        color: #009048;\n        max-width: 350px;\n        line-height: 85px;\n        font-family: 'Fredoka One', cursive;\n      }\n      @media only screen and (min-width: 300px) {\n        .title {\n          margin-bottom: 50px;\n        }\n      }\n      .body {\n        font-size: 30px;\n        padding-right: 20px;\n        padding-top: 0;\n      }\n      .large {\n        font-size: 40px;\n        line-height: 60px;\n        margin-bottom: 30px;\n        max-width: 400px;\n      }\n      @media only screen and (min-width: 426px) {\n        .large {\n          font-size: 50px;\n        }\n      }\n      ",t.innerHTML=this.textContent,t.className=n+" text",e.appendChild(s),e.appendChild(t)}});const r={rock:o("ly6pJ"),scissors:o("9c8ns"),paper:o("2r2WI")};customElements.define("hands-comp",class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}addListeners(){this.addEventListener("click",(()=>{const n=new CustomEvent("handClick",{detail:{handMove:this.getAttribute("hand")}});this.dispatchEvent(n)}))}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("style"),t=document.createElement("div"),s=this.getAttribute("hand");t.innerHTML=`\n        <img class="hand" src="${r[s]}" />\n      `,e.innerHTML="\n        .hand {\n          width: 40px;\n        }\n        @media only screen and (min-width: 370px) {\n          .hand {\n            width: 60px;\n          }\n        }\n        @media only screen and (min-width: 420px) {\n          .hand {\n            width: 80px;\n          }\n        }\n      ",n.appendChild(e),n.appendChild(t)}});const a={data:{currentGame:{computerPlay:"",myPlay:""},history:{myScore:0,computerScore:0}},listeners:[],getStorage(){const n=JSON.parse(localStorage.getItem("data"));if(localStorage.getItem("data"))return this.data.history=n},getState(){return this.data},setState(n){this.data=n;for(const n of this.listeners)n();console.log("Soy el state, he cambiado",this.data),this.savedData()},suscribe(n){this.listeners.push(n)},setScore(){const n=this.getState(),e=this.getState().currentGame.myPlay,t=this.getState().currentGame.computerPlay,s=this.whoWins(e,t),o=n.history.myScore,r=n.history.computerScore;return"wins"===s?this.setState({...n,history:{myScore:o+1,computerScore:r}}):"loss"===s?this.setState({...n,history:{myScore:o,computerScore:r+1}}):void 0},whoWins(n,e){if(["paper"==n&&"paper"==e,"rock"==n&&"rock"==e,"scissors"==n&&"scissors"==e].includes(!0))return"tie";return["paper"==n&&"rock"==e,"rock"==n&&"scissors"==e,"scissors"==n&&"paper"==e].includes(!0)?"wins":"loss"},setMove(n){const e=this.getState();e.currentGame.myPlay=n;e.currentGame.computerPlay=["scissors","rock","paper"][Math.floor(3*Math.random())],this.setScore()},savedData(){const n=this.getState().history;localStorage.setItem("data",JSON.stringify(n))}};const i={tie:o("99MHT"),win:o("2Xbar"),loss:o("k3V2l")};const c=[{path:/\/welcome/,component:function(n){const e=document.createElement("div");return e.className="container",e.innerHTML='\n    <text-comp variant="title">Piedra Papel o Tijeras</text-comp>\n    <btn-comp class="button">Empezar</btn-comp>\n\n    <div class="container__hand">\n      <hands-comp hand="rock"></hands-comp>\n      <hands-comp hand="paper"></hands-comp>\n      <hands-comp hand="scissors"></hands-comp>\n    </div>\n  ',e.querySelector(".button").addEventListener("click",(()=>n.goTo("/instructions"))),e}},{path:/\/instructions/,component:function(n){const e=document.createElement("div");return e.className="container",e.innerHTML='\n    <text-comp variant="large">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 5 segundos.</text-comp>\n    <btn-comp class="button">Jugar</btn-comp>\n\n    <div class="container__hand">\n      <hands-comp hand="rock"></hands-comp>\n      <hands-comp hand="paper"></hands-comp>\n      <hands-comp hand="scissors"></hands-comp>\n    </div>\n  ',e.querySelector(".button").addEventListener("click",(()=>n.goTo("/game"))),e}},{path:/\/game/,component:function(n){let e=5;const t=setInterval((()=>{e--;s.querySelector(".master-circle").textContent=String(e),e<0&&(clearInterval(t),n.goTo("/instructions"))}),1e3),s=document.createElement("div");s.className="container",s.innerHTML=`\n    <div class="hands__top">\n      <hands-comp hand="rock" class="rock__top hand-display-none"></hands-comp>\n      <hands-comp hand="paper" class="paper__top hand-display-none"></hands-comp>\n      <hands-comp hand="scissors" class="scissors__top hand-display-none"></hands-comp>\n    </div>\n\n    <div class="master-circle">${e}</div>\n    \n    \n    <div class="container__hand">\n      <hands-comp hand="rock" class="rock__bottom disabled"></hands-comp>\n      <hands-comp hand="paper" class="paper__bottom disabled"></hands-comp>\n      <hands-comp hand="scissors" class="scissors__bottom disabled"></hands-comp>\n    </div>\n  `;const o=document.createElement("style");o.innerHTML='\n    .hands__top {\n      transform: rotate(180deg);\n      display: flex;\n      align-items: center;\n      position: relative;\n      top: -35px;\n    }\n    .actived {\n      display: inherit;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }\n    .disabled {\n      opacity: 60%;\n    }\n    .hand-display-none {\n      display: none;\n    }\n    .active-hands{\n      width\n    }\n    .actived-hands-top {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n    .actived-hand-top {\n      display: flex;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }\n    hands-comp:hover {\n      cursor:pointer\n    }\n\n    .master-circle {\n      width: 150px;\n      height: 150px;\n      box-shadow: 0 0 0 1.875vmin, inset 3.75vmin 3.75vmin 7.5vmin rgba(0, 0, 0, 0.125), 3.75vmin 3.75vmin 7.5vmin rgba(0, 0, 0, 0.125);\n      font-size: 100px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      overflow: hidden;\n      color: #000;\n      border-radius: 50%;\n      border: 30px;\n      font-weight: 700;\n    }\n\n    @media (min-width: 420px) {\n      .master-circle {\n        width: 250px;\n        height: 250px;\n        box-shadow: 0 0 0 1.25vmin, inset 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125), 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125);\n        font-size: 25vmin;\n        text-shadow: 2.5vmin 2.5vmin 5vmin rgba(0, 0, 0, 0.125);\n      }\n    }\n\n    .master-circle:before {\n      content: "";\n      -webkit-animation: 5s 1s forwards timer_countdown, 1s 0.875s 15 timer_beat;\n              animation: 5s 1s forwards timer_countdown, 1s 0.875s 15 timer_beat;\n      color: #000;\n    }\n    @-webkit-keyframes timer_beat {\n      40%, 80% {\n        transform: none;\n      }\n      50% {\n        transform: scale(1.125);\n      }\n    }\n    @keyframes timer_beat {\n      40%, 80% {\n        transform: none;\n      }\n      50% {\n        transform: scale(1.125);\n      }\n    }\n    .master-circle:after {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: -100;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.125);\n      -webkit-animation: 5s 1s linear forwards timer_indicator;\n              animation: 5s 1s linear forwards timer_indicator;\n    }\n    @-webkit-keyframes timer_indicator {\n      100% {\n        transform: translateY(100%);\n      }\n    }\n    @keyframes timer_indicator {\n      100% {\n        transform: translateY(100%);\n      }\n    }\n  }\n  ';const r=s.querySelector(".master-circle"),i=s.querySelector(".container__hand"),c=s.querySelector(".hands__top"),d=s.querySelector(".rock__top"),l=s.querySelector(".paper__top"),p=s.querySelector(".scissors__top"),m=s.querySelector(".container__hand").children,h=s.querySelector(".rock__bottom"),u=s.querySelector(".scissors__bottom"),f=s.querySelector(".paper__bottom");for(const n of m)n.addEventListener("click",(()=>{const e=n.getAttribute("hand");clearInterval(t),"scissors"===e?(a.setMove("scissors"),g("scissors")):"rock"===e?(a.setMove("rock"),g("rock")):"paper"===e&&(a.setMove("paper"),g("paper"))}));function g(e){"scissors"===e?(u.classList.remove("disabled"),u.classList.add("actived"),setTimeout((()=>{h.classList.add("hand-display-none"),f.classList.add("hand-display-none")}),1500)):"rock"===e?(h.classList.remove("disabled"),h.classList.add("actived"),setTimeout((()=>{u.classList.add("hand-display-none"),f.classList.add("hand-display-none")}),1500)):"paper"===e&&(f.classList.remove("disabled"),f.classList.add("actived"),setTimeout((()=>{u.classList.add("hand-display-none"),h.classList.add("hand-display-none")}),1500)),setTimeout((()=>{const e=a.getState().currentGame.computerPlay;r.remove(),i.classList.add("active-hands"),c.classList.add("actived-hands-top"),"scissors"==e&&p.classList.add("actived-hand-top"),"rock"==e&&d.classList.add("actived-hand-top"),"paper"==e&&l.classList.add("actived-hand-top"),setTimeout((()=>{n.goTo("/results")}),1500)}),1500)}return s.appendChild(o),s}},{path:/\/results/,component:function(n){const e=document.createElement("div");e.className="container__results";const t=a.getState(),s=t.currentGame,o=s.myPlay,r=s.computerPlay,c=a.whoWins(o,r);let d,l;"wins"===c?(l=i.win,d="rgba(136, 137, 73, 0.6)"):"loss"===c?(l=i.loss,d="rgba(137, 73, 73, 0.6)"):(l=i.tie,d="rgba(106, 112, 101, 0.6)");const p=document.createElement("style");return e.innerHTML=`\n    <div>\n      <img class="img__result" src="${l}">\n      </div>\n    <div class="board">\n      <div>\n        <h3>Score</h3>\n      </div>\n        <text-comp>Vos: ${t.history.myScore}</text-comp>\n        <text-comp>Máquina: ${t.history.computerScore}</text-comp>\n    </div>\n\n    <btn-comp class="button">Volver a Jugar</btn-comp>\n    <btn-comp class="button back">Volver al Inicio</btn-comp>\n  `,e.querySelector(".button").addEventListener("click",(()=>{n.goTo("./game")})),e.querySelector(".back").addEventListener("click",(()=>{n.goTo("/welcome")})),p.innerHTML=`\n    .container__results {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100vh;\n      justify-content: center;\n      padding-top: 40px;\n      background-color: ${d};\n    }\n    .img__result {\n      height: 180px;\n    }\n    .board {\n      height: 190px;\n      width: 230px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      border: 10px solid #000;\n      border-radius: 10px;\n      margin: 5px 0;\n      background-color: #fff;\n    }\n    .board  h3 {\n      text-align: center;\n      font-size: 40px;\n      font-weight: 700;\n      height: 100%;\n    }\n    .board > text-comp {\n      align-self: flex-end;\n    }\n    .back {\n      margin-top: 10px;\n    }\n  `,e.appendChild(p),e}}];!function(){a.getStorage();!function(n){function e(n){history.pushState({},"",n),t(n)}function t(t){console.log("El handle route recibió una nueva ruta",t);for(const s of c)if(s.path.test(t)){const t=s.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(t)}}"/"==location.pathname?e("/welcome"):t(location.pathname),window.onpopstate=()=>{t(location.pathname)}}(document.querySelector(".root"))}();
//# sourceMappingURL=index.72063d72.js.map
