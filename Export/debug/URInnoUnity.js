var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Babylon Scene Controller Template */
var PROJECT;
/* Babylon Scene Controller Template */
(function (PROJECT) {
    var SceneControllerScript = /** @class */ (function (_super) {
        __extends(SceneControllerScript, _super);
        function SceneControllerScript(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        SceneControllerScript.prototype.ready = function () {
            // Scene execute when ready
        };
        SceneControllerScript.prototype.start = function () {
            // Start component function
            var hello = this.getProperty("Hello", "Hello World");
            console.log("Scene Controller Says: " + hello);
        };
        SceneControllerScript.prototype.update = function () {
            // Update render loop function
        };
        SceneControllerScript.prototype.after = function () {
            // After render loop function
        };
        SceneControllerScript.prototype.destroy = function () {
            // Destroy component function
        };
        return SceneControllerScript;
    }(BABYLON.MeshComponent));
    PROJECT.SceneControllerScript = SceneControllerScript;
})(PROJECT || (PROJECT = {}));
