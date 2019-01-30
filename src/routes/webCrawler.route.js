const webCrawler = require("express")()
    , SitemapGenerator = require('sitemap-generator');

webCrawler.post('/webCrawler', (req, res) => {
  // create generator
  const generator = SitemapGenerator(req.body.url, {
    stripQuerystring: true,
    filepath: __dirname + '/../sitemap/sitemap.xml'
  });

  // register event listeners
  generator.on('done', (err, res) => {
    console.info('Sitemap created');
    sendResponse();
  });

  // start the crawler
  generator.start();

  function sendResponse() {
    res.send('Sitemap created');
  }
});

module.exports = webCrawler;