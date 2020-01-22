class Node 
{
    constructor(data)
    {
        this.data = data;
        this.next= null;
    }
}

class Linkelist{

    constructor()
    {this.start = null 
    this.size = 0; 
    }

    
}

function reverseLinkelist(head )
    {
        let curent,  presedent, node  ; 
        node = head;  
        presedent = null;  

        while(index)
        {
             current = node.next;
             node.next = presedent; 
             presedent = node; 
             node = current; 
        }
        return presedent; 
    }

    