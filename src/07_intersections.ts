// type i1 = {id: string};
// type i2 = {createAt: Date}

// type Entity = i1 & i2

// const e: Entity = {id: 'j3'}


// Intersection example in Database

type BaseMetaData = {
    id: string;
    createAt: Date;
    updateAt: Date;
}

type Product = {
    name: string;
    price: number
}

type DbProduct = BaseMetaData & Product;

const newProduct: DbProduct = {
    id: "pd_222",
    createAt: new Date(),
    updateAt: new Date(),
    name: "Keyboard",
    price: 3500
}