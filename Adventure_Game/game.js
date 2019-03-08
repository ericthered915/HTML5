Game();

function Game(){
	
	alert("Welcome to the Land of Povis!");
	
	var playerName = prompt("Welcome, Traveler! What is your name?");
    
    while(!confirm("Are you sure you want "+playerName+" as a name?")){
        playerName = prompt("What name do you want?");
    }	
    
	alert("Ah, Welcome to Povis, "+ playerName);
	
	House();
	function House(){
        //this leads away from the house
        var house = prompt("you wake up next a house, you dont know how you got there. all you know is that your in Povis /n -look around /n -go inside").toLowerCase();
        
        if(house == "look around" || house == "look"){
            
            var houseLook = prompt("the house is old and creeky, and there is a path. /n - go inside /n - follow path");
            
            if(houseLook == "follow path" || "follow"){
            var followpath = alert("you leave the house behind, and travel the path, as your travelling you find yourself lost, and and beging to feel hungry.");
                var fp = alert("you died!");
          
        }
        }
        
        //this leads inside the house
        else if(house == "go inside" || house == "inside"){
            var housebreakdown = prompt ("the door is nailed shut, it wont open, /n - break down door /n - knock on door");
            
            
            }
        if(housebreakdown == "break down door" || housebreakdown == "break down"){
            var houseInside = alert ("the door breaks off its hinges easily");
            InsideHouse1();
        }
        else if(housebreakdown == "knock on door" || housebreakdown == "knock"){
            var houseknock = prompt ("you knock on the door, and nobody answers, but you hear the scurrering of rats /n - kick down door /n - look for another way in");
        }
        else if(houseknock == "kick down door" || houseknock == "kick down"){
            var houseInside = alert ("the door breaks off its hinges easily");
            InsideHouse1();
        }
            
        
        
    }
    
    function InsideHouse1(){
        var entryway = prompt("you enter the house, you see a long and dark hallway with multiple rooms - hallway -leave house").toLowerCase();
        if(entryway == "leave house" ||entryway == "leave"){
        var entryw = alert("you have left the house");
            House();
        
        switch(entryway){
            case "hallway":
                Hallway();
            break;
            case "kitchen":
                Kitchen();
            break;
            case "livingroom":
               Livingroom();
            break;
            case "Bedroom":
                Bedroom();
            break;
            case "bathroom":
                Bathroom();
            break
                
                
            
            default:
            alert("I dont know what "+entryway+" is?!");
                InsideHouse1();
        }
        
        function Hallway(){
            //Hallway code goes here
            var hall = prompt("you begin walking down the hall, you see four rooms, n/ -enter Kitchen n/ -enter Livingroom n/ -enter Bedroom n/ -enter Bathroom");
            
        }
        function Kitchen(){
            //Kitchen code goes here
        var kit = prompt("you enter the kitchen, its cupboards are swung open, but not everything is gone. -look around -look in cupboards -hallway"){
            if (kit == "look around" ||kit == "look"){
                var kitlook = alert("as you look around the kitchen, you notice that table is wobbly"){
            
                var kitlook = prompt("n/ -ignore table n/ -move table"){
                    if (klook == "move table" ||klook == "move");
                
                
                    var tablemove = alert("you move the table to reveal a trap door. the door leads into a dark pit /n - jump down hole"){
                      if(tablemove = "jump down hole" ||tablemove = "jump"){
                      }
                      }  
                      
                    }
                }
                    
            
            }
            
        Kitchen();
            }
            
            
                
            
            else if(kit == "look in cupboards" ||kit == "cupboards"){
                    var kitcupboard = prompt("you find an empty can");
                }
                
                
            
        }
        Hallway();
        
        function Livingroom(){
            //Livingroom code goes here
            var live = prompt("you enter the livingroom, theres a rug in the center of the room with a couch facing away from the door"){
                
            }
        }
        function Bedroom(){
            //Bedroom code goes here
            var hbedroom = prompt("you enter the bedroom, theres a bed with raggity old sheets and a nightstand to the left with an old candle on top -move sheets -search nightstand"){
                if(hbedroom == "move sheets" ||hbedroom == "sheets"){
                    var sheets = alert "a goblin was lurking in the sheets! he got angry you found him, and ate you Game Over!"
                }
               if(hbedroom == "search nightstand" ||hbedroom == "nightstand"){
                   var nightstand = prompt("you walk up to the nightstand and open the drawer, if was full of mostly junk, but you find a key");
               } 
            }
        }
        
        /*var livingroom = prompt("you are now inside the living room of the abandond house, /n - look around 
        
        if(livingroom == "look around" || livingroom == "look"){
            livingroom = prompt("you dont see anything of value.");
            InsideHouse1();
        }
        
        This code enters rooms with conditionals
        var key = false;

var room = prompt("Enter room?");

if(room == "enter" && key == true){
  alert("You enter the room");
  
}
else{
  alert("door is locked, you need a key!");
}
        */
       
        
                
        
    }
	 
    
}

    
    
    
/*	Reference only	

var inventory = {
    coins: 0,
    key:0,
    candle:0,
    matches:0,
}		


function Shop(){
    
    var shopKeeper = prompt("What can I do for you? \n - buy candle");
    
    if(shopKeeper == "buy candle"){
        if(inventory.coins >= 4){
            alert("You have purchased a candle");
            inventory.coins -= 4;
            inventory.candle ++;
            alert("You now have "+inventory.candle+" candles! \n You have "+inventory.coins+" coins left!");
        Shop();    
        }
        else{
            alert("You do not have enough coins!");
            Shop();
        }    
    }
    else if(shopKeeper == "leave"){
        Game();
    }
    else{
        alert("Make up your mind....I cant stand here all day!");
        Shop();
    }
    
    
}
		
*/	
	
	
	
	
                          
