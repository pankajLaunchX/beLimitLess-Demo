
import Stories from 'react-insta-stories';
import video from './productSVG/vid4.mp4'
import video2 from './productSVG/vid5.mp4'
// import video3 from './productSVG/vid3.mp4
import CustomVideoStory from './CustomVideoStory';


function Story() {
  const stories = [
    {
      content : () => <CustomVideoStory url={video}/>,
      header: {
        heading: 'Pankaj Singh',
        subheading: 'Posted 30m ago',
        profileImage: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
      },
    },
    {
      content : () => <CustomVideoStory url={video2}/>,
      header: {
        heading: 'Pankaj Singh',
        subheading: 'Posted 30m ago',
        profileImage: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp'
      },
    },
  ];
  return (
    <Stories
      stories={stories}
      height={'100%'}
      width={'100vw'}
      loop={true}
      storyContainerStyles={{
        height: '100%',
        width: '100%'
      }}
      storyStyles={{
        height: '100%',
        width: '100%',
        margin: '0'
      }}
    />
  )
}

export default Story