(function(exports) {
  function ArticleListModel() {
    this.listOfArticles = [];
  };

  ArticleListModel.prototype.returnList = function() {
    return this.listOfArticles;
  }

  ArticleListModel.prototype.addArticle = function(article) {
    this.listOfArticles.push(article);
  }

  exports.ArticleListModel = ArticleListModel;
})(this);
