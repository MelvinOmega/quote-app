export class Quote {
    showDescription: boolean;
    constructor(public id: number, public name: string, public description: string) {
        this.showDescription=false;
    }
}



// export class Quote {
//     id: number;
//     name: string;
//     description: string;


//     constructor(id:number, name:string, description:string){
//         this.id=id;
//         this.name=name;
//         this.description=description
//     }
// }
