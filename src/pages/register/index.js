import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Footer, Heading, BackgroundStripes } from 'components';
import LoadingToast, { LoadingToastOptions } from 'components/LoadingToast';
import { colors } from 'constants/theme';
import avatars from 'constants/avatars';
import validationSchema from './validationSchema';

export default function RegisterForm() {
	const [active, setActive] = useState(null);
	const [avatarError, setAvatarError] = useState(false);
	const toastId = useRef();
	const [isLoading, setLoading] = useState(false);
	const history = useHistory();

	const initialValues = {
		name: '',
		registerNumber: '',
		email: '',
		phoneNumber: '',
		year: '',
		gender: '',
		department: ''
	};

	const handleSubmit = async (values, _action) => {
		if (!active || active?.gender !== values.gender) {
			setAvatarError(true);
			return;
		}
		try {
			setLoading(true);
			const res = await axios.post('/user/new', { ...values, imageUrl: active.url });
			history.push({ pathname: '/member', state: res.data });
		} catch (err) {
			setLoading(false);
			toast.error(err.response.data.message);
			console.log(err);
		}
	};

	useEffect(() => {
		if (!isLoading) {
			return toast.dismiss(toastId.current);
		}

		toastId.current = toast(LoadingToast, LoadingToastOptions);
	}, [isLoading]);

	return (
		<>
			<FormContainer>
				<Heading gradient margin='medium'>
					Registration
				</Heading>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched, values }) => (
						<FormikForm>
							<Box>
								<FieldContainer>
									<label htmlFor='regno'>Register Number</label>
									<Input id='regno' name='registerNumber' />
									{errors.registerNumber && touched.registerNumber && (
										<Error>{errors.registerNumber}</Error>
									)}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='name'>Name of the Student</label>
									<Input id='name' name='name' />
									{errors.name && touched.name && <Error>{errors.name}</Error>}
								</FieldContainer>
								<FieldContainer style={{ marginBottom: '1rem' }}>
									<label htmlFor='gender'>Gender</label>
									<RadioContainer>
										<RadioGroup>
											<Field
												id='male'
												className='radio__group-input'
												name='gender'
												value='male'
												type='radio'
											/>
											<label htmlFor='male' className='radio__group-label'>
												<span className='radio__group-button'></span>
												Male
											</label>
										</RadioGroup>
										<RadioGroup>
											<Field
												id='female'
												type='radio'
												className='radio__group-input'
												name='gender'
												value='female'
											/>
											<label htmlFor='female' className='radio__group-label'>
												<span className='radio__group-button'></span>
												<p>Female</p>
											</label>
										</RadioGroup>
									</RadioContainer>
									{errors.gender && touched.gender && <Error>{errors.gender}</Error>}
									{values?.gender !== '' && (
										<>
											<label htmlFor='avatar'>Select your Avatar</label>
											<AvatarContainer>
												{avatars
													.filter(value => value.gender === values.gender)
													.map(value => {
														return (
															<Avatar
																key={value.id}
																src={value.url}
																alt={value.id}
																onClick={() => {
																	setActive(value);
																	setAvatarError(false);
																}}
																active={active?.id === value.id}
															/>
														);
													})}
											</AvatarContainer>
											{avatarError && <Error>Please select an avatar</Error>}
										</>
									)}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='email'>Email of the Student</label>
									<Input id='email' name='email' type='email' />
									{errors.email && touched.email && <Error>{errors.email}</Error>}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='phn_num'>Phone Number</label>
									<Input id='phn_num' name='phoneNumber' type='tel' pattern='[1-9]{1}[0-9]{9}' />
									{errors.phoneNumber && touched.phoneNumber && <Error>{errors.phoneNumber}</Error>}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='year'>Year</label>
									<Field name='year' as='select' className='select'>
										<option value=''>-- Select --</option>
										{[...new Array(4)].map((_, idx) => (
											<option value={idx} key={idx}>
												{idx}
											</option>
										))}
									</Field>
									{errors.year && touched.year && <Error>{errors.year}</Error>}
								</FieldContainer>
								<FieldContainer>
									<label htmlFor='department'>Department</label>
									<Field name='department' as='select' className='select'>
										<option value=''>-- Select --</option>
										{['CSE', 'CE', 'ME','ECE'].map(dept => (
											<option value={dept} key={dept}>
												{dept}
											</option>
										))}
									</Field>
									{errors.department && touched.department && <Error>{errors.department}</Error>}
								</FieldContainer>
							</Box>
							<SubmitButton disabled={isLoading} type='submit'>
								Submit
							</SubmitButton>
						</FormikForm>
					)}
				</Formik>
				<BackgroundStripes />
				<ToastContainer
					position='bottom-center'
					autoClose={5000}
					pauseOnFocusLoss
					draggable={false}
					pauseOnHover
				/>
			</FormContainer>
			<Footer />
		</>
	);
}

const Avatar = styled.img`
	width: 10rem;
	margin-right: 2rem;
	border-radius: 50%;
	background-color: ${props => (props.active ? `${colors.primary} !important` : 'none')};
	transition: all 0.2s;

	&:hover {
		background-color: ${colors.slate}50;
		cursor: pointer;
	}

	@media only screen and (max-width: 600px) {
		width: 8rem;
	}

	@media only screen and (max-width: 500px) {
		width: 6rem;
	}

	@media only screen and (max-width: 400px) {
		width: 5rem;
	}
`;

const AvatarContainer = styled.div`
	margin: 1rem 1rem 3rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Box = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 60rem;
	padding: 3rem 4rem;
	background-color: ${colors.white};
	border-radius: 3%;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

	@media screen and (max-width: 640px) {
		min-width: 100%;
		padding: 2rem 0.5rem;
		box-shadow: none;
	}
`;

const Error = styled.p`
	color: ${props => props.theme.tomato};
	font-size: 1.3rem;
`;

const FieldContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.select {
		width: 100%;
		font: inherit;
		font-size: 1.4rem;
		margin: 0.5rem auto 3rem auto;
		height: 3.2em;
		padding: 0.7rem 1.25rem;
		border-radius: 0.5rem;
		background-color: transparent;
		border: 2px solid transparent;
		box-shadow: ${props => `1px 1px 10px ${props.theme.primary}50`};
		transition: all 0.2s;

		:focus {
			outline: none;
			color: ${colors.primary};
			border: 2px solid ${colors.primary};
			box-shadow: ${props => `3px 3px 20px ${props.theme.primary}50`};
		}
	}
`;

const FormContainer = styled.div`
	position: relative;
	margin: 4rem 0;
	padding: 4rem 0;
	overflow-x: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 2;
`;

const FormikForm = styled(Form)`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Input = styled(Field)`
	width: 100%;
	font: inherit;
	font-size: 1.4rem;
	margin: 0.5rem auto 1rem auto;
	height: 3.2em;
	padding: 0.7rem 1.25rem;
	border-radius: 0.5rem;
	border: 2px solid transparent;
	box-shadow: ${props => `1px 1px 10px ${props.theme.primary}50`};
	transition: all 0.2s;

	:focus {
		outline: none;
		color: ${colors.primary};
		border: 2px solid ${colors.primary};
		box-shadow: ${props => `3px 3px 20px ${props.theme.primary}50`};
	}
`;
const RadioContainer = styled.div`
	display: flex;
	flex-direction: row;

	@media only screen and (max-width: 400px) {
		flex-direction: column;
	}
`;

const RadioGroup = styled.div`
	width: 49%;
	display: flex;
	flex-direction: row;
	margin: 0.75rem;

	.radio__group {
		&-input {
			display: none;
		}

		&-label {
			font-size: 1.6rem;
			cursor: pointer;
			position: relative;

			display: flex;
			align-items: center;
			justify-content: center;
		}

		&-button {
			height: 2.5rem;
			width: 2.5rem;
			border: 5px solid ${colors.tertiary};
			border-radius: 50%;
			display: inline-block;
			position: relative;
			margin-right: 2rem;

			&::after {
				content: '';
				display: block;
				height: 0.85rem;
				width: 0.85rem;
				border-radius: 50%;
				position: absolute;
				top: 50%;
				left: 50%;
				-webkit-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
				background-color: ${colors.tertiary};
				opacity: 0;
				-webkit-transition: opacity 0.2s;
				transition: opacity 0.2s;
			}
		}
	}

	.radio__group-input:checked ~ .radio__group-label .radio__group-button::after {
		opacity: 1;
	}
`;

const SubmitButton = styled(Button)`
	margin-top: 3rem;

	@media only screen and (max-width: 700px) {
		margin-top: 0rem;
	}
`;
