var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,r=(e,r)=>{for(var a in r||(r={}))t.call(r,a)&&l(e,a,r[a]);if(o)for(var a of o(r))n.call(r,a)&&l(e,a,r[a]);return e};import{C as a,a as c,B as s}from"./vendor.f8125c64.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const a=new URL(e,n);if(self[t].moduleMap[a])return o(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),l(s)},onload(){o(self[t].moduleMap[a]),l(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/context-Api-like-redux-implement/assets/");const m=a.createContext({name:"rasel"});function u(e,t){return function(o){let n=a.useContext(m);function l(e){n.callback(e)}return a.createElement(m.Consumer,null,(c=>a.createElement(e,r(r(r({},o),c),function(){let e={};for(const o in t)e[o]=function(e){t[o](e)(l,n)};return e}()))))}}var d=u((e=>(console.log("state from viewTodos",e),a.createElement("div",{className:"todo_view_component"},a.createElement("h4",null,"All todos"),a.createElement("ul",{className:"todos"},e.todos&&e.todos.map(((t,o)=>a.createElement("li",{className:"todo",key:o},a.createElement("span",null,t.title),a.createElement("i",{className:"fa fa-trash",onClick:()=>e.deleteTodo(t.id)})))))))),{deleteTodo:e=>function(t,o){t(r(r({},o),{todos:o.todos.filter((t=>t.id!==e))}))}});var i=u((e=>{const[t,o]=a.useState("");return a.createElement("div",{className:"addTodo_component"},a.createElement("input",{type:"text",value:t,placeholder:"Enter Todo Name",onChange:e=>o(e.target.value)}),a.createElement("button",{onClick:function(n){e.addTodo({id:Date.now(),title:t,isComplete:!1}),o("")},type:"button"},"Add"))}),{addTodo:function(e){return function(t,o){t(r(r({},o),{todos:[...o.todos,e]}))}}});const p=u((e=>a.createElement("div",null,a.createElement(i,null),a.createElement(d,null))));var f=u((function(e){return console.log("state from app",e),a.createElement("div",{className:"App"},a.createElement(p,null))}));const E=(v=f,function(e){const[t,o]=a.useState({name:"Rasel Mahmud",todos:[{title:"Get up at 6'O Clock",id:1}]});return a.createElement(m.Provider,{value:r(r({},t),{callback:function(e){o(e)}})},a.createElement(v,r({},e)))});var v;c.render(a.createElement(a.StrictMode,null,a.createElement(s,null,a.createElement(E,null))),document.getElementById("root"));
