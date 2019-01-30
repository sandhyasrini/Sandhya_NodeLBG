const chai = require('chai')
    , chaiHttp = require('chai-http')
    , server = require('../app.js')
    , expect = chai.expect
    , should = chai.should();

chai.use(chaiHttp);

describe('/GET sendFile', function() {
    it('should output a file content from local directory', function(done) {
      chai.request(server)
        .get('/sendFile')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });