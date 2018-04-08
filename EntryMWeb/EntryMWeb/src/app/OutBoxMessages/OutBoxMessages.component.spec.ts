import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutBoxMessagesComponent } from './OutBoxMessages.component';

describe('NavComponent', () => {
    let component: OutBoxMessagesComponent;
    let fixture: ComponentFixture<OutBoxMessagesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OutBoxMessagesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OutBoxMessagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
