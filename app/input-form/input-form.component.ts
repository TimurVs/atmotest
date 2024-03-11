import { Component, EventEmitter, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  @Output() formData = new EventEmitter<any>();

  coalInputForm: FormGroup;

  gasInputForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.coalInputForm = this.fb.group({
      coalConsumption: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
      date: ['', [Validators.required, Validators.min(0), Validators.max(1000)]]
    })

    this.gasInputForm = this.fb.group({
      gasConsumption: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
      date: ['', [Validators.required, Validators.min(0), Validators.max(1000)]]
    })
  }

  onSubmit(form: FormGroup){
    console.log('Submit', form.value.date.toLocaleDateString())
    this.formData.emit(form.value)
  }
}
