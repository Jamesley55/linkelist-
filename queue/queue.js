 class Node
{

    constructor(data)
    {
        this.data = data; 
        this.next= null; 
    }

}


export default class Queue
{
    constructor()
    {
        this.head = null;
        this.tail = null; 
        this.size = 0 ;
    }
    add(element)
    {
        let node = new Node(element);

        if(this.tail == null)
        { 
            this.head = node; 
            this.tail = node; 
            this.size++; 

        }
        else{
            this.tail.next = node; 
            this.tail = node; 
            this.size++;
            return this; 

        }
    }
    unsift()
    {
        let node = this.head; 
        this.head = node.next; 
        node = null; 
    }
    sowQueue()
    {
        let node = this.head; 
        while(node)
        {
            console.log(node.data);
            node = node.next; 
        }
    }

}

let quue = new queue();

var l =5 ;
var t = 6; 
var a = 7; 
quue.add(l);
quue.add(t);
quue.add(a);
quue.sowQueue(); 