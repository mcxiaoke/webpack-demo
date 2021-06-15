import _ from 'lodash';
import printMe from './print.js';

function component(){
    let element = document.createElement('div');
    let btn = document.createElement('button');
    element.innerHTML = _.join(['<p>','Hello','webpack','</p>'],' ');
    
    btn.innerHTML = 'Click Here, Check Console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());