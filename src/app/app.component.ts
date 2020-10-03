import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  public inputarea
  outputarea
  public message:string[];
  public inputarray:string[];
  public upperlength:number=20;
  public output:string;

  
  
  
 ngDoCheck() {
    //console.log('Running change detection ', Date.now());
   // console.log(this.inputarea);
  }
  input(){

   // this.inputarea.length

    //"。"で区切って配列に収容している。
    const inputarray=this.inputarea.split("。");
    //console.log(inputarray)
    //"。"で区切った3つ目の文字列をコンソールに出力するテストコード
   // console.log(inputarray [2].length)
    //console.log(this.inputarea.length)
     for(var i=1;i< 10;i++){
 
       if(inputarray[i].length>this.upperlength){
      this.setMessage("長すぎます");
      //console.log(this.message[i])
     }else{
       this.message[i]="　"
    //   //IDEA:messageも配列にすればいい。配列にしたうえで、aggridかngForで表示する。
     }//あまりいい実装とはいえない、。ngIfなどほかの方法を検討するべき。
     }
    
     
   
    }
    ngOnInit(){
     for(var i=0;i<10;i++){
       this.output+=this.message[i]
       console.log(this.message[i])
     }
    
    }
     setMessage(message:string):string{
       this.output+=message;
       console.log(message)
       return this.output


     }
  }
  



