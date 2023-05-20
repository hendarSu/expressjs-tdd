const { registration, validateEmail } = require('./../controllers/registrasi.controller');

describe('Testing Registrasi', ()=> {
    test('[+] Check Input Email String && not null', () => {
        const email = 'hendar@clodeo.com'
        expect(registration(email)).toBe(true);
    } )

    test('[-] Check Input Email String && null', () => {
        const email = null;
        expect(registration(email)).toBe(false);
    })

    test('[+] Check email exist/ terdaftar', async () => {
        const email = 'a@a.com';
        const validationEmail = await validateEmail(email);
        expect(validationEmail).toBe(true)
    })
})