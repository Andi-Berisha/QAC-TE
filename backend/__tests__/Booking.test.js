'use strict';
const { expect } = require('chai');
const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { BOOKINGS_URL } = require('../config/CONSTS.json');

describe(`Bookings Routes`, () => {

    it(`Test /create route`, (done) => {
        chai.request(app)
        .post(`${BOOKINGS_URL}/create`)
        .send({'title' : 'Avengers: Endgame'})
        .end((err, response) => {
            if(err) done(err); 
            expect(err).to.be.null;
            expect(response).to.not.be.undefined;
            expect(response).to.have.status(200);
            expect(response).to.have.property('text');
            done();
        });
    });

    it(`Test /update:id route`, (done) => {
        chai.request(app)
        .patch(`${BOOKINGS_URL}/update/604645a1e5b30b43f8b95d42`)
        .send({'title' : 'Avengers: Endgame'})
        .end((err, response) => {
            if(err) done(err); 
            expect(err).to.be.null;
            expect(response).to.not.be.undefined;
            expect(response).to.have.status(202);
            expect(response).to.have.property('text', 'Successfully patched!');
            done();
        });
    });

});