import { NgModule } from "@angular/core";
import {MatButtonModule,
MatIcon} from "@angular/material";

@NgModule({
    imports:[
        MatButtonModule,MatIcon
    ],
    exports:[ 
        MatButtonModule, MatIcon
    ]
})
export class MaterialModule{


}