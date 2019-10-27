export class Item {
    public id         :string;
    private name       :string;
    private description:string;
    private picture    :string;
    constructor(body:any){
        this.id          = body.id;
        this.name        = body.name;
        this.description = body.description;
        this.picture     = body.picture;
    }
    
}
