export class Category {
    constructor(init?: Partial<Category>) {
        Object.assign(this, init);
    }
    _id: string = '';
    name: string = '';
    description: string = '';
    category_id: number = 0;


    created_at: Date = new Date();
    updated_at: Date = new Date();

}