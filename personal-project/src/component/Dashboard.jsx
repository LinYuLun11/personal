import { useState } from "react";

function Dashboard(){
    const [pages, setPages] = useState('');

    const quickLinks = [
        {key: 'job', label: '工作'},
        {key: 'stock', label: '股票'},
        {key: 'game', label: '遊戲'},
        {key: 'food', label: '美食'},
        {key: 'novel', label: '小說'},
        {key: 'setting', label: '設定'},
    ];

    function handlePageChange(link){
        console.log(link);
    }

    return(
        <div style={{...styles.dashboard, width: '100%'}}>
            <div style={styles.buttonsBox}>
                {quickLinks.map(link => (
                    <button key={link.key} style={styles.button} onClick={() => handlePageChange(link.key)}>{link.label}</button>
                ))}
            </div>
        </div>
    );
}

const styles = {
    dashboard:{
        height: 200,
        width: 100,
        display: 'flex',
        alignItems: 'center',
		justifyContent: 'center',
		position: 'fixed',
        top: 60,
    },
    buttonsBox:{
        display: 'flex',
        position: 'fixed',
        gap: 40,
    },
    button:{
        cursor: 'pointer',
    },
};

export default Dashboard;