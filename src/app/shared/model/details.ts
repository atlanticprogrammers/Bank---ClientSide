import { IDetailsId } from "./details-id";

export interface IDetails {
    detailsId: IDetailsId;
    interestRate: number;
}

export class Details implements IDetails {
    constructor(
        public detailsId: IDetailsId, 
        public interestRate: number
        ) {}
}