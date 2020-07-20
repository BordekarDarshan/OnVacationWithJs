function installmentSetUp(totalAmount, installmentBreakDown) {
  let installment = totalAmount / installmentBreakDown;
  let part = [...Array(installmentBreakDown)].map((data) => {
    return installment;
  });
  return part;
}

function payInstallment(installment, option) {
  let getEachInstallMent = installmentSetUp(10000, 4);
  let installmentPaid = [];

  for (let i = 0; i < 4; i++) {
    if (installment > getEachInstallMent[i]) {
      let advance = installment - getEachInstallMent[i];
      getEachInstallMent[i] = installment;
      getEachInstallMent[i + 1] = getEachInstallMent[i + 1] - advance;
      installmentPaid.concat(getEachInstallMent[i]);
      return installmentPaid, getEachInstallMent;
    }
    if (installment < getEachInstallMent[i]) {
      if (option === "adjust") {
        let remain = getEachInstallMent[i] - installment;
        getEachInstallMent[i] = installment;
        getEachInstallMent[i + 1] = getEachInstallMent[i + 1] + remain;
        installmentPaid.concat(getEachInstallMent[i]);
        return getEachInstallMent;
      }
      if (option === "new") {
        let remain = getEachInstallMent[i] - installment;
        getEachInstallMent[i] = installment;
        getEachInstallMent.push(remain);
        installmentPaid.concat(getEachInstallMent[i]);
        return getEachInstallMent;
      }
    }
  }
}
let result = payInstallment(000, "adjust");
console.log(result);
