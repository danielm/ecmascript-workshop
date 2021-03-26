let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open('GET', url_api, true);
    request.onreadystatechange = (event) => {
      //https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

      if (request.readyState === 4){
        
        (request.status === 200)
          ? resolve(JSON.parse(request.responseText))
          : reject(new Error('Error ',  url_api))

      }
    };

    request.send();
  });
}


module.exports = fetchData;