/*


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import berza from '../../assets/berza.png';
import logo from '../../assets/logo.png';

const Dashboard: React.FC = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="StockEdge MK Logo" className="navbar-logo" />
                </div>
                <ul>
                    <li><Link to="/dashboard">Dashboard home</Link></li>
                    <li><Link to="/historical-data">Historical Data</Link></li>
                    <li className="dropdown" onClick={toggleDropdown}>
                        My Account
                        {isDropdownVisible && (
                            <ul className="dropdown-content">
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            <div className="content">
                <section>
                    <h2>My Reports</h2>
                    <p>Report data...</p>
                </section>

                <section>
                    <h2>Latest News</h2>
                    <a href="https://www.mse.mk/top/news/latest/197" target="_blank" rel="noopener noreferrer">
                        <img src={berza} alt="Latest News" style={{ width: '250px', borderRadius: '5px' }} />
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;


 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import berza from '../../assets/berza.png';
import logo from '../../assets/logo.png';

const Dashboard: React.FC = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [ticker, setTicker] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleApply = () => {
        const report = { ticker, startDate, endDate };
        console.log('Generated Report:', report);
        localStorage.setItem('report', JSON.stringify(report));
        alert('Report saved successfully!');
    };

    return (
        <div className="dashboard-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="StockEdge MK Logo" className="navbar-logo" />
                </div>
                <ul>
                    <li><Link to="/dashboard">Dashboard home</Link></li>
                    <li className="dropdown" onClick={toggleDropdown}>
                        My Account
                        {isDropdownVisible && (
                            <ul className="dropdown-content">
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            {/* Content */}
            <div className="content">
                <section>
                    <h2>My Reports</h2>
                    <div className="form-container">
                        <div className="form-group">
                            <label htmlFor="ticker">Ticker:</label>
                            <select id="ticker" value={ticker} onChange={(e) => setTicker(e.target.value)}>
                                <option value="ADIN">ADIN</option>
                                <option value="AMEH">AMEH</option>
                                <option value="CKBH">CKBH</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="startDate">Start Date:</label>
                            <input
                                id="startDate"
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endDate">End Date:</label>
                            <input
                                id="endDate"
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <button onClick={handleApply}>Apply</button>
                    </div>
                </section>

                <section>
                    <h2>Latest News</h2>
                    <a href="https://www.mse.mk/top/news/latest/197" target="_blank" rel="noopener noreferrer">
                        <img src={berza} alt="Latest News" style={{ width: '250px', borderRadius: '5px' }} />
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
