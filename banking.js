function getInputValue(inputId) {
  const inputField = document.getElementById(inputId) 
  const inputNumber = parseFloat(inputField.value) 
  inputField.value = '' 
  return inputNumber;
}

function updateTotalField(totalFieldId,depositAmount) {
  const currentDeposit = document.getElementById(totalFieldId) 
  const sum = parseFloat(currentDeposit.innerText);
   //set total deposit
  currentDeposit.innerText = sum + depositAmount;
}
  
function updateBalance(depositAmount,isCalculation ) {
    //increase balance  
  const previous_balance = document.getElementById('balance_total') 
  const previous_balance_number = parseFloat(previous_balance.innerText) 
  if (isCalculation == true) {
      previous_balance.innerText = previous_balance_number + depositAmount ;
    }
  else {
     previous_balance.innerText = previous_balance_number - depositAmount ;
  }
 
}

  //handle deposit button event
document.getElementById('deposit_button').addEventListener('click', function () {
  //set deposit input
  const depositAmount = getInputValue('deposit_input')
    //set current Deposit
  updateTotalField('deposit_total',depositAmount)
  //increase balance  
  updateBalance(depositAmount,true)

})

  //handle withdraw button event 
document.getElementById('withdraw_button').addEventListener('click', function () {
    //set withdraw input
  const withdraw_input_number = getInputValue('withdraw_input')
  //set previous Withdraw  
    updateTotalField('previous_withdraw',withdraw_input_number)
  //decrease balance  
  updateBalance(withdraw_input_number,false)

})


 