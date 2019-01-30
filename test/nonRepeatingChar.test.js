const chai = require('chai')
    , chaiHttp = require('chai-http')
    , server = require('../app.js')
    , expect = chai.expect
    , should = chai.should();
chai.use(chaiHttp);

describe('/GET nonRepeatingChar', function() {
  it('should return the first non-repeating character', function(done) {
    chai.request(server)
      .get('/nonRepeatingChar/sandhya')
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.text.should.equal('s');
        done();
      });
  });
  it('should return empty string character if there are no non-repeating characters', function(done) {
    chai.request(server)
      .get('/nonRepeatingChar/abba')
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.text.should.equal('');
        done();
      });
  });
});