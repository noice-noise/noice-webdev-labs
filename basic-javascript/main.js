

const usernameInput = document.querySelector('#user-input');
const passwordInput = document.querySelector('#password-input');
const btnUserLogin = document.querySelector('#btn-user-login');
const userList = document.querySelector('#user-list')
const message = document.querySelector('.message');

btnUserLogin.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (usernameInput.value === '' || passwordInput === '') {
        console.log('error?');
        message.classList.add('error');
        message.innerHTML = 'Please enter all fields';
        setTimeout(() => message.remove(), 2000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`wew ${usernameInput.value} : ${passwordInput.value}`));
        userList.appendChild(li);
        usernameInput.value = '';
        passwordInput.value = '';
    }
}


// --------------

console.log('Noice');
console.warn('Warning.');
console.error('Error');

// var, let, const
// var - global,
// let - for assignment and manipulation,
// cost - for constants, which cannot be changed and must be initialized

// primitive data types: String, Numbers, Boolean, null, undefined

const myName = 'Raol'; 
const age = 22;

// String contatenation (avoid but working)
const hello = 'Hello my name is ' + myName + ' and I am ' + age + '.';
console.log(hello);

// String Template using back quotes
const hello2 = `Hello my name is ${myName} and I am ${age}.`;
console.log(hello2);


const s = 'Hello, world.';
console.log(s.length);
console.log(s.substring(0, 5));
console.log(s.split(', '));


// Arrays

const fruits = ['watermelon', 'papaya'];

fruits[2] = 'banana';
fruits.push('fruitSalad');
fruits.unshift('sing');

let np = fruits.indexOf('papaya');

console.log(fruits);
console.log('Index of papaya: ' + np);


// Looping

const todos = [

]

todos[0] = {
    id : 0,
    text : 'Some todo text',
    isCompleted : false
};

todos[2] = {
    id : 2,
    text : 'Some todo text',
    isCompleted : true
};

todos[1] = {
    id : 1,
    text : 'Some todo text',
    isCompleted : true
};

console.log(todos);

console.log('Todo with for loop: ');
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}

console.log('Todo with for each: ');
todos.forEach(function(todo) {
    console.log(todo);
});

console.log('Using map() with id: ');
const idOfTodos = todos.map(function(todo) {
    return todo.id;
});

console.log(idOfTodos);

console.log('Using filter() with completed: ');
const completedTodos = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(completedTodos);


// Classes

class Person {
    constructor(firstName, lastName, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = new Date(birthdate);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


const person1 = new Person('Juan', 'Bautista', '1-1-2001');
console.log(person1.birthdate);
console.log(person1.getFullName());

