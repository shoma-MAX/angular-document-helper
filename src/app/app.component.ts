import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public inputarea;
  outputarea;
  public message: string[];
  public inputarray: string[];
  public upperlength: number = 20;
  public output: string;
  public tooLongBoolean: boolean;
  public gobiBoolean: boolean;
  public gobiList: string[][];
  public demonstrative: string[] = ["それ", "これ", "あれ", "その","そこ","あそこ","あの"];
  public demoBoolean: boolean;
  public fivehundred:boolean;
  public thousand:boolean;
  public goalBoolean:boolean;
  public goal:number=1000;

  ngDoCheck() {
    //console.log('Running change detection ', Date.now());
    // console.log(this.inputarea);
  }
  input() {
    if(this.inputarea.length>500){
      this.fivehundred=true

    }
    if(this.inputarea.length>1000){
      this.thousand=true

    }

    if(this.inputarea.length>this.goal){
      this.goalBoolean=true;
    }

    //"。"で区切って配列に収容している。
    const inputarray = this.inputarea.split("。");
    //console.log(inputarray)
    //"。"で区切った3つ目の文字列をコンソールに出力するテストコード
    // console.log(inputarray [2].length)
    //console.log(this.inputarea.length)
    for (var i = 0; i < inputarray.length; i++) {
      var j = 0;
      // console.log(inputarray[i].length)
      if (inputarray[i].length > this.upperlength) {
        this.tooLongBoolean = true;
        break;
      } else {
        this.tooLongBoolean = false;
      }
    }

    for (var i = 0; i < inputarray.length; i++) {
      // console.log(inputarray[i].length)
      for (var j = 0; j < this.demonstrative.length; j++) {
        console.log(inputarray[i].indexOf(this.demonstrative[j]));
        if (inputarray[i].indexOf(this.demonstrative[j]) != -1) {
          this.demoBoolean = true;
          break;
        } else {
          this.demoBoolean = false;
        }
      }
    }
  }
}
