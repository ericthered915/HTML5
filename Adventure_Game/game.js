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
        
        var livingroom = prompt("you are now inside the living room of the abandond house, /n - look around /n - go to kitchen /n - go to bedroom");
        
        if(livingroom == "look around" || livingroom == "look"){
            livingroom = prompt("you dont see anything of value.");
            InsideHouse1();
        }
        switch(InsideHouse1){
                case "go to kitchen"
                
                var kitchen = prompt("you enter the kitchen and you are greeted by a small and harmless goblin, it look likes hes running a shop in the house, doesn't look like the best marketing scheme.");
                break 
                
        }
    }
	 
    
}
	
		
		
		
	
	
	
	
	
                          
