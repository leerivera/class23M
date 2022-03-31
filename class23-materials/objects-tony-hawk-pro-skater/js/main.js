//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSkater(playerName, playerSpeed, playerAgility, playerStamina){
    this.name = playerName
    this.speed = playerSpeed
    this.agility = playerAgility
    this.stamina = playerStamina

 this.jump = function(){
    alert('jumped')
 }

 this.race =function(){
    alert("fast")
 }

 this.alley = function(){
    alert('alleyed')
 }
}

let bifBiggs = new MakeSkater('biff', '89', '88', '70')