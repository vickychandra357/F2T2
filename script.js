function vaildation(){
var form = document.getElementById('form');
form.addEventListener("submit", function (e) {
    e.preventDefault()
    var name = document.getElementById('name');
    var profession = document.getElementById('profession');
    var age = document.getElementById('age');
    var error1 = "Error : Please Make sure All the fields are filled before adding in an employee!";
    var success = "Success : Employee Added!"
    if (name.value == "" && profession.value == "" && age.value == "") {
        var errors = document.getElementById('error').innerHTML = error1;
        let btn1 = document.querySelector('#btn1');
        let content = document.querySelector('#error')
        btn1.addEventListener("click", () => content.style.color = 'red');
    }
    else {
        var Success = document.getElementById('error').innerHTML = success;
        let btn1 = document.querySelector('#btn1');
        let content = document.querySelector('#error')
        btn1.addEventListener("click", () => content.style.color = 'green');
    }
})
}
let datas=[];
const addData=(ev)=>{
    ev.preventDefault();
    let data={
        id:Number.now(),
        name:document.getElementById('name').value,
        profession:document.getElementById('profession').value,
        age:document.getElementById('age').value
    }
    datas.push(data);
    document.forms[0].reset();
}
document.addEventListener('DDMContentLoaded',()=>{
    document.getElementById('btn').addEventListener("click",addData)
});

let btnGet = document.querySelector('#btn1');
let myTable=document.querySelector('table')

let headers=['id','Name','Profession','Age']
btnGet.addEventListener('click',()=>{
    let table=document.createElement('table');
    let headerRow=document.createElement('tr');

    headers.forEach(headerText=>{
        let header=document.createElement('th')
        let textNode=document.createTextNode(headerText)
        header.appendChild(textNode)
        headerRow.appendChild(header)
    })
    table.appendChild(headerRow)
    datas.forEach(emp =>{
        let row=document.createElement('tr')

        Object.values(emp).forEach(text =>{
            let cell=document.createElement('td')
            let textNode=document.createTextNode('text')
            cell.appendChild(textNode)
            row.appendChild(cell)
        })
        table.appendChild(row)
    })
    myTable.append(table)
})
// var msg=document.getElementById('message').innerHTML = myTable;