export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orders?: IOrder[];
    orderTotal?: number;
    customerSince:any;
}

export interface IOrder {
    productName: string;
    itemCost: number;
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}