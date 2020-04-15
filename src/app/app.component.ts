import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  output = 0;
  printArr = [];
  calc(input1, input2){
  this.output = Math.pow(parseInt(input1),parseInt(input2))
  if (this.output %2 == 0)
  {
    let x = parseInt(input1)+1
    let str = "";
    for(var y = parseInt(input1);y<this.output;y++)
    {
      for(var z = 0;z<x;z++)
      {
        str = str + "*";
      }
      this.printArr.push(str);
      str="";
      x++;
    }
  } else if (this.output % 2 == 1)
  {
    let str = "";
    if(input1<=input2)
    {
      let x1 = 1;
      let x2 = parseInt(input2);
      for(var y = parseInt(input2); y>0;y--)
      {
        while(x1<=input1)
        {
          for(var z = 0;z<x2;z++)
          {
            str = str + "o";
          }
          for(var z = 0;z<x1;z++)
          {
            str = str + "*";
          }
          this.printArr.push(str);
          str=""
          x1++;
          x2--;
        }
        for(var z = 0;z<x2;z++)
        {
          str = str + "o";
        }
        this.printArr.push(str);
        str=""
        x2--;
      }
    }
    else if(input1<input2)
    {
      let x = 1;
      let x2 = parseInt(input1);
      for(var y = parseInt(input2); y>0;y--)
      {
        while(x2<=input1)
        {
          for(var z = 0;z<x2;z++)
          {
            str = str + "o";
          }
          for(var z = 0;z<x;z++)
          {
            str = str + "*";
          }
          this.printArr.push(str);
          str=""
          x++;
          x2--;
        }
        for(var z = 0;z<x2;z++)
        {
          str = str + "o";
        }
        this.printArr.push(str);
        str=""
        x++;
      }
    }
  }
  };
}


