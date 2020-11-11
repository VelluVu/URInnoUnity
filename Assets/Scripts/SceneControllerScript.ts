/* Babylon Scene Controller Template */

module PROJECT {
    export class SceneControllerScript extends BABYLON.MeshComponent {
        public constructor(owner: BABYLON.AbstractMesh, scene: BABYLON.Scene, tick: boolean = true, propertyBag: any = {}) {
            super(owner, scene, tick, propertyBag);
        }

        protected ready() :void {
            // Scene execute when ready
        }

        protected start() :void {
            // Start component function
            let hello:string = this.getProperty("Hello", "Hello World");
            console.log("Scene Controller Says: " + hello);
        }

        protected update() :void {
            // Update render loop function
        }

        protected after() :void {
            // After render loop function
        }

        protected destroy() :void {
            // Destroy component function
        }
    }
}