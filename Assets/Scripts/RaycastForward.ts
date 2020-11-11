/* Babylon Mesh Component Template */

module PROJECT {
    export class RaycastForward extends BABYLON.MeshComponent {
        public constructor(owner: BABYLON.AbstractMesh, scene: BABYLON.Scene, tick: boolean = true, propertyBag: any = {}) {
            super(owner, scene, tick, propertyBag);
        }

        raycastLength:number = 0;

        protected ready() :void {
            // Scene execute when ready
            this.raycastLength = this.getProperty("raycastLength");
        }

        protected start() :void {
            // Start component function
            this.manager.webvr.onControllerMeshLoadedObservable.add(
                (eventData,eventState)=>{
                    eventData.onTriggerStateChangedObservable.add(
                        (buttonData, buttonState)=>
                        {
                            if(buttonData.pressed && buttonData.value == 1)
                            {
                                console.log("Pressed Button " + this.raycastLength);
                                let ray = eventData.getForwardRay(this.raycastLength);
                                BABYLON.RayHelper.CreateAndShow(ray, this.scene, BABYLON.Color3.Purple());
                            }
                        }
                    )
                }
            )                               
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