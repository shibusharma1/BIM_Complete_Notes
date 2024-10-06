class Node
{
    int data;
    Node left;
    Node right;
}
class BinaryTree
{
    public Node createNewNode(int k)
    {
        Node a=new Node();
        a.data=k;
        a.left=null;
        a.right=null;
        return a;
    }
    public void traverseTree(Node node) {
        if (node != null) {
            traverseTree(node.left);
            System.out.print(" "+ node.data);
            traverseTree(node.right);
        }
    }
}
public class CreateBinaryTree
{
    public static void main(String[] args) {
        BinaryTree a = new BinaryTree();
        Node root = a.createNewNode(2);
        root.left = a.createNewNode(7);
        root.right = a.createNewNode(5);
        root.left.left = a.createNewNode(2);
        root.left.right = a.createNewNode(6);
        root.left.right.left = a.createNewNode(5);
        root.left.right.right = a.createNewNode(11);
        root.right.right = a.createNewNode(9);
        root.right.right.left = a.createNewNode(4);
        System.out.println("Binary Tree is Created SUCCESSFULLY");
    }
}