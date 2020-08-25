(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),l=(n(13),n(4)),s=n(5),u=n(1),c=n(7),h=n(6),d=(n(14),n(15)),w=function(e){Object(c.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={userInput:'# Welcome to my Markdown Previewer\n\nAs a new developer working with Github Repositories and learning the *Markdown* syntax, it\'s frustrating to not know what your README.md file is going to look like until you commit your changes.  \nFret no more! Simply begin typing and this Markdown Preview Tool will parse through your markdown syntax to render the expected output in the preview window on the right. Feel free to delete or keep as much of the starter text as you want.\n\n## Here are some tips to get you started!\n\nWhen you end a sentence with two spaces and press enter, you begin a new line. \n\nHere are some bullets:\n- Markdown is a lightweight markup language invented by John Gruber and Aaron Swartz \n- The first release was March of 2004\n- Check out the [Wiki](https://en.wikipedia.org/wiki/Markdown) page here  \n\nThis is how you write block quotes:\n>"Its key design goal is readability \u2013 that the language be readable as-is, without looking like it has been marked up with tags or formatting instructions" - Wiki\n\nAnd this is how you write `code`. The following is a code block:\n\n    let sayHello = function() {return "hello world!"};\n    console.log(sayHello());\n  \nAnd if you want to be more organized, you can make tables:\n\n| Syntax      | Description/Definition  | Output      |\n| :---        |    :----:    |        ---: |\n| Some Syntax | What it means| The Output  |\n| Paragraph   | Text        | And more     |\n\n\nAnd if you have too many things on your plate, try a To-Do list:\n\n- [x] Walk my dog teddy\n- [x] Code!\n- [ ] Go on a run\n- [ ] Make Dinner\n\nAlso if you don\'t like something, you can strike it out like so:  \nThe earth is ~Flat~ **Round**\n\nFor further documentation on Markdown, click on the Markdown Logo above the preview window. To see what I\'ve been tinkering with, click the Octocat in the bottom right corner to visit my Github!  \n\n'},a.handleInput=a.handleInput.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"handleInput",value:function(e){this.setState({userInput:e.target.value})}},{key:"render",value:function(){return o.a.createElement("div",{class:"backdrop"},o.a.createElement("div",{id:"row1"},o.a.createElement("div",{id:"logo-row"},o.a.createElement("p",{id:"input-logo"},"Editor"),o.a.createElement("a",{id:"output-logo",href:"https://www.markdownguide.org/basic-syntax/",target:"_blank"},o.a.createElement("button",null,o.a.createElement("i",{class:"fab fa-markdown"}))))),o.a.createElement("div",{id:"row2"},o.a.createElement("textarea",{id:"editor",onChange:this.handleInput},this.state.userInput),o.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:d(this.state.userInput)}})),o.a.createElement("div",{id:"row3"},o.a.createElement("button",null,o.a.createElement("a",{id:"github-logo",href:"https://github.com/alec-huang-labs",target:"_blank"},o.a.createElement("i",{class:"fa fa-github"})))))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.c0e83ab2.chunk.js.map
