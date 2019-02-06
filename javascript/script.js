(function(){
  const table  = document.getElementsByTagName('table');
  saveBtn = document.getElementById('saveBtn');
  const form = {
    nameTxt = document.getElementById('name'),
    amountTxt = document.getElementById('amout'),
    dateTxt= document.getElementById('date'),
    typeTxt = document.getElementById('type')
  }
  function showValues(){
    for( const i of form ){
      const tableRow = document.createElement('tr');
      const tableCellName = document.createElement('td');
      const tableCellType = document.createElement('td');
      const tableCellAmout = document.createElement('td');
      const tableCellDate = document.createElement('td');
      //DOM 
      tableCellName.innerHTML = i.nameTxt.value;

      tableCellName.appendChild(tableRow);
      tableRow.appendChild(table);
    }    
      
    
    // nameTxt.value = '';
    // amountTxt.value = '';
    // dateTxt.value = '';
    // typeTxt.value = '';
  }


saveBtn.addEventListener('click' , showValues);









})();
