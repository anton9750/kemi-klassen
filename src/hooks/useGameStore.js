import { create } from 'zustand';
import { findReaction, isExplosive } from '../data/reactions';
import { getElementBySymbol } from '../data/elements';

const useGameStore = create((set, get) => ({
  // Selected elements for mixing (up to 4)
  selectedElements: [],
  
  // Current mixture in the vial
  mixture: {
    symbols: [],
    reaction: null,
    color: '#4FC3F7',
    volume: 0,
  },
  
  // Reagent glasses (up to 4)
  reagentGlasses: [
    { id: 1, symbols: [], color: 'transparent', active: true },
  ],
  activeGlassId: 1,
  maxGlasses: 4,
  
  // Burner
  burner: {
    active: false,
    level: 'lav', // lav, medium, høj
    underGlass: false,
  },
  
  // Effects
  currentEffect: null, // 'bubbles', 'explosion', 'smoke', etc.
  effectMessage: '',
  showExplosion: false,
  
  // Teacher
  teacherMessage: 'Hej! Jeg er lærer Kemius. Klik på spørgsmålstegnet eller et stof for at få forklaring! 🔬',
  teacherTalking: false,
  
  // UI
  selectedForExplain: null,
  isPouring: false,
  pourProgress: 0,
  
  // Actions
  selectElement: (symbol) => {
    const { selectedElements } = get();
    if (selectedElements.includes(symbol)) {
      set({ selectedElements: selectedElements.filter(s => s !== symbol) });
    } else if (selectedElements.length < 4) {
      set({ selectedElements: [...selectedElements, symbol] });
    }
  },
  
  clearSelection: () => set({ selectedElements: [] }),
  
  addToGlass: (symbols) => {
    const { activeGlassId, reagentGlasses, mixture } = get();
    const glass = reagentGlasses.find(g => g.id === activeGlassId);
    if (!glass) return;
    
    const newSymbols = [...new Set([...glass.symbols, ...symbols])].slice(0, 4);
    const reaction = findReaction(newSymbols);
    
    const updatedGlasses = reagentGlasses.map(g => 
      g.id === activeGlassId 
        ? { ...g, symbols: newSymbols, color: reaction?.color || '#4FC3F7' }
        : g
    );
    
    set({
      reagentGlasses: updatedGlasses,
      mixture: {
        symbols: newSymbols,
        reaction,
        color: reaction?.color || '#4FC3F7',
        volume: Math.min(100, mixture.volume + 25),
      },
      selectedElements: [],
      currentEffect: reaction?.effect || 'fizz',
      effectMessage: reaction?.description || 'Blandet!',
    });
    
    // Clear effect after a while
    setTimeout(() => {
      set({ currentEffect: null });
    }, 3000);
  },
  
  pourIntoVial: () => {
    const { selectedElements } = get();
    if (selectedElements.length < 1) return;
    
    set({ isPouring: true, pourProgress: 0 });
    
    // Animate pour
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      set({ pourProgress: progress });
      if (progress >= 100) {
        clearInterval(interval);
        get().addToGlass(selectedElements);
        set({ isPouring: false, pourProgress: 0 });
      }
    }, 50);
  },
  
  addReagentGlass: () => {
    const { reagentGlasses, maxGlasses } = get();
    if (reagentGlasses.length >= maxGlasses) return;
    
    const newId = Math.max(...reagentGlasses.map(g => g.id)) + 1;
    set({
      reagentGlasses: [
        ...reagentGlasses,
        { id: newId, symbols: [], color: 'transparent', active: false }
      ],
      activeGlassId: newId,
    });
  },
  
  setActiveGlass: (id) => {
    const { reagentGlasses } = get();
    const glass = reagentGlasses.find(g => g.id === id);
    if (!glass) return;
    
    const reaction = findReaction(glass.symbols);
    set({
      activeGlassId: id,
      mixture: {
        symbols: glass.symbols,
        reaction,
        color: glass.color,
        volume: glass.symbols.length * 25,
      },
      reagentGlasses: reagentGlasses.map(g => ({
        ...g,
        active: g.id === id
      })),
    });
  },
  
  // Burner controls
  toggleBurner: () => {
    set(state => ({
      burner: { ...state.burner, active: !state.burner.active }
    }));
    get().applyHeat();
  },
  
  setBurnerLevel: (level) => {
    set(state => ({
      burner: { ...state.burner, level }
    }));
    get().applyHeat();
  },
  
  setBurnerUnderGlass: (under) => {
    set(state => ({
      burner: { ...state.burner, underGlass: under }
    }));
    if (under) get().applyHeat();
  },
  
  applyHeat: () => {
    const { burner, mixture } = get();
    if (!burner.active || !burner.underGlass || !mixture.reaction) return;
    
    const heat = mixture.reaction.heatEffect?.[burner.level];
    if (!heat) return;
    
    // Check explosion
    if (isExplosive(mixture.symbols, burner.level) || heat.effect === 'explosion') {
      set({
        showExplosion: true,
        currentEffect: 'explosion',
        effectMessage: '💥 EKSPLOSION! Du brændte de farlige stoffer for hårdt!',
        teacherMessage: 'Åh nej! Det eksploderede! Nogle stoffer må man ikke opvarme for meget. Prøv med lavere blus næste gang, eller bland sikrere stoffer.',
        teacherTalking: true,
      });
      setTimeout(() => set({ showExplosion: false }), 2000);
      return;
    }
    
    set({
      currentEffect: heat.effect,
      effectMessage: heat.message,
    });
    
    setTimeout(() => set({ currentEffect: null }), 3000);
  },
  
  // Teacher
  askTeacher: () => {
    const { mixture } = get();
    if (mixture.symbols.length === 0) {
      set({
        teacherMessage: 'Du har ikke hældt noget i glasset endnu! Vælg nogle stoffer fra det periodiske system og hæld dem i reagensglasset.',
        teacherTalking: true,
      });
      return;
    }
    
    if (mixture.reaction) {
      set({
        teacherMessage: mixture.reaction.teacherExplain || mixture.reaction.description,
        teacherTalking: true,
      });
    } else {
      set({
        teacherMessage: 'Hmm, jeg er ikke sikker på hvad der sker med denne blanding. Prøv at blande nogle kendte stoffer som H og O, eller Na og Cl!',
        teacherTalking: true,
      });
    }
  },
  
  explainElement: (symbol) => {
    const el = getElementBySymbol(symbol);
    if (!el) return;
    
    set({
      selectedForExplain: symbol,
      teacherMessage: `${el.danish} (${el.symbol}): ${el.description} Det er et ${el.category}. Farlighed: ${el.danger}.`,
      teacherTalking: true,
    });
  },
  
  clearTeacher: () => {
    set({ teacherTalking: false, selectedForExplain: null });
  },
  
  resetMixture: () => {
    set({
      mixture: { symbols: [], reaction: null, color: '#4FC3F7', volume: 0 },
      selectedElements: [],
      currentEffect: null,
      effectMessage: '',
      showExplosion: false,
      reagentGlasses: [{ id: 1, symbols: [], color: 'transparent', active: true }],
      activeGlassId: 1,
    });
  },
}));

export default useGameStore;
