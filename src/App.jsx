import React from 'react';
import AdminDrawer from './pages/admin/AdminDrawer';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Memanggil komponen mandiri buatanmu */}
      <AdminDrawer />
    </div>
  );
}

export default App;