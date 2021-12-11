const pet = () => {
    return React.createElement("div", {},[
        React.createElement("h2",{}, "Luna"),
        React.createElement("h3",{},"Dog"),
        React.createElement("h3",{},"Havanese")
    ])
}

const app = () => {
    return React.createElement(
        "div",
        {}, [
        React.createElement("h1",{},"Adopt me!"),
        [1,2,3,4].map(i => React.createElement("h3",{},i)),
        React.createElement(pet),
        React.createElement(pet),
        React.createElement(pet)]
    );
};
ReactDOM.render(React.createElement(app), document.getElementById("root"));
 