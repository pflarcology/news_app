function testArticleList() {
  var articleList = new ArticleList();
  assert.isTrue(articleList, "testArticleList")
}

function testArticleListIsAnArray() {
  var articleList = new ArticleList();
  assert.isTrue(articleList.returnList() instanceof Array, "testArticleListIsAnArray")
}

function testAddingArticles() {
  var articleList = new ArticleList();
  var articleDouble = {};
  articleList.addArticle(articleDouble);
  assert.isTrue(articleList.returnList().length == 1, "testAddingArticles")
}

testArticleList();
testArticleListIsAnArray();
testAddingArticles();
