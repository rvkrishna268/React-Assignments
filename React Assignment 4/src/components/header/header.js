import "./header.css"
const Header = () =>{
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require("../../Images/header.png")} alt="log"/>
                </section>
                <section className="camera-icon">
                    <img src={require("../../Images/camera.jpg")} alt="camera"/>
                </section>
            </nav>
        </>
    )
}
export default Header;