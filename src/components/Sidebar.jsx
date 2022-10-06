import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="dashboard">Dashboard</div>
            <div className="search">
                <i className="bi bi-search"></i>
                <input className='form-control' type="search" placeholder='Quick Search ...' />
            </div>
            <div className="sidebar-nav">
                <ul>
                    <li><Link to="/home/add"><i className="bi bi-person-plus"></i>Qo'shish</Link></li>
                    <li><Link to="/home/person"><i className="bi bi-clipboard-data"></i>O'quvchilar</Link></li>
                    <li><Link to="/home/sertificate"><i className="bi bi-clipboard-data"></i>Sertifikat kiritish</Link></li>
                    <li><Link to="/home/sertificateGet"><i className="bi bi-clipboard-data"></i>Sertifikat olish</Link></li>
                </ul>
            </div>
            <div className="admin">
                <div className="admin-name">
                    <span className='name'>Direktor</span><br />
                    <span className='last'>Super Admin</span>
                </div>
                <div className="admin-icon">
                    <i className="bi bi-box-arrow-in-left"></i>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;