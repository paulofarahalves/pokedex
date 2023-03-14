import React, { useState, useEffect } from 'react';
import { PokedexArea } from './styled';

const Pokedex = ({
	isOpened,
	setModalOpen,
	currentPokemon,
	generation,
	lastPokemonId,
	firstPokemonId,
}) => {
	const [currentPokemonInfo, setCurrentPokemonInfo] = useState({});
	const [loading, setLoading] = useState(true);
	const [pokemonId, setPokemonId] = useState('');

	useEffect(() => {
		setLoading(true);
		fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
			.then((response) => response.json())
			.then((data) => {
				setCurrentPokemonInfo(data);
				setPokemonId(currentPokemon);
			})
			.then(() => setLoading(false));
	}, [currentPokemon]);

	useEffect(() => {
		setLoading(true);
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
			.then((response) => response.json())
			.then((data) => {
				setCurrentPokemonInfo(data);
			})
			.then(() => setLoading(false));
	}, [pokemonId]);

	let imgSrc = '';

	if (generation < 6) {
		imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${currentPokemonInfo.id}.gif`;
	} else {
		imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemonInfo.id}.png`;
	}

	if (isOpened) {
		return (
			<PokedexArea>
				<div id="background">
					<div id="modal">
						<button id="close" onClick={setModalOpen}>
							x
						</button>

						{!loading && (
							<>
								<div className="pokemonArea">
									<img
										className="pokemonImg"
										src={imgSrc}
										alt=""
									/>
								</div>

								<div
									className="next"
									onClick={() => {
										if (pokemonId < lastPokemonId) {
											setPokemonId(
												parseInt(pokemonId) + 1
											);
										}
									}}
								>
									➤
								</div>
								<div
									className="prev"
									onClick={() => {
										if (pokemonId > firstPokemonId) {
											setPokemonId(
												parseInt(pokemonId) - 1
											);
										}
									}}
								>
									➤
								</div>

								<div className="pokemonInfo">
									<div className="id">
										{pokemonId < 10 && (
											<>No. 00{pokemonId} </>
										)}
										{pokemonId < 100 && pokemonId >= 10 && (
											<>No. 0{pokemonId} </>
										)}
										{pokemonId >= 100 && (
											<>No. {pokemonId} </>
										)}
									</div>
									<div className="pokemonName">
										{currentPokemonInfo.name}
									</div>
									{currentPokemonInfo.stats.map((i) => (
										<>
											<div>{i.stat.name}</div>
											<div>{i.base_stat}</div>
										</>
									))}
								</div>
							</>
						)}
					</div>
				</div>
			</PokedexArea>
		);
	}
	return null;
};

export default Pokedex;
