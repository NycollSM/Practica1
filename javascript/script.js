(function(){
  const table  = document.getElementById('table');
  const  saveBtn = document.getElementById('saveBtn');
  const elements = {
      nameTxt: document.getElementById('name').value,
      amountTxt: document.getElementById('amount').value,
      dateTxt: document.getElementById('date').value,
      typeTxt: document.getElementById('type').value,
  }
  
  function showValues(){
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
