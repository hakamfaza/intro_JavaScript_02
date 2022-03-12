const names = [
  'Abigail', 'Alexandra', 'Alison',
  'Amanda', 'Angela', 'Bella',
  'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope'];

const searchName = (keyword, limit, cb) => {
  return cb(keyword, limit);
}

const callback = (keyword, limit) => {
  const fillName = names.filter((names) => names.includes(keyword));
  const resultName = fillName.slice(0, limit);

  if  (fillName.length >= limit) {
    return resultName;
  } else if(fillName.length <= limit && fillName.length != 0) {
    console.log(`Element hanya ada ${fillName.length}!`);
    return resultName
  } else {
    return 'Hasil tidak ada!'
  }
}

console.log(searchName('an', 3, callback))