/**
 * <div id:"parent">
 *  <divid:"child>
 *      <h1>I am H1</h1>
 *      <h2>I am H2</h2>
 *  </div>
 * </div>
 */

const  parent = React.createElement(
    "div", { id: "parent" }, React.createElement(
        "div", { id: "child" }, [React.createElement ("h1", {}, "Hello this is h1"), React.createElement ("h2", {}, "Hello this is h2")])

);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
