import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import 'animate.css';

const GifGrid = ({ category }) =>
{
	const { loading, data: images } = useFetchGifs({ category });

	return (
		<div className="has-text-light">
			<h2 className="has-text-light animate__animated animate__fadeIn">{ category }</h2>

		{
			loading && <p className="animate__animated animate__fadeIn">Loading...</p>
		}

			<div className="card-grid">
			{
				images.map(image => (
					<GifGridItem
						key={ image.id }
						{ ...image }
						/>
				))
			}
			</div>
		</div>
	);
};

export default GifGrid;
