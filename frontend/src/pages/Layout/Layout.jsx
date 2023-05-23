import React from 'react';
import {Layout, Menu} from "antd";
import styles from './Layout.module.scss';
import {Link, Outlet} from "react-router-dom";

const { Header, Content } = Layout;
const MainLayout = () => {
    return (
        <Layout>
            <Layout className={styles.antLayout}>
                <Header className={styles.header}>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="back">
                            <Link to="/">Go Back</Link>
                        </Menu.Item>
                        <Menu.Item key="products">
                            <Link to="/products">Products List</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content className={styles.content}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;