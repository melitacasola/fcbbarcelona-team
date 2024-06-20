import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
//i18n
import { MultiLanguageComponent } from './components/multi-language/multi-language.component';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './config/i18n/translate-loader.config';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MultiLanguageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot(provideTranslation())
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MultiLanguageComponent, TranslateModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
 }
