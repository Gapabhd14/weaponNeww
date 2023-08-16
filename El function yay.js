function El(tagName, options = {}, ...children) {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}

// Creators: MadorTill

let element = El('div', { cls: 'class', id: 'id', attributes: {src: "./demoUrl.png", title: 'title'}, listeners: {click: func}}, 
    El('div', { classes: ['class', 'classes']}),
    "text"
)

{/* <tagName attributes="x"> content </tagName> */}