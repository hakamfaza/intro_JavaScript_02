const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

const searchName = (e, limit, cb) => {
    return cb(e, limit)
}

const callback = (e, limit) => {
    const fil = names.filter(element => element.includes(e));
    if(fil.length >= limit) {
        const str = fil.slice(0, limit)
        return str;
    } else {
        const str = fil.slice(0, limit)
        console.log(`Element hanya ada ${fil.length}!`)
        return str;
    }
}

console.log(searchName('an', 4, callback))