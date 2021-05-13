function regexVar(string) {
   const text ="Batman tornou-se popular assim que foi apresentado, acabando por ganhar a sua própria revista de banda desenhada em 1940, Batman. Enquanto as décadas progrediram, foram surgindo divergências sobre a interpretação do personagem. No final dos anos de 1960 a série de televisão Batman usava uma estética camp, que continuou a ser associada ao personagem durante muitos anos, mesmo depois da série ter acabado. Vários criadores trabalharam no sentido de trazer de novo o personagem de volta às suas raízes sombrias, culminando com The Dark Knight Returns (1986) de Frank Miller, seguido por Batman: The Killing Joke (1988) de Alan Moore e Arkham Asylum: A Serious House on Serious Earth (1989) de Grant Morrison. O sucesso dos filmes Batman da Warner Bros. ajudaram a manter o interesse do público na personagem" 
       const regExp =/batman/gi
      let re = text.match(regExp)

      console.log(text.replace(/Batman/gi,"superman"))
      console.log(text)
      re 
    return re ; }




console.log(regexVar("sd"))