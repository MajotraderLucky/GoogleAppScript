function saveLine() {
  const ss = SpreadsheetApp.openById('1Bt_1EecVFhoao513_RApzQ4vkXo9o-QcU-M2p8i1VKY')
  const activeSheet = ss.getActiveSheet()

    if(activeSheet.getRange('G2').isChecked()) {
      let date        = activeSheet.getRange('A2').getValue()
      let numberLine  = activeSheet.getRange('H2').getValue()
      activeSheet.getRange('A' + numberLine).setValue(date)
      let dailyProfit = activeSheet.getRange('C2').getValue()
      activeSheet.getRange('B' + numberLine).setValue(dailyProfit)
      let result      = activeSheet.getRange('D2').getValue()
      activeSheet.getRange('C' + numberLine).setValue(result)
      activeSheet.getRange('A' + numberLine + ':' + 'C' + numberLine).setBackground('#dcdce0')
      activeSheet.getRange('A' + numberLine + ':' + 'C' + numberLine).setHorizontalAlignment('center')
        if (result > 0) {
          activeSheet.getRange('C' + numberLine).setBackground('#abe4a9')
        } else if (result < 0) {
          activeSheet.getRange('C' + numberLine).setBackground('#ea90a9')
        }
        let pastResult = activeSheet.getRange('C' + (numberLine -1)).getValue()
        result += pastResult
        activeSheet.getRange('C' + numberLine).setValue(result)
      }
     }
