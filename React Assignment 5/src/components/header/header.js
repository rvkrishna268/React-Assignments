import "./header.css";
const Header = () => {
    return (
        <>
            <nav className="header">
                    <section className="logo">
                        <img src={require("../../images/header.png")} alt="logo"/>
                    </section>
                    <section className="camera-icon">
                        <img src={require("../../images/camera.jpg")} alt="cam"/>
                    </section>
            </nav>
        </>
    )
}
export default Header;