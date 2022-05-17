import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
    const navigate = useNavigate();
    
    return (
        <div style={{ textAlign: 'end' }}>
            <button onClick={() => navigate(-1)} className="btn-get-end" href="#">목록</button >
        </div>
    )
}

export default GoBackButton;