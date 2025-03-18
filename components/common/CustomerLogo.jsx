import React from 'react';
// import PropTypes from 'prop-types';
import Image from "next/image";
import styles from './Marquee.module.css';

const CustomerLogo = ({ imageUrl, companyName, startDate }) => {
    return (
        <div className="customer-logo" key="key">
            <Image
                width={300}
                height={128}
                src={imageUrl}
                alt="img"
            />
            <div className={styles.companyInfo}>
                {/* <div>{companyName}</div> */}
                <p>Since {startDate}</p>
            </div>
        </div>
    );
};

// CustomerLogo.propTypes = {
//     imageUrl: PropTypes.string.isRequired,
//     companyName: PropTypes.string.isRequired,
//     startDate: PropTypes.string.isRequired,
// };

export default CustomerLogo;