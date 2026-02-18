function validateEvent(event) {
 const errors = [];

 // Check title
 if (!event.title || event.title.trim() === '') {
 errors.push('Event title is required');
 } else if (event.title.length > 100) {
 errors.push('Title cannot exceed 100 characters');
 }

 // Check date
 if (!event.date) {
 errors.push('Event date is required');
 } else if (new Date(event.date) <= new Date()) {
 errors.push('Event date must be in the future');
 }

 // Check capacity
 if (!event.capacity || event.capacity < 1) {
 errors.push('Capacity must be at least 1');
 }

 return {
 isValid: errors.length === 0,
 errors: errors
 };
}
function validateEmail(email) {
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return emailRegex.test(email);
}
function validatePassword(password) {
 if (password.length < 6) {
 return { isValid: false, message: 'Password must be at least 6 characters' };
 }
 return { isValid: true };
}
function validateUsername(username)
{
    if(username.length> 25 || username.length<5 ){
        return{isValid:false, message:'name must be between 5 and 25'};
    }
}
function validateUsername(username) {
    const usernameRegex = /^[A-Za-z][A-Za-z0-9]{4,11}$/;
    if (usernameRegex.test(username)) {
        console.log(`Username "${username}" is valid.`);
        return true;
    } else {
        console.log(`Username "${username}" is invalid.`);
        return false;
    }
}
function validatePhoneNumber(phone) {
    const phoneRegex = /^[789]\d{9}$/;
    if (phoneRegex.test(phone)) {
        console.log(`Phone number "${phone}" is valid.`);
        return true;
    } else {
        console.log(`Phone number "${phone}" is invalid.`);
        return false;
    }
}
function validateUrl(url) {
    const urlRegex = /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/;
    if (urlRegex.test(url)) {
        console.log(`URL "${url}" is valid.`);
        return true;
    } else {
        console.log(`URL "${url}" is invalid.`);
        return false;
    }
}
// EXPORT these functions so other files can use them
module.exports = {
 validateEvent,
 validateEmail,
 validatePassword,
 validateUsername,
 validatePhoneNumber,
 validateUrl
};