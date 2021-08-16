import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';

type ProcessorDetailProps = {
	detail: {
		origin: string;
		variety: string;
		description: string;
		altitude: string;
		processing: string;
	};
};

export default function ProcessorDetail({ detail }: ProcessorDetailProps) {
	const [ visible, setVisible ] = useState(false);

	const { origin, variety, description, altitude, processing } = detail;

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
			>
				<Form
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					labelAlign="left"
				>
					<Form.Item label="Origin">
						<Input value={origin} />
					</Form.Item>
					<Form.Item label="Variety">
						<Input value={variety} />
					</Form.Item>
					<Form.Item label="Description">
						<Input value={description} />
					</Form.Item>
					<Form.Item label="Altitute/Elevation">
						<Input value={altitude} />
					</Form.Item>
					<Form.Item label="Processing Method">
						<Input value={processing} />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8 }}>
						<Button type="primary">Add</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}
