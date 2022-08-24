if (JSON.parse(localStorage.getItem('workerList')) === null) {
    localStorage.setItem('workerList', JSON.stringify([]))
}

let addBtn = document.querySelector('.addBtn')
let workerName = document.querySelector('.name-input input').value
let workerSurname = document.querySelector('.surname-input input').value
let workerSalary = document.querySelector('.salary-input input').value

let workerList = JSON.parse(localStorage.getItem('workerList'));

function List() {
    let list = '';
    let workerList = JSON.parse(localStorage.getItem('workerList'));

    workerList.forEach(item => {
        list +=
            `
        <tr>
                       <td>${item.name}</td>
                       <td>${item.surname}</td>
                       <td>${item.salary}</td>
                       <td><button class="removeBtn btn btn-danger" onclick="Remove(event)"><i class="fa-solid fa-trash-can"></i></button></td>

                       
         </tr>
        `
    });

    document.querySelector('.tbody').innerHTML = list;
}

addBtn.addEventListener('click', () => {
    let workerName = document.querySelector('.name-input input').value;
    let workerSurname = document.querySelector('.surname-input input').value;
    let workerSalary = document.querySelector('.salary-input input').value;

    if (workerName === "" || workerSurname === "" || workerSalary === "") {
        console.warn("empty input");
        alert('Please, fill all tabs');
        return window.location.reload();
    }

    workerList.push({
        name: workerName,
        surname: workerSurname,
        salary: workerSalary
    });

    localStorage.setItem('workerList', JSON.stringify(workerList));

    List();
})
function Remove(e){

 let removeBtn = e.target
 removeBtn.parentElement.parentElement.parentElement.remove();
}

List();

