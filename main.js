"use strict"

const head = document.body.querySelector('.heading');


document.onkeydown = event => event.code === 'Space' && head.remove();

document.onmousedown = () => head.hidden = true;

document.onmouseup = () => head.hidden = false;
