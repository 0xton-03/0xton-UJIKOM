// 1. buat aray daftarSiswa dengan data kosong

const daftarSiswa = []

// 2. tambahkan data kedalam aray

daftarSiswa.push({
    "nama" : "rizboy",
    "umur" : 18,
    "hobby" : "baca",

})

// 3. tampilkan data dengan maping

daftarSiswa.map((siswa)=>{
console.log(`halo let me introduction ${siswa [`nama`]}, i'm ${siswa.umur} old, my hobby is ${siswa.hobby}`)
})

const protocol = "https"
const domain = "fakestoreapi.com"
const endPoint = "products"
const url = `${protocol}://${domain}/${endPoint}`
console.log(url)
const response = fetch(url)
            .then((res)=>{
                    return res.json()
})
.then ((data)=>{
    console.log(data)
})
.catch((err)=>{

})
console.log(response)