var inventory = {
    coins: 0,
    bread: 0,
    sword: 0,
    map: 0,
}



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
            var followpath = prompt("you leave the house behind, and travel the path");
          Swamp();
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
        var entryway = prompt("you enter the house, you see a long and dark hallway with multiple rooms - enter hallway -leave house").toLowerCase();
        
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
            alert("I dont know what "+entryway+" is?!?!");
                InsideHouse1();
        }
        
        function Hallway(){
            //Hallway code goes here
            var hall = prompt("you begin walking down the hall, you see four rooms, -enter Kitchen -enter Livingroom -enter Bedroom -enter Bathroom");
            
        }
        function Kitchen(){
            //Kitchen code goes here
        }  var kit = prompt("you enter the kitchen, its cupboards are all swung open, but not everything is gone. -look around -look in cupboards -hallway ");
        Hallway();
        
        function Livingroom(){
            //Livingroom code goes here
        }
        function Bedroom(){
            //Bedroom code goes here
        }
        function Bathroom(){
            //Entryway code goes here
            
        }
        
        /*var livingroom = prompt("you are now inside the living room of the abandond house, /n - look around /n - go to kitchen /n - go to bedroom");
        
        if(livingroom == "look around" || livingroom == "look"){
            livingroom = prompt("you dont see anything of value.");
            InsideHouse1();
        }*/
       
        
                
        
    }
	 
    
}
	
		
		
		
	
	
	
	
	
                          
