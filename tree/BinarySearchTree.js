class Node 
{
    constructor(data)
    {
        this.data= data;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree{

    constructor(){
        this.root = null; 
    }
    push(data)
    {
        let element = new Node(data);
        if(this.root == null)
        {
            this.root = element;
        }
        let currentNode = this.root; 
         while(currentNode)
         {
             if(element < currentNode.data)
             {
                 
               if(currentNode.left == null )
               {
                   currentNode.left = element; 
               }
               else{
               currentNode = currentNode.left; 
               }
             } else{

                if(currentNode.right == null )
                {
                    currentNode.right = element; 
                }
                else{
                    currentNode = currentNode.right; 
                }
             }
         }
            
          
    }

    inOrderTraversal(node)
    { 
        this.inOrderTraversal(node.left)
        console.log(node.data); 
        this.inOrderTraversal(node.right);

    }
    
    preorderTRaversial(node)
    {
        console.log(node.data)
        this.inOrderTraversal(node.left);
        this.inOrderTraversal(node.right);
    }


}