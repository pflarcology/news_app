function testNoteInstantiation() {
  var article = new Article();
  assert.isTrue(article, "testNoteInstantiation")
};

function testArticleHeadline() {
  var article = new Article("Breaking news stuff");
  assert.isTrue(article.revealHeadline() == "Breaking news stuff", "testArticleHeadline")

}

testNoteInstantiation();
testArticleHeadline();
