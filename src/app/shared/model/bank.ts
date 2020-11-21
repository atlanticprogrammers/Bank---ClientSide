import { Details } from "./details";

export interface IBank {
    banckCode: string;
    name: string;
    detailses?: Details[];
}

export class Bank implements IBank  {
    constructor(
        public banckCode: string, 
        public name: string, 
        public detailses?: Details[]
        ) {}
} 