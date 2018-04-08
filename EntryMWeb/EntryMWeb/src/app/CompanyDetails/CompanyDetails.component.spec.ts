import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsComponent } from './CompanyDetails.component';

describe('LoginComponent', () => {
    let component: CompanyDetailsComponent;
    let fixture: ComponentFixture<CompanyDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompanyDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
