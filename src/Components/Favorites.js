import react from 'react';  
// import { HeartCrack } from "lucide-react";
// import SplitText from "../Animations/SplitText";
import './Favorites.css';
import FavoritesCard from '../Cards/FavoritesCard';

const Favorites = () => {
  const favoritesBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkfGVufDB8fDB8fHww')"
  };
  // const handleAnimationComplete = () => {
  //   console.log('All letters have animated!');
  // };
  return (
    <>
      <div className="full-page-background" style={favoritesBackgroundStyle}></div>
     
      <div className='favorites-content'>
      <FavoritesCard />
      <FavoritesCard />
      <FavoritesCard />
      <FavoritesCard />
        {/* <SplitText
    text="You don't have any favorites yet !"
    className="text-2xl font-semibold text-center"
    delay={100}
    duration={0.2}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}    
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    textAlign="center"
    onLetterAnimationComplete={handleAnimationComplete}
  />
        <HeartCrack size={100} color="#000000" /> */}
      </div>
    </>
  );
}

export default Favorites;