//grab scraper+parser library
//gotta npm these bitches
var old_scrape = ["?","??"];
var request = require('request');
var cheerio = require('cheerio');

request('upfeat.com', function (error, response, body) {
  //is there no error and an OK response?
  if (!error && response.statusCode == 200) {
    
    //load html to parse
    var $ = cherrio.load(body);
    
    //----->how we gonna test this?
    
    //select the text from h2 element within class company-intro__content
    var phrase_1 = $('h2', '.company-intro__content').text();
    console.log(phrase_1);
    
    //select the text from p element within class company-intro__content
    var phrase_2 = $('p', '.company-intro__content').text();
    console.log(phrase_2);
    
    //select the text directly from class (different way)
    var phrase_3 = $('.technology-strategy__description').text();
    console.log(phrase_3);
    
    //or is this the way to do it?
    var phrase_4 = $('.company-intro__content').attr('p', '').text();
    console.log(phrase_4);
    
    console.log(old_scrape);
    console.log("adding new list of words...");
    
    //once we actually have some text we can parse it
    var list_of_words = phrase_1.split(" ");
    
    var i;
    var j;
    var k;
    var word;
    var done;
    
    //add all new words that havent been seen before to the seen list (old_scrape[])
    //this works because instead of iterating a list we just delete the first element of the list
    // and continue (since splice will remove the item and reformat array so that next element is at spot 0)
    // until the list is empty
    while(list_of_words.length > 0){
      done = 1;
      for(j = 0; j < old_scrape.length || done==0; j++){
        if(list_of_words[0].localeCompare(old_scrape[j]) == 0){
          //if we find a word in the new list that is already in the old list
          done = 0;
          word = list_of_words[0];
        }
      }//for
      
      //if done is still 1 that means we didnt find the word; add it to the list
      if(done == 1){
        old_scrape.push(list_of_words[0]);
      }
      
      //remove all duplicate instances of new word in new list of words *maybe we arent n^2*
      for(k = list_of_words.length -1; k >= 0; k--){
        if(list_of_words[k].localeCompare(word) == 0){
          list_of_words.splice(k, 1);
        }
      }
    }//while
    
    console.log(old_scrape);
    
  }//html success
});
