const form= document.getElementById("form");
const tbody=document.getElementById("tbody");
const employees=[];

function addEmployee(employee){
    //check the employee details already exist or not
    for(let i=0;i<employees.length;i++){
        let e=employees[i];
        if(e.empid===employee.empid){
            alert("Employee id already exist");
            return;
        }else if(e.email===employee.email){
            alert("Email-id already exist");
            return;
        }
    }
    //ner employee details add to tbody
  const tr =document.createElement("tr");
  tr.innerHTML=`<td>${employee.name}</td>
               <td>${employee.email}</td>
               <td>${employee.empid}</td>
               <td>${employee.company}</td>
               <td>${employee.designation}</td>
               <td>
               <button onclick="deleteEmployeeDetail(this)" data-empid= "${employee.empid}">Delete</button>
               <button onclick="deleteEmployeeDetail(this)" data-empid= "${employee.empid}">Edit</button>
               </td>
  `;

  tbody.appendChild(tr);
  employees.push(employee);
  //after adding reset the form
  form.reset();
}
  function deleteEmployeeDetail(buttonref){
     let empid=buttonref.getAttribute("data-empid");
     //using this empid delete the corresponding object in the employees array

     for(let i=0;i<employees.length;i++){
        if(employees[i].empid===empid){
            employees.splice(i,1);
            break;
        }
     }
      
     let parentTd=buttonref.parentNode;
     let parentTr=parentTd.parentNode;

     //the line remove from the dom tree
     parentTr.remove();
  }

form.addEventListener("submit" ,(event)=>{
    event.preventDefault();
   let employee ={
    name:event.target.name.value,
    email:event.target.email.value,
    empid:event.target.empid.value,
    company:event.target.company.value,
    designation:event.target.designation.value,
   };
   addEmployee(employee);
})