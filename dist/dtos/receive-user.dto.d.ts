export declare class ReceiveUserDto {
    role?: string;
    email?: string;
    avatarUrl?: string;
    username?: string;
    password?: string;
    name?: string;
    phone?: string;
    dob?: number;
    graduated?: boolean;
    gender?: string;
    lastSchool?: string;
    address?: {
        state?: string;
        municipality?: string;
        colony?: string;
        zipCode?: string;
    };
    emergency?: {
        name?: string;
        phone?: string;
        relation?: string;
        bloodType?: string;
    };
    note?: string;
    flights?: string[];
    grades?: string[];
    group?: string;
    payments?: string[];
    program?: string;
    school?: string;
    createdAt?: number;
    updatedAt?: number;
}
