import styled from 'styled-components';
import backgroundImg from '../../assets/images/background.png';
import '../../fonts/Gameboy.ttf';

export const PageArea = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 30px;
	position: relative;
	overflow: hidden;

	&:before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.1;
		background-image: url(${backgroundImg});
		background-repeat: repeat;
		background-position: 50% 0;
		background-size: auto;
	}

	.pokedex {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 30px;

		.logo {
			width: 400px;
			height: auto;
			margin-top: 50px;
			cursor: pointer;
		}

		h3 {
			color: #395faa;
		}

		.generations {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			.generation {
				border-radius: 50%;
				width: 50px;
				height: 50px;
				margin: 0 5px;
				color: #395faa;
				font-weight: bold;
				font-size: 20px;
				background-color: #ffcb05;
				border: 3px solid #395faa;
				text-align: center;
				cursor: pointer;

				&:hover {
					background-color: #7d98ce;
				}
			}

			.active {
				background-color: #395faa;
				color: #ffcb05;
				border: 3px solid #ffcb05;
			}
		}

		.pikachu {
			width: 100px;
			height: auto;
			margin-bottom: -24px;
		}

		input {
			margin-bottom: 50px;
			padding: 0 20px;
			width: 400px;
			height: 60px;
			font-size: 13px;
			border-radius: 30px;
			background-color: #feffee;
			border: 3px solid #395faa;
			outline: none;
			font-family: 'Gameboy';
		}

		.pokemonList {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 30px;
		}
	}

	@media (max-width: 1070px) {
		.background {
			object-fit: none;
		}
		.pokedex {
			.pokemonList {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
	@media (max-width: 800px) {
		.pokedex {
			.pokemonList {
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}
	@media (max-width: 550px) {
		.pokedex {
			.pokemonList {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}
	@media (max-width: 470px) {
		.pokedex {
			.logo {
				width: 300px;
			}

			input {
				width: 300px;
				font-size: 10px;

				&::placeholder {
					font-size: 10px;
				}
			}
		}
	}
`;
