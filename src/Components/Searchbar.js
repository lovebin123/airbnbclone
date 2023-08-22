import React from 'react';
import { Link } from "react-router-dom";
import './Searchbar.css';
import glass from '../Images/search.png'
import { useState } from 'react';
import { Switch } from 'antd';
import Button from 'react-bootstrap/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Calender1 from './Calender';
import Counter from './Counter';
function Searchbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
    <div className='searchbar-container'>
        <div className='searchbar-wrapper'> 
            <div className='airbnb'>
            <img width="48" height="48" src="https://img.icons8.com/color/48/airbnb.png" alt="airbnb"/><b>airbnb</b>
            </div>
            <div className='btn-group'>
              <button data-bs-toggle="modal" data-bs-target="#btngroup" className='anywhere'>&nbsp;&nbsp;Anywhere&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="vr"></div></button>
              <button data-bs-toggle="modal" data-bs-target="#btngroup">Any week&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="vr"></div></button>
              <button data-bs-toggle="modal" data-bs-target="#btngroup" className='guests'><div className='just'>Add Guests<img class='img-circle' width={26} height={26} src={glass}></img></div> </button>
           
         
            </div>
          

            <div className='loginstuff'>
              <p className='p1'><a href='https://www.airbnb.co.in/host/homes' ><b>Airnub your home</b>&nbsp;&nbsp;</a></p>
              <p className='p2'><button type='button' data-bs-toggle="modal" data-bs-target="#language"><img width="18" height="18" src="https://img.icons8.com/ios-glyphs/30/geography.png" alt="geography"/></button>
            
              </p>
         <p className='p3'>
             <button type="button" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-circle-user" style={{color: '#727479;'}}></i><img width="25" height="25" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>

</button>
</p>  </div>

            </div> 
            <div class="modal fade" id="language" tabindex="-1" role="dialog" aria-labelledby="languageModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="language-title" id="languageModalTitle">Language and Region</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
    <div className='transl'>
     <p className='p13'> Translation<p className='p10'><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/google-translate.png" alt="google-translate"/></p></p><br/><p className='p11'>Automatically translate descriptions and reviews</p><p className='p12'> <Switch size='large' defaultChecked={true} className="custom-switch" /></p>
     </div>
     <h4>Choose a language and region</h4><br></br>
     <Grid  container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }} >
     <Grid item xs={3 } className="custom-grid">
        <Item>
        English<br/>India
        </Item>
</Grid>
        <Grid item xs={3} className="custom-grid">
        <Item>
        Azərbaycan dili<br/>Azərbaycan
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Bahasa Indonasia<br/>Indonasia
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Bosanki<br/>Bosna i Hercegovina
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Català<br/>
        Espanya
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Dansk<br/>Denmark
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Deutsch<br/>Deutschland
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Deutsch<br/>Osterrich
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Eesti<br/>Eesti
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        English<br/>Australia
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        English<br/>Singapore
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        English<br/>UAE
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        English<br/>Ireland
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Español<br/>Argentina
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Español<br/>Belice
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Español<br/>Bolivia</Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Español<br/>Chile
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Español<br/>Columbia
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Español<br/>Ecuador
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Español<br/>Costa Rica
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Español<br/>Paraguay
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Español<br/>Costa Rica
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Français<br/>Costa Rica
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Français<br/>France
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">

        <Item>
        Français<br/>Canada
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Français<br/>Luxemborg
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        Français<br/>Costa Rica
        </Item>
</Grid>
<Grid item xs={3} className="custom-grid">
        <Item>
        العربية <br/>العالم
        </Item>
</Grid>




     </Grid>
    
    
      </div>
     
    </div>
  </div>
</div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-scrollable modal-md">

    <div class="modal-content">
      <div class="modal-header">
      <h5 className='head1'>Login or Sign up</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <main className="w-full h-full flex flex-col items-center justify-center px-6">
            <div className="max-w-full w-full text-gray-600 space-y-8">
                <div className="text-center">
                 
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Welcome to Airbnb</h3>
                        <p className="">Don't have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                    <input type="text" class="form-control" placeholder="+91" aria-label="Mobile Number"/>              </div>
                    <button
                        className="w-full mt-4 px-4 py-2 text-white font-medium bg-pink-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Continue
                    </button>
                </form>
                <div className="relative">
                    <span className="block w-full h-px bg-gray-300"></span>
                    <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Or continue with</p>
                </div>
                <div className="space-y-4 text-sm font-medium">
                    <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Continue with Google
                    </button>
                    <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937" fill="#1DA1F2" />
                        </svg>
                        Continue with Twitter
                    </button>
                    <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
<path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
</svg>
   Continue with Apple</button>
                </div>
                <div className="text-center">
                    <a href="javascript:void(0)" className="text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
            </div>
        </main>
      </div>
    
    </div>
  </div>
</div>
<div class="modal fade" id="btngroup" tabindex="-1" aria-labelledby="btngroup" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
  <button type="button" class=" px-6 py-4 text-sm font-medium text-gray-900 bg-red-400 border border-gray-900 rounded-xl hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 focus:text-black dark:border-white dark:text-black dark:hover:text-black dark:hover:bg-white-700 dark:focus:bg-pink-700" data-bs-toggle="collapse" data-bs-target='#dest' aria-expanded="false" aria-controls='dest'>
    Search Destinations
  </button>
  <button type="button" class="px-6 py-4 text-sm font-medium text-gray-900 bg-red-400 border border-b border-gray-900 rounded-xl hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 focus:text-black dark:border-white dark:text-black dark:hover:text-black dark:hover:bg-white-700 dark:focus:bg-pink-700" data-bs-toggle="collapse" data-bs-target='#calen' aria-expanded="false" aria-controls='calen'>
    Choose Date
  </button>
  <button type="button" class="px-6 py-4 text-sm font-medium text-gray-900 bg-red-400 border border-gray-900 rounded-xl hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 focus:text-black dark:border-white dark:text-black dark:hover:text-black dark:hover:bg-white-700 dark:focus:bg-pink-700" data-bs-toggle="collapse" data-bs-target='#gues' aria-expanded="false" aria-controls='gues'>
    Add Guests
  </button>

      </div>
      <div class="modal-body">
     <div className='row'>
      <div className='collapse' id='dest'>
      <div className='row'>
         <div className='col-sm-4 grider'>
                <img src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg ' className='im'></img><b>I am flexible</b>
                </div>
                
                <div className='col-sm-4 grider' >
                <img src='https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320' className='im'></img>
                 <b>Europe</b>
                </div>
                <div className='col-sm-4 grider' >
                <img src='https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320' className='im'></img>
                 <b>United Kingdom</b>
                </div>
                <div className='col-sm-4 grider' >
                <img src='https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320' className='im'></img>
                 <b>SouthEast Asia</b>
                </div>
                <div className='col-sm-4 grider' >
                <img src='https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320' className='im'></img>
                 <b>Italy</b>
                </div>
                <div className='col-sm-4 grider' >
                <img src='https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320' className='im'></img>
                 <b>United States</b>
                </div>

         </div></div>

         <div className='collapse' id='calen'>
                <div className='row'>
                <Calender1/>
                </div></div>
                <div className='collapse' id='gues'>
                <div className='row'>
              <b>Adults</b>Age 13 or above <Counter/><hr/>
                </div>
                <div className='row'>
              <b>Children</b>Age 2-12 <Counter/><hr/>
                </div>
                <div className='row'>
                        <b>Infants</b>Under 2<Counter/> <hr/>
                </div>
                <div className='row'>
                        <b>Pets</b><u>Bringing a service animal</u><Counter/> <hr/>
                </div>
                </div>
         
        </div>
      </div></div>
      
    </div>
    
    </div>
  </div>



  

    
  )
}

export default Searchbar