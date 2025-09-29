// src/pages/HomePage.tsx
import React from 'react';
import Sidebar from '../components/Sidebar'; // Importe le composant Sidebar
import { Icon } from '@material-ui/core';

const HomePage: React.FC = () => {
  return (
    <div className="layout">
      {/* Utilisation du composant Sidebar */}
      <Sidebar activeLink="Home" />

      {/* Main content - Contenu du Dashboard */}
      <main className="content" role="main">
        {/* J'ai enveloppé le contenu dans un conteneur principal (main-container) pour la boîte de fond blanche, tel que recommandé précédemment */}
        <div className="main-container"> 
            <header className="topbar">
              <h1 className="title">DASHBOARD</h1>
              {/* Le Logout est conservé mais devrait idéalement être un bouton ou un lien géré par une fonction React */}
              <a href="#" className="logout" aria-label="Logout">Logout</a>
            </header>

            <section className="search-area" aria-label="Search area">
              <div className="search-bar" role="search">
                {/* Icône de recherche (🔎) remplacée par Material Icon */}
                <Icon className="search-icon">search</Icon>
                <input type="text" placeholder="Search" aria-label="Search documents" />
              </div>
            </section>

            <section className="card" aria-label="Recent Documents">
              <h2 className="card-title">Recent Documents</h2>
              <table className="doc-table" aria-label="Recent documents table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Template row. En React/TS, cette section serait bouclée (mapped) avec des données réelles. */}
                  <tr>
                    <td>EMA 202</td>
                    <td>Mr Eric</td>
                    <td>23/09/21</td>
                  </tr>
                </tbody>
              </table>
            </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
