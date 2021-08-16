import { Button, DatePicker, Form, Modal, Slider } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';

const roastingMarks = {
	1: 'Light',
	5: 'Dark'
};

export default function ProcessorDetail() {
	const [ visible, setVisible ] = useState(false);

	return (
		<div>
			<Button type="link" onClick={() => setVisible(true)}>
				Detail
			</Button>
			<Modal
				visible={visible}
				title="Roaster detail"
				footer={null}
				onCancel={() => setVisible(false)}
			>
				<Form
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					labelAlign="left"
				>
					<Form.Item label="Roast Level">
						<Slider marks={roastingMarks} min={1} max={5} />
					</Form.Item>
					<Form.Item label="Roast Date">
						<DatePicker style={{ width: '100%' }} />
					</Form.Item>
					<Form.Item label="Tasting Note">
						<TextArea rows={3} />
					</Form.Item>
					<Form.Item wrapperCol={{ offset: 8 }}>
						<Button type="primary">Add</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}
