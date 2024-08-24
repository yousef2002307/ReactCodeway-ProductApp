export interface IProduct{
    id ?: string | undefined
    title : string,
    description : string,
    imageUrl : string,

    price : string,
    colors : string[],
    catagory : {
        name : string,
        imageUrl : string
    }
}