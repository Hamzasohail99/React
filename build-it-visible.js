let visibility = false;

const togglevisibility = () => {
    visibility = !visibility;
    render();

};

const render = () => {
    const jsx = (
        <div>
            <h1>visibility toggle</h1>
            <button onClick = {togglevisibility} >
                {visibility ? 'hide details' : 'show details'}
            </button>
            {visibility && (
                <div>
                    <p>
                        hey these are some details now you can see
                    </p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();





