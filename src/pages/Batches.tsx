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
import { ColumnsType } from 'antd/lib/table';
import Address from '../components/Address';
import ProcessorDetail from '../components/ProcessorDetail';
import RoasterDetail from '../components/RoasterDetail';
import EnvironmentDetail from '../components/EnvironmentDetail';

const layout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 10 }
};
const tailLayout = {
	wrapperCol: { offset: 4, span: 10 }
};
const data = [
	{
		no: 1,
		name: 'Doi Change',
		batch_no: '4959633856',
		tuc: '0xd8d0964fd00af76e3e6fd2be15f9eed3caf928f8',
		materials: '9335865699(2853858863), 3247298426(6523276346)',
		timestamp: new Date().getTime(),
		processor: {
			origin: 'Doi Saket, Chaing Mai, Thailand',
			variety: 'Heirloom Catimor',
			description:
				'This coffee is grown in the farm name “Doi Saket Farmers”',
			altitude: '1,300+ m',
			processing: 'Natural Process'
		}
	}
];

export default function Products() {
	const columns: ColumnsType<typeof data[0]> = [
		{
			title: 'No',
			dataIndex: 'no'
		},
		{
			title: 'Batch No',
			dataIndex: 'batch_no'
		},
		{
			title: 'Material Batch',
			dataIndex: 'materials'
		},
		{
			title: 'Processor',
			dataIndex: 'processor',
			render: (detail) => <ProcessorDetail detail={detail} />
		},
		{
			title: 'Roaster',
			dataIndex: 'roaster',
			render: () => <RoasterDetail />
		},
		{
			title: 'Environmental Sustainability',
			dataIndex: 'env',
			render: () => <EnvironmentDetail />
		},
		{
			title: 'TUC Address',
			dataIndex: 'tuc',
			width: '140px',
			render(text) {
				return <Address>{text}</Address>;
			}
		},
		{
			title: 'Timestamp',
			dataIndex: 'timestamp'
		},
		{
			title: 'Transaction'
		}
	];
	return (
		<React.Fragment>
			<Descriptions
				column={1}
				labelStyle={{ width: '160px', fontWeight: 500 }}
				title="Product Information"
			>
				<Descriptions.Item label="Product Code">
					8588898993
				</Descriptions.Item>
				<Descriptions.Item label="Product Name">
					Medium roasted blend beans
				</Descriptions.Item>
				<Descriptions.Item label="Materials">
					Doi Saket green beans, Doi Chang green beans
				</Descriptions.Item>
				<Descriptions.Item label="Product Owner">
					0xf04ada1b07cff3b09d7fd7cc9b342900e17f7938
				</Descriptions.Item>
				<Descriptions.Item label="BAC Address">
					0xc22d4a0c96122151d0f579000083484879dbb527
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
