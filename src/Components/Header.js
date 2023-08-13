import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
function Header() {
  return (
    <section className='header-container'>
        <div className='header-wrapper'>
           <div className='headercontent'><h2>Rooms and 50+ features</h2></div>
        <div className='headervideo'>
          <Link to='https://www.youtube.com/watch?v=qZxM7TkdNUA&t=10s'>
<img src="https://assets-news.housing.com/news/wp-content/uploads/2020/11/18162704/Things-to-do-before-you-sell-your-home-Thumbnail-300x200-compressed.jpg" alt="seller" class='img-rounded'></img>&nbsp;&nbsp;  &nbsp;</Link>
</div>
<p>Play the Roomfilm |<Link to='/'> Learn More</Link></p>

</div>
        </section>
   
  )
}

export default Header