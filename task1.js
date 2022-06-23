let inputKata = "upuk kupu"
let hasil =""
let x = inputKata.length-1

if (inputKata.length > 2){
    while(x >= 0){
        hasil=hasil+inputKata[x]
        x = x-1
    }   
      if (inputKata==hasil){
          console.log(inputKata +" adalah palindrome")
          } else 
          console.log(inputKata +" bukan palindrome")  
} else console.log("Huruf Kurang")