export default class Stack 
{
    constructor()
    {
        this.item  =[]; 
        this.size = 0; 
    }
    push(data)
    {
        this.item[this.size] = data ;
        this.size++;
    }
    pop()
    {
        this.item[this.size] = null ; 
        this.size++; 

    }
    peek()
    {
         return this.item[this.size];
    }
    printstack()
    {
        
        while(this.size> 0)
        {
            console.log(this.item[this.size]);
            this.size--; 
        }
    }
}

let stak = new stack();

var dat = "a";
var da = "ab";
var d = "abb";
var datt = "abb";
var datttt = "asss";
var dattt = "abbb";
stak.push(dat);
stak.push(da);
stak.push(d);
stak.push(datt);
stak.push(dattt);
stak.push(datttt);
stak.push(datttt);
stak.printstack(); 



