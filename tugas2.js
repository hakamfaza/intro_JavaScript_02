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
    const str = fil.slice(0, limit)
    return str;
}

console.log(searchName('an', 1, callback))