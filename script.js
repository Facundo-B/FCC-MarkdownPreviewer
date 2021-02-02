$(document).ready(function () {
  $(window).
  resize(function () {
    if ($(window).width() >= 992) {
      $("#editor-window").removeClass("w-100");
      $("#editor-window").addClass("w-50");
    } else {
      $("#editor-window").removeClass("w-50");
      $("#editor-window").addClass("w-100");
    }
  }).
  resize(); // This will simulate a resize to trigger the initial run.
});

// Allow <br> on line breaks
marked.setOptions({
  breaks: true });


// add "target=_blank" to links
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: placeholder };

    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(event) {
    this.setState({
      editorInput: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container-fluid h-100 w-100 d-flex justify-content-center align-items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "row w-100 d-flex flex-column align-items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-12 col-sm-12 col-md-10 col-lg-9 col-xl-8 p-0 d-flex flex-column justify-content-center align-items-center" }, /*#__PURE__*/
      React.createElement(Editor, {
        content: this.state.editorInput,
        handleEditorChange: this.handleEditorChange }), /*#__PURE__*/

      React.createElement(Preview, { content: this.state.editorInput })))));




  }}


class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "editor-window", className: "window" }, /*#__PURE__*/
      React.createElement("div", { className: "w-100 bar", id: "editor-bar" }, /*#__PURE__*/
      React.createElement("span", null, /*#__PURE__*/
      React.createElement("i", { class: "fas fa-terminal fa-xs" }), " Editor")), /*#__PURE__*/


      React.createElement("textarea", {
        id: "editor",
        onChange: this.props.handleEditorChange,
        className: "w-100" },

      this.props.content)));



  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "preview-window", className: "w-100 window" }, /*#__PURE__*/
      React.createElement("div", { className: "w-100 bar", id: "preview-bar" }, /*#__PURE__*/
      React.createElement("span", null, /*#__PURE__*/
      React.createElement("i", { class: "fab fa-markdown fa-xs" }), " Preview")), /*#__PURE__*/


      React.createElement("div", {
        id: "preview",
        dangerouslySetInnerHTML: {
          __html: marked(this.props.content, { renderer: renderer }) },

        className: "text-left" })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app-container"));