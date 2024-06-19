import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
})
export class MultiLanguageComponent {

  public languages = [
    { value: 'en', label: 'English', icon: '../assets/img/en-flag.png' },
    { value: 'es', label: 'Spanish', icon: '../assets/img/es-flag.png' },
  ];

  private translateService = inject(TranslateService);

  getLanguage(language: string) {
    this.translateService.use(language);
  }

}
