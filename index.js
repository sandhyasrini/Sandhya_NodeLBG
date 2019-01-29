var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var Crawler = require("js-crawler");
 
var crawler = new Crawler().configure({ignoreRelative: false, depth: 2});
 
crawler.crawl({
  url: "https://wiprodigital.com/",
  success: function(page) {
  },
  failure: function(page) {
    console.log("failed");
  },
  finished: function(crawledUrls) {
    
    for (var i=crawledUrls.length-1; i>=0; i--) {
        if (crawledUrls[i].includes("twitter") || crawledUrls[i].includes("google") || crawledUrls[i].includes("facebook")) {
          crawledUrls.splice(i, 1);
        }
    }
    console.log( crawledUrls)
    
  }
});