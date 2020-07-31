import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public countryList = [
        { name: 'India', key: 'India' },
        { name: 'France', key: 'France' },
        { name: 'United States', key: 'United States' },
        { name: 'China', key: 'China' },
        { name: 'Spain', key: 'Spain' },
        { name: 'Italy', key: 'Italy' },
        { name: 'Turkey', key: 'Turkey' },
        { name: 'United Kingdom', key: 'United Kingdom' },
        { name: 'Germany', key: 'Germany' },
        { name: 'Russia', key: 'Russia' },
        { name: 'Malassia', key: 'Malassia' },
        { name: 'Sri Lanka', key: 'SriLanka' }
    ];
    title = 'SmartDropdown';
}
