import {Component} from '@angular/core';
import {Project} from '../models/project';
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup
} from '@angular/forms';

@Component({
    selector: 'form1',
    templateUrl: './form1.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})

export class form1Component {
    projectForm = FormGroup;
    projectModel = new Project('', '');

    constructor(fb: FormBuilder) {
        this.projectForm = fb.group({'name': 'Default Project Name',
                                    'type': 'Default Project Type'
        });
    }

    onSubmit(form: any): void {
        this.projectModel.name = form.name;
        this.projectModel.type = form.type;
        console.log('The form value is', form);
    }
}