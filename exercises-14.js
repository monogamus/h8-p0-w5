// Logic Challenge - Password Generator

// Problem
// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):
// 1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
// 2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
// 3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
// 4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
    //code di sini
    var split = str.split('')
    var vocal = 'aiueoAIUEO'
    var alphabet = 'bjvfpBJVFP'
    var result = []

    for (var i = 0; i < split.length; i++) {
      for (var j = 0; j < vocal.length; j++) {
        if (split[i] === vocal[j]) {
            split[i] = alphabet[j]
        }
      }
      result.push(split[i])
    }
    return result
  }
  
function reverseWord (str) {
    //code di sini
    var result = []

    for (var i = str.length - 1; i >= 0; i--) {
      result.push(str[i])
    }
    return result
}
  
function setLowerUpperCase (str) {
    //code di sini
    var result = []

    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        result.push(str[i].toLowerCase())
      } else {
        result.push(str[i].toUpperCase())
      }
    }

    return result
}
  
function removeSpaces (str) {
    //code di sini
    var result = ""

    for (var i = 0; i  < str.length; i++) {
      if (str[i] !== " ") {
        result += str[i]
      }
    }
    return result
}
  
function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
      } else {
        var vocal = changeVocals(name)
        var reverse = reverseWord(vocal)
        var lowerUpper = setLowerUpperCase(reverse)
        var result = removeSpaces(lowerUpper)
    
        return result
      }
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'   