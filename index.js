const XLSX = require("xlsx");
const fs = require("fs");
const { faker } = require("@faker-js/faker");
// Sample data
const data = [["traveller_name", "mobile_number"]];

const arr = [];



for (let i = 0; i < 10000; i++) {
  const fName = faker.person.fullName();
  const pNum = faker.string.numeric({length:10});
  const k = [fName, pNum];
  arr.push(k)
}

const newArr = [...data, ...arr]

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Add a worksheet
const worksheet = XLSX.utils.aoa_to_sheet(newArr);
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write the workbook to a file
const filePath = 'output.xlsx';
XLSX.writeFile(workbook, filePath, { bookType: 'xlsx', type: 'buffer' }, (err) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('File created successfully:', filePath);
  }
});
