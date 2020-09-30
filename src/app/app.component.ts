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
  public upperlength:number;

  
  
  
 ngDoCheck() {
    //console.log('Running change detection ', Date.now());
   // console.log(this.inputarea);
  }
  input(){

    this.inputarea.length

    //"。"で区切って配列に収容している。
    const inputarray=this.inputarea.split("。");
    //"。"で区切った3つ目の文字列をコンソールに出力するテストコード
   // console.log(inputarray [2].length)
    //console.log(this.inputarea.length)
    for(var i=0;i<inputarray.length;i++){
    if(inputarray[i].length>this.upperlength){
      this.message[i]="1文あたりの文字数が長すぎます"
    }else{
      this.message[i]=""
      //IDEA:messageも配列にすればいい。配列にしたうえで、aggridかngForで表示する。
    }//あまりいい実装とはいえない、。ngIfなどほかの方法を検討するべき。
    }
  }


}
