(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6057)}])},6057:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(5893),o=n(7294),i=n(4051),c=n.n(i),a=n(2175);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return(0,r.jsx)("button",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},e,{className:e.className+" p-tiny bg-primary-300 rounded cursor-pointer disabled:cursor-not-allowed "+e.className}))};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){return(0,r.jsx)("h1",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},e,{className:e.className+" font-bold text-2xl text-center p-lg"}))},m=n(9520),d=n(1039),p=n(890);function h(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){h(i,r,o,c,a,"next",e)}function a(e){h(i,r,o,c,a,"throw",e)}c(void 0)}))}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,e);var t=j(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=t.call(this,"TodoDB")).version(3).stores({todos:"++id,name,importance,completed,deadline,*categories, *subTodos, time",categories:"++id, name",completedReccurences:"todoId,time"}),e}var r=n.prototype;return r.insertTodo=function(e){var t=this;return b(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("inserting new todo"),n.next=3,t.todos.add({name:e.todo,importance:e.importance,completed:!1,time:e.time,categories:e.categories,subTodos:[]});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},r.untimedTodos=function(){var e=this;return b(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.todos.where({time:""}).toArray());case 1:case"end":return t.stop()}}),t)})))()},r.todaysTodos=function(e){var t=this;return b(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.todos.where("time").notEqual("").filter((function(t){return(0,p.lp)(e,(0,p.Qc)(t.time)).getTime()-e.getTime()<864e5})).toArray();case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))()},r.upcomingTodos=function(e,t){var n=this;return b(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.todos.where("time").notEqual("").filter((function(t){return console.log("next(today, parse(todo.time)).getTime(),",(0,p.lp)(e,(0,p.Qc)(t.time)).getTime(),"today.getTime()",e.getTime()),(0,p.lp)(e,(0,p.Qc)(t.time)).getTime()>=e.getTime()})).toArray();case 2:return r=t.sent.sort((function(e,t){return(0,p.lp)(new Date,(0,p.Qc)(e.time)).getTime()-(0,p.lp)(new Date,(0,p.Qc)(t.time)).getTime()})),t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},r.createCategory=function(e){var t=this;return b(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.categories.add(e));case 1:case"end":return n.stop()}}),n)})))()},r.checkTodo=function(e,t,n){var r=this;return b(c().mark((function o(){return c().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(console.log("checking"),n){o.next=6;break}return o.next=4,r.todos.update(e,{completed:t});case 4:o.next=8;break;case 6:return o.next=8,r.completedReccurences.add({todoId:e,time:n});case 8:case"end":return o.stop()}}),o)})))()},n}(m.default),O=function(){var e=b(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=new w;k.on("populate",O);function N(e,t,n){var r=(0,o.useState)(t),i=r[0],c=r[1],a=(0,d.useLiveQuery)((function(){try{return e()}catch(a){return t}}),n)||t;return(0,o.useEffect)((function(){c(a)}),[a,i]),i}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C=function(e){var t=e.field,n=(e.form,T(e,["field","form"]));return(0,r.jsx)("input",P({},t,n,{className:n.className+" bg-primary-200 border-2 border-primary-800 focus:bg-primary-300 transition rounded"}))},_=function(e){return(0,r.jsx)(a.gN,P({},e,{component:C}))},D=function(e){return"hsl(".concat(e.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0)%256,",70%, 70%)")};function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function Q(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){A(i,r,o,c,a,"next",e)}function a(e){A(i,r,o,c,a,"throw",e)}c(void 0)}))}}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=function(e){return(0,r.jsx)(a.Bc,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){F(e,t,n[t])}))}return e}({},e,{component:function(e){return(0,r.jsx)("div",{className:"text-accent font-bold text-lg",children:e.children})}}))},L=function(e){var t=e.category,n=(0,a.u6)(),o=n.setFieldValue,i=n.values;return(0,r.jsx)("div",{className:"rounded bg-primary-300 w-full cursor-pointer hover:bg-primary-200",onClick:function(){o("categories",R(i.categories).concat([t.id]))},children:t.name})},B=function(e){var t=e.category,n=(0,a.u6)(),o=n.setFieldValue,i=n.values,c=N((function(){return k.categories.get(t)}),{name:"loading...",id:12});return(0,r.jsxs)("div",{className:"rounded inline-block ",style:{backgroundColor:D(c.name)},children:[c.name,(0,r.jsx)("button",{onClick:function(){return o("categories",i.categories.filter((function(e){return e!==t})))},className:"text-primary-400 bg-transparent hover:bg-parimary-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"defaultModal",children:(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})},U=function(e){e.errors;var t=e.values,n=e.isSubmitting,o=N((function(){return k.categories.where("name").startsWith(t.categoryString).limit(5).filter((function(e){return!t.categories.includes(e.id)})).toArray()}),[],[t.categoryString,t.categories]);return(0,r.jsxs)(a.l0,{className:"justify-items-center flex flex-col items-center justify-center .",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"todo",children:"Todo Name"}),(0,r.jsx)(_,{name:"todo"}),(0,r.jsx)(I,{name:"todo"}),(0,r.jsx)("label",{htmlFor:"importance",children:"Level of Importance"}),(0,r.jsx)(_,{name:"importance",type:"number"}),(0,r.jsx)(I,{name:"importance"}),(0,r.jsx)("label",{htmlFor:"categories",children:"Categories"}),(0,r.jsx)(_,{name:"categoryString"}),(0,r.jsx)("div",{children:o.map((function(e){return(0,r.jsx)(L,{category:e},e.id)}))}),(0,r.jsx)("div",{children:t.categories.map((function(e){return(0,r.jsx)(B,{category:e},e)}))}),(0,r.jsx)(I,{name:"categoryString"}),(0,r.jsx)("label",{htmlFor:"deadline",children:"time (optional)"}),(0,r.jsx)("div",{children:(0,p.DS)(t.time)&&"Time is ".concat((0,p.lp)(new Date,(0,p.Qc)(t.time)).toLocaleString("en-US"))}),(0,r.jsx)(_,{name:"time"}),(0,r.jsx)(I,{name:"time"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(s,{type:"submit",className:"mx-auto m-lg ",disabled:n,children:"Submit"})})]})},V=function(){return(0,r.jsxs)("div",{className:"w-7/12 mx-auto",children:[(0,r.jsx)(f,{children:"Create New Todo"}),(0,r.jsx)(a.J9,{initialValues:{todo:"",importance:5,categories:[],time:"",categoryString:""},validate:function(){var e=Q(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},(0,p.DS)(t.time)||""===t.time||(n.time="invalid time"),""===t.todo&&(n.todo="todo name cannot be blank"),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onSubmit:function(){var e=Q(c().mark((function e(t,n){var r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,o=n.resetForm,console.log("submitting form"),e.next=4,k.insertTodo(t);case 4:r(!1),o();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:U})]})};function M(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){M(i,r,o,c,a,"next",e)}function a(e){M(i,r,o,c,a,"throw",e)}c(void 0)}))}}var J=function(){return(0,r.jsxs)("div",{className:"w-8/12 mx-auto",children:[(0,r.jsx)(f,{children:"Create new Category"}),(0,r.jsx)(a.J9,{initialValues:{name:""},validate:function(){var e=q(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},""===t.name&&(n.name="category name cannot be empty"),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onSubmit:function(){var e=q(c().mark((function e(t,n){var r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,o=n.resetForm,console.log("submitting form"),e.next=4,k.createCategory(t);case 4:r(!1),o();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.values;var t=e.isSubmitting;return(0,r.jsxs)(a.l0,{className:"justify-items-center items-center flex flex-col justify-center . ",children:[(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("label",{htmlFor:"name",children:"Category Name"}),(0,r.jsx)(_,{name:"name"}),(0,r.jsx)(I,{name:"name"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(s,{type:"submit",className:" m-lg",disabled:t,children:"Submit"})})]})}})]})};function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){X(e,t,n[t])}))}return e}var W=function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("input",z({},e,{className:e.className+"form-check-input appearance-none h-4 w-4 border \n        border-primary-300 rounded-sm bg-white checked:bg-primary-600 \n        checked:border-primary-600 focus:outline-none \n        transition duration-200 mt-1 \n        align-top bg-no-repeat \n        bg-center bg-contain \n        float-left mr-2 cursor-pointer",type:"checkbox"}))})},Y=n(329);function $(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}var G=function(e){var t=e.category,n=N((function(){return k.categories.get(t)}),{name:"loading...",id:12});return(0,r.jsx)("div",{className:"rounded inline-block",style:{backgroundColor:D(n.name)},children:n.name})},H=function(e){var t,n=e.column,o=e.text,i=(0,Y.Yb)(),c=(0,Y.pi)((function(e){return e.columnSort})),a=(0,Y.pi)((function(e){return e.sort}));return(0,r.jsx)("th",{className:(c===n&&("ascending"===a?"bg-secondary":"bg-accent"))+" cursor-pointer rounded text-center",onClick:(t=n,function(){return i((0,Y.p3)(t))}),children:o})},K=function(e){var t=e.todo,n=e.index,o=function(){var e,n=(e=c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.target.checked,""!==t.time){e.next=6;break}return e.next=4,k.checkTodo(t.id,r);case 4:e.next=8;break;case 6:return e.next=8,k.checkTodo(t.id,r,(0,p.lp)(new Date,(0,p.Qc)(t.time)));case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){$(i,r,o,c,a,"next",e)}function a(e){$(i,r,o,c,a,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,r.jsxs)("tr",{className:"even:bg-primary-100 odd:bg-primary-200 rounded",children:[(0,r.jsx)("td",{children:n+1}),(0,r.jsx)("td",{children:t.name}),(0,r.jsx)("td",{children:(0,r.jsx)(W,{onChange:o,defaultChecked:t.completed})}),(0,r.jsx)("td",{children:t.categories.map((function(e){return(0,r.jsx)(G,{category:e},e)}))}),(0,r.jsx)("td",{children:t.importance}),(0,r.jsx)("td",{children:t.time?(0,p.lp)(new Date,(0,p.Qc)(t.time)).toLocaleString("en-US"):"no time"})]},n)},Z=function(e){var t=e.todos,n=(0,Y.pi)((function(e){return e.columnSort})),o=(0,Y.pi)((function(e){return e.sort})),i=t.sort((function(e,t){return"categories"===n?e.categories.join("").localeCompare(t.categories.join("")):"done"===n?Number(e.completed)-Number(t.completed):"importance"===n?e.importance-t.importance:"name"===n?e.name.localeCompare(t.name):""!==e.time&&""!==t.time?(0,p.lp)(new Date,(0,p.Qc)(e.time)).getTime()-(0,p.lp)(new Date,(0,p.Qc)(t.time)).getTime():1})),c="descending"===o?i.reverse():i;return(0,r.jsx)("div",{children:(0,r.jsxs)("table",{className:"w-full mx-auto text-sm text-left text-primary-500 dark:text-primary-400",children:[(0,r.jsx)("thead",{className:"w-full text-sm text-left text-primary-500 dark:text-primary-400",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)(H,{column:"number",text:"Number"}),(0,r.jsx)(H,{column:"name",text:"Name"}),(0,r.jsx)(H,{column:"done",text:"Done?"}),(0,r.jsx)(H,{column:"categories",text:"Categories"}),(0,r.jsx)(H,{column:"importance",text:"Importance"}),(0,r.jsx)(H,{column:"time",text:"Time"})]})}),(0,r.jsx)("tbody",{children:c.map((function(e,t){return(0,r.jsx)(K,{todo:e,index:t},e.id)}))})]})})},ee=function(){var e=N((function(){return k.untimedTodos()}),[]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{children:"Untimed Todos"}),(0,r.jsx)(Z,{todos:e})]})},te=function(){var e=N((function(){return k.upcomingTodos(new Date,1)}),[]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{children:"Upcoming Todos"}),(0,r.jsx)(Z,{todos:e})]})},ne=function(){N((function(){return k.todos.toArray()}),[]);return(0,r.jsxs)("div",{className:"bg-primary-100 w-full h-full min-h-screen",children:[(0,r.jsx)(f,{children:"Selguha"}),(0,r.jsx)("p",{className:"text-center",children:"Selguha is a fast and functional todo and task tracking app. "}),(0,r.jsxs)("div",{className:"grid grid-cols-2 ",children:[(0,r.jsx)(V,{}),(0,r.jsx)(ee,{}),(0,r.jsx)(J,{}),(0,r.jsx)(te,{})]}),(0,r.jsx)("button",{onClick:function(){return k.delete()},className:"bg-accent font-bold p-lg m-auto",children:"Delete All"})]})}}},function(e){e.O(0,[311,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);