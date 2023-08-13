import React, { Component } from "react";
import Slider from "react-slick";
import './Heart'
import ScrollToTop from "react-scroll-to-top";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Content.css';
import Heart from "./Heart";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease',
  };
    return (
  <div className="container">
   
    
   <div class="grid grid-cols-5 gap-5">
   <div>
       <Slider {...settings}>
        
                <img id="slide-1" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720"></img>
              
                
               <img id="slide-2" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/9de4848a-babd-4741-8ac0-2b246527ed36.jpeg?im_w=720"></img> 
            
             
       <img id="slide-3" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/f265454d-7a6a-4940-809f-76e450a35012.jpeg?im_w=720"></img>
       
                <img id="slide-4" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/fc43fe58-2e6c-44e6-af3a-aa00d10d6ca3.jpeg?im_w=720"></img>
                  
        <img id="slide-5" src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/2d006c9c-7ed5-4483-b154-e910d8649cd6.jpeg?im_w=720"></img>
    </Slider><br></br>
    <b>Salobrena,Spain </b>&nbsp;&nbsp;&nbsp;&nbsp;★4.75(12)<Heart></Heart><br></br>Villa del Acantilado<br></br>4 beds<br></br>Mountain and sea views<br></br><b>₹2,11,643</b>night 
  </div>
   <div>
    <Slider {...settings}>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51240398/original/fe5f02fd-d859-4e6e-a061-9aa56330ef38.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51240398/original/dc343c3a-81d1-4617-8962-32e95f9030ca.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51240398/original/07d03889-b84c-498b-baa6-f78ecd4242c1.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51240398/original/82d315fe-bd44-425b-8cd8-9370dcf620d0.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-51240398/original/b63d7600-e956-45e4-904d-4b83b72f7ce6.jpeg?im_w=720"></img>

    </Slider>
    <br></br>
    <b>Fahrani,Switzerland</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★4.43(53)<Heart></Heart><br></br>Star-Suite bei Thun mit Blick auf die Alpenkette<br></br>1 queen bed<br></br>Mountain and garden views<br></br><b>₹29,029</b> night
   </div>
  <div>
    <Slider {...settings}>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=720"></img>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/b0f5f933-1f0b-4f89-b6e6-7b0c2f4dfacd.jpeg?im_w=720"></img>
        <img src="https://a0.muscache.com/im/pictures/26c03651-2618-4286-98e3-5c82691bb5bb.jpg?im_w=720"></img>
        <img src="https://a0.muscache.com/im/pictures/80c053cd-cce6-4fea-ba6f-b27be25d7771.jpg?im_w=720"></img>
    </Slider>
    <br></br><b>Torino,Italy</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★4.87<Heart></Heart><br></br>Stay with Carmela,Hosting for 7 years<br></br>1-6 Aug<br></br><b>₹4,234 night</b>
</div>
<div>
    <Slider {...settings}>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720"></img>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/7da9fd6a-8d6c-4954-88b0-1fc52abc9cfd.jpeg?im_w=720"></img>
        <img src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/41cbfe4c-56b1-4a67-8365-47a5894816a4.jpeg?im_w=720"></img>
       
        </Slider>
        <br></br><b>Nantes,France</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★4.96<Heart></Heart><br></br>Stay with Golwen <br></br>2-7 Sep <br></br><b>₹7,450</b>
    </div>
   <div>
  
    <Slider {...settings}>
        <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1112254/original/e6bed0e6-6190-4119-bd80-d12d369cea19.jpg?im_w=720"></img>
        <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1112254/original/d995f036-944f-4c03-9075-ccda657976ee.jpg?im_w=720"></img>
        <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1112254/original/d4f934d2-3f14-404f-a233-f9697e276463.jpg?im_w=720"></img>
        <img src="https://a0.muscache.com/im/pictures/airflow/Hosting-1112254/original/213fcec2-069d-457c-875f-6792811ea77f.jpg?im_w=720"></img>

    </Slider>
   
    <br></br><b>Palermo,Italy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★4.83<Heart></Heart></b><br></br>Stay with Gandolfo Gabriele Artist<br></br>1-6 Aug<br></br>₹10,399 night
</div>
<div>
  
  <Slider {...settings}>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-45076629/original/0d4e80ac-b1b4-44d1-ab2f-10c67c1e8e2a.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-45076629/original/90bdea3d-b27d-4857-9ff8-606c806baf30.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-45076629/original/8906b4db-21fd-4bf3-8619-0492981c4ea6.png?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-738938787052681216/original/2ab5be30-f8a2-4bb3-9b5a-a3de045a11f8.jpeg?im_w=720"></img>
    </Slider>
    <br></br><b>Zanzibar,Tanzania<Heart></Heart></b><br></br>Stay with Oliver<br></br>1-6 Aug<br></br><b>₹12,210</b> night
</div>
<div>
  
  <Slider {...settings}>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-907467321069857452/original/7de13316-8013-4621-bfba-bb676491a79e.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-907467321069857452/original/d96a2e22-d4ac-457a-89b0-f2bbb1c7151d.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-907467321069857452/original/44ab3072-83f2-4e2a-a0a9-40c8a5882b40.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-907467321069857452/original/dcdd7458-f366-4fcb-b46c-3586d1f0a9ba.jpeg?im_w=720"></img>
    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-907467321069857452/original/683c40ff-ba91-4212-8164-c1b36912f33e.jpeg?im_w=720"></img>
  </Slider>
  <br></br><b>Seogwipo-si,South Korea</b>&nbsp;&nbsp;&nbsp;&nbsp;★New<Heart></Heart><br></br>Stay with Carl<br></br>3-8 Sep<br></br><b>₹2,950</b>night
</div>
<div>
<Slider {...settings}>
  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-792742639858876908/original/bdf7942e-2c10-4acd-b653-820b9ed4dae5.jpeg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-757096670950759113/original/1aec33de-3097-4fb4-aa7c-f549f63633ca.jpeg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-757096670950759113/original/0dac2b36-2e04-4e8d-8a5c-a5fb78b1ff5e.jpeg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-757096670950759113/original/19584fdb-a012-40a6-9f87-db6423a9398b.jpeg?im_w=720"></img>
  </Slider>
  <br></br><b>London,UK</b> &nbsp;&nbsp;&nbsp;&nbsp;★5.0<Heart></Heart><br></br>Stay with Gemma.Hosting for 7 years<br></br>7-14 Oct<br></br><b>₹6,297</b> night
  </div>
  <div>
<Slider {...settings}>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633066598262702361/original/93eebed7-db1d-4029-9f6e-1fb8ad1d45d4.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633066598262702361/original/c1c7ffb7-8b2d-4947-a2cb-bb3c788f3d22.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633066598262702361/original/6c5325be-d8d7-47bc-a3fb-d28f89eff27e.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633066598262702361/original/f3dfae5e-7068-48ed-948a-9f59e9bfba04.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633066598262702361/original/c41239de-ebbd-4cfd-9d3a-caeba0ab49ba.jpeg?im_w=720"></img>

</Slider>
<br></br><b>Uccle,Belgium<Heart></Heart></b><br></br>Stay with Marianne<br></br>17-22 Sep<br></br><b>₹2,820</b> night 
</div>
<div>
<Slider {...settings}>
  <img src="https://a0.muscache.com/im/pictures/b8f7b947-48c7-4659-914c-b2abe683ef3c.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/4995e41a-917d-42c0-a893-b9af5889e745.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/2aa60ac4-9f33-46ee-8bfc-3e8ec28a2f08.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/f3d7c1c4-842f-4958-9212-c72442bdd887.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/56fb5c88-ae24-4a7c-a449-1e74117e68cd.jpg?im_w=720"></img>
</Slider>
<br></br><b>Lisbon,Portugal</b><Heart></Heart><br></br>Stay with Alexey,Fashion<br></br>27 Aug-2 Sep<br></br><b>₹10,729</b> night 
</div>
<div>
<Slider {...settings}>
<img src="https://a0.muscache.com/im/pictures/airflow/Hosting-33677783/original/e246df5f-1425-4eb4-b148-5b65da7e3f0a.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/airflow/Hosting-33677783/original/c008ec31-1cc0-46e1-9c5d-7279ffd29ff6.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/airflow/Hosting-33677783/original/bf4c4936-21ef-4e33-ac30-a23205ed82c4.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/airflow/Hosting-33677783/original/c1229240-6372-464c-9dee-eff682b31699.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/airflow/Hosting-33677783/original/2a365281-80a8-48b3-874a-98aa90267fff.jpg?im_w=720"></img>
</Slider>
<br></br><b>Nariz,Portugal</b>&nbsp;&nbsp;&nbsp;&nbsp;★5.0<Heart></Heart><br></br>Stay with Lisa .Agriculture <br></br>7-12 Sep <br></br><b>₹4,998</b> night
</div>
<div>
<Slider {...settings}>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633832971934737080/original/78eab92d-5513-4a86-b03d-2f8e24c4ceef.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633832971934737080/original/bd33094e-ab90-48ff-ae6c-42d2bbd74d46.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633832971934737080/original/8a219445-78e7-4032-a451-baf3b4218d1c.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633832971934737080/original/b3423d81-490a-4412-bc2a-d7e4db22ca15.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-633832971934737080/original/17bcc4fa-36bb-4dc8-a6df-dd761bdf4079.jpeg?im_w=720"></img>

</Slider>
<br></br><b>Kullu,India<Heart></Heart></b><br></br>Stay with Aditya .Hospitality<br></br>1-8 Aug<br></br><b>₹6,439</b> night
</div>
<div>
  <Slider {...settings}>
  <img src="https://a0.muscache.com/im/pictures/14566590/e9d35946_original.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/f2021635-ca64-4ea2-a6ff-4d6bc21410b5.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/d453422e-e52a-4715-ac71-6519bfd4b92a.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/89ed4bdd-0ee8-4ba7-9bb2-bd93ace0f7b4.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/15197cc9-a465-4708-bef5-52f98585e7dc.jpg?im_w=720"></img>
</Slider>
<br></br><b>Redfern,Australia</b>&nbsp;&nbsp;&nbsp;&nbsp;★4.89<Heart></Heart><br></br>Stay with Spencer .Travel and tourism<br></br>27 Oct -1Nov<br></br><b>₹6,853</b> night
</div>
<div>
<Slider {...settings}>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-17780620/original/3ddc21b4-9a03-46cd-b1c9-409ebc327d35.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-17780620/original/3b72652a-2d55-4f57-baa5-4abbd60de003.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-17780620/original/1929e833-d701-401d-a37d-7d7dce746407.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-17780620/original/4857c445-5736-4629-9d6b-d8724f189f1a.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-17780620/original/f4fe60dd-f9a9-41f1-b0dc-a582c03c6d49.jpeg?im_w=720"></img>
</Slider>
<br></br><b>Forest Lodge,Australia</b>&nbsp;&nbsp;&nbsp;&nbsp;★4.88<Heart></Heart><br></br> Stay withSkype .Advertising producer<br></br>2-7 Sep <br></br><b>₹6,962</b> night
</div>
<div>
<Slider {...settings}>
  <img src="https://a0.muscache.com/im/pictures/910bf7b6-6922-44da-9395-4c793d0044b5.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/b0fdf5d3-1b33-4390-9110-6fdb84901110.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/18c51e92-d227-4bcf-b74e-c572a02e76f5.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/22fbd007-ddf6-4d90-9984-66de983916aa.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/abce6121-7806-4353-8f23-8acab89852c2.jpg?im_w=720"></img>
</Slider>
<br></br><b>Bingin Beach,Indonasia</b>&nbsp;&nbsp;&nbsp;&nbsp;★4.95<Heart></Heart><br></br>4,784 kilometers away<br></br>26-31 Aug<br></br><b>₹37,673</b> night
</div>
<div>
<Slider {...settings}>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-53356466/original/f353fb80-0915-40ab-8032-6bc810ac273e.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-53356466/original/80597541-a243-4938-b479-00995447f06c.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-53356466/original/6892e348-4447-4128-92e7-b805b94646d2.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-53356466/original/a90fdf8f-acc2-4ff0-82bc-8fdd4d24e0d4.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-53356466/original/c24bd6f6-c0bb-4968-9abb-7ecb1c32063b.jpeg?im_w=720"></img>
</Slider>
<br></br><b>Predeal,Romania</b>&nbsp;&nbsp;&nbsp;&nbsp;★5.0<Heart></Heart><br></br>6,211 kilometers away<br></br>27 Aug -1 Sep<br></br><b>₹26,127</b> night
</div>
<div>
<Slider {...settings}>
<img src="https://a0.muscache.com/im/pictures/337713b1-b875-4c13-9c69-f09ad8fe1e3e.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/a93a8050-2731-45af-968b-fe57fa0b192e.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/a4101118-a847-4e37-8ddf-0b5eabe5c045.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/1cd92572-b659-49df-af05-ad9354ff70b1.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/1e96d11f-8d06-472d-bf3f-d9a951c6fdf5.jpg?im_w=720"></img>
</Slider>
<br></br><b>Kos,Greece</b>&nbsp;&nbsp;&nbsp;&nbsp;★5.0<Heart></Heart><br></br>5,737 kilometers away<br></br>26-31 Aug<br></br><b>₹18,651</b> night
</div>
<div>
<Slider {...settings}>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-28254684/original/99bd44d1-abca-4b1c-b5da-eb05eaac9193.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/b5f7057b-32d4-4d15-a7bf-5e95b647a8d2.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/miso/Hosting-28254684/original/a885d4ee-ecad-4422-a3c4-d3e6352163cc.jpeg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/2ef5defc-c684-42f0-8001-4d2fea7165d1.jpg?im_w=720"></img>
<img src="https://a0.muscache.com/im/pictures/6a79cdb2-4e12-47e8-aed8-aa8b8aba81a9.jpg?im_w=720"></img>
</Slider>
<br></br><b>Austin,Texas US</b>&nbsp;&nbsp;&nbsp;&nbsp;★4.92<Heart></Heart><br></br>15,490 kilometers away<br></br>25-30 Aug<br></br><b>₹51,835</b> night
</div>
<div>
<Slider {...settings}>
  <img src="https://a0.muscache.com/im/pictures/b565e05e-beb5-4643-a76a-0f80a89d0ec9.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/2122b1af-5ae2-40df-b832-9c35728b5cae.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/20d329f1-e027-415a-928d-1aaf57eddc94.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/12b6af02-367d-4d54-8590-6356195ef110.jpg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/2a1c41f3-97e3-466b-bb2a-2ef144c45213.jpg?im_w=720"></img>
</Slider>
<br></br><b>Panchgani,India</b>&nbsp;&nbsp;&nbsp;&nbsp;★4.91<Heart></Heart><br></br>922 kilometers away<br></br>6-11 Aug<br></br><b>₹32,000</b> night
</div>
<div>
<Slider {...settings}>
  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-54299560/original/4ee10ddd-a741-4cd1-bf5d-e5955f6072ff.jpeg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-54299560/original/f4d43f95-7293-4891-b98f-2c8eba87c7ad.jpeg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-54299560/original/829072a8-8001-400b-8456-1d190419c473.jpeg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-54299560/original/90ad4124-82c9-4b5b-b3e1-09206bc7e565.jpeg?im_w=720"></img>
  <img src="https://a0.muscache.com/im/pictures/miso/Hosting-54299560/original/69b22f1e-bf34-4f72-a2c6-a45bbc6e99dd.jpeg?im_w=720"></img>
</Slider>
<br></br><b>Tornio,Finland</b>&nbsp;&nbsp;&nbsp;&nbsp;★4.91<Heart></Heart><br></br>7,353 kilometers away<br></br>7-12 Aug<br></br><b>₹9,324</b> night
</div>

</div>
<ScrollToTop smooth />
      </div>


    )}
    export default SimpleSlider;
