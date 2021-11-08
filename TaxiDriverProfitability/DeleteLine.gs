function deleteLine() {
  const ss = SpreadsheetApp.openById('Your ID spreadsheets')
  const activeSheet = ss.getActiveSheet()

    if(activeSheet.getRange('G4').isChecked()) {
      let numberLine  = activeSheet.getRange('H2').getValue()
      let deleteCells = activeSheet.getRange('A' + numberLine + ':' + 'C' + numberLine)
      deleteCells.deleteCells(SpreadsheetApp.Dimension.ROWS)
      //Delet the row and shift the row of data that is located below the deleted row up one row
    }
}