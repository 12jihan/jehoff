import React from 'react'

export default function NavbarComponent() {
    return (
        <div className="navbar-container">
            <div className="navbar-left-group">

            </div>

            <div className="navbar-right-group">
                <div className="navbar-item">
                    <p className="navbar-text">Home</p>
                </div>
                <div className="navbar-item">
                    <p className="navbar-text">About</p>
                </div>
                <div className="navbar-item">
                    <p className="navbar-text">Projects</p>
                </div>
                <div className="navbar-item">
                    <p className="navbar-text">Contact</p>
                </div>
            </div>
            <style jsx>{`
                .navbar-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    position: absolute;
                    width: 100%;
                    height: 50px;
                    background-color: #2C3E50;
                }

                .navbar-right-group {
                    display: flex;
                    flex-direction: row;
                }

                .navbar-item {
                    background-color: #2C3E50;
                    cursor: pointer;
                    height: 100%;
                    width: auto;
                    padding: 0 25px;
                }

                .navbar-item:hover {
                    background-color: #34495E;
                }

                .navbar-text {
                    color: #BDC3C7;
                }
            `}</style>
        </div>
    )
}
