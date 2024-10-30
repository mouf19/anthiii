//Get element by ID  document.getElementById()
// console.log(document.getElementById('app-title'))

//Get Attributes
// console.log(document.getElementById('app-title').id)
// console.log(document.getElementById('app-title').className)
// console.log(document.getElementById('app-title').getAttribute('id'))

//Set Attributes
// document.getElementById('app-title').title='New Shopping List'
// document.getElementById('app-title').setAttribute('class', 'title')

//Change content
// const title =  document.getElementById('app-title');
// console.dir(title);


//title.textContent = 'Shopping List'
// title.innerText = 'New Shopping List'
// title.innerHTML = '<strong>New Shopping List</strong>'

//Change Style
// title.style.color = 'red';
// title.style.backgroundColor = '#c3c3c3';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

//document.querySelector()
// console.log(document.querySelector('h1'))
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'))
// console.log(document.querySelector('li:nth-child(2)').innerHTML)

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Appol Juss'
// secondItem.style.color = 'red'

const list = document.querySelector('ul')
console.log(list)

const firstItem = document.querySelector('li');
firstItem.style.color = 'blue'
