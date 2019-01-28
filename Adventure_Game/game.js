// Single line comment
/*

multiline comment

*/

//alert("Warnign Will Robinson!");

//confirm("Do ou like pokemon?");

//prompt("What type of pokemon do you like?");


document.write(PlayerName);

Game();

function Game(){
    
    alert("Povis, Land of Snow and Rocks");
    
    var playerName = prompt("Hello Traveller, Whats your name?");
    
    alert("Welcome to Povis "+ playerName);
    
    prison();
    
    function Village{
        var village = prompt("You awake from your sleep, on a hardfloor in an abandond building, you have no idea how you got there, and your confused. /n -look around /n -go back to sleep").toLowerCase();
        
        if village == "look around" ||  village == "look"){
            
            var prisonLook = prompt("The building is more of a shack. it has one room, and the sun is shining through the rotting wood. and a nest of small insects in the corner of the square room. /n -eat bugs");
            
            else if(village == "go back to sleep" || village == "sleep"){
                alert("You fall back to sleep on the floor, you dream of a great land full of the impossible");
                var resume = confirm("do you wish to continue?");
                
                if (resume){
                    Village();
                    
                }
                else{
                    alert("Game Over");
                }
                }
        
    }
    
}