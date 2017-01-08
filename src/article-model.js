(function(exports){

function Article(headline) {
  this.headline = headline;
}

Article.prototype.revealHeadline = function() {
  return this.headline;
};
  exports.Article= Article;

})(this);
