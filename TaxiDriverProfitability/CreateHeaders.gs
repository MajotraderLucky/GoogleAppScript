function createHeader() {
  const ss = SpreadsheetApp.openById('Your sheets ID')
  const activeSheet = ss.getActiveSheet()

  //Create a checkbox to start drawing table headers and coloring cells

  let indexRow    = 2 //row index
  let indexColumn = 6 //column index
  let cell = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow, indexColumn); //We take the cell
  let rule = SpreadsheetApp.newDataValidation() //Creating a checkbox
    .requireCheckbox()
    .build();
  cell.setDataValidation(rule);

  activeSheet.getRange('F1').setValue('Create Header')

  if(activeSheet.getRange('F2').isChecked()) {
    activeSheet.getRange('F1').setBackground('#c09c9c')

    //Create column names and color them
    activeSheet.getRange('A1').setValue('Data').setBackground('#c5cbf6')
    activeSheet.getRange('A2').setValue([[new Date()]]).setBackground('#c5cbf6')
    activeSheet.getRange('B1').setValue('Fuel cost').setBackground('#e7acb9')
    activeSheet.getRange('C1').setValue('Daily profit').setBackground('#b4eaad')
    activeSheet.getRange('D1').setValue('Result').setBackground('#c2ea87')
    activeSheet.getRange('A1:H1').setHorizontalAlignment('center')
    activeSheet.getRange('A2:H2').setHorizontalAlignment('center')

    //Create a checkbox to start calculator
    let indexRow1    = 4 //row index
    let indexColumn1 = 6 //column index
    let cell1 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow1, indexColumn1) //We take the cell
    let rule1 = SpreadsheetApp.newDataValidation() //Creating a checkbox
    .requireCheckbox()
    .build()
    cell1.setDataValidation(rule1)

    activeSheet.getRange('F3').setValue('Start Calculator').setBackground('#c09c9c')

    //Create a checkbox to save line
    let indexRow2    = 2 //row index
    let indexColumn2 = 7 //column index
    let cell2 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow2, indexColumn2) //We take the cell
    let rule2 = SpreadsheetApp.newDataValidation() //Creating a checkbox
    .requireCheckbox()
    .build()
    cell2.setDataValidation(rule2)

    activeSheet.getRange('G1').setValue('Save Line').setBackground('#b3eff8')

    //Creating a table to save data

    activeSheet.getRange('A5').setValue('Date')
    activeSheet.getRange('B5').setValue('Daily profit')
    activeSheet.getRange('C5').setValue('Month result')
    activeSheet.getRange('A5:C5').setHorizontalAlignment('center').setBackground('#aaa2a2')
    activeSheet.getRange('H1').setValue('Number line').setBackground('#b3eff8')
    activeSheet.getRange('F2:H2').setBackground('#cccecd')
    activeSheet.getRange('F4').setBackground('#cccecd')
    activeSheet.getRange('A6:C6').setHorizontalAlignment('center')

    //Create a checkbox to delete line
    let indexRow3    = 4 //row index
    let indexColumn3 = 7 //column index
    let cell3 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow3, indexColumn3) //We take the cell
    let rule3 = SpreadsheetApp.newDataValidation() //Creating a checkbox
    .requireCheckbox()
    .build()
    cell3.setDataValidation(rule3)

    activeSheet.getRange('G3').setValue('Delete Line').setBackground('#e9a7a7')
    activeSheet.getRange('G3').setHorizontalAlignment('center')
  }
}
