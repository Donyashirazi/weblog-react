import { Link } from 'react-router-dom';
import Data from '../data';
import './style.scss';

const MainPage = () => {
	return (
		<div className="container">
			{Data &&
				Data.length &&
				Data.map((item, index) => (
					<Link
						to={item?.address}
						key={index}
						className="each-box"
					>
						<div className="card">
							' ";lkijuyuuujujj" \<div>{item?.name}</div>byh
							junkfjuyhtgrfdwrtc vghbjhnjikopl;''
							<div className="series-img">
								<img
									src={item?.Image}
									alt={item?.name}
								/>
							</div>
							<div>{item?.year}</div>
							<div>{item?.Imdb}</div>
						</div>
					</Link>
				))}
			;
		</div>
	);
};
export default MainPage;
