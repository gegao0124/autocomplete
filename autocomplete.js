$(document).ready(function(){
    var products = [
      {
          "name": "American Express Cards (US)",
          "url": "https://www.americanexpress.com",
          "type": "CREDIT_CARD"
      },
      {
          "name": "ADP Retirement Services - 401k (US)",
          "url": "http://www.adp.com/solutions/employer-services/retirement-services.aspx",
          "type": "INVESTMENT"
      },
      {
          "name": "American Express Bank (Personal Savings) (US) - Bank",
          "url": "https://www.americanexpress.com/?inav=NavLogo",
          "type": "BANK"
      }
  ]
  
  var input = document.getElementById("searchBox"),
  ul = document.getElementById("searchResults"),
  inputTerms, termsArray, prefix, terms, results, sortedResults;
  
  
  var search = function() {
  inputTerms = input.value.toLowerCase();
  results = [];
  termsArray = inputTerms.split(' ');
  prefix = termsArray.length === 1 ? '' : termsArray.slice(0, -1).join(' ') + ' ';
  terms = termsArray[termsArray.length -1].toLowerCase();
  
  for (var i = 0; i < products.length; i++) {
  var a = products[i].name.toLowerCase(),
      t = a.indexOf(terms);
  
  if (t > -1) {
    results.push(a);
  }
  }
  
  evaluateResults();
  };
  
  var evaluateResults = function() {
  if (results.length > 0 && inputTerms.length > 0 && terms.length !== 0) {
  sortedResults = results.sort(sortResults);
  appendResults();
  } 
  else if (inputTerms.length > 0 && terms.length !== 0) {
  ul.innerHTML = '<li>Not found</li>';
  }
  else if (inputTerms.length !== 0 && terms.length === 0) {
  return;
  }
  else {
  clearResults();
  }
  };
  
  var sortResults = function (a,b) {
  if (a.indexOf(terms) < b.indexOf(terms)) return -1;
  if (a.indexOf(terms) > b.indexOf(terms)) return 1;
  return 0;
  }
  
  var appendResults = function () {
  clearResults();
  
  for (var i=0; i < sortedResults.length && i < 5; i++) {
  var li = document.createElement("li"),
      result = products[i].name;
  
  li.innerHTML = result;
  li.classList.add('items');
  ul.appendChild(li);
  }
  
  if ( ul.className !== "term-list") {
  ul.className = "term-list";
  }
  };
  
  var clearResults = function() {
  ul.className = "term-list hidden";
  ul.innerHTML = '';
  };
  
  input.addEventListener("keyup", search, false);

 $(document).on('click','.items',function(e){
    var text = $(this).text();

    for(var cc of products) {
        if(cc.name.toLowerCase() === text.toLowerCase()) {
            $('#searchResults').empty();
            var li = document.createElement("li");
            var renderInfo = cc.name + cc.type + cc.url;
            li.innerHTML = renderInfo
            ul.appendChild(li)
        }
    }
})

});
  
  
  
  
  
  
  