const PosRes = (prop) => {
    const data = prop.val;
    
    return (
        <div className='pos-res'>
            <div className='container'>
                {
                    data.map((d) => {
                        <div className="data-prev">
                            <div className="username">{d.username}</div>
                            <p className="message">{d.message}</p>
                            <div className="like">{d.like}</div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}
 
export default PosRes;