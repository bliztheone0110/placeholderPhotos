interface AdressInterface {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

export interface IFullUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AdressInterface;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}