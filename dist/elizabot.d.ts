export declare type ElizaInitials = string[];
export declare type ElizaFinals = string[];
export declare type ElizaQuits = string[];
export declare type ElizaPres = string[];
export declare type ElizaPosts = string[];
export declare type ElizaSynons = Record<string, string[]>;
export declare type ElizaKeywordDecomp = [
    string,
    string[]
];
export declare type ElizaKeyword = [
    string,
    number,
    ElizaKeywordDecomp[]
];
export declare type ElizaKeywords = ElizaKeyword[];
export declare type ElizaPostTransforms = (RegExp | string)[];
export declare type ElizaData = {
    elizaInitials: ElizaInitials;
    elizaFinals: ElizaFinals;
    elizaQuits: ElizaQuits;
    elizaPres: ElizaPres;
    elizaPosts: ElizaPosts;
    elizaSynons: ElizaSynons;
    elizaKeywords: ElizaKeywords;
    elizaPostTransforms: ElizaPostTransforms;
};
export default class ElizaBot {
    quit: boolean;
    private readonly noRandom;
    private capitalizeFirstLetter;
    private debug;
    private memSize;
    private version;
    private mem;
    private lastchoice;
    private _dataParsed;
    private pres;
    private posts;
    private preExp;
    private postExp;
    private sentence;
    private elizaData;
    constructor(options: {
        noRandomFlag: boolean;
        elizaData: ElizaData;
    });
    reset(): void;
    private _init;
    private _sortKeywords;
    transform(text: string): string;
    private _execRule;
    private _postTransform;
    private _getRuleIndexByKey;
    private _memSave;
    private _memGet;
    getFinal(): string;
    getInitial(): string;
}
