// this function search text on selector and find youtube link and adds iframe dyamically
function youtubeIframe(element_to_pick) {
  element_to_pick.html(function(i, html) {
    return html.replace(/(?:http:|https:)?(?:\/\/)(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([^<.,!():"'\s]+)/g,
      '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/$1?rel=0" allowfullscreen></iframe></div>');
  });
}


$( document ).ready(function() {
  // add iframe to all youtube links on post page
  if ($(".post-content-body").length != 0) {
    youtubeIframe($(".post-content-body"));
  }
  // add responsive class to all images
  $(".post-content-body img").addClass("img-fluid")
});
