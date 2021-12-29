class Circle{
    constructor(r){
        this.radius=r
    }
    getArea(){
        return Math.PI * this.radius ** 2
    }
    getPerimeter(){
        return 2 *Math.PI * this.radius
    }
}



let circy=new Circle(11)
console.log("circle.getArea=> "+circy.getArea())
//should return 380.132711084365
//-----------------------------------------
let circy2 =new Circle(4.44)
console.log("circle.getPerimeter=> "+circy2.getPerimeter())
//should return 27.897342763877365