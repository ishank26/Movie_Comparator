
// The function below takes the entered title and searchs imdb for a match then it displays as followed
$(document).ready(function () {
   $(".moveinfo").css("visibility","hidden");
    $("#searchb1").click(function () {
        getImdbInfo1($("#title1").val());
         $(".mi1").css("visibility","visible");
    });

  $(".clear1").click(function(){
        $(".mi1").css("visibility","hidden");
      $("#title1").val("");
      $(".title1 h1").empty();
      $(".title1 h1").empty();
      $(".plot1").empty();
      $(".genre1").empty();
      $(".imdbratings1").empty();
      $(".imdbvotes1").empty();
      $(".metascore1").empty();
      $(".runtime1").empty();
      $(".awards1").empty();
      $(".director1").empty();
      $(".actor1").empty();
      $(".fresh1").empty();
      $(".rotten1").empty();
      $(".ruser1").empty();
      $(".nrev1").empty();
  });
});
function getImdbInfo1(Title1) {
    $.ajax({
      url: "http://www.omdbapi.com/?t=" + Title1+"&tomatoes=true",
        cache: false,
        dataType: "json",
        success: function (data) {
            console.log(data);// for test
         
          $(".title1 h1").append(data.Title);
          $(".plot1").append("Plot: "+data.Plot);
          $(".genre1").append("Genre: "+data.Genre);
          $(".imdbratings1").append("Ratings: "+data.imdbRating);
          $(".imdbvotes1").append("Votes: "+data.imdbVotes);
          $(".metascore1").append("Metascore: "+data.Metascore);
          $(".runtime1").append("Runtime: "+data.Runtime);
          $(".awards1").append("awards: "+data.Awards);
          $(".director1").append("Director: "+data.Director);
          $(".actor1").append("Actors: "+data.Actors);
           $(".fresh1").append("tomatofresh: "+data.tomatoFresh);
          $(".rotten1").append("tomatoesrotten:"+data.tomatoRotten);
          $(".ruser1").append("tomatoUserMeter:"+data.tomatoUserMeter);
          $(".nrev1").append("tomatoUserReviews:"+data.tomatoUserReviews);
          
        },
        error: function (request, status, error) {
            alert(status + ", " + error);
        }
    });
}


////////2 search nox/////////////////
$(document).ready(function () {
    $("#searchb2").click(function () {
        getImdbInfo2($("#title2").val());
        $(".mi2").css("visibility","visible");
    });
  $(".clear2").click(function(){
     $(".mi2").css("visibility","hidden");
    $("#title2").val("");
    $(".title2 h1").empty();
    $(".plot2").empty();
    $(".genre2").empty();
    $(".imdbratings2").empty();
    $(".imdbvotes2").empty();
    $(".metascore2").empty();
    $(".runtime2").empty();
    $(".awards2").empty();
    $(".director2").empty();
    $(".actor2").empty();
    $(".fresh2").empty();
      $(".rotten2").empty();
      $(".ruser2").empty();
      $(".nrev2").empty();

  });
});

function getImdbInfo2(Title2) {
    $.ajax({
        url: "http://www.omdbapi.com/?t=" + Title2+"&tomatoes=true",
        cache: false,
        dataType: "json",
        success: function (data) {
            console.log(data);
          $(".title2 h1").append(data.Title);
          $(".plot2").append("Plot: "+data.Plot);
          $(".genre2").append("Genre: "+data.Genre);
          $(".imdbratings2").append("Ratings: "+data.imdbRating);
          $(".imdbvotes2").append("Votes: "+data.imdbVotes);
          $(".metascore2").append("Metascore: "+data.Metascore);
          $(".runtime2").append("Runtime: "+data.Runtime);
          $(".awards2").append("awards: "+data.Awards);
          $(".director2").append("Director: "+data.Director);
          $(".actor2").append("Actors: "+data.Actors);
          $(".fresh2").append("tomatofresh: "+data.tomatoFresh);
          $(".rotten2").append("tomatoesrotten:"+data.tomatoRotten);
          $(".ruser2").append("tomatoUserMeter:"+data.tomatoUserMeter);
          $(".nrev2").append("tomatoUserReviews:"+data.tomatoUserReviews);
          
          
        },
        error: function (request, status, error) {
            alert(status + ", " + error);
        }
    });
}

/////////rotten tomatoes api for reviews////////////
//////////////////////search 1/////////////////////////////////
/*var apikey = "4p72v4787d8w6e2m8th2hen2";
var rtitle="Gone with the Wind";
//$("#searchb1").click(function() {//
	
	$.ajax({
		url:"http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/reviews.json?review_type=top_critic&page_limit=20&page=1&country=us&"+apikey,
		dataType:"json",
		success:function callf(data){
      alert(url);
    	console.log(data);
       }
    });
   
//});//*/