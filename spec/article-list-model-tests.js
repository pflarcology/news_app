function testArticleList() {
  var articleList = new ArticleList();
  assert.isTrue(articleList, "testArticleList")
}

function testArticleListIsAnArray() {
  var articleList = new ArticleList();
  assert.isTrue(articleList.returnList() instanceof Array, "testArticleListIsAnArray")
}

testArticleList();
testArticleListIsAnArray();
