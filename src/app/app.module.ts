import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
