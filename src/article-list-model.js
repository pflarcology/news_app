(function(exports) {
  function ArticleList() {
    this.listOfArticles = []
  };

  ArticleList.prototype.returnList = function() {
    return this.listOfArticles;
  }

  exports.ArticleList = ArticleList;
})(this);
