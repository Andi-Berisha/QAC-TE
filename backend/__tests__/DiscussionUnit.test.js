'use strict';
const { expect } = require('chai');
const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { DISCUSSION_URL } = require('../config/CONSTS.json');

describe(`Discussion Routes`, () => {
    it(`Test /getAll route`, (done) => {
        // request is to http://localhost:5019/product/getAll
        chai.request(app)
            .get(`${DISCUSSION_URL}/getAll`)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.not.be.null;
                res.body.map((item) => expect(item).to.contain.key("_id"));
                res.body.map((item) => expect(item).to.be.a('object'));
                res.body.map((item) => expect(item._id).to.be.a('string'));
                done();
            });
    });

    it(`Test /create route`, (done) => {
        chai.request(app)
        .post(`${DISCUSSION_URL}/create`)
        .send({'username': 'test user',
            'title' : 'Avengers: Endgame',
        'Comments': 'this is awesome',
    'Rating': 5})
        .end((err, response) => {
            if(err) done(err); 
            expect(err).to.be.null;
            expect(response).to.not.be.undefined;
            expect(response).to.have.status(201);
            expect(response).to.have.property('text', 'Avengers: Endgame has been added successfully!');
            done();
        });
    });

});
