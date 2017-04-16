const videoA = {
  id: 'a',
  title: 'Create a GRaphQL Schema',
  duration: 120,
  watched: true
}

const videoB = {
  id: 'b',
  title: 'Create a GRaphQL Query',
  duration: 135,
  watched: false
}

const videos = [videoA, videoB];
const getVideoById = (id) => new Promise(resolve => {
	const [video] = videos.filter( video => {
		return video.id === id;
	});
	resolve(video);
});

exports.getVideoById = getVideoById;
