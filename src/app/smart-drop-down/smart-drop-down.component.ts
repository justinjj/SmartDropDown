import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

const DEBOUNCE_TIME = 200;

@Component({
    selector: 'app-smart-drop-down',
    templateUrl: './smart-drop-down.component.html',
    styleUrls: ['./smart-drop-down.component.scss']
})
export class SmartDropDownComponent implements OnInit {

    public showMyContainer: boolean = true;
    public countrySelectForm: FormGroup;
    public showCountryList: any;
    public defaultCount = 5;
    @Input() hasAddPermission:boolean;
    @Input() countryList;

    constructor(public fb: FormBuilder) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.showCountryList = [...this.countryList];

        this.countrySelectForm = this.fb.group({
            search: [''],
            selectContryName: ['']
        });
        this.onValueChange();
    }

    onValueChange() {
        this.countrySelectForm.controls['search']
            .valueChanges
            .pipe(debounceTime(DEBOUNCE_TIME))
            .subscribe(change => {
                this.defaultCount = this.countryList.length;
                this.showCountryList = this.countryList.filter(item => item.name.search(new RegExp(change, 'i')) > -1);
            });
    }

    addAndSelect() {
        const searchTerm = this.countrySelectForm.value.search;
        const addCountry = {name: searchTerm, key: searchTerm};
        this.countryList.push(addCountry);
        this.countrySelectForm.patchValue({
            selectContryName: searchTerm,
            search: ''
        });
        this.defaultCount = this.countryList.length;
    }

}
