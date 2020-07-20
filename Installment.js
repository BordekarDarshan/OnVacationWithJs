function installmentSetUp(totalAmount, installmentBreakDown) {
  let installment = totalAmount / installmentBreakDown;
  let part = [...Array(installmentBreakDown)].map((data) => {
    return installment;
  });
  return part;
}

function payInstallment(installment, installmentNumber) {
  let getEachInstallMent = installmentSetUp(10000, 4);
  if (installmentNumber === 1) {
    if (installment > getEachInstallMent[0]) {
      let advance = installment - getEachInstallMent[0];
      getEachInstallMent[0] = installment;
      getEachInstallMent[0 + 1] = getEachInstallMent[0 + 1] - advance;

      return getEachInstallMent;
    }
  }
}
let result = payInstallment(5000, 1);
console.log(result);
