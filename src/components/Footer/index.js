import { Footer } from './styled';
import pokeball from '../../assets/images/pokeball.svg';

export default function FooterArea() {
	return (
		<Footer>
			<img src={pokeball} alt="" />
			<h3>
				Designed by{' '}
				<a href="https://github.com/paulofarahalves">Paulo Farah</a>
			</h3>
			<img src={pokeball} alt="" />
		</Footer>
	);
}
