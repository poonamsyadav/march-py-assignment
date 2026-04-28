
class logintest{

 public browsername:String="Chrome"
 private password:string="admin123"
 protected username:string="tester"

 public openapplication() {
    console.log(`Open Application :${this.browsername}`);
 }
private login(){
    console.log(`login :${this.username}`);
    console.log(`password :${this.password}`);
    }
}
let obj1=new logintest();
obj1.openapplication();
//obj1.login();//tested for Private 

console.log(obj1.browsername);
//console.log(obj1.password);// throw error as it's private 
//console.log(obj1.username);//throw error it's protected


