(function(exports){

  var idCounter = 0

function Article(headline, story) {
  this.headline = headline;
  this.story = story;
  this.id = idCounter++;
}

Article.prototype.revealHeadline = function() {
  return this.headline;
};

Article.prototype.revealStory = function() {
  return this.story;
}



  exports.Article= Article;
})(this);
