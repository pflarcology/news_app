function testArticleController() {
  var articleControler = new ArticleController();
  assert.isTrue(articleControler, "testArticleController")
}

function testInnerHtml(){
  function ArticleListViewDouble() {};
    ArticleListViewDouble.prototype = {
      returnsHtmlList: function() {return "<ul><li><div>Breaking new stuff</div><div>Groundbreaking story</div></li></ul>"}
  };
  var articleListModelDouble = {}
  var articleListViewDouble = new ArticleListViewDouble();
  var articleController = new ArticleController(articleListModelDouble, articleListViewDouble)
  articleController.changeHtml();
  element = document.getElementById('app')
  assert.isTrue(element.innerHTML === "<ul><li><div>Breaking new stuff</div><div>Groundbreaking story</div></li></ul>", "testInnerHtml")

};

testArticleController();
testInnerHtml();
