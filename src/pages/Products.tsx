import React from 'react';
import { Typography, Table, Form, Input, Select, Button, Row, Col } from 'antd';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 8 }
};
const tailLayout = {
	wrapperCol: { offset: 4, span: 8 }
};

const columns = [
	{
		title: 'No'
	},
	{
		title: 'Code',
		dataIndex: 'code'
	},
	{
		title: 'Name',
		dataIndex: 'name'
	},
	{
		title: 'Owner',
		dataIndex: 'owner'
	},
	{
		title: 'BAC Address',
		dataIndex: 'bac'
	},
	{
		title: 'Timestamp',
		dataIndex: 'timestamp'
	},
	{
		title: 'Batch'
	}
];
const data = [
	{
		code: '12345',
		name: 'Doi Change',
		owner: '0x123',
		bac: '0x456',
		timestamp: new Date().getTime()
	}
];

export default function Products() {
	return (
		<React.Fragment>
			<Table pagination={false} columns={columns} dataSource={data} />

			<br />

			<Row>
				<Col offset={1}>
					<Typography.Title level={4}>
						Register products
					</Typography.Title>
				</Col>
			</Row>
			<br />
			<Form {...layout}>
				<Form.Item label="Product name">
					<Input />
				</Form.Item>
				<Form.Item label="Product code">
					<Input />
				</Form.Item>
				<Form.Item label="Materials">
					<Select>
						<Select.Option value={1}>A</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button type="primary" color="success">
						Register product
					</Button>
				</Form.Item>
			</Form>
		</React.Fragment>
	);
}
