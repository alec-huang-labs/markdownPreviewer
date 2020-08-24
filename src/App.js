import React from 'react';
import './App.css';
import Badge from "react-bootstrap/Badge";
let marked = require("marked");

const placeholder = `# Welcome to my Markdown Previewer

As a new developer learning the *Markdown* syntax, it's frustrating to not know what your README.md file is going to look like until you commit your changes.  
Fret no more! Simply begin typing and this Markdown Preview Tool will parse through your markdown syntax to render the expected output in the preview window on the right. Feel free to delete or keep as much of the starter text as you want.

## Here are some tips to get you started!

When you end a sentence with two spaces and press enter, you begin a new line. 

Here are some bullets:
- Markdown is a lightweight markup language invented by John Gruber and Aaron Swartz 
- The first release was March of 2004
- Check out the [Wiki](https://en.wikipedia.org/wiki/Markdown) page here  

This is how you write block quotes:
>"Its key design goal is readability – that the language be readable as-is, without looking like it has been marked up with tags or formatting instructions" - Wiki

And this is how you write \`code\`. The following is a code block:

    let sayHello = function() {return "hello world!"}
    console.log(sayHello());
  
And if you want to be more organized, you can make tables:

| Syntax      | Description/Definition  | Output      |
| :---        |    :----:    |        ---: |
| Some Syntax | What it means| The Output  |
| Paragraph   | Text        | And more     |


And if you have too many things on your plate, try a To-Do list:

- [x] Walk my dog teddy
- [x] Code!
- [ ] Go on a run
- [ ] Make Dinner

Also if you don't like something, you can strike it out like so:  
The earth is ~Flat~ **Round**

For further documentation on Markdown, click on the Markdown Logo above the preview window. To see what I've been tinkering with, click the Octocat in the bottom right corner to visit my Github!  

`

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userInput: placeholder
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
    this.setState({
      userInput: event.target.value
    });
  }
  render () {
    return (
    <div class = "backdrop">
      <div id = "row1">
        <div id = "logo-row">
        <p id = "input-logo">Editor</p>
        <a id = "output-logo" href= "https://www.markdownguide.org/basic-syntax/" target="_blank"><button><i class="fab fa-markdown"></i></button></a>
        </div>
      </div>
      <div id = "row2">
        <textarea id = "editor" onChange = {this.handleInput}>{this.state.userInput}</textarea>
        <div id = "preview" dangerouslySetInnerHTML={{__html: marked(this.state.userInput),}}></div>
      </div>
      <div id = "row3">
        <button><a id = "github-logo" href = "https://github.com/alec-huang-labs" target="_blank"><i class="fa fa-github"></i></a></button>
      </div>
    </div>
    )}
}


export default App;


