
const array = [
    {
      "text": "A honfoglalás során a magyar törzsek a 9-10. században érkeztek a Kárpát-medencébe.",
      "right": true
    },
    {
      "text": "Az 1526-os mohácsi csatában II. Lajos király győzelmet aratott az oszmán seregek felett.",
      "right": false
    },
    {
      "text": "A nándorfehérvári diadal 1456-ban történt Hunyadi János és Kapisztrán János vezetésével.",
      "right": true
    },
    {
      "text": "A tatárjárás során IV. Béla király nem tett semmilyen intézkedést az ország újjáépítésére.",
      "right": false
    },
    {
      "text": "Az ország három részre szakadt Buda török kézre kerülése után, 1541-ben.",
      "right": true
    },
    {
      "text": "Hunyadi Mátyás uralkodása alatt Magyarországot soha nem érte külső támadás.",
      "right": false
    },
    {
      "text": "Az 1848-49-es forradalom és szabadságharc vezetője Kossuth Lajos volt.",
      "right": true
    },
    {
      "text": "1956-ban Magyarországon kommunista forradalom tört ki a szovjet megszállás támogatására.",
      "right": false
    },
    {
      "text": "1946. február 1-jén kikiáltották a Magyar Köztársaságot.",
      "right": true
    },
    {
      "text": "A magyarok soha nem szenvedtek vereséget az oszmán birodalom ellen vívott csatákban.",
      "right": false
    }
  ]

  const deck = new DeckArea('deck')

const solutionArea = new SolutionArea('solution')

const managerArray = []
for(const elem of array){ 
    //Az objektumok alapján példányosítjuk a cardokat
    const card = new Card(elem.text, elem.right)
    managerArray.push(card)
}

const manager = new Manager(managerArray)
