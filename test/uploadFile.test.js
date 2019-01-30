const chai = require('chai')
  , chaiHttp = require('chai-http')
  , server = require('../app.js')
  , expect = chai.expect,
  fs = require('fs'),
   should = chai.should();

chai.use(chaiHttp);

describe('/POST uploadFile', function () {
  it('should accept the attached file and write to disk', function (done) {
    chai.request(server)
      .post('/uploadFile')
      .attach('sampleFile', fs.readFileSync(__dirname + '/../src/files/sample.txt'))
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});