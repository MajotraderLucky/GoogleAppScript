function startCalculator() {
  const ss = SpreadsheetApp.openById('Yours sheet ID')
  const activeSheet = ss.getActiveSheet()

  if(activeSheet.getRange('F4').isChecked()) {
    let result      = 0
    let fuelCost    = 0
    let daylyProfit = 0

    fuelCost    = activeSheet.getRange('B2').getValue()
    daylyProfit = activeSheet.getRange('C2').getValue()
    result      = daylyProfit - fuelCost

    activeSheet.getRange('D2').setValue(result)
      if (result > 0) {
        activeSheet.getRange('D2').setBackground('#abe4a9')
      } else if (result < 0) {
        activeSheet.getRange('D2').setBackground('#ea90a9')
      } else {
        Browser.msgBox('The result cannot be zero!')
      }
  }
}
