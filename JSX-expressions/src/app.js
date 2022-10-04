

console.log('app.js is running');
// if statement
// ternary operator
// logical operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 'here are your options' 'no option'


//JSX javascript XML
var app = {
    title: 'some title',
    subtitle: 'this is my subtitle',
    options: ['one', 'two']
    
};
var template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'here are your options' : 'no option'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
        <h1>balley balley</h1>
    </div>
);
var user = {
    name: 'andrew',
    age: 16,
    location: 'lahore'
};
function getlocation(location){
    if (location){
        return <p>location: {location}</p>;
    }
    else{
        return undefined; 
    }
}
var templatetwo = (
    <div>
        <h1>name: {user.name ? user.name : 'anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>age: {user.age}</p>}
        {getlocation(user.location)}
    </div>
);
// create a templatetwo var Jsx expression
// div 
// h1 -> name
// p -> age: 
// p-> location: 
// render templatetwo instead of templateS


// create app object title/subtitle
// use title/subtitle in template
// render template
var appRoot = document.getElementById('app');

ReactDOM.render(template , appRoot);
//ReactDOM.render(templatetwo , appRoot);