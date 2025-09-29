import react from 'react';  
// import { HeartCrack } from "lucide-react";
// import SplitText from "../Animations/SplitText";
import './Favorites.css';
import { Heart } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { MoreVertical } from "lucide-react";
import { useState } from "react";   
import React from 'react';
import '../Cards/FavoritesCard.css';

const Favorites = () => {
  const favoritesBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkfGVufDB8fDB8fHww')"
  };
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
setQuantity((prev) => prev + 1);
};

const decrease = () => {
setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
};

  // const handleAnimationComplete = () => {
  //   console.log('All letters have animated!');
  // };
  return (
    <>
      <div className="full-page-background" style={favoritesBackgroundStyle}></div>
     
      <div className='favorites-content'>
      <div className="favorites-card">
       
            <img className='favorites-card-image' src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" ></img>
            <div className='favorites-card-content'>
               <div className='favorites-card-title'> <b>Large pizza</b></div>
                <MoreVertical size={24}color="black" className="drop-icon"/>
            </div>
            <div className='favorites-card-description'>Get your favorite pizza big at a discount today at GoGrub.</div>
               <hr className='favorites-horizontal-line'></hr>
             <div className='favorites-card-price'> <b>Ksh 2000 </b></div>
            <div className='favorites-icons'>
            <Heart size={16} colour="dark-gray"/>
            <div className='favorites-counter'>
                <button className='favorites-counter-button' onClick={decrease}><Minus size={16}/></button>
                 <span className="favorites-quantity">{quantity}</span>
                <button className='favorites-counter-button' onClick={increase}><Plus size={16}/></button>
                </div>
            </div>
            <hr className='favorites-horizontal-line'></hr>
            <div className='favorites-order-button'>
               <button>Grub it!</button>
            </div>
        </div>
        
        <div className="favorites-card">
       
       <img className='favorites-card-image' src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww" alt="" ></img>
       <div className='favorites-card-content'>
          <div className='favorites-card-title'> <b>Big Belly Burger</b></div>
           <MoreVertical size={24}color="black" className="drop-icon"/>
       </div>
       <div className='favorites-card-description'>Get your favorite big burger at a discount today at GoGrub.</div>
          <hr className='favorites-horizontal-line'></hr>
        <div className='favorites-card-price'> <b>Ksh 2000 </b></div>
       <div className='favorites-icons'>
       <Heart size={16} colour="dark-gray"/>
       <div className='favorites-counter'>
           <button className='favorites-counter-button' onClick={decrease}><Minus size={16}/></button>
            <span className="favorites-quantity">{quantity}</span>
           <button className='favorites-counter-button' onClick={increase}><Plus size={16}/></button>
           </div>
       </div>
       <hr className='favorites-horizontal-line'></hr>
       <div className='favorites-order-button'>
          <button>Grub it!</button>
       </div>
   </div>
   
   <div className="favorites-card">
       
       <img className='favorites-card-image' src="https://media.istockphoto.com/id/2175438440/photo/british-fish-and-chips-with-mashed-peas-tartar-and-ketchup-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=NdQF2q_rZImafS7JNDVv0s8fu7bBk3M_El-4b7r2fhk=" alt="" ></img>
       <div className='favorites-card-content'>
          <div className='favorites-card-title'> <b>British Fish and Chips</b></div>
           <MoreVertical size={24}color="black" className="drop-icon"/>
       </div>
       <div className='favorites-card-description'>Get your favorite fish and chips at a discount today at GoGrub.</div>
          <hr className='favorites-horizontal-line'></hr>
        <div className='favorites-card-price'> <b>Ksh 1000 </b></div>
       <div className='favorites-icons'>
       <Heart size={16} colour="dark-gray"/>
       <div className='favorites-counter'>
           <button className='favorites-counter-button' onClick={decrease}><Minus size={16}/></button>
            <span className="favorites-quantity">{quantity}</span>
           <button className='favorites-counter-button' onClick={increase}><Plus size={16}/></button>
           </div>
       </div>
       <hr className='favorites-horizontal-line'></hr>
       <div className='favorites-order-button'>
          <button>Grub it!</button>
       </div>
   </div>
   
   <div className="favorites-card">
       
       <img className='favorites-card-image' src="https://images.unsplash.com/photo-1613082487279-1e16f1e81505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" alt="" ></img>
       <div className='favorites-card-content'>
          <div className='favorites-card-title'> <b>Fruit Salad</b></div>
           <MoreVertical size={24}color="black" className="drop-icon"/>
       </div>
       <div className='favorites-card-description'>Get your favorite fruit salad at a discount today at GoGrub.</div>
          <hr className='favorites-horizontal-line'></hr>
        <div className='favorites-card-price'> <b>Ksh 500 </b></div>
       <div className='favorites-icons'>
       <Heart size={16} colour="dark-gray"/>
       <div className='favorites-counter'>
           <button className='favorites-counter-button' onClick={decrease}><Minus size={16}/></button>
            <span className="favorites-quantity">{quantity}</span>
           <button className='favorites-counter-button' onClick={increase}><Plus size={16}/></button>
           </div>
       </div>
       <hr className='favorites-horizontal-line'></hr>
       <div className='favorites-order-button'>
          <button>Grub it!</button>
       </div>
   </div>
   
   <div className="favorites-card">
       
       <img className='favorites-card-image' src="https://images.unsplash.com/photo-1634324092536-74480096b939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlsYXV8ZW58MHx8MHx8fDA%3D" alt="" ></img>
       <div className='favorites-card-content'>
          <div className='favorites-card-title'> <b>Pilau Rice</b></div>
           <MoreVertical size={24}color="black" className="drop-icon"/>
       </div>
       <div className='favorites-card-description'>Get your favorite pilau rice at a discount today at GoGrub.</div>
          <hr className='favorites-horizontal-line'></hr>
        <div className='favorites-card-price'> <b>Ksh 300 </b></div>
       <div className='favorites-icons'>
       <Heart size={16} colour="dark-gray"/>
       <div className='favorites-counter'>
           <button className='favorites-counter-button' onClick={decrease}><Minus size={16}/></button>
            <span className="favorites-quantity">{quantity}</span>
           <button className='favorites-counter-button' onClick={increase}><Plus size={16}/></button>
           </div>
       </div>
       <hr className='favorites-horizontal-line'></hr>
       <div className='favorites-order-button'>
          <button>Grub it!</button>
       </div>
   </div>
   
   <div className="favorites-card">
       
       <img className='favorites-card-image' src="https://media.istockphoto.com/id/2175769249/photo/kenya-cuisines-dishes-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=hzIEsUnxU-98cbP8NYwN1VzcT3yDI6m1awh5jCjY8kQ=" alt="" ></img>
       <div className='favorites-card-content'>
          <div className='favorites-card-title'> <b>Chapati and beef stew</b></div>
           <MoreVertical size={24}color="black" className="drop-icon"/>
       </div>
       <div className='favorites-card-description'>Get your favorite chapati and beef stew at a discount today at GoGrub.</div>
          <hr className='favorites-horizontal-line'></hr>
        <div className='favorites-card-price'> <b>Ksh 200 </b></div>
       <div className='favorites-icons'>
       <Heart size={16} colour="dark-gray"/>
       <div className='favorites-counter'>
           <button className='favorites-counter-button' onClick={decrease}><Minus size={16}/></button>
            <span className="favorites-quantity">{quantity}</span>
           <button className='favorites-counter-button' onClick={increase}><Plus size={16}/></button>
           </div>
       </div>
       <hr className='favorites-horizontal-line'></hr>
       <div className='favorites-order-button'>
          <button>Grub it!</button>
       </div>
   </div>
   
   <div className="favorites-card">
       
       <img className='favorites-card-image' src="https://images.unsplash.com/photo-1600555379765-f82335a7b1b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29va2VkJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D" alt="" ></img>
       <div className='favorites-card-content'>
          <div className='favorites-card-title'> <b>Whole chicken</b></div>
           <MoreVertical size={24}color="black" className="drop-icon"/>
       </div>
       <div className='favorites-card-description'>Get your favorite whole chicken at a discount today at GoGrub.</div>
          <hr className='favorites-horizontal-line'></hr>
        <div className='favorites-card-price'> <b>Ksh 1000 </b></div>
       <div className='favorites-icons'>
       <Heart size={16} colour="dark-gray"/>
       <div className='favorites-counter'>
           <button className='favorites-counter-button' onClick={decrease}><Minus size={16}/></button>
            <span className="favorites-quantity">{quantity}</span>
           <button className='favorites-counter-button' onClick={increase}><Plus size={16}/></button>
           </div>
       </div>
       <hr className='favorites-horizontal-line'></hr>
       <div className='favorites-order-button'>
          <button>Grub it!</button>
       </div>
   </div>
   
   <div className="favorites-card">
       
       <img className='favorites-card-image' src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFzYWduYXxlbnwwfHwwfHx8MA%3D%3D" alt="" ></img>
       <div className='favorites-card-content'>
          <div className='favorites-card-title'> <b>Lasagna</b></div>
           <MoreVertical size={24}color="black" className="drop-icon"/>
       </div>
       <div className='favorites-card-description'>Get your favorite lasagna at a discount today at GoGrub.</div>
          <hr className='favorites-horizontal-line'></hr>
        <div className='favorites-card-price'> <b>Ksh 500 </b></div>
       <div className='favorites-icons'>
       <Heart size={16} colour="dark-gray"/>
       <div className='favorites-counter'>
           <button className='favorites-counter-button' onClick={decrease}><Minus size={16}/></button>
            <span className="favorites-quantity">{quantity}</span>
           <button className='favorites-counter-button' onClick={increase}><Plus size={16}/></button>
           </div>
       </div>
       <hr className='favorites-horizontal-line'></hr>
       <div className='favorites-order-button'>
          <button>Grub it!</button>
       </div>
   </div>
   
   <div className="favorites-card">
       
       <img className='favorites-card-image' src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D" alt="" ></img>
       <div className='favorites-card-content'>
          <div className='favorites-card-title'> <b>Tiramisu</b></div>
           <MoreVertical size={24}color="black" className="drop-icon"/>
       </div>
       <div className='favorites-card-description'>Get your favorite tiramisu at a discount today at GoGrub.</div>
          <hr className='favorites-horizontal-line'></hr>
        <div className='favorites-card-price'> <b>Ksh 3000 </b></div>
       <div className='favorites-icons'>
       <Heart size={16} colour="dark-gray"/>
       <div className='favorites-counter'>
           <button className='favorites-counter-button' onClick={decrease}><Minus size={16}/></button>
            <span className="favorites-quantity">{quantity}</span>
           <button className='favorites-counter-button' onClick={increase}><Plus size={16}/></button>
           </div>
       </div>
       <hr className='favorites-horizontal-line'></hr>
       <div className='favorites-order-button'>
          <button>Grub it!</button>
       </div>
   </div>
   
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