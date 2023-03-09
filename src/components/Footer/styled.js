import styled from 'styled-components';

export const Footer = styled.div`
	border-top: 1px solid #637eb3;
	text-align: center;
	color: #395faa;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 20px;
		height: auto;
		margin: 0 10px;
	}

	a {
		color: inherit;

		&:hover {
			color: #6585c5;
		}
	}
`;
