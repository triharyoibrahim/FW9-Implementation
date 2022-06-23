let kalimat = "balik kalimat saya "
let split = kalimat.split(" ")
let x = split.length-1
let reverse =""

if (x >2 ){
    while(x>=0){
    reverse=reverse+" "+split[x]
    x = x-1
}
  
}else console.log("kata kurang")
console.log(reverse)