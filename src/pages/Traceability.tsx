import { CheckCircleFilled } from '@ant-design/icons';
import { Col, Descriptions, Row, Timeline, Typography } from 'antd';
import React from 'react';

const descriptions = [
	{
		label: 'Product code',
		value: '8588898993'
	},
	{
		label: 'Origin',
		value: 'Doi Saket, Chaing Mai, Thailand'
	},
	{
		label: 'Variety',
		value: 'Heirloom Catimor'
	},
	{
		label: 'Farm',
		value: 'Doi Saket Farmers'
	},
	{
		label: 'Description',
		value: 'This coffee is grown in the farm name “Doi Saket Farmers”'
	},
	{
		label: 'Altitude',
		value: '1,300+ m'
	},
	{
		label: 'Processing method',
		value: 'Natural Process'
	},
	{
		label: 'Processor certificates',
		value: 'Organic Product (2020)'
	},
	{
		label: 'Roast date',
		value: '21/06/2020'
	},
	{
		label: 'Roast level',
		value: 'Medium'
	},
	{
		label: 'Taste note',
		value:
			'Yellow Tropical Fruits, Raisins, Prunes, Juicy Acidity, Lingering Sweet Finish'
	},
	{
		label: 'Roaster certificates',
		value: 'Specialty Coffee (2020)'
	}
];

const timeline = [
	{
		label: 'Wastewater',
		value: 'Wastewater treatment before releasing to outside.'
	},
	{
		label: 'Outer hull',
		value: 'Cascara tea from dried outer skin of coffee cherries.'
	},
	{
		label: 'Non-QC coffee cherries.',
		value: 'Making fertilizer from unripe, overripe, and damaged cherries'
	},
	{
		label: 'Bag',
		value: 'Bio Degradeable'
	}
];

export default function Traceability() {
	return (
		<Row align="middle">
			<Col xs={24} lg={12}>
				<Descriptions
					column={1}
					labelStyle={{ width: '160px', fontWeight: 500 }}
				>
					{descriptions.map((desc) => (
						<Descriptions.Item label={desc.label}>
							{desc.value}
						</Descriptions.Item>
					))}
				</Descriptions>
			</Col>
			<Col xs={24} lg={12}>
				<Timeline mode="left">
					<Timeline.Item>
						<Typography.Title level={5}>Start</Typography.Title>
					</Timeline.Item>
					{timeline.map((tl) => (
						<Timeline.Item
							label={tl.label}
							color="green"
							dot={<CheckCircleFilled />}
						>
							{tl.value}
						</Timeline.Item>
					))}
					<Timeline.Item>
						<Typography.Title level={5}>End</Typography.Title>
					</Timeline.Item>
				</Timeline>
			</Col>
		</Row>
	);
}
