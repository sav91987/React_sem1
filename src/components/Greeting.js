function Greeting() {
    const hour = new Date().getHours();
    if (hour <= 12) {
        return (
            <div>
                <h1>Goodmorning, React!</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Goodevening, React!</h1>
            </div>
        );
    }
}

export default Greeting;
