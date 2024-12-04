
// var xValues = ["Sales", "Income", "Expenses", "Net profit", ];
// var yValues = [ ];

// var barColors = ["red", "green","blue","orange","brown"];

// var totalIncome = document.getElementById("income-value").innerHTML;
// var totalSales = document.getElementById("sales-value").innerHTML;
// var totalExp = document.getElementById("exp-value").innerHTML;
// var netIncome = document.getElementById("net-profit").innerHTML;



// yValues.push(totalSales);
// yValues.push(totalIncome);
// yValues.push(totalExp);
// yValues.push(netIncome);



// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {}
// });

 

  


function check(form) {
  if (form.userid.value == "admin" && form.pwd.value == "ves") {
    return true;
  } else {
    
   
      
  }

}




var modal = document.getElementById("salsCalForm");
var btn = document.getElementById("calculate");
let btnP = document.getElementById("btnP");


 var span = document.getElementsByClassName("close")[0];

 btn.onclick  = function () {
  modal.style.display = "block";

 }

 span.onclick  = function () {
   modal.style.display = "none";
   

}

 window.onclick = function (event){
   if (event.target == modal){
     modal.style.display = "none";
  }
 }

 


 

 

// total sales calculate data collection form
let altModal = document.getElementById("altModal"); 

var selectedRow = null


function onFormSubmit() {
  if (validate()) {
      var formData = readFormData();
      
      if (selectedRow == null)
          insertNewRecord(formData);
      else
          updateRecord(formData);
      resetForm();
  }
    
  
  

}



function alertMsg(){
  let alertBox =
  document.getElementById("customAlertBox");
  let alert_Message_container =
  document.getElementById("alertMessage");
  let close_img =
  document.querySelector(".close_msg");
 
  

  if (parseFloat(cell4.innerHTML) > parseFloat(cell8.innerHTML)){
    alert_Message_container.innerHTML = 'Income is less then Total Sales'
    alertBox.style.display = "block";
           close_img.onclick = function () {
           alertBox.style.display = "none";
           window.onclick = function(event){
            if (event.target == alertBox){
              alertBox.style.display = "none";
           }
           }
    
    
  }
 
}
}
 
// defined the value of table row index 
let index = 1;

function readFormData() {
    var formData = {};
    let index = 1;
    formData['id'] = index;
    formData["today"] = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    formData["pos"] = parseFloat (document.getElementById("pos").value);
    formData["tapp"] =parseFloat( document.getElementById("tapp").value);
    formData ["totalSales"] = formData["pos"] + formData["tapp"];
    formData["bank"] = parseFloat( document.getElementById("bank").value);
    formData["drawer"] = parseFloat( document.getElementById("drawer").value);
    formData["opening"] = parseFloat(document.getElementById("opening").value);
    formData["totalIncome"] = (formData["bank"] + formData["drawer"]) - formData["opening"]; //totla income calculation (bank + draawer) - opening 
    return formData;
}

function insertNewRecord(data) {
 
    var table = document.getElementById("resultTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0)
    cell0.innerHTML = data.index;
    cell0.innerHTML = index ++;
    cell1 = newRow.insertCell(1); // date row 
    cell1.innerHTML = data.today;

    cell2 = newRow.insertCell(2); // pos row
    cell2.innerHTML = data.pos;
    cell3 = newRow.insertCell(3); //tapp row 
    cell3.innerHTML = data.tapp;
    cell4 = newRow.insertCell(4);// total sales 
    cell4.innerHTML = data.totalSales;

    cell5 = newRow.insertCell(5);//bank
    cell5.innerHTML = data.bank;
    cell6 = newRow.insertCell(6);//drawer 
    cell6.innerHTML = data.drawer;
    cell7 = newRow.insertCell(7);//opening 
    cell7.innerHTML = data.opening;
    cell8 = newRow.insertCell(8);
    cell8.innerHTML = data.totalIncome;
    
    cell9 = newRow.insertCell(9);
    cell9.innerHTML = `<button  class=" btn btn-warning" onClick="onEdit(this)">Edit</button>

                       <button class=" btn btn-danger mx-3" onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
  document.getElementById("pos").value = "";
  document.getElementById("tapp").value = "";
  document.getElementById("bank").value = "";
  document.getElementById("drawer").value = "";
  document.getElementById("opening").value = "";
  selectedRow = null;
}


function onEdit(td) {
 
 modal.style.display = "block";
  
  selectedRow = td.parentElement.parentElement;
  document.getElementById("pos").value = selectedRow.cells[2].innerHTML;
  document.getElementById("tapp").value = selectedRow.cells[3].innerHTML;
  document.getElementById("bank").value = selectedRow.cells[5].innerHTML;
  document.getElementById("drawer").value = selectedRow.cells[6].innerHTML;
  document.getElementById("opening").value = selectedRow.cells[7].innerHTML;
  
}
function updateRecord(formData) {
  selectedRow.cells[2].innerHTML = formData.pos;
  selectedRow.cells[3].innerHTML = formData.tapp;
  selectedRow.cells[5].innerHTML = formData.bank;
  selectedRow.cells[6].innerHTML = formData.drawer;
  selectedRow.cells[7].innerHTML = formData.opening;
  resetForm();
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
      row = td.parentElement.parentElement;
      document.getElementById("resultTable").deleteRow(row.rowIndex);
      resetForm();
  }
}

function validate() {
  isValid = true;
  if (document.getElementById("pos").value == "") {
      isValid = false;
      document.getElementById("posValidationError").classList.remove("hide");
  } else {
      isValid = true;
      if (!document.getElementById("posValidationError").classList.contains("hide"))
          document.getElementById("posValidationError").classList.add("hide");
  }
  return isValid;
}


/*
document.getElementById("salesCalForm").addEventListener("submit", function(event){
  event.preventDefault();


 

     
 
  
 
  const today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  
  const num1 = parseFloat (document.getElementById("posTotal").value);
  const num2 = parseFloat(document.getElementById("tappTotal").value);
  const totalSales = num1 + num2 ;
  const num3 = parseFloat(document.getElementById("bankTrnsto").value);
  const num4 = parseFloat(document.getElementById("dTotal").value);
  const num5= parseFloat(document.getElementById("clBalance").value);
  

  const totalIncome = (num3 + num4 ) - num5;


  const tableRow = document.createElement("tr");

  const cel0 = document.createElement("td");
  const cel1 = document.createElement("td");
  const cel2 = document.createElement("td");
  const cel3 = document.createElement("td");
  const cel4 = document.createElement("td");
  const cel5 = document.createElement("td");
  const cel6 = document.createElement("td");
  const cel7 = document.createElement("td");
  const cel8 = document.createElement("td");
 
  
  cel1.textContent = today;
  cel2.textContent = num1;
  cel3.textContent = num2;
  cel4.textContent = totalSales;
  cel5.textContent = num3;
  cel6.textContent = num4;
  cel7.textContent = num5;
  cel8.textContent = totalIncome;


  //append the cell to the row ..
  tableRow.appendChild(cel0);
  tableRow.appendChild(cel1);
  tableRow.appendChild(cel2);
  tableRow.appendChild(cel3);
  tableRow.appendChild(cel4);
  tableRow.appendChild(cel5);
  tableRow.appendChild(cel6);
  tableRow.appendChild(cel7);
  tableRow.appendChild(cel8);

  //append the row to the table body..

  document.querySelector("#resultTable tbody").appendChild(tableRow);

  document.getElementById('salesCalForm').reset();

  
});*/