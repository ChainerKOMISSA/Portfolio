import {Quiz} from "@/data/types";

export const reactQuiz: Quiz = {
    slug: "react",
    title: "React Mastery",
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
        // ... ajoute tes 14 autres questions ici, même forme
    ],
};