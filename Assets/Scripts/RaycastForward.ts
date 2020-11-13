/* Babylon Mesh Component Template */

module PROJECT {
    export class RaycastForward extends BABYLON.MeshComponent {

        raycastLength: number = 0;
        fired:boolean = false;
        fireRate:number = 0.1;
        fireDelay:number = 0.0;
        
        public constructor(owner: BABYLON.AbstractMesh, scene: BABYLON.Scene, tick: boolean = true, propertyBag: any = {}) {
            super(owner, scene, tick, propertyBag);
        }

        protected ready(): void {
            // Scene execute when ready         
        }

        protected start(): void {
            // Start component function
            this.raycastLength = this.getProperty("raycastLength");
            this.fired = this.getProperty("fired");
            this.fireRate = this.getProperty("fireRate");

            this.manager.webvr.onControllerMeshLoadedObservable.add(
                (eventData, eventState) => {
                    eventData.onTriggerStateChangedObservable.add(
                        (buttonData, buttonState) => {
                            if (buttonData.pressed && buttonData.value >= 0.9 && !this.fired) {
                                this.fired = true;
                                console.log("Pressed Button " + this.raycastLength);              
                                let ray = eventData.getForwardRay(this.raycastLength);
                                BABYLON.RayHelper.CreateAndShow(ray, this.scene, BABYLON.Color3.Purple()); 
                            }
                            else
                            {§§§§§§§§§§§§§§§§§§§§§§§§§
                                this.fired = false;
                             
                            }  
                        }
                    )            
                }
            )
        }

        protected update(): void {          
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
        }

        protected after(): void {
            // After render loop function
        }

        protected destroy(): void {
            // Destroy component function
        }
    }
}