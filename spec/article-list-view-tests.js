function testArticleListStart() {
  var articleListView = new ArticleListView();
  assert.isTrue(articleListView, "testArticleListStart")
}

function testArticleListHasModel(){
  var articleListModel = new ArticleListModel();
  var articleListView = new ArticleListView(articleListModel);
  assert.isTrue(articleListView.articleListModel == articleListModel, "testArticleListHasModel")
}

testArticleListStart();
testArticleListHasModel();
