import {Component} from '@angular/core';
import {form1Component} from "./form1.component";

@Component({
    selector: 'main-app',
    template: `
            <h1>Angular 2 Release Candidate 4 is here!</h1>
            <br>
            <form1></form1>
            `,
    directives: [form1Component]
})
export class MainComponent {}