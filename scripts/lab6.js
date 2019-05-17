function add() {
    var elems = document.getElementById("mainForm").elements;
    table=document.getElementById("table1");
    table.insertAdjacentHTML("beforeEnd", "<tr>"
    +"<td>"+elems.FIO.value+"</td>"
    +"<td>"+elems.date.value+"</td>"
    + "</tr>");
    elems.FIO.value="";
    elems.date.value="";
    return false;
}

function calc(){
    var table1=document.getElementById("table1");
    var table2=document.getElementById("table2");
      p=table2.rows.length;
    for(i=1;i<p;i++)
      table2.deleteRow(-1);
        
     
      for(i=1;i<table1.rows.length;i++) {
          var date=new Date(table1.rows[i].cells[1].innerHTML);
          var dateBegin = new Date(date);
        //  var dateEnd =  new Date(date);
          
          
          
         //    var eightMonthsFromJan312009  = jan312009.setMonth(jan312009.getMonth()+8);
        //      console.log(dateEnd);
       //   date.setMonth(date.getMonth()+11);
      //    date.setDate(date.getDate()+24);
     //   date2.setDate(date.getDate() + 24);
          
          
          dateBegin.setMonth(dateBegin.getMonth()+11);
                        var dateEnd =  new Date(dateBegin);
          dateEnd.setDate(dateBegin.getDate()+24);
         
             
            table2.insertAdjacentHTML("beforeEnd", "<tr>"
            +"<td>"+table1.rows[i].cells[0].innerHTML+"</td>"
            +"<td>"+dateBegin.getFullYear()+"-"+(dateBegin.getMonth()+1)+"-"+dateBegin.getDate()+"</td>"
            +"<td>"+dateEnd.getFullYear()+"-"+(dateEnd.getMonth()+1)+"-"+dateEnd.getDate()+"</td>"                       
            + "</tr>");
          
 console.log(dateBegin);
        table2.style.display="table";
}
}