const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'students.json');

// Function to read student data from the JSON file
function readStudentData() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const studentData = JSON.parse(data);
        return studentData;
    } catch (error) {
        console.error('Error reading student data:', error);
        return null;
    }
}

// Function to write student data to the JSON file
function writeStudentData(studentData) {
    try {
        const data = JSON.stringify(studentData, null, 2);
        fs.writeFileSync(filePath, data, 'utf8');
        console.log('Student data written successfully!');
    } catch (error) {
        console.error('Error writing student data:', error);
    }
}

// Example usage
const studentData = readStudentData();
if (studentData) {
    console.log('Student Data:', studentData);

    // Modify student data (e.g., add a new student)
    studentData.students.push({
        name: 'Student Ten',
        mobile_number: '+1234567899',
        email: 'student10@example.com'
    });

    // Write the modified data back to the file
    writeStudentData(studentData);
}
