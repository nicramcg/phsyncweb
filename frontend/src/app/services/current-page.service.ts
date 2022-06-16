import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CurrentPageService {
    private name: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private challengeName: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private ideaName: BehaviorSubject<string> = new BehaviorSubject<string>('');


    public getName() {
        return this.name.asObservable();
    }

    public updateName(newName) {
        this.name.next(newName);
    }

    public getChallengeName() {
        return this.challengeName.asObservable();
    }

    public updateChallengeName(newName) {
        this.challengeName.next(newName);
    }

    public getIdeaName() {
        return this.ideaName.asObservable();
    }

    public updateIdeaName(newName) {
        this.ideaName.next(newName);
    }
}
