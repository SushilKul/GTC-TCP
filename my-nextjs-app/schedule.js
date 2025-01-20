const fs = require('fs');
const Twilio = require('twilio');
const schedule = require('node-schedule');

const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = new Twilio(accountSid, authToken);

const studentData = JSON.parse(fs.readFileSync('students.json', 'utf8'));
const totalChapters = 9;
let currentDay = 0;

function sendNotification(student, todayChapter, tomorrowChapter) {
    const messageBody = `Hello ${student.name},\n\nToday's chapter to read: Chapter ${todayChapter}\n\nReminder for tomorrow's chapter: Chapter ${tomorrowChapter}\n\nHappy Reading!`;

    client.messages
        .create({
            body: messageBody,
            from: 'whatsapp:+14155238886', // Your WhatsApp API number
            to: `whatsapp:${student.mobile_number}`
        })
        .then(message => console.log(message.sid))
        .catch(error => console.error('Error sending WhatsApp message:', error));
}

schedule.scheduleJob('0 9 * * *', () => {
    studentData.students.forEach((student, index) => {
        const todayChapter = (currentDay + index) % totalChapters + 1;
        const tomorrowChapter = (currentDay + index + 1) % totalChapters + 1;
        sendNotification(student, todayChapter, tomorrowChapter);
    });

    currentDay = (currentDay + 1) % totalChapters;
});

console.log('Scheduled job to send WhatsApp notifications to students.');
