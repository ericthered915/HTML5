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
    document.write("Povis, Land of the Impossible")
    var playerName = prompt("Hello Traveller, Whats your name?");
    
    alert("Welcome to Povis "+ playerName);
    
    village();
    
    function Village
        var village = prompt("You awake from your sleep, on a hardfloor in an abandond building, you have no idea how you got there, and your confused. /n -look around /n -go back to sleep").toLowerCase();
    
        
        if village == "look around" ||  village == "look"){
            
            var villageLook = prompt("The building is more of a shack. it has one room, the sun is shining through the rotting wood. and a nest of small insects in the corner of the square room. /n -eat bugs");
        }
            
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
            Function Swamp(){
                var swamp1 = prompt("You have enterted the swamp. /n -jump puddle /n -look around /n -follow road").toLowerCase();
                
                if(swamp1 == "jump puddle" || swamp1 == "jump"){
                    alert("you were pulled into the puddle by a large tentacle...Game Over!");
                }
                
                else if(swamp1 == "follow path" || swamp1 == "follow"){
                    var swampPath = prompt("/n -go north /n -stop and rest");
                    if(swampPath == "stop and rest"){
                        alert("you rest your feet, and get captured by bandits...Game Over!");
                    }
                }
                
            }
        
    
    
}