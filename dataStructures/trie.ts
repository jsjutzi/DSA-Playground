/*
    A Trie data structure is a tree of nodes where each node can have an arbitrary number of child nodes.
    This structure is useful for things like auto-complete functionality and predictive text.  It's also 
    useful for problems where you need to search datasets for occurences of strings or substrings in a perfomant way.
*/

// Start by defining TrieNode class
class TrieNode {
    children: Map<string, TrieNode>
    value: string
    endOfWord: boolean

    constructor(value = ''){
        this.children = new Map(); // Get/Set approach
        this.value = value; // Single char
        this.endOfWord = false; // Is the termination node for a valid word
    }
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string) {
        if (!word) return false;

        let currNode = this.root;

        for (const letter of word) {
            if (!currNode.children.has(letter)) {
                currNode.children.set(letter, new TrieNode(letter))
            }

            currNode = currNode.children.get(letter)!;
        }

        currNode.endOfWord = true;
        return currNode
    }

    hasWord(word: string, start = this.root) {
        if (!word) return false;

        let currNode = start;

        for (const letter of word) {
            if (!currNode.children.has(letter)) return false

            currNode = currNode.children.get(letter)!;
        }

        return currNode.endOfWord
    }
}

/*
    Initial class instance has this.root set to a TrieNode that has children (Map), a value, and an end of word flag.
*/

const trieOne = new Trie();

/*
    We insert a word.  For each character in the word, we check to see if our root TrieNode has a child node containing
    that letter.  If not, we create a child Node that does.  Then we set the currNode to be the child Node we just 
    created.  After the last loop iteration, we know the currNode will be the child Node containing the last letter
    in the word, so we set our endOfWord flag to true.

    Ex: Inserting the word "cat" into our Trie
*/

trieOne.insert('cat');

/*
    Here's our logic chain.  We iterate over the characters in word one at a time.  On first iteration, the letter
    is 'c' and the currNode is our rootNode.  We check the children map on the rootNode for a key of 'c' but there isn't
    one.

    Since there isn't one, we create a new Map entry on the root Node where the key is 'c' and the value is a new
    TrieNode.  We then set that TrieNode to be our currNode.

    On second iteration the letter is 'a', and our currNode is the TrieNode containing 'c'.  We check the children map
    for a key of 'a' and don't find one.  Just like before, we create a new TrieNode in that map, then set our current node
    to be that new TrieNode.

    Third iteration repeats the same step.  The currNode is still the TrieNode containing value 'a', and when we check
    the children Map on that node there is no key of 't'.  We add one, set currNode to be the new TrieNode containing 't'.

    Our loop ends.  We now take the currNode, which now contains the last letter of the word, and set it's endOfWord flag
    to true.  Our method is now done executing.

    We now have a trie structure that looks like this (simplified illustration)

                root
              /
             c
            /
           a
          /
         t -> endOfWord: true

    Why is this useful?  Because now checking to see if our Trie contains a given word is easy and has O(n) complexity.
    When we check our tree for a word, we have two arguments.   A starting point and the word we are searching for. 
    
    Ex: Searching for the word 'cat' in our tree
*/

trieOne.hasWord('cat');

/*
    Let's walk through this logic chain just like our previous one.  Our word argument is obviously 'cat', and our start
    argument defaults to the root node.  We iterate over each letter in the word one by one, checking to see if the letter
    is child of our curr node.

    We check the root node's children map for 'c' and it does exist. We then set currNode to be that child node.

    On the second iteration, same thing.  Check the children map for 'a', it exists.  Update currNode to that child node.

    Third iteraion, same thing again.  The letter 't' exists in the map, we set currNode to that child node.

    Now, we simply return the endOfWord flag from the currNode.  In this case it would be true.

    Keep in mind that when iterating through our loop -> if, at any time, the currNode has no child node with the current letter, we 
    return false and exit because our trie cannot possibly contain a word if it doesn't include each letter in the word via a parent/child 
    path.

    And if the final letter has endOfWord: false, we know it's not a termination node for a word.

    For example, searching for the word 'ca' would return false, because the letter 'a' was not the final letter
    of a word we previously inserted into the trie.
*/

