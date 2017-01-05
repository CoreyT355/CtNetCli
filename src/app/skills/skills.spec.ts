import { TestBed, inject } from '@angular/core/testing';
import { AngularFireModule, FIREBASE_PROVIDERS, AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

import { firebaseConfig } from '../firebaseProject';
import { SkillsService } from './skills.service';

describe('Skills Service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AngularFire,
                SkillsService
            ],
            imports: [
                AngularFireModule.initializeApp(firebaseConfig)
            ]
        });
    });

    it('Should do a thing, please',
        inject([SkillsService], (skillsService) => {
            expect(skillsService).toBeDefined();
    }));

    it('Should return 4 skills',
        inject([SkillsService], (skillsService) => {
            expect(skillsService.getSkills()).toBeDefined();
    }));
});