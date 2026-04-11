<<<<<<< HEAD
function customRender(reactElement,mainContainer){
   /* const docEle = document.createElement(reactElement.type)
    docEle.innerHTML = reactElement.children
    docEle.setAttribute('href',reactElement.props.href)
    docEle.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(docEle)
    */
   const domele = document.createElement(reactElement.type)
   domele.innerHTML = reactElement.children
   for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domele.setAttribute(prop,reactElement.props[prop])
   }
   mainContainer.appendChild(domele);
}
const reactElement = {
    type:'a',
    props:{
       href: 'http://google.com',
       target: '_blank'
    },
    children: 'click me to visit google !'
}
const mainContainer = document.querySelector('#root')
=======
function customRender(reactElement,mainContainer){
   /* const docEle = document.createElement(reactElement.type)
    docEle.innerHTML = reactElement.children
    docEle.setAttribute('href',reactElement.props.href)
    docEle.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(docEle)
    */
   const domele = document.createElement(reactElement.type)
   domele.innerHTML = reactElement.children
   for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domele.setAttribute(prop,reactElement.props[prop])
   }
   mainContainer.appendChild(domele);
}
const reactElement = {
    type:'a',
    props:{
       href: 'http://google.com',
       target: '_blank'
    },
    children: 'click me to visit google !'
}
const mainContainer = document.querySelector('#root')
>>>>>>> 0400f6291d9523f716b890947e226fae70cd3269
customRender(reactElement,mainContainer)