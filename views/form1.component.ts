import {Component} from '@angular/core';
import {Project} from '../models/project';
import {
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl
} from '@angular/forms';


@Component({
    selector: 'form1',
    templateUrl: './form1.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})

export class form1Component {
    projectForm = FormGroup;
    projectModel = new Project('', '');
    /*name: AbstractControl;
    type: AbstractControl;*/

    constructor(fb: FormBuilder) {
        this.projectForm = fb.group({
            'name': ['', Validators.required],
            'type': ['', Validators.required]
        });

        /*
        this.name = this.projectForm.controls['name'];
        this.type = this.projectForm.controls['type'];*/
    }

    onSubmit(form: any): void {
        this.projectModel.name = form.name;
        this.projectModel.type = form.type;
        console.log('The form value is', form);
        if (this.projectForm.valid) {
            console.log('form is valid');
            ipcRenderer.send('save', this.projectModel);
        } else {
            console.log('form is not valid');
        }
    }

    openDevTools(event) {
        ipcRenderer.send('openDevTools', event);
    }

    connectToMongoDB(event) {
        ipcRenderer.send('connectToMongo');
    }
}