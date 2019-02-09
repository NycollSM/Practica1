(function(){
  const saveBTn = document.getElementById('saveBtn');
  const name = document.getElementById('name');
  const amount = document.getElementById('amount');
  const date = document.getElementById('date');
  const type = document.getElementById('type');
  const table = document.getElementById('tableBody');
  const list = document.getElementById('list');
  const bills = [];
  const namesArray = [];
  // add values at dom 
  function showValues() {
      const tableRow = document.createElement('tr');
      const tdName = document.createElement('td');
      const tdAmount = document.createElement('td');
      const tdDate = document.createElement('td');
      const tdType = document.createElement('td');

      tdName.innerText = name.value;
      tdAmount.innerText = amount.value;
      tdDate.innerText = date.value;
      tdType.innerText = type.value;

      tableRow.appendChild(tdName);
      tableRow.appendChild(tdAmount);
      tableRow.appendChild(tdDate);
      tableRow.appendChild(tdType);
      table.appendChild(tableRow); 

      namesArray.push(name.value);
      
  
  }
  function showBills(){
    const bill = document.createElement('li');
    bill.innerText = 'Bill '+ type.value + ' '+ amount.value;
    list.appendChild(bill);
    bills.push(amount.value);
  }
  console.log(namesArray);
  console.log(bills);
  saveBTn.addEventListener('click' , showValues);
  saveBTn.addEventListener('click', showBills);
})();
