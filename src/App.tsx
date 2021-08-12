import React from 'react';
import { Col, Layout, Row, Tabs, Typography } from 'antd';
import './App.css';

import Products from './pages/Products';
import Batches from './pages/Batches';

const { Content, Header } = Layout;
const TabPane = Tabs.TabPane;

const renderTabBar = (
	props: any,
	DefaultTabBar: React.ComponentType
): React.ReactElement => <DefaultTabBar {...props} />;

function App() {
	const tabs = [
		{
			tab: 'Products',
			component: <Products />
		},
		{
			tab: 'Batches',
			title: 'Product Batch Information',
			component: <Batches />
		},
		{
			tab: 'Transactions',
			component: ''
		},
		{
			tab: 'Traceability',
			component: ''
		}
	];
	return (
		<Layout>
			<Header>
				<Row style={{ height: '64px' }} align="middle">
					<Col>
						<Typography.Title
							style={{ color: 'whitesmoke', margin: '0' }}
							level={3}
						>
							Blockchain Coffee
						</Typography.Title>
					</Col>
				</Row>
			</Header>
			<Content>
				<Layout
					style={{
						padding: '2rem',
						maxWidth: '1240px',
						margin: 'auto'
					}}
				>
					<Tabs
						type="card"
						tabPosition="left"
						tabBarGutter={0}
						renderTabBar={renderTabBar}
					>
						{tabs.map((tab) => (
							<TabPane
								key={tab.tab}
								tab={tab.tab}
								style={{
									padding: '0.5rem 2rem',
									background: 'white',
									minHeight: 'calc(100vh - 64px - 4rem)'
								}}
							>
								<Typography.Title level={2}>
									{tab.title || tab.tab}
								</Typography.Title>
								{tab.component}
							</TabPane>
						))}
					</Tabs>
				</Layout>
			</Content>
		</Layout>
	);
}

export default App;
