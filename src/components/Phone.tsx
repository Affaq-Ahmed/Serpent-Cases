import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface IPhoneProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: string;
	dark?: boolean;
}

const Phone = ({
	imgSrc,
	className,
	dark = false,
	...props
}: IPhoneProps) => {
	return (
		<div
			className={cn(
				'relative pointer-events-none z-50 overflow-hidden',
				className
			)}
			{...props}
		>
			<img
				className='pointer-events-none z-50 select-none'
				src={dark ? '/phone-template-dark-edges.png' : "/phone-template-light-edges.png"}
				alt='phone image'
			/>
		</div>
	);
};

export default Phone;
