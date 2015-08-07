var tape = require("tape"),
    isElement = require("..");


tape("isElement(value) should return true when the value is an Element", function(assert) {
    assert.equal(isElement({
        nodeName: "div",
        nodeType: 1
    }), true);
    assert.end();
});
