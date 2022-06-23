function divideAndSort (angka){
  angka = angka.toString().split(0).map((x) => x.split("").sort().join(""))
  let gabung = angka.join("")
  console.log(gabung)
}
divideAndSort(5956560159466056)