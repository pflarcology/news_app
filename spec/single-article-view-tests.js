function testSingleArticleView() {
  var singleArticleView = new SingleArticleView();
  assert.isTrue(singleArticleView, "testSingleNoteView")
}

function testSingleArticleViewHasArticle() {
  function ArticleDouble() {};
    ArticleDouble.prototype = {
      revealHeadline: function() {return "Breaking new stuff"},
      revealStory: function() {return "Groundbreaking story"}
  };
  var articleDouble = new ArticleDouble();
  var singleArticleView = new SingleArticleView(articleDouble);
  assert.isTrue(singleArticleView.article === articleDouble, "testSingleArticleViewHasArticle")
}

function testSingleArticleDisplaysSingleArticle() {
  function ArticleDouble() {};
    ArticleDouble.prototype = {
      revealHeadline: function() {return "Breaking new stuff"},
      revealStory: function() {return "Groundbreaking story"}
  };
  var articleDouble = new ArticleDouble();
  var singleArticleView = new SingleArticleView(articleDouble);
  assert.isTrue(singleArticleView.displayArticle() === "<div>Breaking new stuff</div><div>Groundbreaking story</div>", "testSingleArticleDisplaysSingleArticle")
}

testSingleArticleView();
testSingleArticleViewHasArticle();
testSingleArticleDisplaysSingleArticle();
