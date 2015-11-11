﻿    //<!--Repository Name for source code on github: words-- >
    //<!--Description: A game that allows to users practise with memorising English words in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module objects {
    //Truck class ---------------------------------------------
    export class Truck extends createjs.Bitmap {

        //PUBLIC PROPERTIES ----------------------------------------
        width: number;
        height: number;


        //CONSTRUCTOR --------------------------------------------------
        constructor(imageString: string) {
            super(assets.loader.getResult(imageString));
              this.width = this.getBounds().width;
              this.height = this.getBounds().height;
              this.regX = this.width * 0.5;
              this.regY = this.height * 0.5;

              this.x = 100;
        }


        //PRIVATE METHODS --------------------------------------------------------
        private _checkBounds(): void {
            //check if Background has left the screen
            if (this.x <= -1696) {
                this._reset();
            }
        }

        private _reset(): void {
            this.x = 0;// start Background - x value
            this.y = 0;// start Background - y value
        }

        //PUBLIC METHODS -----------------------------------------------------
        public update(): void {
            this.y = stage.mouseY;
        }

    }
}