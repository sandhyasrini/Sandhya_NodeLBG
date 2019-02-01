const webCrawler = require("express")()
  , SitemapGenerator = require('sitemap-generator');
const cheerio = require('cheerio');
var getImageUrls = require('get-image-urls');
var fs = require('fs');

webCrawler.post('/webCrawler', (req, res) => {

  let imageSite = "";
  req.setTimeout(0);
  // create generator
  let filename = __dirname + '/../sitemap/sitemap' + Date.now() + '.txt'
  let filenamexml = __dirname + '/../sitemap/sitemap' + Date.now() + '.xml'

  const generator = SitemapGenerator(req.body.url, {
    stripQuerystring: true,
    filepath: filenamexml
  });

  let sitesAdded = 0;
  generator.on('add', (url) => {
    sitesAdded = sitesAdded + 1;
    imageSite =imageSite +  url + "\r\n";
    
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
    if (sitesAdded > 1)
      return siteMapCreated();
    else
      return siteMapCreationFailed();

    siteMapCreated();
  });

  // start the crawler
  generator.start();

  function siteMapCreated() {
    fs.unlink(filenamexml);
    fs.appendFile(filename, imageSite, function (err, data) {
      if (err) console.log(err);
    });
    imageSite = "";
    let url;
    if (!/^(?:f|ht)tps?\:\/\//.test(req.body.url)) {
      url = "http://" + req.body.url;
      console.log(url)
    }
    else{
      url = req.body.url
    }
    getImageUrls(url, function (err, images) {
      if (!err) {

        images.forEach(element => {
          if(element.url.includes("google") || element.url.includes("twitter") || element.url.includes("facebook")  )
         {

         }
         else{
          if(!element.url.includes("?"))
          imageSite = imageSite + element.url + "\r\n";
          else
          imageSite = imageSite + element.url.split('?')[0] + "\r\n";
         }
        });
        fs.appendFile(filename, imageSite, function (err, data) {
          if (err) console.log(err);
        });
      }
      else {
        console.log('ERROR OCCURED', err);
      }
    })
    res.send('Sitemap created');
  }
  function siteMapCreationFailed() {
    res.send('Sitemap creation failed for the given site');
  }
});

module.exports = webCrawler;
