function testArticleList() {
  var articleListModel = new ArticleListModel();
  assert.isTrue(articleListModel, "testArticleList")
}

function testArticleListIsAnArray() {
  var articleListModel = new ArticleListModel();
  assert.isTrue(articleListModel.returnList() instanceof Array, "testArticleListIsAnArray")
}

function testAddingArticles() {
  var articleListModel = new ArticleListModel();
  var articleDouble = {};
  articleListModel.addArticle(articleDouble);
  assert.isTrue(articleListModel.returnList().length == 1, "testAddingArticles")
}

testArticleList();
testArticleListIsAnArray();
testAddingArticles();
