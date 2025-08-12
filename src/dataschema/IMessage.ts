export type IMessage =  {
    id:number;
    content:string;
    characters: string[];
    onSelectValue?: Function; // Optional property
}