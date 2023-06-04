const budget = document.getElementById("budget");
const title = document.getElementById("title-expense");
const product_cost =document.getElementById("cost");
const expenses = document.getElementById("expeneses");
const balance = document.getElementById("Balance");
const list = document.getElementById("list");
const date_product = document.getElementById('date');
let total_amount = document.getElementById("total-amount");

function setbudget(){
 if(budget.value === '' || budget.value < 0){
    alert("Invalid Budget")
 }
 else{
    total_amount.innerText = budget.value;
 }
}

function checkAmount(){

      if(product_cost === ''|| title === ''|| date_product ===''){
         alert("Ener the value in the field")
      }
         else{
            expenses.innerText = product_cost.value

    balance.innerText = budget.value -product_cost.value;

    const li = document.createElement("li");
    li.innerHTML = title.value;
    list.appendChild(li);
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    span1.innerHTML = date_product.value;
    span2.innerHTML = product_cost.value;
   const listTitle = document.createElement("h3")

   listTitle.innerHTML = "TITLE"



    li.appendChild(listTitle);
    li.appendChild(span1);
    li.appendChild(span2);
    
         }
    
}
