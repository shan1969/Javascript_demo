console.log('Welcome to CRUD');

//Adding Data to db.json using json server
function addContact(){

    let contact =  {
        "id" :6,
        "name": "Shiva",
        "email": "shiva@gmail.com",
        "mobile": 9844474625
    }

    fetch('http://localhost:3000/contacts/',{
        method: 'POST',
        headers:{
           'Content-Type':'application/json' 
        },
        body:JSON.stringify(contact)
    }).then((res)=>{
        console.log(res);

    })
}

//Editing Data in db.json using json server
function editContact(){

    let contact =  {
        "id":6,
        "name":"Sachin",
        "email":"sachin@niit.com",
        "mobile": 8765432198 
    }
    // console.log("addEmp function is called ");
    fetch('http://localhost:3000/contacts/6',{
        method: 'PUT',
        headers:{
           'Content-Type':'application/json' 
        },
        body:JSON.stringify(contact)
    }).then((response)=>{
        console.log(response);

    })
}

//Deleting Data in db.json using json server
function deleteContact(){
    fetch('http://localhost:3000/contacts/6',{
        method: 'DELETE',
        headers:{
           'Content-Type':'application/json' 
        }
    }).then((response)=>{
        console.log(response);

    })
}

//Fetching Data from db.json using json server
function listContact(){
    fetch('http://localhost:3000/contacts').then( (response) => {
     return response.json();
}).then((contacts) => {
    console.log(contacts);
})
}

    let button = document.getElementById('show');
    button.addEventListener("click",()=>{
        console.log("button is clicked");
    })
    
