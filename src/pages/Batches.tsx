import React from 'react';
import {
	Typography,
	Table,
	Form,
	Input,
	Button,
	Row,
	Col,
	Descriptions
} from 'antd';
import { MinusCircleTwoTone } from '@ant-design/icons';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 10 }
};
const tailLayout = {
	wrapperCol: { offset: 4, span: 10 }
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
		title: 'Batch No.',
		dataIndex: 'batch_no'
	},
	{
		title: 'Material Batch',
		dataIndex: 'materials'
	},
	{
		title: 'Detail 1',
		dataIndex: 'detail_1'
	},
	{
		title: 'Detail 2',
		dataIndex: 'detail_2'
	},
	{
		title: 'Environmental Sustainability',
		dataIndex: 'env'
	},
	{
		title: 'TUC Address',
		dataIndex: 'tuc'
	},
	{
		title: 'Timestamp',
		dataIndex: 'timestamp'
	},
	{
		title: 'Transaction'
	}
];
const data = [
	{
		code: '12345',
		name: 'Doi Change',
		owner: '0x78d2d12a0bd78eaeaecd4236a93659b0d6e98d36',
		tuc: '0xad008979d7c1a3c130f3091983dfe3209bf14e7f',
		timestamp: new Date().getTime()
	}
];

export default function Products() {
	return (
		<React.Fragment>
			<Descriptions
				column={1}
				labelStyle={{ width: '160px', fontWeight: 500 }}
				title="Product Information"
			>
				<Descriptions.Item label="Product Code">
					Zhou Maomao
				</Descriptions.Item>
				<Descriptions.Item label="Product Name">
					1810000000
				</Descriptions.Item>
				<Descriptions.Item label="Materials">
					Hangzhou, Zhejiang
				</Descriptions.Item>
				<Descriptions.Item label="Product Owner">
					empty
				</Descriptions.Item>
				<Descriptions.Item label="BAC Address">
					No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang,
					China
				</Descriptions.Item>
			</Descriptions>
			<Table pagination={false} columns={columns} dataSource={data} />
			<br />
			<Row>
				<Col offset={1}>
					<Typography.Title level={4}>Add Batch</Typography.Title>
				</Col>
			</Row>
			<br />
			<Form {...layout}>
				<Form.Item label="Batch Number">
					<Input style={{ width: '80%' }} />
				</Form.Item>
				<Form.List name="materials">
					{(fields, { add, remove }) => (
						<React.Fragment>
							{fields.map((field, index) => (
								<Form.Item
									label={`Material ${index + 1}`}
									key={index}
								>
									<Form.Item noStyle>
										<Input style={{ width: '80%' }} />
									</Form.Item>
									<MinusCircleTwoTone
										type="danger"
										className="dynamic-delete-button"
										twoToneColor="#ff4d4f"
										onClick={() => remove(field.name)}
									/>
								</Form.Item>
							))}
							<Form.Item {...tailLayout}>
								<Button type="dashed" onClick={add}>
									Add Material
								</Button>
							</Form.Item>
						</React.Fragment>
					)}
				</Form.List>
				<Form.Item {...tailLayout}>
					<Button type="primary" color="success">
						Add Batch
					</Button>
				</Form.Item>
			</Form>
		</React.Fragment>
	);
}
