(function(exports){
  function ArticleListView(articleListModel) {
    this.articleListModel = articleListModel
  }

  ArticleListView.prototype.returnsHtmlList = function(){
    var output = "<ul>"
    this.articleListModel.returnList().forEach(function(article){
      var headline = article.revealHeadline();
      var story = article.revealStory();
      output += "<li><div>" + headline + "</div><div>" + story + "</div></li>"
    })
    return output + "</ul>"
  }

  exports.ArticleListView = ArticleListView
})(this);
