require('dotenv/config');
const Email = require('./app');

const newEmailParamater = {
    from: 'rnbrainium@gmail.com',
    to: 'rakesh.tu16@gmail.com',
    subject: 'Hello Email Test!',
    html: {
        title: 'Landlord',
        logo: '<IMG>',
        body: 'This is test message',
        address: '002, Park Town, Overman Coloney, Jamadoba, Dhanbad, Jharkhand - 8283009'
    }
}

Email(newEmailParamater)

