// breath first search algorithm 
 import Queue from './linkelist-';
 import  tree from './linkelist-'; 


 function BFS(tree, value)
 {
     let queue = new Queue();
     
     queue.add(tree.root); 
     while(queue.size)
     {
        for( let i =0 ;  i < queue.size; i++)
        {
            let node  = queue.unshift();  
            if(node.value == value) return node.value;
            if(node.right) queue.add(node.right);
            if(node.left) queue.add(node.left);

        }
     }


 }

