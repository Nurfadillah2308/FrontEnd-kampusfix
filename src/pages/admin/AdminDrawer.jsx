import React, { useState } from 'react';
import { LayoutGrid, ClipboardList, LogOut, ShieldAlert } from 'lucide-react';
import './AdminDrawer.css';

const AdminDrawer = () => {
  // Menggunakan state biasa untuk mengatur menu aktif agar bisa dites langsung tanpa routing rumit
  const [activeMenu, setActiveMenu] = useState('/admin/dashboard');

  return (
    <aside className="admin-sidebar">
      {/* Bagian Atas: Logo KampusFix */}
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon-wrapper">
            <ShieldAlert size={20} className="logo-icon" />
          </div>
          <div>
            <h1 className="logo-text">KampusFix</h1>
            <p className="logo-subtext">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Bagian Tengah: Navigasi Menu */}
      <nav className="sidebar-nav">
        <button 
          onClick={() => setActiveMenu('/admin/dashboard')}
          className={`nav-item ${activeMenu === '/admin/dashboard' ? 'active' : ''}`}
        >
          <LayoutGrid size={18} className="nav-icon" />
          <span className="nav-label">Dashboard Statistik</span>
        </button>

        <button 
          onClick={() => setActiveMenu('/admin/kelola-laporan')}
          className={`nav-item ${activeMenu === '/admin/kelola-laporan' ? 'active' : ''}`}
        >
          <ClipboardList size={18} className="nav-icon" />
          <span className="nav-label">Kelola Laporan</span>
        </button>
      </nav>

      {/* Bagian Bawah: Profil & Tombol Logout */}
      <div className="sidebar-footer">
        <div className="profile-section">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60" 
            alt="Budi Santoso" 
            className="admin-avatar" 
          />
          <div className="admin-info">
            <h4 className="admin-name">Budi Santoso</h4>
            <p className="admin-role">Facility Management</p>
          </div>
        </div>
        
        <button className="logout-button" onClick={() => alert('Logout clicked')}>
          <LogOut size={16} className="logout-icon" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminDrawer;