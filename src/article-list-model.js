(function(exports) {
  function ArticleList() {
    this.listOfArticles = [];
  };

  ArticleList.prototype.returnList = function() {
    return this.listOfArticles;
  }

  ArticleList.prototype.addArticle = function(article) {
    this.listOfArticles.push(article);
  }

  exports.ArticleList = ArticleList;
})(this);
