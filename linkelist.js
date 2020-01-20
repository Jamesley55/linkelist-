class Node
{
    constructor(element)
    {
        this.element = element;
        this.next = null ;  
    }
}
class Linkelist 
{  
    
    constructor(){
        this.head = null; 
        this.size = 0; 
    }
    addElement(element )
    {
        var liste = new Node(element); 
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
    // this function take the head of the linkelist
    reverseLinkelist(head)
    {
        let node = head ; 
        let previous = null, currentIndex; 

        while(node)
        {
            currentIndex = node.next;
            node.next= previous; 
            previous = node; 
            node = currentIndex;

        }
        return previous; 

    }
    insertAt(element, location)
    { 
        if(location > 0 &&location > this.size) return false; 

        else{

            var node = new node(element);
            var currentIdex, previousIndex; 
            current = this.head; 
            if (location==0)
            {
                node.next = head;
                this.head = node; 
            }
            else{
                currentIdex = this.head; 
                 var it = 0; 
 
            }
        }

    }
    removeFrom(location)
    {
         
    }
      
     deleteRandomNodeInMiddle(node)
     {
         if(n == null || n.next == null){
             return false; 
         }
         
         node.data = node.next.data;
         node.next = node.next.next; 
          
     }

     reverserLinkeliste(node){
        var LinkelistHead = new node();
        LinkelistHead = null;  
        while(node)
        {
            LinkelistHead.next = node;
            node = node.next; 
            
         }
         if(node == null)
         {
             LinkelistHead.head = node; 
         }
        console.log(LinkelistHead);
        return LinkelistHead; 

     }
     addTwoReverseLinkeliste(l1 , l2 )
     {

     }
     
    remoElement(element)
    {

    }
    sizOfListe()
    {
        console.log(this.size);
    }
}


var link = new Linkelist();
var lk = " ta mere";
var mk = 5; 
link.addElement(lk);
link.addElement(mk); 
link.sizOfListe();
link.reverserLinkeliste(lk);