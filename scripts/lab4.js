var tbl;

var tpNums = [
    ["2", "2", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    ["2", "2", " ", "2", "2", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "2", " "],
    ["2", "2", " ", "2", "2", "2", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "2", "2"],
    ["2", "2", " ", "2", "2", "1", " ", " ", " ", " ", " ", " ", " ", " ", "2", " ", "2", " ", "2", "2"],
    ["2", "2", " ", "1", "2", "2", "3", " ", " ", " ", "11", "7", "7", "6", "5", "2", "5", "2", "2", "2"],
    ["2", "2", "2", "2", "2", "9", "12", "17", "18", "20", "9", "8", "7", "6", "4", "5", "2", "3", "2", "2"],
    ["2", "2", "2", "2", "4", "3", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2"],
    ["2", "2", "1", "2", "3", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "4", "3", "3", "2", "2"]
];
var lfNums = [
    ["2", "2", "1", "2", "2"],
    ["2", "2", "2", "2", "2"],
    [" ", " ", "2", "2", "2"],
    [" ", " ", "2", "3", "2"],
    [" ", " ", "2", "8", "2"],
    [" ", " ", "2", "9", "2"],
    [" ", " ", " ", " ", "9"],
    [" ", " ", " ", "1", "10"],
    [" ", " ", "2", "2", "11"],
    [" ", " ", " ", "2", "13"],
    [" ", " ", "1", "7", "4"],
    [" ", " ", "2", "4", "2"],
    [" ", " ", "2", "7", "2"],
    [" ", "2", "1", "7", "2"],
    [" ", " ", " ", "10", "2"],
    [" ", " ", " ", "10", "2"],
    [" ", "2", "1", "9", "2"],
    [" ", " ", "2", "11", "2"],
    [" ", " ", " ", " ", "11"],
    [" ", " ", " ", " ", "10"],
    [" ", " ", "2", "10", "2"],
    [" ", " ", " ", "2", "2"],
    [" ", " ", " ", " ", "14"],
    [" ", " ", " ", " ", "14"],
    [" ", " ", "2", "2", "2"],
    [" ", "2", "2", "9", "2"],
    [" ", " ", " ", "2", "11"],
    [" ", " ", " ", "2", "14"],
    [" ", " ", " ", "2", "16"],
    [" ", " ", " ", "2", "17"]
]
var mainNums=[
["1" , "1" , "0" , "0" , "1" , "1" , "0" , "0" , "0" , "0" , "1" , "0" , "0" , "0" , "1" , "1" , "0" , "0" , "1" , "1" ], 
["1" , "1" , "0" , "0" , "1" , "1" , "0" , "0" , "0" , "1" , "1" , "0" , "0" , "0" , "1" , "1" , "0" , "0" , "1" , "1" ],
["0" , "0" , "1" , "1" , "0" , "0" , "0" , "0" , "0" , "1" , "1" , "0" , "0" , "0" , "0" , "0" , "1" , "1" , "0" , "0" ], 
["0" , "0" , "1" , "1" , "0" , "0" , "0" , "0" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "0" , "1" , "1" , "0" , "0" ], 
["1" , "1" , "0" , "0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "1" , "1" ], 
["1" , "1" , "0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "1" , "1" ], 
["0" , "0" , "0" , "0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "0" ], 
["0" , "0" , "0" , "0" , "1" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" ], 
["1" , "1" , "0" , "0" , "1" , "1" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" ],
["1" , "1" , "0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" ], 
["0" , "0" , "0" , "1" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "1" , "1" , "1" , "1" , "0" , "0" ], 
["0" , "0" , "0" , "1" , "1" , "0" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "0" , "1" , "1" , "0" , "0" , "0" ], 
["1" , "1" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "1" , "1" ], 
["1" , "1" , "0" , "1" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "0" , "0" , "1" , "1" ], 
["0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "1" , "1" , "0" , "0" ], 
["0" , "0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "1" , "1" , "0" , "0" ], 
["1" , "1" , "0" , "1" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "1" , "1" ], 
["1" , "1" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "1" , "1" ], 
["0" , "0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "0" ], 
["0" , "0" , "0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "0" ], 
["1" , "1" , "0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "1" , "1" ], 
["1" , "1" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "1" , "1" ], 
["0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" ], 
["0" , "0" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" ], 
["1" , "1" , "0" , "0" , "1" , "1" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "0" , "1" , "1" ], 
["1" , "1" , "0" , "1" , "1" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "1" , "1" ], 
["0" , "0" , "1" , "1" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" , "0" , "0" , "0" , "0" ], 
["0" , "1" , "1" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" ], 
["1" , "1" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" ], 
["1" , "0" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "0" ] 
] 


var fullTableHeight = lfNums.length + tpNums.length;
var fullTableWidth = lfNums[0].length + tpNums[0].length;

function createTable(leftNums, topNums) {

    var tab_cont = document.getElementById("table-container");
    tbl = document.createElement('table');
    tbl.className = "cross-table";

    for (var i = 0; i < fullTableHeight; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < fullTableWidth; j++) {
            if (i == 0 && j == 0) {
                var td = tr.insertCell();
                td.setAttribute('colSpan', "" + leftNums[0].length);
                td.setAttribute('rowSpan', "" + topNums.length);
                td.className = "td-zero-cell";
            }

            if ((i < topNums.length) && (j < leftNums[0].length)) {
                continue;
            } else {
                var td = tr.insertCell();
                if ((j+1) % 5==0 && (j+1)>leftNums[0].length) td.className+=" fvth-bl-right";
                if ((i+1-topNums.length) % 5==0 && (i+1-topNums.length)>0  ) td.className+=" fvth-bl-bot";
                if (i < topNums.length)
                    td.appendChild(document.createTextNode(topNums[i][j - 5]));
                if (j < leftNums[0].length)
                    td.appendChild(document.createTextNode(leftNums[i - 8][j]));
                if (i < topNums.length || j < leftNums[0].length)
                    td.className+= " td-header-cell";
                else {
                    td.className+= " td-field-cell";
                    td.style.background="white";
                    td.onmousedown = function () {
                        if (this.style.background == "white") this.style.background = "black";
                        else if (this.style.background == "black")  this.style.background = "white";

            }
                }
            }
        }
    }
    tab_cont.appendChild(tbl);
}

function clearTable() {
   
    for (i = tpNums.length; i <fullTableHeight ; i++) {
        c = tbl.rows[i].cells;
        
        for (j = lfNums[0].length; j < fullTableWidth; j++) {
            c[j].style.background = "white";
        }
    }
}

function showAnswer() {

    for (i = tpNums.length; i <fullTableHeight ; i++) {
        c = tbl.rows[i].cells;
        
        for (j = lfNums[0].length; j < fullTableWidth; j++) {
           if (mainNums[i-tpNums.length][j-lfNums[0].length]=="1")
            c[j].style.background = "black";
         else c[j].style.background = "white";
        }
    }
}

function checkRez()
{
     var rezl=true;
    for (i = tpNums.length; i <fullTableHeight ; i++) {
        c = tbl.rows[i].cells;
        
        for (j = lfNums[0].length; j < fullTableWidth; j++) {
           if ((mainNums[i-tpNums.length][j-lfNums[0].length]=="1" && c[j].style.background == "white") ||
               (mainNums[i-tpNums.length][j-lfNums[0].length]=="0" && c[j].style.background == "black"))
           {
               rezl=false;
               break;
           }

        }
    } 
rezl?alert("Кроссворд решен правильно!"):alert("Кроссворд решен неправильно!");
}


createTable(lfNums, tpNums);