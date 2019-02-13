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
	
	alert("Ah, Welcome to Povis, "+ playerName);
	
	House();
	//House start
	function House(){
		var house = prompt("You wake up in front of a house. \n -look around \n - go back to sleep").toLowerCase();
		//
		if(house == "look around" || house == "look"){
			
			var houseLook = prompt("the house is old, creaky, and has the doors nailed shut. \n -open door \n -walk away");
            
		}
		
		else if(house == "go back to sleep" || house == "sleep"){
			alert("You fall back to sleep in the dirt. You dream of a land full of the impossible");
			var resume = confirm("Do you wish to continue?");
			
			if(resume){
				House();
			}
			else{alert("Game Over!");
			}
       
        }
        
        
        
        
        
		
		else{alert("I dont know what "+house+" is!");
			House();
		}
	
    Swamp();
	//Swamp Code
	function Swamp(){
		var swamp1 = prompt("This is a musty, monster ridden swamp. \n -follow path \n -swim");
		
		if(swamp1 == "follow" || swamp1 == "follow path"){
            
			var swampPath = prompt("You enter on the swamp path and head north in the disance you see a witches hut. As you approach it you can hear the couldren bubbling, and her laugh growing ever more insane. \n -enter hut \n -burn hut");
            
			if( swampPath == "enter"){
				alert("You entered the hut. There is a Witch bent over a large cauldron on the fire in the center of the room. /n talk to the witch /n push the witch in");
              }  
            else if(swampPath == "talk to the witch" || swampPath "talk"){
                    prompt("Get Out!")
                    Swamp();
                    
            }
            else{
                alert("I dont understand what you are saying!");
                Swamp();
            }
				
			else if(swampPath = "burn down hut"){
				alert("You burn down the hut, you hear the Witch screaming in pain. she is dead.");
			}	
			
			
		}
		else if(swamp1 == "Swim"){
			
		}
		else{
			alert("I don't understand "+swamp1);
			Swamp();
		}
		
                          

            
        }
	} 
    
}
	
		
		
		
	
	
	
	
	
                          
