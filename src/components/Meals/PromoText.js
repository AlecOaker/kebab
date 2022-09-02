import styles from "./PromoText.module.css";

const PromoText = () => {
    return (
        <section className={styles["promo-text"]}>
            <h2>YUM-YUM-KEBAB</h2>
            <p>
                Yum-yum-Kebab is about unforgettable taste. Our author's recipes
                contain selected ingredients, spices that we bring from
                different countries and the experience of the years during which
                we are constantly improving
            </p>
            <p>
                We value your time, so each order is issued within a maximum of
                15 minutes
            </p>
        </section>
    );
};

export default PromoText;
