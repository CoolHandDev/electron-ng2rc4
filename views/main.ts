import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {MainComponent} from './app.component';

bootstrap(MainComponent, [disableDeprecatedForms(), provideForms()])
    .catch((err:any) => console.log(err));