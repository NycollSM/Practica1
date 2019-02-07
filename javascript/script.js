(function(){
  const table  = document.getElementById('table');
  const  saveBtn = document.getElementById('saveBtn');
  const  nameTxt = document.getElementById('name');
  const  amountTxt = document.getElementById('amount');
  const  dateTxt= document.getElementById('date');
  const  typeTxt = document.getElementById('type');

  function showValues(){
    const tableRow = document.createElement('tr');
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

      tableCellName.innerText = nameTxt.value;
      tableCellType.innerText = typeTxt.value;
      tableCellAmout.innerText = amountTxt.value;
      tableCellDate.innerText = dateTxt.value; 

      // clear textarea 
      nameTxt.value = '';
      amountTxt.value = '';
      dateTxt.value = '';
      typeTxt.value = '';
  }


saveBtn.addEventListener('click' , showValues);









})();
