import styled from "styled-components";

const data = [
	{
		title: 'Faculty Head',
		data: [
			{
				name: 'Dr. Sartaj Khan',
				profile: 'https://avatars.githubusercontent.com/u/75940054?v=4',
				designation: 'Head of the Department',
				year: 'Faculty Advisor',
				socialLinks: {
					email: 'mailto:sartaj.khan@sce.org.in'
				}
			},
			// {
			// 	name: 'Dr. Vijaylaxmi Sajwan',
			// 	profile: 'https://drive.google.com/uc?export=view&id=1juBNo6PyDQ26hDFmVPC5U6S05WpLKDcZ',
			// 	designation: 'Assistant Professor CSE           ',
			// 	year: 'Faculty Advisor',
			// 	socialLinks: {
			// 		email: 'mailto:padmamayan@gmail.com'
			// 	}
			// },
			// {
			// 	name: 'Himanshu Suyal',
			// 	profile: 'https://drive.google.com/uc?export=view&id=1eiLk_BiLTJDyVviEj8ni3nWwS7LW04uU',
			// 	designation: 'Assistant Professor CSE',
			// 	year: 'Faculty Advisor',
			// 	socialLinks: {
			// 		linkedIn: 'https://www.linkedin.com/in/dr-sankar-ram-chellappa-697b1b8b/',
			// 		email: 'mailto:csankarraam@gmail.com'
			// 	}
			// }
		]
	},
	{
		title: 'Management Team',
		data: [
			{
				name: 'Shivam Kumar',
				profile: 'https://avatars.githubusercontent.com/u/126109527',
				designation: 'President',
				year: 'III - CSE',
				tag: 'To enhance peer-peer learning through networking',
				socialLinks: {
					github: 'https://github.com/SHIVAM1KUMAR',
					linkedIn: 'https://www.linkedin.com/in/shivam-kumar-36938323a/',
					email: 'mailto:shivamkradp1411@gmail.com'
				}
			},
			{
				name: 'Kundan Soni',
				profile: 'https://avatars.githubusercontent.com/u/151555907',
				designation: 'Vice President',
				year: 'III - CSE',
				tag: 'A NEO NEO',
				socialLinks: {
					github: 'https://github.com/codex-kundan',
					linkedIn: 'https://www.linkedin.com/in/kundan-kumar-b33265229/',
					twitter: 'https://twitter.com/mugumugu20',
					email: 'mailto:reachkundankumar@gmail.com',
					//portfolio: 'https://10digit.ml/'
				}
			},
			{
				name: 'Deepak Kumar',
				profile: 'https://avatars.githubusercontent.com/u/55588916',
				designation: 'Full Stack Developer',
				year: 'II - CSE',
				tag: `SELECT * FROM WORLD WHERE 'Someone' LIKE '%YOU%'`,
				socialLinks: {
					github: 'https://github.com/Deepakdekisugi',
					linkedIn: 'https://www.linkedin.com/in/deepak-kumar4/',
					twitter: 'https://twitter.com/santhoshvelr',
					email: 'mailto:dk376907@gmail.com',
					portfolio: 'https://sandev.tech'
				},
				fromBenxene: true
			},
			// {
			// 	name: 'UJJWAL KUMAR',
			// 	profile: 'https://drive.google.com/uc?export=view&id=1cYIgtg8QxP1ixBDncTZBdXAYyy-7Vrew',
			// 	designation: 'Secretary',
			// 	year: 'III - CSE',
			// 	tag: 'ALL THINGS ARE POSSIBLE',
			// 	socialLinks: {
			// 		github: 'https://github.com/Thiru104',
			// 		linkedIn: 'https://www.linkedin.com/in/thirumuruganm104/',
			// 		twitter: 'https://twitter.com/engg_thiru',
			// 		email: 'mailto:thiru10042002@gmail.com'
			// 	}
			// },
			{
				name: 'Prinsu kumar',
				profile: 'https://avatars.githubusercontent.com/u/118058374',
				designation: 'Youth Representative',
				year: 'III - CSE',
				tag: 'To work genuinely!',
				socialLinks: {
					github: 'https://github.com/prinshu967',
					linkedIn: 'https://www.linkedin.com/in/prinshu-kumar-b958401b0/',
					email: 'mailto:prinshu967@gmail.com'
					//twitter: '/',
				}
			}
		]
	},
	{
		title: 'Technical Team',
		data: [
			{
				name: 'Pawan Singh',
				profile: 'https://avatars.githubusercontent.com/u/159711534',
				designation: 'Civil Engineer',
				year: 'III - Civil',
				tag: `Born To Build'`,
				socialLinks: {
					github: 'https://github.com/Pspns07',
					linkedIn: 'https://www.linkedin.com/in/pawan-singh-52a6a6228/',
					email: 'mailto:pawansingh93343@gmail.com',
					//twitter: 'https://x.com/CePawansinghps?t=4xDvQfMIE6sNWpTxKQ9v7g&s=08',
					//portfolio: 'https://sandev.tech'
				},
				fromBenxene: true
			},
			{
				name: 'Sudhanshu Singh',
				profile: 'https://avatars.githubusercontent.com/u/111054333',
				designation: 'Full Stack Developer',
				year: 'III - CSE',
				tag: '(caffeine, chocolate, music) => code;',
				socialLinks: {
					github: 'https://github.com',
					linkedIn: 'https://www.linkedin.com/in/sudhanshu-singh-a896a5228/',
					email: 'mailto:sudhanshusingh1326@gmail.com',
					//twitter: 'https://twitter.com/krish_the_dev',
					//portfolio: 'https://devkrish.tech'
				},
				fromBenxene: true
			},
			{
				name: 'Yashraj Yadav',
				profile: 'https://avatars.githubusercontent.com/u/146312282',
				designation: 'Full Stack Developer',
				year: 'III - CSE',
				tag: `Before software can be reusable it first has to be usable.`,
				socialLinks: {
					github: 'https://github.com/Yashraj78yadav',
					linkedIn: 'https://www.linkedin.com/in/yashraj-yadav-96b480233/',
					email: 'mailto:yadavyashraj55@gmail.com',
					//twitter: 'https://twitter.com/pranavgpr',
					//portfolio: 'https://realgpr.tech'
				},
				fromBenxene: true
			},
			{
				name: 'Anukul Chandra',
				profile: 'https://avatars.githubusercontent.com/u/101039186',
				designation: 'Frontend Developer',
				year: 'III - CSE',
				tag: 'Life recruits different versions of you',
				socialLinks: {
					github: 'https://github.com/AnukulPr1me',
					email: 'mailto:anukul_chandra@outlook.com',
					linkedIn: 'https://www.linkedin.com/in/anukul-chandra/',
					portfolio: 'https://anukulprime.netlify.app/'
					//twitter: 'https://twitter.com/DeepAn_Dj28?s=01'
				},
				fromBenxene: true
			},
			{
				name: 'Yashwant Yadav',
				profile: 'https://avatars.githubusercontent.com/u/147894424',
				designation: 'Content Writer',
				year: 'III - CSE',
				tag: 'I reborn when my pen kissed paper',
				socialLinks: {
					github: 'https://github.com/Yashwantyadav1',
					linkedIn: 'https://www.linkedin.com/in/yashwant-yadav-b05b38228/',
					email: 'mailto:yy888275@gmail.com',
					//twitter: 'https://twitter.com/Lakshmi2k1',
					//portfolio: 'https://www.yourquote.in/latha-lakshmi-bgfwp/quotes'
				},
				fromBenxene: true
			},
			{
				name: 'Aditi Gupta',
				profile: '/',
				designation: 'volunteer',
				year: 'II - CSE',
				tag: 'Talking is love',
				socialLinks: {
					github: '/',
					linkedIn: 'https://www.linkedin.com/in/aditi-gupta-0a5b74284/',
					email: 'mailto:chinkigupta2004@gmail.com',
					//twitter: 'https://twitter.com/Lakshmi2k1',
					//portfolio: 'https://www.yourquote.in/latha-lakshmi-bgfwp/quotes'
				},
				fromBenxene: true
			}
		]
	},
	
];

export default data;
