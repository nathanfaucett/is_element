var isNode = require("is_node");


module.exports = isElement;


function isElement(obj) {
    return isNode(obj) && obj.nodeType === 1;
}
