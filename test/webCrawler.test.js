const chai = require('chai')
    , chaiHttp = require('chai-http')
    , server = require('../app.js')
    , expect = chai.expect
    , should = chai.should();

chai.use(chaiHttp);

describe('/POST webCrawler', function() {
  it('should create a sitemap for  website', function() {
    chai.request(server)
      .post('/webCrawler')
      .send({url: 'http://wiprodigital.com'})
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.text.should.equal('Sitemap created');
        done();
      });
  });
});