async function datashow(){
   let myTable =`<table border="1px" " align="center" height="160px" >
      <tr>
         <th>Employee no.</th>
         <th>Employee name</th> 
         <th>City</th>
         <th>Salary</th>
       </tr>  

   `;

    let url="http://localhost:3000/employees";

    let myobj=await fetch(url);
    console.log(myobj);
    let myData = await myobj.json();
    console.log(myData);


    myData.map((key)=>{
       myTable +=`
       <tr>
       <td>&nbsp&nbsp${key.employeeno}</td>
       <td>&nbsp&nbsp${key.name}</td>
       <td>&nbsp&nbsp${key.city}</td>
       <td>&nbsp&nbsp${key.salary}</td>
        </tr>
       `
    });
     
    myTable +=`</table>`;

    document.getElementById("demo").innerHTML=myTable;
}
datashow();