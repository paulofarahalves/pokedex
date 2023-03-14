import styled from 'styled-components';
import pokedex from '../../assets/images/pokedex.png';
import '../../fonts/Gameboy.ttf';
import pokedexBg from '../../assets/images/pokedex-bg.jpg';

export const PokedexArea = styled.div`
	* {
		font-family: 'Gameboy';
		box-sizing: border-box;
	}

	#background {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgb(0, 0, 0, 0.3);
		z-index: 1000;
	}

	#close {
		position: fixed;
		top: 0;
		right: 0;
		margin: 2px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		text-align: center;
		font-weight: bold;
		cursor: pointer;
		border: none;
		font-family: 'Arial';
		font-size: 20px;
		color: #000;

		&:hover {
			background-color: #ccc;
		}
	}

	button {
		background-color: transparent;
	}

	#modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 860px;
		height: 640px;
		background-image: url(${pokedex});
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 10px;
		color: black;

		.pokemonArea {
			position: fixed;
			width: 298px;
			height: 218.8px;
			//width: 34.6511%;
			//height: 34.1875%;
			border-radius: 5px;
			left: 32%;
			top: 7.2%;
			background-color: white;
			background-image: url(${pokedexBg});
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;

			.pokemonImg {
				width: 100px;
				height: 100px;
				position: fixed;
				left: 43%;
				top: 20%;
				//
			}
		}

		.next,
		.prev,
		.up,
		.down {
			position: fixed;
			color: #5b5b5b;
			cursor: pointer;

			&:hover {
				color: #7d7d7d;
			}
		}

		.next {
			top: 73.6%;
			left: 24.5%;
		}

		.prev {
			top: 73.9%;
			left: 15.3%;
			transform: rotate(180deg);
		}

		.up {
			top: 67%;
			left: 19.9%;
			transform: rotate(-90deg);
		}

		.down {
			top: 79%;
			left: 19.9%;
			transform: rotate(90deg);
		}

		.pokemonInfo {
			width: 298px;
			height: 218.8px;
			//width: 34.6511%;
			//height: 34.1875%;
			padding: 20px;
			position: fixed;
			left: 31.9%;
			top: 59.5%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			font-size: 13px;
			text-align: center;

			div {
				border-bottom: 2px dashed #000;
				display: flex;
				align-items: center;
				justify-content: space-around;
				text-transform: capitalize;
			}

			div:last-child,
			div:nth-last-child(2) {
				border-bottom: none;
			}

			.pokemonName {
				text-transform: capitalize;
			}
		}
	}
	@media (max-width: 768px) {
		#modal {
			width: 760px;
			height: 570px;

			.next,
			.prev,
			.up,
			.down {
				font-size: 14px;
			}

			.next {
				top: 70.6%;
				left: 24.5%;
			}

			.prev {
				top: 71%;
				left: 15%;
			}

			.pokemonArea {
				top: 7.3%;
				width: 264px;
				height: 195.8px;

				.pokemonImg {
					top: 18%;
				}
			}

			.pokemonInfo {
				width: 263px;
				height: 192.8px;
				padding: 10px;
				left: 31.9%;
				top: 59.5%;
				font-size: 10px;

				div {
				}
			}
		}
	}

	@media (max-width: 425px) {
		#modal {
			width: 415px;
			height: 310px;

			.next,
			.prev,
			.up,
			.down {
				font-size: 9px;
			}

			.next {
				top: 73%;
				left: 24.5%;
			}

			.prev {
				top: 73.8%;
				left: 15%;
			}

			.pokemonArea {
				top: 7.4%;
				width: 145px;
				height: 105.8px;

				.pokemonImg {
					width: 60px;
					height: 60px;

					left: 42%;
					top: 16%;
				}
			}

			.pokemonInfo {
				width: 143px;
				height: 105.8px;
				padding: 10px;
				left: 31.9%;
				top: 59.5%;
				font-size: 6px;

				div {
				}
			}
		}
	}
`;
