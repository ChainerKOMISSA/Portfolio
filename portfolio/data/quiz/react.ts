import {Quiz} from "@/data/types";

export const reactQuiz: Quiz = {
    slug: "react",
    title: "Architecture React avancée",
    questions: [
        {
            id: "q1",
            prompt:
                "Lequel de ces hooks est le plus approprié pour effectuer une souscription à une API externe ou gérer des effets de bord qui nécessitent un nettoyage ?",
            code: `import { useEffect } from 'react';

function UserStatus({ userId }) {
  // Quel hook insérer ici ?
}`,
            options: [
                { id: "A", label: "useState" },
                { id: "B", label: "useEffect" },
                { id: "C", label: "useContext" },
                { id: "D", label: "useReducer" },
            ],
            correctOptionId: "B",
        },
        {
            id: "q2",
            prompt:
                "Quel hook permet de mémoriser une valeur calculée afin d'éviter un recalcul coûteux à chaque rendu, tant que ses dépendances n'ont pas changé ?",
            code: `function ProductList({ items, filter }) {
  const filteredItems = /* mémoriser ici */(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  return <List data={filteredItems} />;
}`,
            options: [
                { id: "A", label: "useMemo" },
                { id: "B", label: "useCallback" },
                { id: "C", label: "useEffect" },
                { id: "D", label: "useLayoutEffect" },
            ],
            correctOptionId: "A",
        },
        {
            id: "q3",
            prompt:
                "Quel hook faut-il utiliser pour mémoriser une référence de fonction stable et éviter des re-rendus inutiles des composants enfants qui la reçoivent en prop ?",
            code: `function Parent() {
  const handleClick = /* mémoriser ici */(() => {
    console.log('clicked');
  }, []);

  return <Child onClick={handleClick} />;
}`,
            options: [
                { id: "A", label: "useMemo" },
                { id: "B", label: "useCallback" },
                { id: "C", label: "useRef" },
                { id: "D", label: "useState" },
            ],
            correctOptionId: "B",
        },
        {
            id: "q4",
            prompt:
                "Quel hook permet d'accéder directement à un nœud du DOM sans provoquer de nouveau rendu lorsqu'il change ?",
            code: `function TextInput() {
  const inputRef = /* hook ici */(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return <input ref={inputRef} />;
}`,
            options: [
                { id: "A", label: "useState" },
                { id: "B", label: "useMemo" },
                { id: "C", label: "useRef" },
                { id: "D", label: "useImperativeHandle" },
            ],
            correctOptionId: "C",
        },
        {
            id: "q5",
            prompt:
                "Pour gérer une logique d'état complexe avec plusieurs sous-valeurs et des transitions bien définies, quel hook est généralement préférable à plusieurs useState ?",
            code: `const initialState = { count: 0, loading: false, error: null };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = /* hook ici */(reducer, initialState);
}`,
            options: [
                { id: "A", label: "useState" },
                { id: "B", label: "useReducer" },
                { id: "C", label: "useContext" },
                { id: "D", label: "useEffect" },
            ],
            correctOptionId: "B",
        },
        {
            id: "q6",
            prompt:
                "Quel mécanisme React permet de partager une valeur (comme un thème ou un utilisateur connecté) à travers un arbre de composants sans passer par le prop drilling ?",
            code: `const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = /* hook ici */(ThemeContext);
  return <div className={theme}>...</div>;
}`,
            options: [
                { id: "A", label: "useReducer" },
                { id: "B", label: "useContext" },
                { id: "C", label: "useRef" },
                { id: "D", label: "useMemo" },
            ],
            correctOptionId: "B",
        },
        {
            id: "q7",
            prompt:
                "Quel composant React permet de capturer les erreurs JavaScript survenant dans l'arbre de ses composants enfants et d'afficher une interface de secours ?",
            code: `class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Une erreur est survenue.</h1>;
    }
    return this.props.children;
  }
}`,
            options: [
                { id: "A", label: "Suspense" },
                { id: "B", label: "Fragment" },
                { id: "C", label: "ErrorBoundary" },
                { id: "D", label: "Portal" },
            ],
            correctOptionId: "C",
        },
        {
            id: "q8",
            prompt:
                "Quel composant React permet d'afficher un contenu de secours (fallback) pendant qu'un composant enfant chargé de façon asynchrone (ex: React.lazy) n'est pas encore prêt ?",
            code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <SuspenseComponent fallback={<Spinner />}>
      <LazyComponent />
    </SuspenseComponent>
  );
}`,
            options: [
                { id: "A", label: "Suspense" },
                { id: "B", label: "ErrorBoundary" },
                { id: "C", label: "StrictMode" },
                { id: "D", label: "Profiler" },
            ],
            correctOptionId: "A",
        },
        {
            id: "q9",
            prompt:
                "Quelle prop spéciale doit être ajoutée à chaque élément d'une liste rendue dynamiquement pour aider React à identifier les éléments qui ont changé, été ajoutés ou supprimés ?",
            code: `function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li /* prop ici */={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`,
            options: [
                { id: "A", label: "id" },
                { id: "B", label: "key" },
                { id: "C", label: "ref" },
                { id: "D", label: "index" },
            ],
            correctOptionId: "B",
        },
        {
            id: "q10",
            prompt:
                "Quelle fonction utilitaire de React permet de rendre un composant enfant dans un nœud DOM situé en dehors de la hiérarchie DOM du composant parent (utile pour les modales) ?",
            code: `import { createPortal } from 'react-dom';

function Modal({ children }) {
  return /* fonction ici */(
    children,
    document.getElementById('modal-root')
  );
}`,
            options: [
                { id: "A", label: "ReactDOM.render" },
                { id: "B", label: "createPortal" },
                { id: "C", label: "hydrateRoot" },
                { id: "D", label: "createRoot" },
            ],
            correctOptionId: "B",
        },
        {
            id: "q11",
            prompt:
                "Quel Higher-Order Component natif de React permet d'éviter le re-rendu d'un composant fonctionnel si ses props n'ont pas changé (comparaison superficielle) ?",
            code: `function ExpensiveComponent({ data }) {
  return <div>{data.value}</div>;
}

export default /* HOC ici */(ExpensiveComponent);`,
            options: [
                { id: "A", label: "React.forwardRef" },
                { id: "B", label: "React.memo" },
                { id: "C", label: "React.lazy" },
                { id: "D", label: "React.createFactory" },
            ],
            correctOptionId: "B",
        },
        {
            id: "q12",
            prompt:
                "Quelle fonction permet à un composant enfant utilisant forwardRef d'exposer une API impérative personnalisée à son parent, plutôt que le nœud DOM brut ?",
            code: `const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);

  /* hook ici */(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} />;
});`,
            options: [
                { id: "A", label: "useImperativeHandle" },
                { id: "B", label: "useLayoutEffect" },
                { id: "C", label: "useDebugValue" },
                { id: "D", label: "useId" },
            ],
            correctOptionId: "A",
        },
        {
            id: "q13",
            prompt:
                "Quel hook s'exécute de manière synchrone après toutes les mutations du DOM, avant que le navigateur ne peigne l'écran, ce qui est utile pour lire des mesures de layout ?",
            code: `function Tooltip() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  /* hook ici */(() => {
    setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  return <div ref={ref}>Tooltip content</div>;
}`,
            options: [
                { id: "A", label: "useEffect" },
                { id: "B", label: "useLayoutEffect" },
                { id: "C", label: "useInsertionEffect" },
                { id: "D", label: "useTransition" },
            ],
            correctOptionId: "B",
        },
        {
            id: "q14",
            prompt:
                "Quel hook, introduit avec React 18, permet de marquer une mise à jour d'état comme non urgente, afin de ne pas bloquer l'interface pendant un rendu coûteux ?",
            code: `function SearchResults({ query }) {
  const [isPending, startTransition] = /* hook ici */();

  const handleChange = (value) => {
    startTransition(() => {
      setQuery(value);
    });
  };
}`,
            options: [
                { id: "A", label: "useDeferredValue" },
                { id: "B", label: "useTransition" },
                { id: "C", label: "useSyncExternalStore" },
                { id: "D", label: "useOptimistic" },
            ],
            correctOptionId: "B",
        },
        {
            id: "q15",
            prompt:
                "Quel hook permet de souscrire à une source de données externe (en dehors de React) de façon compatible avec le rendu concurrent, en garantissant la cohérence entre le serveur et le client ?",
            code: `function useWindowWidth() {
  const width = /* hook ici */(
    (callback) => {
      window.addEventListener('resize', callback);
      return () => window.removeEventListener('resize', callback);
    },
    () => window.innerWidth,
    () => 0
  );

  return width;
}`,
            options: [
                { id: "A", label: "useExternalStore" },
                { id: "B", label: "useSyncExternalStore" },
                { id: "C", label: "useSubscription" },
                { id: "D", label: "useEffectEvent" },
            ],
            correctOptionId: "B",
        },
    ],
};