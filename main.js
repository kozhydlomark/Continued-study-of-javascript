// Завдання 1 

// До DOM вузла <div> 
document.body.firstElementChild

// До DOM вузла <ul>
document.body.lastElementChild

// До DOM вузла <li>

// отримати <ul> а потум отримати його останній дочірній елемент
document.body.lastElementChild.lastElementChild

// Завдання 2 

//1: Так, це правда. Елемент elem.lastChild завжди останній, у нього немає nextSibling.
//2: Ні, це неправда, тому що elem.children[0] — перший дочірній серед елементів.

// Завдання 3
// Завдання 3 в фалі index.html код html я взяв на сторінці документації там є помилання на пісочницю 

// Друга тема завдання 

// 1. Таблиця з `id="age-table"`.
let table = document.getElementById('age-table')

// 2. Всі елементи label всередині цієї таблиці
document.querySelectorAll('#age-table label')

// 3. Перший td в цій таблиці (зі словом "Age")
table.getElementsByTagName('td')[0]

// 4. форма з іменем "search"
document.querySelector('form[name="search"]')

// 5. Перший input у цій формі.
form.getElementsByTagName('input')[0]

// 6. Останній input у цій формі
let inputs = form.querySelectorAll('input') // знайти всі input
inputs[inputs.length-1] // останній
