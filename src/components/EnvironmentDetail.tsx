import { Button, Form, Input, Modal, Table, Typography } from 'antd';
import React, { useState } from 'react';

const columns = [
	{ title: 'Title', dataIndex: 'title' },
	{ title: 'Detail', dataIndex: 'detail' }
];

const dataSource = [
	{
		title: 'Wastewater',
		detail: 'Wastewater treatment before releasing to outside.'
	},
	{
		title: 'Outer hull',
		detail: 'Cascara tea from dried outer skin of coffee cherries.'
	},
	{
		title: 'Non-QC coffee cherries',
		detail: 'Making fertilizer from unripe, overripe, and damaged cherries.'
	}
];

export default function EnvironmentDetail() {
	const [ visible, setVisible ] = useState(false);

	// const { origin, variety, description, altitude, processing } = detail;

	return (
		<div>
			<Button type="link" onClick={() => setVisible(true)}>
				Detail
			</Button>
			<Modal
				visible={visible}
				title="Processor detail"
				footer={null}
				onCancel={() => setVisible(false)}
				width={640}
			>
				<Table
					columns={columns}
					dataSource={dataSource}
					pagination={false}
				/>
				<br />
				<Typography.Title level={5}>Practices</Typography.Title>
				<Form
					labelCol={{ span: 3 }}
					wrapperCol={{ span: 9 }}
					labelAlign="left"
				>
					<Form.Item label="Title">
						<Input />
					</Form.Item>
					<Form.Item label="Detail">
						<Input />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 3 }}>
						<Button type="primary">Add</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}
