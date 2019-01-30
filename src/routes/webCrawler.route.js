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
    if (err) {
      siteMapCreationFailed();
    }
    siteMapCreated();
  });

  generator.on('error', (error) => {
  console.log(error);
      siteMapCreationFailed();
});

  // start the crawler
  generator.start();

  function siteMapCreated() {
    res.send('Sitemap created');
  }
  function siteMapCreationFailed() {
    return res.send('Sitemap creation failed');
  }
});

module.exports = webCrawler;