import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
//i18n
import { MultiLanguageComponent } from './core/multi-language/multi-language.component';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './core/config/i18n/translate-loader.config';
import { importProvidersFrom } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardListComponent,
    CardDetailsComponent,
    CardComponent,
    MultiLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule,
  ],
  providers: [importProvidersFrom(TranslateModule.forRoot(provideTranslation()))],
  bootstrap: [AppComponent]
})
export class AppModule { }
