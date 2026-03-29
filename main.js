document.getElementById("fileInput").addEventListener("change", function(event){
    const file = event.target.files[0];

    if(file){
        const reader = new FileReader();

        reader.onload = function(e){
            document.getElementById("preview").src = e.target.result;
        }

        reader.readAsDataURL(file);
    }
});
function loadEmployees(){

    const table = document.getElementById("employeeTable");

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.forEach((emp) => {

        let row = table.insertRow();

        row.innerHTML = `
        <td><img src="${emp.image || 'images/employee.png'}" width="50" style="border-radius:50%"></td>
        <td>${emp.firstName || ''}</td>
        <td>${emp.lastName || ''}</td>
        <td>${emp.phone || ''}</td>
        <td>${emp.address || ''}</td>
        <td>${emp.email || ''}</td>
        <td>${emp.dob || ''}</td>
        <td>${emp.position || ''}</td>
        <td>
            <button onclick="showDetails()">Details</button>
            <button onclick="editContact()">Edit</button>
            <button onclick="deleteContact()">Delete</button>
        </td>
        `;
    });
}

document.addEventListener("DOMContentLoaded", function(){
    if(document.getElementById("employeeTable")){
        loadEmployees();
    }
});

function showDetails(){
    alert("Showing employee details");
}

function editContact(){
    alert("Edit employee information");
}

function deleteContact(){
    let confirmDelete = confirm("Are you sure you want to delete?");
    if(confirmDelete){
        alert("Employee deleted");
    }
}