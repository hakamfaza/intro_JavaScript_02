const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let lengthArr = dataArray.length;

/*     const arr = () => {dataArray.every((e) => {
            return typeof e === 'number';
        });
    }
 */
    if(lengthArr > 5) {
        const cekValue = dataArray.filter((e) => {
            return e > nilaiAwal && e < nilaiAkhir;
    })
        if(cekValue != false) {
            if(cekValue.length !== 0) {
                return cekValue.sort((a, b) => a - b);
            } else {
                console.log('Nilai tidak ditemukan!')
            }
        } else {
            console.log('Nilai awal harus lebih besar dari nilai akhir!');
        }
    } else {
        console.log('Array harus lebih dari 5!')
    }
}

const data = seleksiNilai(5, 20 , [2, 20, 5, 14, 12]);

console.log(data);