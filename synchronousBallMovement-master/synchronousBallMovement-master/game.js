class Game{
    constructor(){

    }
    getState(){
    var gamestateref=database.ref("gameState")
    gamestateref.on("value",function(data){
        gameState=data.val()
    })
}
    update(state){
        database.ref("/").update({
            gameState:state
        })

    }
    async start(){
        if(gameState===0){
         player=new Player()
var playerCountref=await database.ref("playerCount").once("value")
if(playerCountref.exists()){
    playerCount=playerCountref.val()
    player.getCount()
}
            
            form=new Form()
            form.display()
            
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
       // text("gameStarted",200,200)
        Player.getPlayerinfo()
        if(allplayers!==undefined){
      //      var displayPosition=120
      var index=0
      var x=0
      var y
     
      for(var plr in allplayers){
          index=index+1
          x=x+200
          y=displayHeight-allplayers[plr].distance
          cars[index-1].x=x
          cars[index-1].y=y
          if(index===player.index){
              cars[index-1].shapeColor="black"
              camera.position.x,displayWidth/2
              camera.position.y,cars[index-1].y
          }
/*if(plr==="player"+player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                displayPosition+=20
            text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayPosition)*/
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50
            player.update()
        }
        drawSprites()
    }
}