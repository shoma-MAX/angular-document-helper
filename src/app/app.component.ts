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
  public message;
  public inputarray:string[]
  
  
 ngDoCheck() {
    console.log('Running change detection ', Date.now());
   // console.log(this.inputarea);
  }
  input(){

    this.inputarea.length
    const inputarray=this.inputarea.split("。");
    console.log(inputarray[2])
    console.log(this.inputarea.length)
    if(this.inputarea.length>10){
      this.message="文字数が長すぎます"
    }
  }


}
