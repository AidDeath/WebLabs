function add() {
    var elems = document.getElementById("mainForm").elements;
    var Count = elems.count.value;
    var rcpCheck = "Нет";
    table=document.getElementById("table");
    
    if (elems.receipt.checked == true) {rcpCheck = "Да"}
    
    if(Count == "101"){ Count = "> 100" } 
    
    table.insertAdjacentHTML("beforeEnd", "<tr>"
    +"<td>"+elems.store_name.value+"</td>"
    +"<td>"+elems.address.value+"</td>"
    +"<td>"+elems.phone.value+"</td>"
    +"<td>"+elems.drug.value+"</td>"
    +"<td>"+elems.drug_type.value+"</td>"
    +"<td>"+elems.price.value+"</td>"
    +"<td>"+Count+"</td>"                      
    +"<td>"+elems.dose.value+"</td>"
    +"<td>"+rcpCheck+"</td>"
    +"<td>"+elems.email.value+"</td>"
    +"<td>"+elems.url.value+"</td>"
    +"<td>"+"<a onclick='DeleteRow(this);'>Удалить</a>"+"</td>"
    + "</tr>");
    
  elems.store_name.value="";
  elems.address.value="";
  return false;
}


function updateCount(val) {
   if (val == 101) {
    document.getElementById('drug_count').innerHTML=">100"; }
else {document.getElementById('drug_count').innerHTML=val;}
  }


function DeleteRow(o) {
    var p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);
   }