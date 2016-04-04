walk(document.body);

function walk(node) 
{
    // Shamelessly stolen from: https://github.com/panicsteve/cloud-to-butt
    // I stole this function from here:
    // http://is.gd/mwZp7E
    
    var child, next;
    
    // This breaks the script...  It's probably important but requires further debugging.
    //if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
    //    || node.classList.indexOf('ace_editor') > -1) {
    //    return;
    //}

    switch ( node.nodeType )  
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child ) 
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    v = v.replace(/\bcfc\b/gi, "those bee guys");
    v = v.replace(/\bthe imperium\b/gi, "those bee guys");
    
    textNode.nodeValue = v;
}
