import React, { useEffect, useState } from 'react';
import { PokemonItem } from './styled';
import loadingGif from '../../assets/images/loading.gif';
import pokeball from '../../assets/images/pokeball.svg';

export default function Pokemon(props) {
	const [pokemonInfo, setPokemonInfo] = useState({});
	const [pokemonTypes, setPokemonTypes] = useState([]);
	const [pokemonType, setPokemonType] = useState('');
	const [pokemonSecondType, setPokemonSecondType] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://pokeapi.co/api/v2/pokemon/${props.data.name}`)
			.then((response) => response.json())
			.then((data) => {
				setPokemonInfo(data);
				setPokemonType(data.types[0].type.name);
				setPokemonTypes([data.types[0].type.name]);

				if (data.types.length > 1) {
					setPokemonSecondType(data.types[1].type.name);
					setPokemonTypes([
						data.types[0].type.name,
						data.types[1].type.name,
					]);
				}
			})
			.then(() => setLoading(false));
	}, [props]);

	let typeBackgroundColor = '';

	switch (pokemonType) {
		case 'grass':
			typeBackgroundColor = '#48d0b0';
			break;
		case 'water':
			typeBackgroundColor = '#609fb5';
			break;
		case 'fire':
			typeBackgroundColor = '#fb6c6c';
			break;
		case 'electric':
			typeBackgroundColor = '#ffd86f';
			break;
		case 'bug':
			typeBackgroundColor = '#c3ce75';
			break;
		case 'flying':
			typeBackgroundColor = '#bab0d5';
			break;
		case 'normal':
			if (pokemonSecondType) {
				setPokemonType(pokemonSecondType);
				setPokemonSecondType(pokemonTypes[1]);
			} else {
				typeBackgroundColor = '#c2c2a1';
			}
			break;
		case 'poison':
			typeBackgroundColor = '#7c538c';
			break;
		case 'ground':
			typeBackgroundColor = '#b1736c';
			break;
		case 'fairy':
			typeBackgroundColor = '#f469a9';
			break;
		case 'fighting':
			typeBackgroundColor = '#d6b591';
			break;
		case 'psychic':
			typeBackgroundColor = '#9b7fa6';
			break;
		case 'rock':
			typeBackgroundColor = '#a6aab6';
			break;
		case 'ice':
			typeBackgroundColor = '#7fccec';
			break;
		case 'dragon':
			typeBackgroundColor = '#f9be00';
			break;
		case 'ghost':
			if (pokemonSecondType) {
				setPokemonType(pokemonSecondType);
				setPokemonSecondType(pokemonTypes[1]);
			} else {
				typeBackgroundColor = '#a09d9d';
			}
			break;
		case 'dark':
			typeBackgroundColor = '#5e666b';
			break;
		case 'steel':
			typeBackgroundColor = '#99c3e0';
			break;
		default:
			typeBackgroundColor = '#b0beba';
	}

	const divStyle = {
		backgroundColor: `${typeBackgroundColor}`,
	};

	return (
		<PokemonItem>
			<div className="pokemon" style={divStyle}>
				{loading ? (
					<img src={loadingGif} className="loadingGif" alt="" />
				) : (
					<>
						<img src={pokeball} className="pokeball" alt="" />
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`}
							alt=""
							className="pokemonImage"
						/>
						<h2>{props.data.name}</h2>
						<div className="types">
							<div className="type">{pokemonTypes[0]}</div>
							{pokemonTypes.length > 1 && (
								<div className="type">{pokemonTypes[1]}</div>
							)}
						</div>
					</>
				)}
			</div>
		</PokemonItem>
	);
}
