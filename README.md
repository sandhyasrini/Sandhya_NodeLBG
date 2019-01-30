<h1> LBG NodeJS Assessment </h1>

## Steps to run

1. `npm install`
2. `npm start`

## Steps to run test
   `npm test`



## API Reference
|Route                      | HTTP Verb   |Description                                               |
|---------------------------|:-----------:|:--------------------------------------------------------:|
|/sendFile                  |GET          |outputs a file from local directory                       |
|/product                   |GET          |produces the product of 2 numbers given in query          |
|/uploadFile                |POST         |accepts file content and writes to disk                   |
|/nonRepeatingChar/:string  |GET          |finds the first non repeating element in the string       |
|/webCrawler                |POST         |creates a sitemap for given website                       |

## API Description

### GET /sendFile

* **Inputs:**
None

* **Sample Call:**

  ```
   /sendFile
  ```
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `displays file content from the src/files directory`
    
    
    
### GET /product

* **Inputs:**
Query Parameters

* **Sample Call:**

  ```
   /product?number1=2&number2=10
  ```
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `The product of 2 * 10 is 20`



### POST /uploadFile

* **Inputs:**
Body Parameter
(Upload file as form-data with sampleFile as the key name)

* **Sample Call:**

  ```
   /uploadFile
  ```
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `File uploaded!`
   
   uploaded file is stored in the src/files directory



### GET /nonRepeatingChar/:string

* **Inputs:**
URL Parameter

* **Sample Call:**

  ```
   /nonRepeatingChar/character
  ```
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `h`
    
    
    
 ### POST /webCrawler

* **Inputs:**
Body Parameter(Pass value in raw JSON format.Eg: { "url": "http://wiprodigital.com" } )

* **Sample Call:**

  ```
   /webCrawler
  ```
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `Sitemap created`
   
   creates a sitemap.xml in src/sitemap directory
    
    Average Time taken: 20 to 30 secs
    
    
    
    
 ## All routes are tested in POSTMAN

