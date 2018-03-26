﻿import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageComponent } from './StartPage.component';

describe('NavComponent', () => {
    let component: StartPageComponent;
    let fixture: ComponentFixture<StartPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StartPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StartPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
