var isObjectLike = require("is_object_like");


module.exports = function isElement(obj) {
    return (obj && obj.nodeType === 1 && isObjectLike(obj)) || false;
};
