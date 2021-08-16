import { Typography } from 'antd';
import React from 'react';

type AddressProps = {
	children: string;
};

export default function Address({ children }: AddressProps) {
	const start = children.slice(0, children.length - 5).trim();
	const suffix = children.slice(-5).trim();
	return (
		<Typography.Text
			style={{
				maxWidth: '100px'
			}}
			ellipsis={{ suffix }}
		>
			{start}
		</Typography.Text>
	);
}
