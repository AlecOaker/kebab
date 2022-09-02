import styles from "./Header.module.css";
import kebabImage from "../../assets/kebab.jpg";
import kebabLogo from "../../assets/kebab-logo-text.png";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={kebabLogo} alt="YUM-YUM-KEBAB" />
                </div>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles["main-image"]}>
                <img src={kebabImage} alt="Kebab" />
            </div>
        </>
    );
};

export default Header;
