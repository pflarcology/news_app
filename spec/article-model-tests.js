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

testNoteInstantiation();
testArticleHeadline();
testArticleStory();
