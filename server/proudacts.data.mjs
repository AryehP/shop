import { getRandpmeId } from "./Utilis.mjs";

let produacts = [];

export function getAllProudacts(filterObj){

    let result = produacts;

    if(filterObj.title){

        const reg = new RegExp(filterObj.title, "i");
        result = result.filter(proudact => reg.test(proudact.title));

    }

    if(filterObj.price_lt){
        result = result.filter(proudact => proudact.price < filterObj.price_lt);
    }

    if(filterObj.price_gt){
        result = result.filter(proudact => proudact.price > filterObj.price_gt);
    }
    
    return result;
}

export function addNewProudact(newProudact){
    const id = getRandpmeId();
    const newProudactWithId = {
        ...newProudact,
        id: id,
    }
    return produacts.push(newProudactWithId);
}

export function getProudactById(id){
    
    return produacts.find(proudact => proudact.id == id);
}

export function getProudactBySellerId(sellerId){
    return produacts.filter(proudact => proudact.sellerId == sellerId);
}

export function updateProutact(id, proudact){
    
    const proudactToUpdate = {...proudact,id}
    produacts = produacts.map(proudact => {
        if(proudact.id == id)
            return proudactToUpdate;
        else
            return proudact;
    });

    return proudactToUpdate;
}

export function deleteProudact(id){
    produacts = produacts.filter(proudact => proudact.id != id);
}