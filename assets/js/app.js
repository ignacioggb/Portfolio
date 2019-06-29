var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
console.log(n);
  switch (n) {
    case 1: case 10:
      $("#intro").text("Team Organizer ");  
      $("#description").text("Project management application. Deployed on Heroku, Built by using MVC with Node.js+Express and Handlebars, by using MySQL and Sequelize for DataBase. The application has a login for each User, password encryptation and personalized dashboard for displaying only the user's correspondent projects, taks and categories. You can add,delete and edit projects, categories and tasks.")
        break;

    case 2:
      $("#intro").text("MySQL database");  
      $("#description").text("Basic MVC architecture, Node.js, express, handlebars, MySQL, ORM, Heroku.")
        break;
    case 3:
      $("#intro").text("Friend Finder");  
      $("#description").text("The app was built by using Node.js and Express, Friend Finder is an applicattion that will recommend you another user that match the same thinking that you do. by answering a short survey.")
        break;

        case 4:
          $("#intro").text("In-vox Invoice generator and Database Inventory")
          $("#description").text("Concept for a small web sales managing system. The application uses different APIs to connect to ecommerce stores to search for articles and prices, then allows the user to add this articles directly to it's firebase realtime database. The application allows the user to fill a form to create and send by email a PDF Invoice using the articles and prices stored in the Inventory database.");  
          break;

        case 5:
        $("#intro").text("API sport's themed gif explorer ");  
        $("#description").text("This web application allows the user to search gifs from Giphy API, by using jQuery the user is able to create buttons with topics to be searched when clicking on them. User can limit the number of results to be shown, and also to add extra ones. Every time the user click on a gif, the gif will animate and an option to save it on a fav section will appear.")
          break;
        case 6:$("#intro").text("Rock-Scissor-Paper Multiplayer Game");  
                $("#description").text("By using google's firebase realtime database the web application allows to users to play Rock Scissor-Paper. Each player is able to input their own Player Name, when the opponent is ready the name and their move will update on the users screen.")
          break;
          case 7:$("#intro").text("Timed Trivia Game");  
          $("#description").text("By using jQuery and Javascript's Timer, the web application lets the user to play a trivia game, by having 10 seconds to answer each question. The correct answer will be shown if the player answers incorrectly or if the time runs out. After answering the seven question the results of the game will be displayed ")
          break;
          case 8:$("#intro").text("jQuery RPG game"); 
          $("#description").text("By using jQuery the application allows the user to pick a character and fight against the remaining enemies. The user's character will be fight one by one attaking by using it's own attack power or Health points. Great example for jQuery and attributes usage.") 
          break;
          case 9:$("#intro").text("Javascript word guess game"); 
          $("#description").text("The user have to guess the word that it behind the underscored just as in the hangman game. The game was created by using only javascript.") 
          break;

  
      default:
          break;
  }
}

$("img").on("click",function(){
switch (this.id) {
  case "img1":
  window.open('https://ignacioggb.github.io/Project/home.html');
    break;
    case "img2":
    window.open('https://ignacioggb.github.io/GifTastic/index.html');
      break;
      case "img3":
      window.open('https://ignacioggb.github.io/RPS-Multiplayer/index.html');
        break;
        case "img4":
        window.open('https://ignacioggb.github.io/TriviaGame/index.html');
          break;
          case "img5":
          window.open('https://ignacioggb.github.io/unit-4-game/index.html');
            break;
            case "img6":
            window.open('https://ignacioggb.github.io/Word-Guess-Game/index.html');
              break;
              case "img9":
                window.open('https://young-bastion-45725.herokuapp.com/');
                  break;
                  case "img8":
                    window.open('https://desolate-savannah-35917.herokuapp.com/');
                      break;
                      case "img7":
                        window.open('https://team-organizer.herokuapp.com/');
                          break;
  default:
    break;
}
});