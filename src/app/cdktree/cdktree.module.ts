import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NormalTreeComponent } from "./components/normal-tree/normal-tree.component";
import { MaterialTreeComponent } from "./components/material-tree/material-tree.component";
import { CdkTreeModule } from "@angular/cdk/tree";
import { DataService } from "./services/data-service";

@NgModule({
  declarations: [NormalTreeComponent, MaterialTreeComponent],
  imports: [CommonModule, FormsModule, CdkTreeModule],
  exports: [NormalTreeComponent],
  providers: [DataService]
})
export class CdktreeComponentModule {}
