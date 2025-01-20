const fs = require('fs');
const nodemailer = require('nodemailer'); // For email notifications
const schedule = require('node-schedule'); // For scheduling tasks

const studentData = JSON.parse(fs.readFileSync('students.json', 'utf8'));
const totalChapters = 9;
let currentDay = 0;

// Create a function to send notifications
function sendNotification(student, todayChapter, tomorrowChapter) {
    // Email content
    const mailOptions = {
        from: 'your-email@example.com',
        to: student.email,
        subject: 'Reading Schedule Notification',
        text: `Hello ${student.name},\n\nToday's chapter to read: Chapter ${todayChapter}\n\nReminder for tomorrow's chapter: Chapter ${tomorrowChapter}\n\nHappy Reading!`
    };

    // Setup email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@example.com',
            pass: 'your-email-password'
        }
    });

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`Error sending email to ${student.email}:`, error);
        } else {
            console.log(`Email sent to ${student.email}:`, info.response);
        }
    });
}

// Schedule a daily job at 9 AM
schedule.scheduleJob('0 9 * * *', () => {
    studentData.students.forEach((student, index) => {
        const todayChapter = (currentDay + index) % totalChapters + 1;
        const tomorrowChapter = (currentDay + index + 1) % totalChapters + 1;
        sendNotification(student, todayChapter, tomorrowChapter);
    });

    currentDay = (currentDay + 1) % totalChapters;
});

console.log('Scheduled job to send notifications to students.');
