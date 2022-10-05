

console.log('app.js is running');

const app = {
    title: 'some title',
    subtitle: 'this is my subtitle',
    options: []
    
};

const onformsubmit = (e) => {
    e.preventDefault();
    console.log('form submit');
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

// const template = (
//     <div>
//         <h1>{app.title}</h1> 
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'here are your options' : 'no option'}</p>
//         <p>{app.options.length}</p>
//         <ol>
//             <li>item one</li>
//             <li>item two</li>
//         </ol>
//         <h1>balley balley</h1>
//         <form onSubmit = {onformsubmit}>
//             <input type = "text" name = "option"></input>
//             <button>add option</button>
//         </form>
//     </div>
// );

const onremoveall = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your options' : 'no option'}</p>
            <p>{app.options.length}</p>
            <button onClick = {onremoveall} >remove all</button>
            <ol>
                <li>item one</li>
                <li>item two</li>
            </ol>
            <h1>balley balley</h1>
            <form onSubmit = {onformsubmit}>
                <input type = "text" name = "option"></input>
                <button>add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();