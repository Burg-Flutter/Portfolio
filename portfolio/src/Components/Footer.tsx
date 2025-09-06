import React from 'react';

const Footer: React.FC = () => (
    <footer style={{
        background: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 0',
        position: 'static',
        width: '100%',
        bottom: 0,
        left: 0
    }}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
);

export default Footer;