import styled from 'styled-components';

export const Pages = styled.div`
	nav {
		ul {
			list-style-type: none;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			li {
				button {
					border-radius: 50%;
					width: 40px;
					height: 40px;
					margin: 0 5px;
					color: #395faa;
					font-weight: bold;
					font-size: 15px;
					background-color: #ffcb05;
					border: 3px solid #395faa;
					text-align: center;
					cursor: pointer;
					&:hover {
						background-color: #7d98ce;
					}
				}

				button.active {
					background-color: #395faa;
					color: #ffcb05;
					border: 3px solid #ffcb05;
				}
			}
		}
	}
`;
