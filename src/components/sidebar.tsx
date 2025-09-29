import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core'; // Pour une meilleure gestion des icônes Material

interface SidebarProps {
  activeLink: 'Home' | 'Folders' | 'Upload' | 'Settings';
}

const Sidebar: React.FC<SidebarProps> = ({ activeLink }) => {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="brand">
        <img src="seven.png" alt="logo" /> 
      </div>

      <nav className="nav">
        {/* HOME */}
        <Link to="/" className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`} aria-current={activeLink === 'Home' ? 'page' : undefined}>
          <Icon className="icon">home</Icon> 
          <span className="label">Home</span>
        </Link>
        
        {/* FOLDERS */}
        <Link to="/folders" className={`nav-item ${activeLink === 'Folders' ? 'active' : ''}`}>
          <Icon className="icon">folder</Icon>
          <span className="label">Folders</span>
        </Link>
        
        {/* UPLOAD */}
        <Link to="/upload" className={`nav-item ${activeLink === 'Upload' ? 'active' : ''}`}>
          <Icon className="icon">cloud_upload</Icon>
          <span className="label">Upload</span>
        </Link>
        
        {/* SETTINGS */}
        <Link to="/settings" className={`nav-item ${activeLink === 'Settings' ? 'active' : ''}`}>
          <Icon className="icon">settings</Icon>
          <span className="label">Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
