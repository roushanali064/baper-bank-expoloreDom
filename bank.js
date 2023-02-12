// deposite section
document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputFiled = document.getElementById('deposit-input')
    const newDepositAmountString = inputFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    inputFiled.value = ''
    if(isNaN(newDepositAmount)){
        alert('Please provid Valid Number')
        return
    }

    const DepositBlance = document.getElementById('deposit-blance');

    const previousDepositAmountString = DepositBlance.innerText;
    const previousDepositAmoun = parseFloat(previousDepositAmountString);

    const totalDeposit = previousDepositAmoun + newDepositAmount;

    DepositBlance.innerText = totalDeposit;

    // blance add
    const totalBlance = document.getElementById('blance');
    const totalBlanceString = totalBlance.innerText;
    const totalBlanceValue = parseFloat(totalBlanceString);
    const totalAccount = totalBlanceValue + newDepositAmount;
    totalBlance.innerText = totalAccount;

    
})
// withdraw section
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawFiled = document.getElementById('withdarw-input')
    const withdrawValuestring = withdrawFiled.value;
    const withdrawValue = parseFloat(withdrawValuestring)
    withdrawFiled.value = '';
    if(isNaN(withdrawValue)){
        alert('Please provid Valid Number')
        return
    }

    const previousWithdrawamount = document.getElementById('withdraw-blance');
    const previousWithdrawamountString = previousWithdrawamount.innerText;
    const withdrawAmount = parseFloat(previousWithdrawamountString)

    const totalBlance = document.getElementById('blance');
    const totalBlanceString = totalBlance.innerText;
    const totalBlanceValue = parseFloat(totalBlanceString);
    if(withdrawValue > totalBlanceValue){
        alert('baper bank a ato taka nai')
        return;
    }

    const totalWithdraw = withdrawAmount + withdrawValue;
    previousWithdrawamount.innerText = totalWithdraw;

    const totalAccount = totalBlanceValue - withdrawValue;
    totalBlance.innerText = totalAccount;

    
})