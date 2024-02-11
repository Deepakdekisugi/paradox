import { PuffLoader } from 'react-spinners';
import { colors } from 'constants/theme';

export default function LoadingToast() {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<PuffLoader color={colors.primary} loading={true} size={40} />
			<p style={{ marginLeft: '1rem' }}>Loading...</p>
		</div>
	);
}

export const LoadingToastOptions = {
	autoClose: false,
	closeButton: false,
	closeOnClick: false,
	draggable: false
};
