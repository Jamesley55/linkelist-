class Node
{
    constructor(data)
    {
        this.data = data ;
        this.next = null ;
    }
}

class Linkelist{

    constructor()
    {
        this.start = null ; 
        this.size = 0;
    }

     pop()
     {
         index = this.start;
         if (this.start == null)
         {
             return false; 
         }
         else {
             while(index.next)
             {
                 index = index.next; 
             }
             index = null; 
             return this.head; 
         }
         unsifht()
         {
             let index = this.start; 
             this.start = index.next; 
             index = null; 
             return this.start; 
         }
         
     }
}

