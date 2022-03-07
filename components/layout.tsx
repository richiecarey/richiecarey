import Header from "./header";
import Footer from "./footer";
import Meta from "./meta";
import styles from "../styles/Layout.module.scss";

//import React, { useState, useEffect } from "react";
//import prism from "prismjs";

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    // useEffect(() => {
    //     prism.highlightAll();
    // }, []);

    return (
        <>
            <Meta />
            <Header />
            <main className={styles.main}>
                <section className={styles.content}>{children}</section>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
