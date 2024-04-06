let FirstItem = document.querySelector('.list_item');
FirstItem.style.fontSize = '3em';
FirstItem.innerHTML = 'This is the first item'
FirstItem.insertAdjacentHTML("beforebegin", '<li id="TrueFirstItem">nevermind this is the first item</li>')
document.getElementById('TrueFirstItem').setAttribute('class', "list_item2");

let listItem = document.querySelectorAll('li');
for(let i=0; i<listItem.length;i++){
    listItem[i].style.color = 'purple';
}

let theList = document.getElementById('list1');
theList.style.backgroundColor = 'lightblue';


let list2 = document.getElementsByClassName('list_item2');
for(let i=0; i<list2.length;i++){
    list2[i].style.color = 'darkgreen';
}

document.querySelector('ol').insertAdjacentHTML("beforeend", "<img src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww'>")