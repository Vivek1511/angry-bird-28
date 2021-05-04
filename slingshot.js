class Slingshot{

constructor(bodya,pointb){
    var options={
        bodyA:bodya,
        pointB:pointb,
        stiffness:0.04,
        length:10
      }

      this.pointb=pointb

      this.sling=Constraint.create(options)
      World.add(world,this.sling)
      this.sling1=loadImage("sprites/sling1.png")
      this.sling2=loadImage("sprites/sling2.png")
      this.sling3=loadImage("sprites/sling3.png")
}
display(){

    image(this.sling1,200,20)
    image(this.sling2,170,20)
    
    strokeWeight(3)
    if(this.sling.bodyA){
        var pointa=this.sling.bodyA.position
        var pointb=this.pointb
        stroke("rgb(66,9,9)")
        if(pointa.x<220){
            strokeWeight(7)
            line(pointa.x-20,pointa.y,pointb.x-10,pointb.y)
            line(pointa.x-20,pointa.y,pointb.x+30,pointb.y-3)
            image(this.sling3,pointa.x-30,pointa.y-10,15,30)
        }
        else{
            strokeWeight(3)
            line(pointa.x+25,pointa.y,pointb.x-10,pointb.y)
            line(pointa.x+25,pointa.y,pointb.x+30,pointb.y-3)
            image(this.sling3,pointa.x+25,pointa.y-10,15,30)
        }
    }
}
 fly(){
     this.sling.bodyA=null
 }

 attach(body){
    this.sling.bodyA=body

 }
}

