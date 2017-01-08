(function(exports){

function Article(headline, story) {
  this.headline = headline;
  this.story = story;
}

Article.prototype.revealHeadline = function() {
  return this.headline;
};

Article.prototype.revealStory = function() {
  return this.story;
}

  exports.Article= Article;
})(this);
