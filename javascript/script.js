(function(){
  const table  = document.getElementById('table');
  const  saveBtn = document.getElementById('saveBtn');
  const elements = {
      nameTxt: document.getElementById('name'),
      amountTxt: document.getElementById('amount'),
      dateTxt: document.getElementById('date'),
      typeTxt: document.getElementById('type'),
  }
  

  function showValues(){
    const tableRow = document.createElement('tr');
    for (const i in elements){
    
    const tableCellName = document.createElement('td');
    const tableCellType = document.createElement('td');
    const tableCellAmout = document.createElement('td');
    const tableCellDate = document.createElement('td');

      // DOM 
      tableRow.appendChild(tableCellName); 
      tableRow.appendChild(tableCellType);
      tableRow.appendChild(tableCellAmout);
      tableRow.appendChild(tableCellDate);
      table.appendChild(tableRow);

      tableCellName.innerText = i.nameTxt;
      tableCellType.innerText = i.typeTxt;
      tableCellAmout.innerText = i.amountTxt;
      tableCellDate.innerText = i.dateTxt; 

      
    }


  }

saveBtn.addEventListener('click' , showValues);

})();
