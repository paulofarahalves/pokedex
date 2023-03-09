import React from 'react';
import { Pages } from './styled';

const Pagination = ({
	pokemonsPerPage,
	totalPokemons,
	setCurrentPage,
	currentPage,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<Pages>
			<nav>
				<ul>
					{pageNumbers.map((page) => (
						<li key={page}>
							<button
								onClick={() => setCurrentPage(page)}
								className={page === currentPage ? 'active' : ''}
							>
								{page}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</Pages>
	);
};

export default Pagination;
