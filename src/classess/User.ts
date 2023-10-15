import { faker } from '@faker-js/faker';

export class User {
    name: string = "";
    location: {
        lat: number,
        lang: number
    };
    
    constructor() {
        this.name = faker.person.fullName();
        let loc = {lat: faker.location.latitude(), lang: faker.location.longitude()}
        this.location = loc;
    }
}