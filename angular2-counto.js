System.register(['./src/counto.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var counto_directive_1;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (counto_directive_1_1) {
                counto_directive_1 = counto_directive_1_1;
                exportStar_1(counto_directive_1_1);
            }],
        execute: function() {
            exports_1("default",{
                directives: [counto_directive_1.Counto]
            });
        }
    }
});
//# sourceMappingURL=angular2-counto.js.map