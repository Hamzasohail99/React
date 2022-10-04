'use strict';

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
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'here are your options' : 'no option'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    ),
    React.createElement(
        'h1',
        null,
        'balley balley'
    )
);
var user = {
    name: 'andrew',
    age: 16,
    location: 'lahore'
};
function getlocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'location: ',
            location
        );
    } else {
        return undefined;
    }
}
var templatetwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'name: ',
        user.name ? user.name : 'anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'age: ',
        user.age
    ),
    getlocation(user.location)
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

ReactDOM.render(template, appRoot);
//ReactDOM.render(templatetwo , appRoot);
