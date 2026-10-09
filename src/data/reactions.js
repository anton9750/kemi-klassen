// Reaktioner mellem stoffer - forenklet og sjovt for børn
// Key er sorteret symboler join'et med +

export const reactions = {
  // Klassiske sikre reaktioner
  'H+O': {
    name: 'Vand',
    formula: 'H₂O',
    color: '#4FC3F7',
    effect: 'bubbles',
    description: 'Brint og ilt danner vand! Det er det du drikker hver dag. 💧',
    teacherExplain: 'Når brint (H) og ilt (O) mødes, danner de vandmolekyler. Hvert vandmolekyle består af to brintatomer og ét iltatom. Det er derfor formlen hedder H₂O. Vand er livsvigtigt for alle levende væsener!',
    safe: true,
    heatEffect: {
      lav: { effect: 'steam', message: 'Der kommer en lille smule damp...' },
      medium: { effect: 'boil', message: 'Vandet koger! Der kommer bobler!' },
      høj: { effect: 'steam_big', message: 'Meget damp stiger op! Vandet koger kraftigt.' }
    }
  },
  'Na+Cl': {
    name: 'Bordsalt',
    formula: 'NaCl',
    color: '#FFFFFF',
    effect: 'crystal',
    description: 'Natrium og klor danner bordsalt! Det du putter på maden. 🧂',
    teacherExplain: 'Natrium er et farligt metal der eksploderer i vand, og klor er en giftig gas. Men sammen danner de almindeligt bordsalt, som er helt sikkert at spise! Det er et godt eksempel på hvordan farlige stoffer kan blive ufarlige sammen.',
    safe: true,
    heatEffect: {
      lav: { effect: 'none', message: 'Saltet bliver bare varmt.' },
      medium: { effect: 'melt', message: 'Saltet begynder at smelte lidt...' },
      høj: { effect: 'melt', message: 'Saltet smelter til en klar væske!' }
    }
  },
  'C+O': {
    name: 'Kuldioxid',
    formula: 'CO₂',
    color: '#B0BEC5',
    effect: 'gas',
    description: 'Kulstof og ilt danner kuldioxid – den gas vi udånder! 😮',
    teacherExplain: 'Når noget brænder (som træ eller benzin), reagerer kulstof med ilt og danner kuldioxid. Vi mennesker udånder også kuldioxid. Planter bruger kuldioxid til at lave ilt – det er fotosyntese!',
    safe: true,
    heatEffect: {
      lav: { effect: 'gas', message: 'Der kommer lidt gas ud...' },
      medium: { effect: 'gas', message: 'Mere kuldioxid dannes!' },
      høj: { effect: 'smoke', message: 'Meget røg og gas! Det brænder godt.' }
    }
  },
  'H+Cl': {
    name: 'Saltsyre',
    formula: 'HCl',
    color: '#E0E0E0',
    effect: 'fizz',
    description: 'Brint og klor danner saltsyre – en stærk syre! 🧪',
    teacherExplain: 'Saltsyre er en stærk syre. Den findes naturligt i din mave og hjælper dig med at fordøje maden! Men koncentreret saltsyre er farlig og kan æde sig gennem ting.',
    safe: false,
    heatEffect: {
      lav: { effect: 'fizz', message: 'Der bobler lidt...' },
      medium: { effect: 'fizz', message: 'Der kommer stærke dampe!' },
      høj: { effect: 'smoke', message: 'Farlige dampe stiger op! Pas på!' }
    }
  },
  'Mg+O': {
    name: 'Magnesiumoxid',
    formula: 'MgO',
    color: '#FFFFFF',
    effect: 'bright_light',
    description: 'Magnesium brænder med et skarpt hvidt lys og danner hvidt pulver! ✨',
    teacherExplain: 'Magnesium er et metal der brænder meget nemt med et ekstremt skarpt hvidt lys. Det bruges i fyrværkeri og nødraketter. Det hvide pulver der bliver tilbage er magnesiumoxid.',
    safe: true,
    heatEffect: {
      lav: { effect: 'spark', message: 'Der kommer lidt gnister...' },
      medium: { effect: 'bright_light', message: 'Det begynder at lyse kraftigt!' },
      høj: { effect: 'bright_light', message: 'BLÆNDEDE hvidt lys! Super stærkt!' }
    }
  },
  'Fe+O': {
    name: 'Jernoxid (Rust)',
    formula: 'Fe₂O₃',
    color: '#BF360C',
    effect: 'rust',
    description: 'Jern og ilt danner rust – det røde lag på gamle cykler! 🚲',
    teacherExplain: 'Når jern får lov at stå ude i regnvejr, reagerer det langsomt med ilt og vand og danner rust. Rust er porøst og svagt, så det ødelægger jernet over tid. Derfor maler man jern for at beskytte det.',
    safe: true,
    heatEffect: {
      lav: { effect: 'rust', message: 'Der dannes lidt rust...' },
      medium: { effect: 'rust', message: 'Mere rust dannes hurtigere!' },
      høj: { effect: 'smoke', message: 'Jernet bliver rødglødende og ruster hurtigt!' }
    }
  },
  'S+O': {
    name: 'Svovldioxid',
    formula: 'SO₂',
    color: '#FFF59D',
    effect: 'smoke',
    description: 'Svovl brænder med blå flamme og danner stinkende gas! 💨',
    teacherExplain: 'Svovl brænder med en smuk blå flamme, men gassen der dannes (svovldioxid) lugter forfærdeligt og er usund at indånde. Det er en af grundene til at vulkansk røg lugter så slemt.',
    safe: false,
    heatEffect: {
      lav: { effect: 'smoke', message: 'Der kommer lidt gul røg...' },
      medium: { effect: 'blue_flame', message: 'Blå flamme og stinkende røg!' },
      høj: { effect: 'smoke', message: 'Meget røg! Det stinker af rådne æg!' }
    }
  },
  'P+O': {
    name: 'Fosforoxid',
    formula: 'P₄O₁₀',
    color: '#FFFFFF',
    effect: 'smoke',
    description: 'Fosfor brænder nemt og danner hvid røg! 🔥',
    teacherExplain: 'Hvid fosfor er meget farligt fordi det antænder af sig selv i luft! Rød fosfor er mere stabil og bruges i tændstikker. Når fosfor brænder, dannes der hvid røg.',
    safe: false,
    heatEffect: {
      lav: { effect: 'smoke', message: 'Der kommer hvid røg...' },
      medium: { effect: 'bright_light', message: 'Det begynder at brænde!' },
      høj: { effect: 'explosion', message: 'BOOM! Fosfor eksploderer næsten!' }
    }
  },
  'Na+H': {
    name: 'Natriumhydrid + brint',
    formula: 'NaH + H₂',
    color: '#E1BEE7',
    effect: 'explosion',
    description: 'Natrium reagerer voldsomt med brint! Pas på! 💥',
    teacherExplain: 'Natrium er et meget reaktivt metal. Det reagerer voldsomt med mange ting, også brint. I virkeligheden reagerer natrium ekstremt kraftigt med vand – det er derfor man aldrig putter natrium i vand i et rigtigt laboratorium uden sikkerhedsforanstaltninger!',
    safe: false,
    heatEffect: {
      lav: { effect: 'fizz', message: 'Der bobler lidt farligt...' },
      medium: { effect: 'spark', message: 'Gnister og bobler!' },
      høj: { effect: 'explosion', message: 'EKSPLOSION! Natrium er farligt når det bliver opvarmet!' }
    }
  },
  'K+H': {
    name: 'Kaliumreaktion',
    formula: 'KH',
    color: '#CE93D8',
    effect: 'explosion',
    description: 'Kalium er endnu mere reaktivt end natrium! 💥',
    teacherExplain: 'Kalium er et af de mest reaktive metaller. Det reagerer endnu kraftigere end natrium. I skolen viser læreren ofte hvordan kalium reagerer med vand – det er meget spektakulært men også farligt!',
    safe: false,
    heatEffect: {
      lav: { effect: 'spark', message: 'Farlige gnister!' },
      medium: { effect: 'explosion', message: 'Det eksploderer!' },
      høj: { effect: 'explosion', message: 'STOR EKSPLOSION! Pas på kalium!' }
    }
  },
  'H+F': {
    name: 'Flussyre',
    formula: 'HF',
    color: '#A5D6A7',
    effect: 'fizz',
    description: 'Brint og fluor danner flussyre – ekstremt farligt! ☠️',
    teacherExplain: 'Flussyre er en af de farligste syrer der findes. Den kan æde sig gennem glas! Derfor opbevares den i plastikflasker. Man skal aldrig lege med fluor eller flussyre.',
    safe: false,
    heatEffect: {
      lav: { effect: 'fizz', message: 'Farlige dampe...' },
      medium: { effect: 'smoke', message: 'Meget farlige dampe stiger op!' },
      høj: { effect: 'smoke', message: 'EKSTREM FARLIGT! Dampe overalt!' }
    }
  },
  'Cu+O': {
    name: 'Kobberoxid',
    formula: 'CuO',
    color: '#1B5E20',
    effect: 'color_change',
    description: 'Kobber bliver sort når det opvarmes med ilt! 🖤',
    teacherExplain: 'Når man opvarmer kobber i luft, dannes der et sort lag af kobberoxid. Hvis man opvarmer det meget stærkt, kan det blive rødt i stedet. Kobber bruges meget i elektriske ledninger fordi det leder strøm så godt.',
    safe: true,
    heatEffect: {
      lav: { effect: 'color_change', message: 'Kobberet bliver lidt mørkere...' },
      medium: { effect: 'color_change', message: 'Kobberet bliver sort!' },
      høj: { effect: 'glow', message: 'Kobberet gløder rødt og bliver sort!' }
    }
  },
  'C+H': {
    name: 'Metan (Naturgas)',
    formula: 'CH₄',
    color: '#90A4AE',
    effect: 'gas',
    description: 'Kulstof og brint kan danne metan – det er naturgas! 🔥',
    teacherExplain: 'Metan er den vigtigste del af naturgas. Vi bruger det til at lave mad på komfuret og til at varme huse. Metan er også en drivhusgas der påvirker klimaet.',
    safe: true,
    heatEffect: {
      lav: { effect: 'gas', message: 'Der kommer gas ud...' },
      medium: { effect: 'flame', message: 'Gassen kan antændes!' },
      høj: { effect: 'explosion', message: 'Gassen eksploderer hvis der er for meget!' }
    }
  },
  'N+H': {
    name: 'Ammoniak',
    formula: 'NH₃',
    color: '#B3E5FC',
    effect: 'gas',
    description: 'Kvælstof og brint danner ammoniak – bruges i gødning! 🌱',
    teacherExplain: 'Ammoniak er meget vigtig for at lave gødning til landbruget. Uden ammoniak ville vi ikke kunne dyrke nok mad til alle mennesker på jorden. Det lugter skarpt – som stærk toilet-rens.',
    safe: false,
    heatEffect: {
      lav: { effect: 'gas', message: 'Der kommer skarp lugt...' },
      medium: { effect: 'gas', message: 'Stærk ammoniak-lugt!' },
      høj: { effect: 'smoke', message: 'Meget ammoniak-gas! Pas på øjnene!' }
    }
  },
  'Ca+O': {
    name: 'Calciumoxid (Brændt kalk)',
    formula: 'CaO',
    color: '#ECEFF1',
    effect: 'smoke',
    description: 'Calcium og ilt danner brændt kalk! 🏗️',
    teacherExplain: 'Brændt kalk bruges til at lave cement og mørtel til huse. Når man blander det med vand, bliver det meget varmt! Det hedder "læsket kalk".',
    safe: true,
    heatEffect: {
      lav: { effect: 'smoke', message: 'Lidt røg...' },
      medium: { effect: 'glow', message: 'Det gløder lidt!' },
      høj: { effect: 'glow', message: 'Meget varmt! Det gløder kraftigt.' }
    }
  },
  'Al+O': {
    name: 'Aluminiumoxid',
    formula: 'Al₂O₃',
    color: '#FFFFFF',
    effect: 'spark',
    description: 'Aluminium danner et beskyttende oxidlag! 🛡️',
    teacherExplain: 'Aluminium ruster ikke på samme måde som jern, fordi det danner et tyndt, hårdt lag af aluminiumoxid der beskytter metallet under. Det er derfor sodavandsdåser ikke ruster.',
    safe: true,
    heatEffect: {
      lav: { effect: 'none', message: 'Ikke meget sker...' },
      medium: { effect: 'spark', message: 'Der kommer gnister!' },
      høj: { effect: 'bright_light', message: 'Aluminium kan brænde med skarpt lys!' }
    }
  },
  // Standard fallback for ukendte kombinationer
  'default': {
    name: 'Ukendt blanding',
    formula: '???',
    color: '#9E9E9E',
    effect: 'fizz',
    description: 'De to stoffer blandes... der sker noget, men vi ved ikke præcist hvad! 🔬',
    teacherExplain: 'Ikke alle stoffer reagerer med hinanden på en spændende måde. Nogle gange sker der næsten ingenting. Det er også en vigtig del af kemi – at finde ud af hvad der reagerer, og hvad der ikke gør!',
    safe: true,
    heatEffect: {
      lav: { effect: 'none', message: 'Blandingen bliver varm...' },
      medium: { effect: 'fizz', message: 'Der bobler lidt...' },
      høj: { effect: 'smoke', message: 'Der kommer lidt røg. Pas på ikke at brænde det på!' }
    }
  }
};

// Find reaktion baseret på array af symboler (op til 4)
export function findReaction(symbols) {
  if (!symbols || symbols.length < 2) return null;
  
  // Sorter for konsistent key
  const sorted = [...symbols].sort();
  
  // Prøv alle par først (for 2 stoffer)
  if (sorted.length === 2) {
    const key = sorted.join('+');
    if (reactions[key]) return { ...reactions[key], key };
    // Prøv omvendt også (selv om sorteret)
    const key2 = sorted[1] + '+' + sorted[0];
    if (reactions[key2]) return { ...reactions[key2], key: key2 };
  }
  
  // For flere stoffer: kig efter kendte delreaktioner
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      const key = [sorted[i], sorted[j]].sort().join('+');
      if (reactions[key]) {
        return { 
          ...reactions[key], 
          key,
          note: `Hovedreaktion mellem ${sorted[i]} og ${sorted[j]}. De andre stoffer påvirker også!`
        };
      }
    }
  }
  
  // Specielle 3-stof reaktioner
  if (sorted.includes('H') && sorted.includes('O') && sorted.includes('C')) {
    return {
      name: 'Sukker / Organisk stof',
      formula: 'C₆H₁₂O₆ (forenklet)',
      color: '#FFE0B2',
      effect: 'bubbles',
      description: 'Kulstof, brint og ilt er byggestenene i sukker og mange organiske stoffer! 🍬',
      teacherExplain: 'Alle sukkerarter, fedtstoffer og proteiner er bygget af kulstof, brint og ilt (og nogle gange kvælstof). Det er derfor man kalder dem "organiske stoffer".',
      safe: true,
      heatEffect: {
        lav: { effect: 'none', message: 'Ingenting særligt...' },
        medium: { effect: 'caramel', message: 'Det begynder at karamellisere!' },
        høj: { effect: 'smoke', message: 'Det brænder på og bliver sort!' }
      },
      key: 'C+H+O'
    };
  }
  
  return { ...reactions['default'], key: 'default' };
}

// Farlige kombinationer der kan eksplodere ved høj varme
export const explosiveCombos = [
  ['Na', 'H'], ['K', 'H'], ['Na', 'O'], ['K', 'O'], 
  ['P', 'O'], ['H', 'O', 'C'], // gas
  ['Na', 'Cl', 'H'], // saltsyre + natrium farligt
];

export function isExplosive(symbols, heatLevel) {
  if (heatLevel !== 'høj') return false;
  const sorted = [...symbols].sort().join(',');
  return explosiveCombos.some(combo => {
    const c = [...combo].sort().join(',');
    return sorted.includes(c) || combo.every(s => symbols.includes(s));
  });
}
