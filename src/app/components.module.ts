import {IonicModule} from '@ionic/angular'
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {CardsComponent} from './pages/home/cards/cards.component'
@NgModule({
    declarations: [CardsComponent],
    imports: [ CommonModule,IonicModule ],
    exports: [CardsComponent],
    providers: [],
})
export class ComponentsModule {}