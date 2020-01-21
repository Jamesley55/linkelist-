class node {
     constructor(element)
     {
         this.element = element; 
         this.next= null; 

     }
}
 class linkelist{

    constructor()
    {
        this.head = null; 
        this.size = 0; 
    }
    addElement(element )
    {
        var liste = new node(element); 
        var curentIndex = null;
        if(this.head == null)
        {
            this.head = liste;  
        }
        else{
            curentIndex = this.head; 
            while(curentIndex.next)
            {
                    curentIndex = curentIndex.next; 
            }
              curentIndex.next = liste; 
        }
        this.size++;
        
    }
    reverseLinkelist(head)
    {
        let node = head; 
        let previous = null,currentIndex; 

        while(node)
        {
            currentIndex = node.next; 
            node.next =  previous;
            previous = node; 
            node = currentIndex; 


        }
        return previous; 
    }
 }

function palindrome(l1, l2)
    {
        l1.reverseLinkelist(l1.head);
        let node1 = l1.head; 
        let node2 = l2.head; 
        let count = 0; 
        while(l1 || l2)
        {
              if(node1.element == node2.element)
                {
                    count++; 
                }

                node1 = node1.next;
                node2 = node2.next;  
        }
        if(count == l1.size && count || l2.size)
        {
            console.log("is palindrome"); 
            return true 
        }
    }


 let link1 = new linkelist();
 let link2 = new linkelist(); 

var a = "ab";
var b = "ba"; 
link1.addElement(a);
link2.addElement(b);
 

 palindrome(link1,link2); 

