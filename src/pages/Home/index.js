import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import pikachu from '../../assets/images/pikachu.png';
import Pokemon from '../../components/Pokemon';
import generations from '../../helpers/generations';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import pokemonLogo from '../../assets/images/pokemon-logo.svg.png';
import Pokedex from '../../components/Pokedex';

function Page() {
	const [currentGeneration, setCurrentGeneration] = useState(1);
	const [generationInfo, setGenerationInfo] = useState(generations[0]);
	const [pokemonList, setPokemonList] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [pokemonFilter, setPokemonFilter] = useState([]);

	const [openPokedex, setOpenPokedex] = useState(false);
	const [currentPokemon, setCurrentPokemon] = useState('');

	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonsPerPage] = useState(12);

	const lastPokemonIndex = currentPage * pokemonsPerPage;
	const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
	const currentPokemons = pokemonFilter.slice(
		firstPokemonIndex,
		lastPokemonIndex
	);

	useEffect(() => {
		fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${
				generationInfo.qt
			}&offset=${generationInfo.ni - 1}`
		)
			.then((response) => response.json())
			.then((data) => {
				setPokemonList(data.results);
				setPokemonFilter(data.results);
			});
	}, [generationInfo]);

	const selectGeneration = (gen) => {
		setCurrentGeneration(gen.id);
		setGenerationInfo(gen);
		setCurrentPage(1);
		setSearchInput('');
	};

	for (let i = 0; i < pokemonList.length; i++) {
		pokemonList[i].id = i + generationInfo.ni;
	}

	return (
		<>
			<PageArea>
				<div className="pokedex">
					<img
						src={pokemonLogo}
						className="logo"
						alt=""
						onClick={() => {
							selectGeneration(generations[0]);
							setPokemonFilter(pokemonList);
						}}
					/>
					<h3>Select generation:</h3>
					<div className="generations">
						{generations.map((i, k) => (
							<button
								key={k}
								className={`generation ${
									currentGeneration === i.id && 'active'
								}`}
								onClick={() => {
									selectGeneration(i);
								}}
							>
								{i.string}
							</button>
						))}
					</div>

					<img src={pikachu} className="pikachu" alt="" />
					<input
						type="text"
						placeholder="Search..."
						value={searchInput}
						onChange={(e) => {
							if (searchInput === '') {
								setCurrentPage(1);
							}

							setSearchInput(e.target.value);

							if (e.target.value === '') {
								setCurrentPage(1);
							}

							setPokemonFilter(
								pokemonList.filter((pokemon) =>
									pokemon.name.includes(
										e.target.value.toLowerCase()
									)
								)
							);
						}}
					/>

					<div className="pokemonList">
						{currentPokemons.map((i, k) => (
							<div
								key={k}
								onClick={() => {
									setCurrentPokemon(i.id);
									setOpenPokedex(true);
								}}
							>
								<Pokemon
									key={k}
									data={i}
									filter={searchInput}
									generation={currentGeneration}
								/>
							</div>
						))}
					</div>
				</div>

				<Pagination
					totalPokemons={pokemonFilter.length}
					pokemonsPerPage={pokemonsPerPage}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
			</PageArea>
			<Pokedex
				isOpened={openPokedex}
				setModalOpen={() => {
					setOpenPokedex(!openPokedex);
				}}
				generation={currentGeneration}
				currentPokemon={currentPokemon}
				lastPokemonId={generationInfo.ni + generationInfo.qt - 1}
				firstPokemonId={generationInfo.ni}
			></Pokedex>
			<Footer />
		</>
	);
}

export default Page;
