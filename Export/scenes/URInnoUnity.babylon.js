window.project = true;

// Project Shader Store


// Browser Window Services

//////////////////////////////////////////////
// Babylon Toolkit - Browser Window Services
//////////////////////////////////////////////

/** Firelight Audio Shims */
window.firelightAudio = 0;
window.firelightDebug = false;
if (window.firelightAudio === 1 || window.firelightAudio === 2) {
	var fmodjs = "scripts/fmodstudio.js";
	if (window.firelightDebug === true) {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudioL.js" : "fmodL.js");
	} else {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudio.js" : "fmod.js");
	}
	var script2 = document.createElement('script');
	script2.setAttribute("type","text/javascript");
	script2.setAttribute("src", fmodjs);
	if (document.head != null) {
		document.head.appendChild(script2);
	} else if (document.body != null) {
		document.body.appendChild(script2);
	}
}

/** Windows Launch Mode */
window.preferredLaunchMode = 0;
if (typeof Windows !== "undefined" && typeof Windows.UI !== "undefined" && typeof Windows.UI.ViewManagement !== "undefined" &&typeof Windows.UI.ViewManagement.ApplicationView !== "undefined") {
	Windows.UI.ViewManagement.ApplicationView.preferredLaunchWindowingMode = (window.preferredLaunchMode === 1) ? Windows.UI.ViewManagement.ApplicationViewWindowingMode.fullScreen : Windows.UI.ViewManagement.ApplicationViewWindowingMode.auto;
}

/** Xbox Full Screen Shims */
document.querySelector('style').textContent += "@media (max-height: 1080px) { @-ms-viewport { height: 1080px; } }";

/** Xbox Live Plugin Shims */
window.xboxLiveServices = false;
window.isXboxLivePluginEnabled = function() {
	var isXboxLive = (typeof Windows !== "undefined" && typeof Microsoft !== "undefined" && typeof Microsoft.Xbox !== "undefined" && typeof Microsoft.Xbox.Services !== "undefined");
	var hasToolkit = (typeof BabylonToolkit !== "undefined" && typeof BabylonToolkit.XboxLive !== "undefined" && typeof BabylonToolkit.XboxLive.Plugin !== "undefined");
	return (window.xboxLiveServices === true && isXboxLive === true && hasToolkit === true);
}

/** Generic Promise Shims */
window.createGenericPromise = function(resolveRejectHandler) {
	return new Promise(resolveRejectHandler);
}
window.resolveGenericPromise = function(resolveObject) {
    return Promise.resolve(resolveObject);
}


// URInnoUnity.ts
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
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var RaycastForward = /** @class */ (function (_super) {
        __extends(RaycastForward, _super);
        function RaycastForward(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            _this.raycastLength = 0;
            _this.fired = false;
            _this.fireRate = 0.1;
            _this.fireDelay = 0.0;
            return _this;
        }
        RaycastForward.prototype.ready = function () {
            // Scene execute when ready         
        };
        RaycastForward.prototype.start = function () {
            var _this = this;
            // Start component function
            this.raycastLength = this.getProperty("raycastLength");
            this.fired = this.getProperty("fired");
            this.fireRate = this.getProperty("fireRate");
            this.manager.webvr.onControllerMeshLoadedObservable.add(function (eventData, eventState) {
                eventData.onTriggerStateChangedObservable.add(function (buttonData, buttonState) {
                    if (buttonData.pressed && buttonData.value >= 0.9 && !_this.fired) {
                        _this.fired = true;
                        console.log("Pressed Button " + _this.raycastLength);
                        var ray = eventData.getForwardRay(_this.raycastLength);
                        BABYLON.RayHelper.CreateAndShow(ray, _this.scene, BABYLON.Color3.Purple());
                    }
                    else {
                        _this.fired = false;
                    }
                });
            });
        };
        RaycastForward.prototype.update = function () {
            // Update render loop function
            /*if(this.fired)
            {
                this.fireDelay += this.manager.deltaTime;
                if(this.fireDelay > this.fireRate)
                {
                    this.fireDelay = 0;
                    this.fired = false;
                }
            }*/
        };
        RaycastForward.prototype.after = function () {
            // After render loop function
        };
        RaycastForward.prototype.destroy = function () {
            // Destroy component function
        };
        return RaycastForward;
    }(BABYLON.MeshComponent));
    PROJECT.RaycastForward = RaycastForward;
})(PROJECT || (PROJECT = {}));
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


