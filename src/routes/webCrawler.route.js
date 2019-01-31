const webCrawler = require("express")()
  , SitemapGenerator = require('sitemap-generator');

webCrawler.post('/webCrawler', (req, res) => {
  
  req.setTimeout(0);
  // create generator
  const generator = SitemapGenerator(req.body.url, {
  stripQuerystring: true,
    filepath: __dirname + '/../sitemap/sitemap'+Date.now()+'.xml'
  });

  let sitesAdded = 0;
  generator.on('add', (url) => {
    sitesAdded = sitesAdded + 1;
    console.log(sitesAdded);
  });


  generator.on('error', (error) => {
  console.log(error);
      // siteMapCreationFailed();
});
  
  // register event listeners
  generator.on('done', (err) => {
    if (err) {
      siteMapCreationFailed();
    }
    if(sitesAdded > 1)
    return siteMapCreated();
    else
    return siteMapCreationFailed();

    siteMapCreated();
  });

  // start the crawler
  generator.start();

  function siteMapCreated() {
    res.send('Sitemap created');
  }
  function siteMapCreationFailed() {
     res.send('Sitemap creation failed for the given site');
  }
});

module.exports = webCrawler;