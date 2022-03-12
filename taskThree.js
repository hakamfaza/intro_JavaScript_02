const selectionValue = (nilaiAwal, nilaiAkhir, dataArray) => {
  const lengthArr = dataArray.length;

  const isNumber = dataArray.every((e) => {
      return typeof e === 'number';
  });

  const fillArray = dataArray.filter((e) => {
    return e > nilaiAwal && e < nilaiAkhir;
  })

  if(nilaiAwal < nilaiAkhir) {
    if (lengthArr > 5) {
      if(isNumber) {
        if (fillArray.length !== 0) {
          return fillArray.sort((a, b) => a - b);
        } else {
          return 'Nilai tidak ditemukan'
        }
      } else {
        return 'Isi array harus number!'
      }
    } else {
      return 'Jumlah angka dalam dataArray harus lebih dari 5!'
    }
  } else {
    return 'Nilai awal harus lebih besar dari nilai akhir!'
  }
}

const resultValue = selectionValue(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
console.log(resultValue)

// Nilai akhir harus lebih besar dari nilai awal
// const resultValue = selectionValue(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
// console.log(resultValue)

// Jumlah angka dalam dataArray harus lebih dari 5
// const resultValue = selectionValue(5, 17 , [2, 25, 4]);
// console.log(resultValue)

// Nilai tidak ditemukan
// const resultValue = selectionValue(5, 17 , [2, 25, 4, 1, 30, 18]);
// console.log(resultValue)