
export interface IDetailsId {
    banckCode: string;
	loanType: string;
    duration: number;
}

export class DetailsId implements IDetailsId {
    constructor(
        public banckCode: string, 
        public loanType: string, 
        public duration: number, 
        ) {}
}