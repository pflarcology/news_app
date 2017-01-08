function testArticleListStart() {
  var articleListView = new ArticleListView();
  assert.isTrue(articleListView, "testArticleListStart")
}

function testArticleListHasModel(){
  var articleListModel = new ArticleListModel();
  var articleListView = new ArticleListView(articleListModel);
  assert.isTrue(articleListView.articleListModel == articleListModel, "testArticleListHasModel")
}

function testArticleListReturnsHtmlList(){
  function ArticleDouble() {};
    ArticleDouble.prototype = {
      revealHeadline: function() {return "Breaking new stuff"},
      revealStory: function() {return "Groundbreaking story"},
      _id: 0
  };
  var articleDouble = new ArticleDouble();
  var articleListDouble = {returnList: function(){return [articleDouble]}};
  var articleListView = new ArticleListView(articleListDouble);
  assert.isTrue(articleListView.returnsHtmlList() == "<ul><li><div>Breaking new stuff</div><div>Groundbreaking story</div></li></ul>", "testArticleListReturnsHtmlList")
}

testArticleListStart();
testArticleListHasModel();
testArticleListReturnsHtmlList();
