/* global FlexSearch docs:true a:true t:true d:true */

document.getElementById('mode').addEventListener('click', () => {

  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');

});

if (localStorage.getItem('theme') === 'dark') {

  document.body.classList.add('dark');

}

/* eslint-disable */
/*
window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }

if (document.querySelector('#deploy-to-netlify') !== null) {

  document.getElementById('deploy-to-netlify').addEventListener('click', function(){
    plausible('Deploy to Netlify');
  });

}
*/
/* eslint-enable */

var suggestions = document.getElementById('suggestions');
var userinput = document.getElementById('userinput');

document.addEventListener('keydown', inputFocus);

function inputFocus(e) {

  if (e.keyCode === 191 ) {
    e.preventDefault();
    userinput.focus();
  }

  if (e.keyCode === 27 ) {
    userinput.blur();
    suggestions.classList.add('d-none');
  }

}

document.addEventListener('click', function(event) {

  var isClickInsideElement = suggestions.contains(event.target);

  if (!isClickInsideElement) {
    suggestions.classList.add('d-none');
  }

});


/*
Source: 
  - https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3
*/

document.addEventListener('keydown',suggestionFocus);

function suggestionFocus(e){

  const focusableSuggestions= suggestions.querySelectorAll('a');
  const focusable= [...focusableSuggestions]; 
  const index = focusable.indexOf(document.activeElement); 

  let nextIndex = 0;

  if (e.keyCode === 38) {
    e.preventDefault();
    nextIndex= index > 0 ? index-1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if (e.keyCode === 40) {
    e.preventDefault();
    nextIndex= index+1 < focusable.length ? index+1 : index;
    focusableSuggestions[nextIndex].focus();
  }

}


/* 
Source: 
  - https://github.com/nextapps-de/flexsearch#index-documents-field-search
  - https://raw.githack.com/nextapps-de/flexsearch/master/demo/autocomplete.html
*/

(function(){

  var index = new FlexSearch({
    preset: 'score',
    cache: true,
    doc: {
        id: 'id',
        field: [
          'title',
          'description',
          'content',            
        ],
        store: [
          'href',
          'title',
          'description',
        ],
    },
  });

  index.add(docs);

  userinput.addEventListener('input', show_results, true);
  suggestions.addEventListener('click', accept_suggestion, true);

  function show_results(){

    var value = this.value;
    var results = index.search(value, 5);
    var entry, childs = suggestions.childNodes;
    var i = 0, len = results.length;

    suggestions.classList.remove('d-none');

    results.forEach(function(page) {
      
      entry = document.createElement('div');
      
      entry.innerHTML = '<a href><span></span><span></span></a>';

      a = entry.querySelector('a'),
      t = entry.querySelector('span:first-child'),
      d = entry.querySelector('span:nth-child(2)');

      a.href = page.href;
      t.textContent = page.title;
      d.textContent = page.description;

      suggestions.appendChild(entry);

    });

    while(childs.length > len){

        suggestions.removeChild(childs[i])
    }

  }

  function accept_suggestion(){

      while(suggestions.lastChild){

          suggestions.removeChild(suggestions.lastChild);
      }

      return false;
  }

}());
