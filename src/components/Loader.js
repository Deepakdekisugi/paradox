import ClipLoader from 'react-spinners/ClipLoader';
import { colors } from 'constants/theme';

export default function Loader({ size = 50 }) {
	return <ClipLoader color={colors.primary} loading={true} size={size} />;
}
