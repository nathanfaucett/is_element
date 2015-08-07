var isNode = require("is_node");


module.exports = isElement;


function isElement(value) {
    return isNode(value) && value.nodeType === 1;
}
