var chai = require('chai');
var expect = require('chai').expect;
var createError = require('http-errors');

chai.use(require('chai-http'));

var app = require('../app');

describe('API endpoint tests', function(){
    before(function(){
    })

    var num1 = 25, num2 = 5;
    // GET - /api/v1/product/:nbr1/:nbr2 find product of 2 numbers
    it('should multiply the input numbrs', function() {
        return chai.request(app)
        .get(`/api/v1/product/${num1}/${num2}`)
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.productValue).to.eqls(125);
        });
    });

    // GET - Invalid path
    it('should return Not Found', function() {
        return chai.request(app)
        .get('/INVALID_PATH')
        .then(function(res) {
            throw createError(404)
        })
        .catch(function(err) {
            expect(typeof(err)).to.equal('object');
            expect(err.message).to.equal('Not Found');
            expect(err.status).to.equal(404);
        });
    });


    // POST - /search find first occurence of non-repeating char
    it('should return first non-repeating char from input string', function() {
        return chai.request(app)
        .post('/api/v1/search')
        .send({
            inputStr: 'SaazS'
        })
        .then(function(res) {
            // console.log(res)
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            expect(res.body.outputChar).to.eql('z');
        })
        .catch(function(err) {
            expect(err).to.have.status(400);
        });
    });
})