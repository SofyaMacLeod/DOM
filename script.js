/*jshint esversion: 6 */
'use sctrict';

const collection = document.querySelectorAll('.books');
const elems = document.querySelectorAll('.book');
elems[0].remove();
elems[1].remove();
elems[2].remove();
elems[3].remove();
elems[4].remove();
elems[5].remove();

collection[0].append(elems[1]);
collection[0].append(elems[0]);
collection[0].append(elems[4]);
collection[0].append(elems[3]);
collection[0].append(elems[5]);
collection[0].append(elems[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


elems[4].classList.add('fortitle');
const title3 = document.querySelectorAll('.fortitle')[0].querySelector('a');
title3.innerHTML = '<a>Книга 3. this и Прототипы Объектов</a>';

const reklama = document.querySelector('.adv');
reklama.remove();

elems[0].classList.add('sec');
const collection2 = document.querySelectorAll('.sec');
const elems2 = document.querySelector('.sec').querySelectorAll('li');
elems2[0].remove();
elems2[1].remove();
elems2[2].remove();
elems2[3].remove();
elems2[4].remove();
elems2[5].remove();
elems2[6].remove();
elems2[7].remove();
elems2[8].remove();
elems2[9].remove();
elems2[10].remove();
collection2[0].append(elems2[0]);
collection2[0].append(elems2[1]);
collection2[0].append(elems2[3]);
collection2[0].append(elems2[6]);
collection2[0].append(elems2[8]);
collection2[0].append(elems2[4]);
collection2[0].append(elems2[5]);
collection2[0].append(elems2[7]);
collection2[0].append(elems2[9]);
collection2[0].append(elems2[2]);
collection2[0].append(elems2[10]);


elems[5].classList.add('sec5');
const collection5 = document.querySelectorAll('.sec5');
const elems5 = document.querySelector('.sec5').querySelectorAll('li');
elems5[0].remove();
elems5[1].remove();
elems5[2].remove();
elems5[3].remove();
elems5[4].remove();
elems5[5].remove();
elems5[6].remove();
elems5[7].remove();
elems5[8].remove();
elems5[9].remove();
elems5[10].remove();
collection5[0].append(elems5[0]);
collection5[0].append(elems5[1]);
collection5[0].append(elems5[9]);
collection5[0].append(elems5[3]);
collection5[0].append(elems5[4]);
collection5[0].append(elems5[2]);
collection5[0].append(elems5[6]);
collection5[0].append(elems5[7]);
collection5[0].append(elems5[5]);
collection5[0].append(elems5[8]);
collection5[0].append(elems5[10]);



elems[2].classList.add('sec6');
const collection6 = document.querySelectorAll('.sec6');
const elems6 = document.querySelector('.sec6').querySelectorAll('li');
elems6[0].remove();
elems6[1].remove();
elems6[2].remove();
elems6[3].remove();
elems6[4].remove();
elems6[5].remove();
elems6[6].remove();
elems6[7].remove();
elems6[8].remove();
elems6[9].remove();
const new6 = document.createElement('li');
new6.textContent = 'Глава 8: За пределами ES6';
collection6[0].append(elems6[0]);
collection6[0].append(elems6[1]);
collection6[0].append(elems6[2]);
collection6[0].append(elems6[3]);
collection6[0].append(elems6[4]);
collection6[0].append(elems6[5]);
collection6[0].append(elems6[6]);
collection6[0].append(elems6[7]);
collection6[0].append(elems6[8]);
collection6[0].append(new6);
collection6[0].append(elems6[9]);




