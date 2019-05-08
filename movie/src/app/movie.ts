import { Rating } from './rating';
let displayHash = {
    imdbRating: "Imdb Rating"
};
export class Movie {
    public title:string;
    public year:string;
    public rated:string;
    public released:string;
    public runtime:string;
    public genre:string;
    public director:string;
    public writer:string;
    public actors:string;
    public plot:string;
    public language:string;
    public country:string;
    public awards:string;
    public poster:string;
    public ratings:Rating[];
    public metascore:string;
    public imdbRating:string;
    public imdbVotes:string;
    public imdbid:string;
    public type:string;
    public DVD ?:string;
    public boxOffice ?:string;
    public production ?:string;
    public website ?:string;
    public response:string;

    convertToDisplay(property: string): string{
        if(displayHash[property]){
            return displayHash[property];
        }
        return property;
    }
}


