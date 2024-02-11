import * as Yup from 'yup';

export default Yup.object({
	name: Yup.string().required('Required').trim(),
	registerNumber: Yup.number()
		.min(810000000000, 'Invalid Register Number')
		.max(810025999999, 'Invalid Register Number')
		.required('Required'),
	email: Yup.string().email('Invalid Email').required('Required'),
	phoneNumber: Yup.string()
		.matches(/[1-9]{1}[0-9]{9}/, 'Invalid Number')
		.min(10, 'Phone Number must have 10 digits')
		.max(10, 'Phone Number must have 10 digits')
		.required('Required'),
	year: Yup.number().required('Required').min(1).max(4),
	gender: Yup.string().required('Required'),
	department: Yup.string().required('Required')
});
