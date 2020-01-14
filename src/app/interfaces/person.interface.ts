export interface Person {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: Gender;
    ip_address: string;
}

export enum Gender {
    Male = 'Male',
    Female = 'Female',
}
