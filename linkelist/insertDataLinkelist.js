class Node 
{
    constructor(data)
    {
        this.data = data; 
        this.next = null; 
    }
}

// singly linkelist 
class Linkelist{

    constructor()
    {
        this.start = null; 
        this.size = 0;
        this.end = null; 

    }
     // this implementation take big o(n) 
    insertDataEnd(data)
    {
        let node = new Node(data); 
        let index = this.start ; 
          if(this.start == null)
          {
              this.start = node;
              this.size++;
              return this.start; 

              
          }
          
          else{

              while(index.next)
              {
                  index = index.next; 
              }
              index.next = node;
              this.size++;
              return this.head; 
          }
         
    }
   

    // this implementation take big o(n) (for search) + big o(1) for assigning the value 
    insertDataAtindex(where , data)
    {
        let node = new Node(data);
        let counter = 0;
        let index = this.start();

        if(where == counter)
        {
            let newSecond = index; 
            this.start = node; 
            node.next = index; 
            return this.start; 
        }
        else{

            while(index)
            {
                let previous, next; 
                previous = index; 
                next = index.next; 
                if(index == counter)
                {
                    previous.next = node; 
                    next = index.next; 
                }
                index = index.next; 
                

            }
            return this.start; 
        }



    }
    // this implementation take big o(1)
    insertDataFront(data)
    {
        let node = new Node(data);
        let head = this.head; 
        this.head = node ;
        node.next = head; 
    }
}

// this implementation take big o(n)
function showlink(linkelist)
{
    let index = linkelist.start; 
    if(index == null)
    {
        return false;
    }
    while(index.next)
    {
        index = index.next; 
        console.log(index);
    }
}

let link = new Linkelist();

let a = "a";
let b = "b";
let c  = "c";

link.insertDataEnd(a);
link.insertDataEnd(b);
link.insertDataEnd(c);
showlink(link); 
