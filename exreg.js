

const texto ="Amar você me faz viver, amar você me faz sonha amar você me faz feliz! Quero te dar um presente que você poderá abrir agora e sentir o aroma tão especial, porque este presente eu tirei do meu coração,  que é o meu amor por você. Já não sei o que fazer sem o teu carinho,sem tuas palavras e gestos que me fazem sorrir"

let rex = /(amar)( você )(me)/i
console.log(rex.test(texto))
console.log(texto.match(rex))
const variv =rex.exec(texto)
console.log(texto.replace(/Amar|amar /gi,'odiar'))
console
console.log(variv[0])