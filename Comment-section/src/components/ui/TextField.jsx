import { useContext, useState } from 'react';
import avatar from '../../assets/avatars/image-juliusomo.png';
import Button from './Button';
import ChatContext from '../../context/ChatContext';

const TextField = ({ onSubmit }) => {
	const handler = useContext(ChatContext);
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		handler.addComment(value)
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='textfield grid gap-3  bg-white dark:bg-Gray p-5 rounded-lg shadow-sm transition animate-down'
		>
			<label htmlFor='comment' className='sr-only'>
				Add a comment
			</label>
			<textarea
				id='comment'
				type='textarea'
				placeholder='Add a comment...'
				className='input resize-none dark:bg-TextArea dark:text-PaleBlue dark:border-transparent outline-none dark:caret-SoftBlue border rounded-lg caret-ModerateBlue cursor-pointer hover:border-ModerateBlue focus-within:outline-ModerateBlue dark:focus-within:outline-SoftBlue focus:border-transparent transition px-4 py-2.5'
				rows={3}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<img src={avatar} alt='profile pic' className='w-11 h-11' />
			<Button className='submit text-sm h-fit px-7 py-3 justify-self-end bg-ModerateBlue dark:bgTag hover:bg-LightBlue text-white font-medium uppercase'>
				{!handler.isReplying ? 'send' : 'reply'}
			</Button>
		</form>
	);
};

export default TextField;
