import { useState } from 'react';
import type { Technologie } from './CarteTechnologie';

interface AjouterTechnologieProps {
    onAjouter: (technologie: Technologie) => void;
}

function AjouterTechnologie({ onAjouter }: AjouterTechnologieProps) {
    const [nom, setNom] = useState('');
    const [categorie, setCategorie] = useState('');

    function ajouter(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (nom.trim() === '' || categorie.trim() === '') {
            return;
        }

        onAjouter({
            id: Date.now(),
            nom: nom.trim(),
            categorie: categorie.trim(),
            niveauPopularite: 3,
            couleur: '#7c3aed',
        });

        setNom('');
        setCategorie('');
    }

    return (
        <form onSubmit={ajouter}>
            <h2>Ajouter une technologie</h2>

            <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
            />

            <input
                type="text"
                placeholder="Catégorie"
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
            />

            <button type="submit">Ajouter</button>
        </form>
    );
}

export default AjouterTechnologie;