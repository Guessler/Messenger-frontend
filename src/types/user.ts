export interface RegisterUserDto {
    email: string;
    password: string;
    name: string;
}

export interface LoginUserDto {
    email: string;
    password: string;
    
}

export interface AddContactDto {
    userId: number;
}

export interface Contact {
    id: number;
    userId: number;
    name: string;
}