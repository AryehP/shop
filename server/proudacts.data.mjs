import { getRandpmeId } from "./Utilis.mjs";

let produacts = [];

export function getAllProudacts(){
    return produacts;
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