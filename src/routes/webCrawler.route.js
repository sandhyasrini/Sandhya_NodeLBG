const webCrawler = require("express")();
const SitemapGenerator = require('sitemap-generator');

webCrawler.post('/webCrawler', (req, res) => {
  // create generator
  const generator = SitemapGenerator(req.body.url, {
    stripQuerystring: true,
    filepath: __dirname + './sitemap/sitemap.xml'
  });

  // register event listeners
  generator.on('done', (err, res) => {
    res.send('Sitemap created successfully');
  });

  // start the crawler
  generator.start();

});

module.exports = webCrawler;
