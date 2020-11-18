class BD{
constructor(x,y){
this.x=x
this.y=y
var option={isStatic:true}
this.body= Bodies.rectangle(this.x,this.y,300,45,option)
World.add(world,this.body)
}
display(){
var pos= this.body.position
push()
translate(pos.x,pos.y)
rectMode(CENTER)

fill("purple")
rect(0,0,200,20)
pop();
}



}