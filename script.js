const URL="https://iskarr.github.io/austindonovan.github.io/api/business.json";
//fetch url
fetch(URL).then((response)=> response.json())
   .then((jsObject)=> {
     console.log(jsObject);
   });
