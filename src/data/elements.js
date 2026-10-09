// Forenklet periodisk system til 2.-4. klasse
// Med danske navne og simple beskrivelser

export const elements = [
  { symbol: 'H', name: 'Hydrogen', danish: 'Brint', atomicNumber: 1, color: '#FFFFFF', category: 'ikke-metal', danger: 'lav', description: 'Det letteste stof i universet! Det er en gas der kan brænde.' },
  { symbol: 'He', name: 'Helium', danish: 'Helium', atomicNumber: 2, color: '#D9FFFF', category: 'ædelgas', danger: 'lav', description: 'Gassen i balloner der får dem til at flyve opad. Den er helt ufarlig.' },
  { symbol: 'Li', name: 'Lithium', danish: 'Lithium', atomicNumber: 3, color: '#CC80FF', category: 'metal', danger: 'medium', description: 'Et blødt metal der bruges i batterier. Det kan reagere med vand.' },
  { symbol: 'Be', name: 'Beryllium', danish: 'Beryllium', atomicNumber: 4, color: '#C2FF00', category: 'metal', danger: 'høj', description: 'Et sjældent metal. Det er giftigt hvis man indånder det.' },
  { symbol: 'B', name: 'Boron', danish: 'Bor', atomicNumber: 5, color: '#FFB5B5', category: 'halvmetal', danger: 'lav', description: 'Bruges i vaskepulver og til at lave hårdt glas.' },
  { symbol: 'C', name: 'Carbon', danish: 'Kulstof', atomicNumber: 6, color: '#909090', category: 'ikke-metal', danger: 'lav', description: 'Findes i dig, i træ, i diamanter og i blyanter! Alt levende indeholder kulstof.' },
  { symbol: 'N', name: 'Nitrogen', danish: 'Kvælstof', atomicNumber: 7, color: '#3050F8', category: 'ikke-metal', danger: 'lav', description: 'Luften består mest af kvælstof. Planter har brug for det for at gro.' },
  { symbol: 'O', name: 'Oxygen', danish: 'Ilt', atomicNumber: 8, color: '#FF0D0D', category: 'ikke-metal', danger: 'medium', description: 'Vi indånder ilt for at leve! Det får ting til at brænde.' },
  { symbol: 'F', name: 'Fluorine', danish: 'Fluor', atomicNumber: 9, color: '#90E050', category: 'halogen', danger: 'høj', description: 'En meget reaktiv gas. Bruges i tandpasta for at beskytte tænderne.' },
  { symbol: 'Ne', name: 'Neon', danish: 'Neon', atomicNumber: 10, color: '#B3E3F5', category: 'ædelgas', danger: 'lav', description: 'Giver det røde lys i neonskilte. Den reagerer næsten aldrig med noget.' },
  { symbol: 'Na', name: 'Sodium', danish: 'Natrium', atomicNumber: 11, color: '#AB5CF2', category: 'metal', danger: 'høj', description: 'Et blødt metal der eksploderer i vand! Det findes i bordsalt sammen med klor.' },
  { symbol: 'Mg', name: 'Magnesium', danish: 'Magnesium', atomicNumber: 12, color: '#8AFF00', category: 'metal', danger: 'medium', description: 'Brænder med et meget skarpt hvidt lys. Findes i mange kosttilskud.' },
  { symbol: 'Al', name: 'Aluminium', danish: 'Aluminium', atomicNumber: 13, color: '#BFA6A6', category: 'metal', danger: 'lav', description: 'Let metal der bruges til sodavandsdåser og fly. Det ruster ikke.' },
  { symbol: 'Si', name: 'Silicon', danish: 'Silicium', atomicNumber: 14, color: '#F0C8A0', category: 'halvmetal', danger: 'lav', description: 'Sand er lavet af silicium! Det bruges i computere og solceller.' },
  { symbol: 'P', name: 'Phosphorus', danish: 'Fosfor', atomicNumber: 15, color: '#FF8000', category: 'ikke-metal', danger: 'høj', description: 'Kan lyse i mørke. Bruges i tændstikker og gødning.' },
  { symbol: 'S', name: 'Sulfur', danish: 'Svovl', atomicNumber: 16, color: '#FFFF30', category: 'ikke-metal', danger: 'medium', description: 'Gul stof der lugter af rådne æg. Bruges til at lave krudt og medicin.' },
  { symbol: 'Cl', name: 'Chlorine', danish: 'Klor', atomicNumber: 17, color: '#1FF01F', category: 'halogen', danger: 'høj', description: 'En grøn gas der bruges til at rense svømmehaller. Den er giftig alene.' },
  { symbol: 'Ar', name: 'Argon', danish: 'Argon', atomicNumber: 18, color: '#80D1E3', category: 'ædelgas', danger: 'lav', description: 'En ædelgas der bruges i lysstofrør. Den reagerer ikke med noget.' },
  { symbol: 'K', name: 'Potassium', danish: 'Kalium', atomicNumber: 19, color: '#8F40D4', category: 'metal', danger: 'høj', description: 'Et metal der reagerer voldsomt med vand. Planter har brug for kalium.' },
  { symbol: 'Ca', name: 'Calcium', danish: 'Calcium', atomicNumber: 20, color: '#3DFF00', category: 'metal', danger: 'lav', description: 'Gør dine knogler og tænder stærke! Findes i mælk og ost.' },
  { symbol: 'Fe', name: 'Iron', danish: 'Jern', atomicNumber: 26, color: '#E06633', category: 'metal', danger: 'lav', description: 'Det mest brugte metal. Det kan ruste. Blodet indeholder jern.' },
  { symbol: 'Cu', name: 'Copper', danish: 'Kobber', atomicNumber: 29, color: '#C88033', category: 'metal', danger: 'lav', description: 'Rødbrunt metal der bruges i ledninger og mønter. Det leder strøm godt.' },
  { symbol: 'Zn', name: 'Zinc', danish: 'Zink', atomicNumber: 30, color: '#7D80B0', category: 'metal', danger: 'lav', description: 'Bruges til at beskytte jern mod rust. Findes i mange cremer.' },
  { symbol: 'Ag', name: 'Silver', danish: 'Sølv', atomicNumber: 47, color: '#C0C0C0', category: 'metal', danger: 'lav', description: 'Et smukt skinnende metal. Bruges til smykker og bestik.' },
  { symbol: 'Au', name: 'Gold', danish: 'Guld', atomicNumber: 79, color: '#FFD700', category: 'metal', danger: 'lav', description: 'Det mest værdifulde metal! Det ruster aldrig og er meget tungt.' },
  { symbol: 'Hg', name: 'Mercury', danish: 'Kviksølv', atomicNumber: 80, color: '#B8B8D0', category: 'metal', danger: 'høj', description: 'Det eneste metal der er flydende ved stuetemperatur. Det er giftigt!' },
  { symbol: 'Pb', name: 'Lead', danish: 'Bly', atomicNumber: 82, color: '#575961', category: 'metal', danger: 'høj', description: 'Et tungt metal der tidligere blev brugt i rør. Det er giftigt.' },
  { symbol: 'U', name: 'Uranium', danish: 'Uran', atomicNumber: 92, color: '#008800', category: 'metal', danger: 'høj', description: 'Et radioaktivt metal. Bruges i kernekraftværker.' },
];

export const getElementBySymbol = (symbol) => elements.find(e => e.symbol === symbol);

export const categories = {
  'metal': { color: '#E8A838', label: 'Metal' },
  'ikke-metal': { color: '#4CAF50', label: 'Ikke-metal' },
  'halogen': { color: '#9C27B0', label: 'Halogen' },
  'ædelgas': { color: '#00BCD4', label: 'Ædelgas' },
  'halvmetal': { color: '#FF9800', label: 'Halvmetal' },
};
