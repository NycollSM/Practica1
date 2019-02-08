(function(){
  const table  = document.getElementById('table');
  const saveBtn = document.getElementById('saveBtn');
  const nameTxt = document.getElementById('name');
  const dateTxt = document.getElementById('date');
  const typeTxt = document.getElementById('type');
  const amountTxt = document.getElementById('amount');
  
  const elements = {
    name : nameTxt.value,
    date : dateTxt.value,
    amoun: amountTxt.value,
    type : typeTxt.value
  }
  
  function showValues(){  
    
    console.log(elements);
    const tableRow = document.createElement('tr');
    for (const i in elements){
    const tableCellItem = document.createElement('td');

      // DOM 
      
      tableRow.appendChild(tableCellItem); 
      table.appendChild(tableRow);

      tableCellItem.innerText = i.nameTxt;
      tableCellItem.innerText = i.typeTxt;
      tableCellItem.innerText = i.amountTxt;
      tableCellItem.innerText = i.dateTxt; 

      
    }


  }

saveBtn.addEventListener('click' , showValues);

})();
