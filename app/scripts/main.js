require.config({
  shim: {
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min'
  }
});
 
require(['app'], function(app) {
  // use app here
  console.log(app);
  $(".carousel").carousel();
  $(".btn.order").click(function() {
    var comment = $(this).parents(".well"). find("textarea").val();
    var title = "TetaShirt - " + $(this).parents(".span8").find("h2").text();
    var link = "mailto:contact@tetalab.org?"
             + "&subject=" + encodeURIComponent(title)
             + "&body=" + encodeURIComponent(comment);
    window.location.href = link;
  });
});
