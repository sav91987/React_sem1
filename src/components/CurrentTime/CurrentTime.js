import './currentTime.css'

export const CurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    return <h2 className="currentTime"> {currentTime} </h2>;
}