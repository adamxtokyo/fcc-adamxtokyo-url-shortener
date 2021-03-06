# API Project: URL Shortener Microservice for freeCodeCamp

### User Stories
1. I can POST a URL to `[base_url]/api/shorturl/new` and I will receive a shortened URL in the JSON response. Example:  

		{
			"original_url": "www.google.com",
			"short_url": 1
		}
2. If I pass an invalid URL that doesn't follow the valid format, the JSON response will contain an error. Example:  

		{
			"error": "invalid URL"
		}
**HINT:**  
To be sure that the submitted url points to a valid site you can use the function `dns.lookup(host, cb)` from the `dns` core module.
3. When I visit the shortened URL, it will redirect me to my original link.

#### Creation Example:
* POST [base_url]/api/shorturl/new - body (urlencoded):  url=https://www.google.com

#### Usage:
* [base_url]/api/shorturl/1

#### Will redirect to:
* https://www.google.com
