import {Component} from '@angular/core';
import {Project} from '../models/project';

@Component({
    selector: 'form1',
    templateUrl: './form1.html'
})

export class form1Component {
    projectModel = new Project('', '');

    onSubmit(form: any): void {
        this.projectModel.name = form.name;
        this.projectModel.type = form.type;
        console.log('The form value is', form);
    }
}