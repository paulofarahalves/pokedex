import styled from 'styled-components';

export const PokemonItem = styled.div`
	.loadingGif {
		width: 50px;
		height: auto;
	}
	.pokemon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 200px;
		border-radius: 10px;
		padding: 40px 20px 20px 20px;
		cursor: pointer;
		transition: all 0.3s;
		float: left;
		box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);

		&:hover {
			transform: translate(0, -10px);
			box-shadow: 0 0 11px rgba(33, 33, 33, 0.5);
		}

		.pokeball {
			position: relative;
			top: -20px;
			right: -90px;
			width: 20px;
			height: auto;
		}

		.pokemonImage {
			width: 100px;
			height: 100px;
		}

		h2 {
			text-transform: capitalize;
			color: #fff;
			-webkit-text-stroke-width: 0.3px;
			-webkit-text-stroke-color: #000;
		}

		.types {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			.type {
				background-color: hsla(0, 0%, 100%, 0.2);
				text-transform: capitalize;
				margin: 0 10px;
				border-radius: 15px;
				padding: 8px;
				color: #fff;
			}
		}
	}
`;
