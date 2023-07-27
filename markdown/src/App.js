import {useState} from "react"
import {marked} from "marked"
import './App.css';


marked.setOptions({
  breaks: true
})

function App() {
  const [text, setText] = useState(`
  # H1 heading 1

  ## H2 heading 2

  **bold text**

  [links](https://www.freecodecamp.org)

  \`<div></div> \`

  \`\`\` 
  // this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
  \`\`\`

  - And of course there are lists.
  - Some are bulleted.
  - With different indentation levels.
  - That look like this.

> bloquete

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  
  `);

  return (
    <div className="App" >
            
            <textarea id="editor" value={text} onChange={(event) => {setText(event.target.value);}} ></textarea>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(text),}} ></div>
    </div>
  );
}

export default App;

