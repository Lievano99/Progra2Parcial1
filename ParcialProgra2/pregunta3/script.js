var Total = 0;
    var Diferencia = 0;
    var Presupuesto = 0;

    function Balance(){
        Diferencia = Total - Presupuesto;
        document.getElementById("totalText").innerHTML = Total + ".";
        document.getElementById("diferenciaText").innerHTML = Diferencia + ".";
    }

    function addRow(){
        compra = document.getElementById("compra").value;
        precio = document.getElementById("precio").value;
        cantidad = document.getElementById("cantidad").value;
        Presupuesto = document.getElementById("presupuesto").value;

        if(compra=="" && precio=="" && cantidad=="" && Presupuesto==""){
            alert("Por favor rellenar todos los campos");
        }
        else{
            

            table = document.getElementById("table");
            next = document.getElementById("next");

            body = document.createElement("thead");
            row = document.createElement("tr");
            
            cell1 = document.createElement("td");
            cell1.innerHTML = [compra] ; 

            cell2 = document.createElement("td");
            cell2.innerHTML = [precio] ; 

            cell3 = document.createElement("td");
            cell3.innerHTML = [cantidad] ;

            cell4 = document.createElement("td");
            subTotal = cantidad * precio;
            Total += subTotal;
            cell4.innerHTML = [subTotal] ;
            cell4.className = "sub"; 

            if(subTotal>Presupuesto){
                cell5 = document.createElement("td");
                cell5.innerHTML = ["Sobre"] ;
            }
            else{
                cell5 = document.createElement("td");
                cell5.innerHTML = ["Dentro"] ;
            }

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);

            body.appendChild(row);
            table.appendChild(body);

            console.log(row);
            console.log(compra,precio,cantidad,Presupuesto);
            
            document.getElementById("superSend").reset();

        }
    }