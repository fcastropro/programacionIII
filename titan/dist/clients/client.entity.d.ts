import { Membership } from '../memberships/membership.entity';
export declare class Client {
    id: string;
    name: string;
    email: string;
    membership: Membership;
    startDate: Date;
    endDate: Date;
}
