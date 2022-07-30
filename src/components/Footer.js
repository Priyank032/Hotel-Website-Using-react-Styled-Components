import React from 'react'
import "../footer.css"
const Footer = () => {
    return (
        <>
        <footer>
        <div className="main-content">
            <div className="left box">
                <h2>About us</h2>
                <div className="content">
                    <p>Clarks Inn Suites is a Hotel where you can enjoy healthy & spicy foods, and also you can organize your functions like Birthday Parties, Ring Ceremony, and so on.You can also stay with your friends, families and enjoy our services.</p>
                    <div className="social">
                        <a href="https://facebook.com/coding.np"><span className="fab fa-facebook-f"></span></a>
                        <a href="#"><span className="fab fa-twitter"></span></a>
                        <a href="https://instagram.com/coding.np"><span className="fab fa-instagram"></span></a>
                        <a href="https://youtube.com/c/codingnepal"><span className="fab fa-youtube"></span></a>
                    </div>
                </div>
            </div>
            <div className="center box">
                <h2>Address</h2>
                <div className="content">
                    <div className="place">
                        <span className="fas fa-map-marker-alt"></span>
                        <span className="text">Near DD Mall, Phoolbagh</span>
                    </div>
                    <div className="phone">
                        <span className="fas fa-phone-alt"></span>
                        <span className="text">+089-765432100</span>
                    </div>
                    <div className="email">
                        <span className="fas fa-envelope"></span>
                        <span className="text">hotelclarks@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="right box">
                <h2>Contact us</h2>
                <div className="content">
                    <form action="#">
                        <div className="email">
                            <div className="text">Email *</div>
                            <input type="email" required />
                        </div>
                        <div className="msg">
                            <div className="text">Message *</div>
                            <textarea rows="2" cols="25" required></textarea>
                        </div>
                        <div className="btn">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <div className="bottom">
                    <center>
                        <span className="credit">Created By <a href="#">Priyank Agrawal</a> | </span>
                        <span className="far fa-copyright"></span><span> 2021 All rights reserved.</span>
                    </center>
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer
