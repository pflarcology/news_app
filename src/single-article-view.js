(function(exports){
  function SingleArticleView(article) {
    this.article = article;
  };

  SingleArticleView.prototype.displayArticle = function() {
    return "<div>" + this.article.revealHeadline() + "</div><div>" + this.article.revealStory() + "</div>"
  }

  exports.SingleArticleView = SingleArticleView;
})(this);
