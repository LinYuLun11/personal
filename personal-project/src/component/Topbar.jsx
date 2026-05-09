function Topbar(){
    const now = new Date();
    const time = now.toISOString();
    const date = now.toISOString().split('T')[0];
    return(
        <div style={styles.topbar}>
            <div style={styles.right}>
                <h3>lin's website</h3>
                <h3>今天是: {date}</h3>
            </div>
        </div>
    );
}

const styles = {
    topbar:{
        height: 60,
		backgroundColor: '#0f1b35',
		borderBottom: '1px solid #0f3460',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '0 24px',
		position: 'fixed',
		top: 0,
		right: 0,
        left: 0,
		zIndex: 40,
    },
    right:{
        display: 'flex',
        alignItems: 'center',
        gap: 12
    },
};

export default Topbar;