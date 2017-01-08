function testNoteInstantiation() {
  var article = new Article();
  assert.isTrue(article, "testNoteInstantiation")
};

function testArticleHeadline() {
  var article = new Article("Breaking news stuff");
  assert.isTrue(article.revealHeadline() == "Breaking news stuff", "testArticleHeadline")
}

function testArticleStory() {
  var article = new Article("Breaking new stuff", "Groundbreaking story")
  assert.isTrue(article.revealStory() == "Groundbreaking story", "testArticleStory")
}

function testArticleHasUniqueID() {
  var article = new Article("Breaking new stuff", "Groundbreaking story");
  var article2 = new Article("Breaking new stuff", "Groundbreaking story")
  assert.isTrue(article.id + 1 == article2.id, "testArticleHasUniqueID")
}

testNoteInstantiation();
testArticleHeadline();
testArticleStory();
testArticleHasUniqueID();
