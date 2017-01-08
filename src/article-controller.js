(function(exports){
  function ArticleController(articleListModel, articleListView){
    this.articleListModel = articleListModel;
    this.articleListView = articleListView;
  }

  ArticleController.prototype.changeHtml = function() {
    var htmlList = this.articleListView.returnsHtmlList();
    document.getElementById("app").innerHTML = htmlList;
  }

  exports.ArticleController = ArticleController;
})(this);
