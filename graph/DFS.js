// depth first search Algorithm 
import stack from './linkelist-';
import tree from './linkelist-'; 


function  DFS(tree, value)
{
    let stack = new Stack();
    
    stack.push(tree.root);

    while(stack.size != 0)
    {
          for( let i =0 ;  i < stack.size; i++)
          {
              let node  = stack.pop(); 
              if(node.value == value) return node.value;
              if(node.right) stack.push(node.right);
              if(node.left) stack.push(node.left);

          }
    }
return null; 


}
