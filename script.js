document.getElementById('id1').textContent = "Ayam hasil ID";

let class1 = document.getElementsByClassName('class1');
for (let i = 0; i < class1.length; i++) {
    class1[i].textContent = "Ayam hasil Class";
}

var h1 = document.getElementsByTagName('h1');
for (var i = 0; i <h1.length; i++) {
    h1[i].textContent = "Ayam hasil Tag";
}

let text = document.querySelector('.text')
text.textContent = "Text 1"

let items = document.querySelectorAll('.item, #item, span')
for (let i = 0; i < items.length; i++) {
    items[i].textContent = "Item" + (i+1);
}