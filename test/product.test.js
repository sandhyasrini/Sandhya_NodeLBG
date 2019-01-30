const chai = require('chai')
    , chaiHttp = require('chai-http')
    , server = require('../app.js')
    , expect = chai.expect
    , should = chai.should();

chai.use(chaiHttp);

describe('/GET product', function() {
  it('should calculate the products of two arguments', function(done) {
    chai.request(server)
      .get('/product/5/10') 
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.text.should.equal('The product of 5 * 10 is 50');
        done();
      });
  });

  it('should not calculate the products of two arguments if the query parameter is not a number', function(done) {
    chai.request(server)
      .get('/product/a/10') 
      .end((err, res) => {
        expect(res).to.have.status(400);
        res.text.should.equal('Not a number');
        done();
      });
  });
});
