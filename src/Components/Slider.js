import React,{Component} from 'react'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import filter from '../Images/filter.png';

import './Slider.css';
export default class MultipleItems extends Component {
	render() {
	  const settings = {
		dots: false,
	
		infinite: true,
		speed: 500,
		arrows:true,
		slidesToShow:13,
		slidesToScroll: 3,
		useCss:true,
	  };
  return (
  <div className='slider-container'>
	
       
	  <div className='slider-wrapper'>
	  <Slider {...settings}>
		  <div class="box1">
			<a href="#" ><img width="24" height="24" src="https://img.icons8.com/external-others-pike-picture/50/external-business-office-and-workplace-others-pike-picture-8.png" alt="external-business-office-and-workplace-others-pike-picture-8"/><br></br>Views</a>
		  </div>
		  <div class="box">
			<a href="#" ><img width="24" height="24" src="https://img.icons8.com/ios/50/office.png" alt="office"/><br/>Rooms</a>
		  </div>
		  <div class="box">
			<a href="#" ><img width="26" height="26" src="https://img.icons8.com/dotty/80/treehouse.png" alt="treehouse"/><br/>Treehouses</a>
		  </div>
		  <div class="box4">
			<a href="#" ><img width="24" height="24" src="https://img.icons8.com/external-fauzidea-detailed-outline-fauzidea/64/external-pool-summer-fauzidea-detailed-outline-fauzidea.png" alt="external-pool-summer-fauzidea-detailed-outline-fauzidea"/><br/>Pools</a>
		  </div>
		  <div class="box">
			<a href="#"><img width="24" height="24" src="https://img.icons8.com/pulsar-line/48/castle.png" alt="castle"/>
<br/>Castles</a>
		  </div>
		<div class="box">
			<a href="#" ><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/sea-waves.png" alt="sea-waves"/><br/>Lake</a>
		  </div>
		  <div class="box">
			<a href="#" ><img width="24" height="24" src="https://img.icons8.com/ios/50/farm.png" alt="farm"/><br/>Farms</a>
		  </div>
		  <div class="box">
			<a href="#" ><img width="24" height="24" src="https://img.icons8.com/ios/50/log-cabin.png" alt="log-cabin"/><br/>Cabin</a>
		  </div>
		  <div class="box">
			<a href="#" ><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/beach.png" alt="beach"/><br/>Tropical</a>
		  </div>
		  <div class="box">
			<a href="#"><img width="24" height="24" src="https://img.icons8.com/ios/50/bungalow.png" alt="bungalow"/><br/>Beachfront</a>
		  </div>
          <div class="box">
			<a href="#"><img width="24" height="24" src="https://img.icons8.com/ios/50/national-park.png" alt="national-park"/><br/>Parks</a>
		  </div>
          <div class="box">
			<a href="#"><img width="24" height="24" src="https://img.icons8.com/ios/50/camping-tent.png" alt="camping-tent"/><br/>Camping</a>
		  </div>
          <div class="box">
			<a href="#"><img width="24" height="24" src="https://img.icons8.com/windows/32/planet-globe.png" alt="planet-globe"/><br/>OMG!</a>
		  </div>
    
          <div class="box">
			<a href="#"><img width="24" height="24" src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/external-trending-basic-user-interface-anggara-glyph-anggara-putra-7.png" alt="external-trending-basic-user-interface-anggara-glyph-anggara-putra-7"/><br/>Trending</a>
		  </div>
		  </Slider>
		  </div>
		  <div className='filter'>
		  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded full">
<p><img width={15} height={15}  src={filter}></img>Filter</p>
</button>

		  </div>
		</div>
	
    
  )
  };}
