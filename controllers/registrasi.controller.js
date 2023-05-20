const registration = (email) => {
    if (email) {
        return true;
    } else {
        return false;
    }
}

const validateEmail = async (email) => {
    const emails = ['a@a.com', 'b@b.com'];
    if (emails.includes(email)) {
        return true;
    } else {
        return false
    }
}

module.exports = { registration, validateEmail };