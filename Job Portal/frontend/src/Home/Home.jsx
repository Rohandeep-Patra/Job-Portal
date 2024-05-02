import React from "react";
import Navbar from "../NavBar/Navbar";
import { Link, NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const Home = () => {
  let JobDetails = [
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-1.png",
      jobtitle: "Full Stack Web Developer",
      experience: "2-4 Years",
      location: "Kolkata , India",
      time: "1 hr Ago",
      salary: "10 LPA",
      jobtype: "Part-Time",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-4.png",
      jobtitle: "Senior Product Designer",
      experience: "6-10 Years",
      location: "Pune , India",
      time: "1 hr Ago",
      salary: "8 LPA",
      jobtype: "Full-Time",
    },
    {
      image:
        "https://superio-reactjs.ibthemespro.com/images/resource/company-logo/1-6.png",
      jobtitle: "Software Engineer (Android), Libraries",
      experience: "0-2 Years",
      location: "Chennai , India",
      time: "1 hr Ago",
      salary: "20K Per Month",
      jobtype: "Internship",
    },
  ];

  return (
    <>
      <div className="  relative">
        <div className="absolute z-50">
          <Navbar />
        </div>
        <div className="sm:h-[115vh] md:h-[130vh] w-auto z-49 bg-gradient-to-r from-indigo-600 to-blue-800">
          <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap ">
            <div className="pt-20 ml-10 flex flex-col justify-center md:justify-start font-semibold md:basis-3/5 md:ml-20">
              <p className="text-white text-2xl md:text-5xl mt-10 md:mt-52 font-Josefin">
                There Are 93,178 Postings Here For you!
              </p>
              <p className="text-white text-sm mt-3 md:pt-8 ">
                Find Jobs, Employment & Career Opportunities
              </p>
              <div className="flex flex-col md:flex-row gap-0 relative ">
                <input
                  type="text"
                  placeholder="Job Title , Keywords Or Company"
                  className="font-Josefin focus:outline-none h-20 md:h-24 mt-10 w-[90%]  md:w-[50%] pl-8 font-normal text-black rounded md:rounded-l-lg md:rounded-r-none md:border md:border-slate-100"
                />
                <input
                  type="text"
                  placeholder="City Or Postcode"
                  className="font-Josefin md:border md:border-slate-100 focus:outline-none h-20 md:h-24 mt-5 md:mt-10 w-[90%] md:ml-0 md:w-[50%] pl-8 font-normal text-black rounded md:rounded-r-lg md:rounded-l-none"
                />
                <button className="h-14 w-[90%] bg-blue-400 text-white mt-7 rounded-lg md:w-[120px] md:absolute md:right-6 md:top-8">
                  Find Jobs
                </button>
              </div>
              <div className="md:flex">
                <p className=" text-white mt-6">Popular Searches :</p>
                <p className="text-white md:mt-6 md:ml-4">
                  {" "}
                  Designer, Developer, Web, IOS, PHP, Senior, Engineer
                </p>
              </div>
              <div className="md:flex pt-10 md:pt-14">
                <p className=" text-white mt-6">10k+ Candidates</p>
                <div className="md:pt-2 md:ml-4 mt-2 md:mt-0 relative overflow-visible">
                  <div className="h-14 w-14 bg-green-400 rounded-full border-2 border-white overflow-hidden absolute z-4">
                    <img
                      src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="imge1"
                      className=" h-full w-16"
                    />
                  </div>
                  <div className="h-14 w-14 bg-green-400 rounded-full border-2 border-white overflow-hidden absolute z-3 left-[40px]">
                    <img
                      src="https://images.pexels.com/photos/12169270/pexels-photo-12169270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="imge1"
                      className=" h-full w-16"
                    />
                  </div>
                  <div className="h-14 w-14 bg-green-400 rounded-full border-2 border-white overflow-hidden absolute z-2 left-[80px]">
                    <img
                      src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="imge1"
                      className=" h-full w-16"
                    />
                  </div>
                  <div className="h-14 w-14 bg-green-400 rounded-full border-2 border-white overflow-hidden absolute z-1 left-[120px]">
                    <img
                      src="https://images.pexels.com/photos/2985097/pexels-photo-2985097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="imge1"
                      className=" h-full w-16"
                    />
                  </div>
                  <div className="h-14 w-14 bg-green-400 rounded-full border-2 border-white overflow-hidden absolute z-0 left-[160px]">
                    <img
                      src="https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="imge1"
                      className=" h-full w-16"
                    />
                  </div>
                </div>
                <NavLink to="/candidate-dash/myResume" className=" ml-[272px] text-white md:mt-6 flex">
                  <span class="material-symbols-outlined ">upload_file</span>
                  <p>Upload Your CV</p>
                </NavLink>
              </div>
            </div>
            <div className="md:basis-2/5 ">
              <svg
                className=" hidden md:block md:h-[570px] md:w-[650px] relative top-[155px] "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 820.25417 645.76932"
              >
                <g>
                  <path
                    d="M215.14368,291.44366c-1.80561,0-3.27392,1.46831-3.27392,3.27392v26.1914c0,1.80561,1.46831,3.27392,3.27392,3.27392s3.27392-1.46831,3.27392-3.27392v-26.1914c0-1.80561-1.46831-3.27392-3.27392-3.27392Z"
                    fill="#3f3d56"
                  />
                  <path
                    d="M587.53737,0H293.03992c-33.39617,0-60.46911,27.07294-60.46911,60.46911V580.86906c0,33.3961,27.07289,60.46899,60.46899,60.46899h294.49758c33.39617,0,60.46911-27.07294,60.46911-60.46911V60.46911c0-33.39617-27.07294-60.46911-60.46911-60.46911Z"
                    fill="#fff"
                  />
                  <path
                    d="M587.53754,645.76932H293.03995c-34.1321,0-61.90106-27.76825-61.90106-61.90036V63.4694c0-34.1321,27.76895-61.90106,61.90106-61.90106h294.49759c34.1321,0,61.90106,27.76895,61.90106,61.90106V583.86896c0,34.1321-27.76895,61.90036-61.90106,61.90036ZM293.03995,4.43215c-32.55338,0-59.03725,26.48388-59.03725,59.03725V583.86896c0,32.55338,26.48388,59.03655,59.03725,59.03655h294.49759c32.55338,0,59.03725-26.48318,59.03725-59.03655V63.4694c0-32.55338-26.48388-59.03725-59.03725-59.03725H293.03995Z"
                    fill="#3f3d56"
                  />
                  <path
                    d="M608.86965,126.80419h-118.3722c-5.02073,0-9.10555-4.08483-9.10555-9.10555s4.08483-9.10555,9.10555-9.10555h118.3722c5.02073,0,9.10555,4.08483,9.10555,9.10555s-4.08483,9.10555-9.10555,9.10555Z"
                    fill="#e6e6e6"
                  />
                  <path
                    d="M497.8209,198.4097h-115.06341c-2.90084,0-5.2612-2.36037-5.2612-5.2612,0-2.90084,2.36036-5.2601,5.2612-5.2601h115.06341c2.90084,0,5.2601,2.35927,5.2601,5.26011,0,2.90084-2.35926,5.2612-5.2601,5.2612Z"
                    fill="#6c63ff"
                  />
                  <rect
                    x="269.05382"
                    y="22.55692"
                    width="66.58064"
                    height="8.53598"
                    rx=".31021"
                    ry=".31021"
                    fill="#e6e6e6"
                  />
                  <circle
                    cx="556.46311"
                    cy="24.26412"
                    r="6.82878"
                    fill="#e6e6e6"
                  />
                  <circle
                    cx="575.24227"
                    cy="24.26412"
                    r="6.82878"
                    fill="#e6e6e6"
                  />
                  <circle
                    cx="594.02142"
                    cy="24.26412"
                    r="6.82878"
                    fill="#e6e6e6"
                  />
                  <path
                    d="M292.32311,226.57123c0,.9451,.75895,1.70397,1.70405,1.70397h292.52305c.94502,0,1.70397-.75886,1.70397-1.70397,0-.94502-.75895-1.70397-1.70397-1.70397H294.02716c-.9451,0-1.70405,.75895-1.70405,1.70397Z"
                    fill="#3f3d56"
                  />
                  <path
                    d="M524.32311,467.57123c0,.9451,.75895,1.70397,1.70405,1.70397h292.52305c.94502,0,1.70397-.75886,1.70397-1.70397,0-.94502-.75895-1.70397-1.70397-1.70397h-292.52305c-.9451,0-1.70405,.75895-1.70405,1.70397Z"
                    fill="#3f3d56"
                  />
                  <path
                    d="M558.49856,360.4981h-175.54826c-2.90084-.00001-5.2612-2.36037-5.2612-5.26121,0-2.90084,2.36036-5.2601,5.2612-5.2601h175.54826c2.90084,.00001,5.2601,2.35928,5.2601,5.26012,0,2.90084-2.35926,5.2612-5.2601,5.2612Z"
                    fill="#6c63ff"
                  />
                  <circle
                    cx="329.70574"
                    cy="354.58702"
                    r="12.88711"
                    fill="#6c63ff"
                  />
                  <path
                    d="M328.27371,376.06554v-2.8638c10.65885,0,19.33066-8.67181,19.33066-19.33066s-8.67181-19.33066-19.33066-19.33066v-2.8638c12.23828,0,22.19447,9.95619,22.19447,22.19447s-9.95619,22.19447-22.19447,22.19447Z"
                    fill="#3f3d56"
                  />
                  <path
                    id="uuid-9e40be56-d004-4de8-84cd-e8041855938b-425"
                    d="M174.78102,302.61468c5.25679-5.34964,12.27813-6.97361,15.68213-3.62759,3.404,3.34602,1.90142,10.39391-3.35796,15.74475-2.07159,2.16626-4.63183,3.80492-7.46654,4.77886l-22.55949,22.38538-10.27915-10.81042,23.33099-20.92029c.92475-2.85215,2.51925-5.4413,4.65003-7.55069Z"
                    fill="#ffb6b6"
                  />
                  <path
                    d="M102.63289,284.13678l23.65312,52.47301,37.77041-20.44495,13.51734,7.17415s-30.87649,51.61987-52.01762,45.74362c-21.14112-5.87625-58.68228-59.15807-51.9183-75.60245,6.76399-16.44438,28.99505-9.34339,28.99505-9.34339Z"
                    fill="#e6e6e6"
                  />
                  <path
                    d="M0,644.013c0,.66003,.53003,1.19,1.19006,1.19H730.48004c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H1.19006c-.66003,0-1.19006,.53003-1.19006,1.19Z"
                    fill="#3f3d56"
                  />
                  <ellipse
                    cx="218.32235"
                    cy="323.94725"
                    rx="64.899"
                    ry="63.53157"
                    fill="#6c63ff"
                  />
                  <g>
                    <polygon
                      points="92.26132 633.8482 109.50824 633.84652 117.7127 567.32191 92.25785 567.32369 92.26132 633.8482"
                      fill="#ffb6b6"
                    />
                    <path
                      d="M151.35145,633.45696h0c.53701,.90442,.82036,3.8235,.82036,4.87526h0c0,3.23286-2.62071,5.85368-5.85368,5.85368h-53.41172c-2.20544,0-3.9934-1.78786-3.9934-3.9934v-2.2237s-2.64222-6.68338,2.79765-14.92101c0,0,6.76104,6.45019,16.86377-3.65254l2.97921-5.39706,21.56534,15.7718,11.95334,1.47134c2.61515,.32187,4.93372-.04995,6.27892,2.21562h.00021Z"
                      fill="#2f2e41"
                    />
                  </g>
                  <polygon
                    points="105.31209 287.50403 105.66093 264.24193 91.31588 255.29975 75.71734 274.38013 105.31209 287.50403"
                    fill="#ffb6b6"
                  />
                  <polygon
                    points="105.31209 287.50403 106.24058 264.82158 91.31588 255.29975 96.38655 283.37034 105.31209 287.50403"
                    opacity=".1"
                  />
                  <path
                    d="M140.15003,441.32461l-23.7656,161.72199h-29.81713l3.96481-92.31486,2.08672-48.53978-6.05153-23.10479s-2.75913-5.13571-5.08353-11.36114c-2.61999-7.02534-4.68934-15.44762-1.61721-19.44141,1.13032-1.47233,4.06915-2.56207,8.0629-3.37356,2.44033-.49849,5.28063-.88688,8.34696-1.18827,17.6329-1.74475,42.71432-.65501,42.71432-.65501l.6376,21.04124,.35361,11.74949,.16809,5.46608Z"
                    fill="#2f2e41"
                  />
                  <g>
                    <polygon
                      points="61.88026 625.93901 78.944 628.44604 96.73768 563.82234 71.55329 560.12152 61.88026 625.93901"
                      fill="#ffb6b6"
                    />
                    <path
                      d="M120.39886,634.14701h0c.39974,.97292,.25548,3.90216,.1025,4.94274h0c-.47024,3.19848-3.4443,5.41022-6.64288,4.93996l-52.84366-7.76911c-2.18198-.3208-3.69088-2.34971-3.37006-4.5318l.32345-2.20005s-1.64198-6.99663,4.93826-14.35538c0,0,5.75091,7.36503,17.2157-1.16074l3.73256-4.90631,19.04187,18.74089,11.6122,3.19439c2.54052,.69884,4.88851,.66822,5.88986,3.10537l.00021,.00003Z"
                      fill="#2f2e41"
                    />
                  </g>
                  <path
                    d="M140.52406,414.3539l-3.25967,28.07231-17.77661,59.15589-29.26327,97.39091-29.49673-4.3348,26.47299-138.4754-2.62124-23.74478s-.85365-2.36026-1.83218-5.81567c-1.9423-6.83602-4.37839-17.9685-1.6983-23.6471,.36189-.77192,.81618-1.44168,1.37819-1.984,1.05413-1.02229,3.19659-1.64307,6.067-1.97236,11.99776-1.35598,36.7064,2.52236,47.70111,4.42623l4.32871,10.92876Z"
                    fill="#2f2e41"
                  />
                  <path
                    d="M78.99709,269.45877l28.98244,13.91157s30.72138,91.00485,30.72138,95.64204c0,4.63719,8.69473,7.53543,3.47789,12.75227s9.70997,9.63495,1.66692,13.80203c-8.04305,4.16708-58.21688,26.96048-63.79598,24.90502-15.38743-5.66905,.65206-26.50019,.65206-26.50019,0,0-11.55874-9.30861-9.8198-13.9458,1.73895-4.63719-10.43368-93.32344-10.43368-93.32344l18.54876-27.24349Z"
                    fill="#e6e6e6"
                  />
                  <g>
                    <path
                      id="uuid-73aedec7-8a7b-498d-9bbc-62d5085a8040-426"
                      d="M167.30945,349.6482c7.19283-2.12502,14.11967-.13622,15.4713,4.44157,1.35163,4.57779-3.38348,10.01003-10.57916,12.13485-2.86274,.8882-5.89656,1.07793-8.84763,.55327l-30.59003,8.61893-3.73863-14.44122,30.55328-6.96353c2.19307-2.0446,4.844-3.53412,7.73088-4.34387Z"
                      fill="#ffb6b6"
                    />
                    <path
                      d="M113.20352,298.46878l-4.79452,57.35765,42.94632,.46178,8.3349,12.83418s-52.05339,30.1399-67.68354,14.73938c-15.63015-15.40051-22.58474-80.20734-8.68819-91.30036,13.89655-11.09302,29.88503,5.90736,29.88503,5.90736Z"
                      fill="#e6e6e6"
                    />
                  </g>
                  <g>
                    <circle
                      cx="104.70794"
                      cy="246.16303"
                      r="24.8276"
                      fill="#ffb6b6"
                    />
                    <path
                      d="M91.31667,246.26078s3.90986-6.45127,6.06028-9.77465c2.15042-3.32338,2.15042-8.19223,2.15042-8.19223,0,0,19.94028-.40946,26.58704,5.25984s11.33859-15.24845,4.88732-22.48169c0,0-2.7369,3.12789-2.15042,4.30084l.58648,1.17296s-3.32338-13.29352-12.90253-15.83493c0,0-5.32882,2.75229-3.83737,4.30854,1.49145,1.55625-11.41108-9.39136-15.32094-2.94009,0,0-9.57915-.19549-8.4062,3.32338l-.58648,2.15042s-8.2107-2.54141-8.79718,3.51887c0,0,2.93239,0,4.49634,1.56394,1.56394,1.56394-5.66929,6.06028-5.66929,6.06028,0,0-8.4062,23.06817,2.93239,32.45183,0,0,.09775-11.24084,4.59408-8.50394s5.37606,3.61662,5.37606,3.61662Z"
                      fill="#2f2e41"
                    />
                    <g>
                      <polygon
                        points="114.94395 260.92275 114.0525 263.26866 120.73836 263.46416 121.18408 261.31373 114.94395 260.92275"
                        fill="#2f2e41"
                      />
                      <path
                        d="M121.62981,252.51655s-10.02879-2.7369-16.04606,5.4738l-1.33717,1.56394s-12.70313-14.27098-11.58882-19.54929l-2.67434,.19549-2.67434,13.68451s8.46875,14.66197,20.28044,15.24845c0,0,11.36596,2.7369,13.81744-1.95493,2.45148-4.69183,6.67217-11.61018,6.67217-11.61018l-6.44931-3.05179Zm-1.82414,13.09803h-6.64462c-1.56003,0-5.57155-5.66929-5.57155-5.66929,2.22862-3.51887,8.91448-3.71437,8.91448-3.71437h7.26053l.53963,2.15042-4.49848,7.23324Z"
                        fill="#2f2e41"
                      />
                    </g>
                  </g>
                  <g>
                    <polygon
                      points="605.59886 635.7374 594.69788 633.38103 598.59696 590.2126 614.68589 593.68994 605.59886 635.7374"
                      fill="#a0616a"
                    />
                    <path
                      d="M568.30337,627.42054h0c-.46294,.49832-1.04067,2.30467-1.18431,2.96946h0c-.44149,2.04338,.85706,4.05781,2.90051,4.49931l33.75978,7.29411c1.39399,.30118,2.76825-.58469,3.06945-1.97874l.30368-1.40553s2.58277-3.86351,.26937-9.81313c0,0-5.15429,3.15364-10.16022-4.61163l-1.14602-3.81815-15.7846,7.02379-7.75625-.70241c-1.6969-.15369-3.11162-.70534-4.27127,.54295l-.00013-.00003Z"
                      fill="#2f2e41"
                    />
                  </g>
                  <g>
                    <polygon
                      points="586.1002 632.43486 577.00573 625.97928 597.57611 587.82727 610.99896 597.35474 586.1002 632.43486"
                      fill="#a0616a"
                    />
                    <path
                      d="M555.08568,610.11394h0c-.62167,.27597-1.86357,1.70928-2.25719,2.26393h0c-1.2099,1.70484-.80873,4.06772,.89616,5.27766l28.16645,19.98944c1.16303,.82539,2.77501,.55172,3.60044-.61137l.83222-1.17266s3.89463-2.53559,4.10889-8.91556c0,0-5.9794,.87115-7.52607-8.23745l.44879-3.96109-17.27502,.24632-6.8542-3.69766c-1.49955-.80899-2.58308-1.8728-4.14036-1.1815l-.00011-.00008Z"
                      fill="#2f2e41"
                    />
                  </g>
                  <path
                    d="M717.11687,419.00777s16.95934,23.05759-16.95934,48.98068l-69.25065-22.12838,24.73238-51.58467,21.90582-12.01287,39.5718,36.74524Z"
                    fill="#2f2e41"
                  />
                  <polyline
                    points="630.90688 445.86006 604.05458 498.15137 587.09524 606.97383 608.29442 608.3871 629.4936 505.21776 666.94548 449.39326 640.79983 437.38039"
                    fill="#2f2e41"
                  />
                  <path
                    d="M700.15753,451.56325v16.42519l-48.05147,52.77539s0,39.5718-18.37262,57.94442l-21.19918,32.50541-18.37262-9.89295,26.85229-94.68967,48.05147-62.18426,31.09213,7.11647Z"
                    fill="#2f2e41"
                  />
                  <path
                    d="M666.01149,288.72346l7.28678,34.51082,27.78085-6.78901s-13.73254-28.5619-11-39.87692l-24.06763,12.15511Z"
                    fill="#a0616a"
                  />
                  <path
                    d="M666.01149,288.72346l7.28678,34.51082,27.78085-6.78901s-13.73254-28.5619-11-39.87692l-24.06763,12.15511Z"
                    opacity=".1"
                  />
                  <path
                    d="M692.3845,293.9326l-21.19918,9.89295s-10.90561,6.66578-11.10592,11.10592c-.20031,4.44014,1.21297,25.63932,1.21297,25.63932,0,0-8.47967,8.47967-2.82656,25.43902l-2.82656,28.26557,63.59754,33.91869-5.65311-59.3577,2.82656-55.11787-24.02574-19.7859Z"
                    fill="#e6e6e6"
                  />
                  <g>
                    <path
                      id="uuid-8e851e4b-a66f-4616-8a31-24a5e3f3093d-427"
                      d="M711.41349,454.76606c-2.48209,5.69491-7.43245,9.03041-11.05647,7.45019-3.62402-1.58022-4.54888-7.47701-2.06514-13.17361,.96094-2.28917,2.45612-4.31493,4.36045-5.90778l10.82145-23.99674,11.15273,5.31822-11.8521,23.09191c.12931,2.48011-.33735,4.95511-1.36092,7.21782Z"
                      fill="#a0616a"
                    />
                    <path
                      d="M700.15753,317.2517s15.54607-9.89295,21.19918,1.41328c5.65311,11.30623,18.37262,69.25065,18.37262,69.25065l-18.37262,55.11787-16.95934-7.06639,14.83943-59.31875-19.07926-59.39665Z"
                      fill="#e6e6e6"
                    />
                  </g>
                  <g>
                    <path
                      id="uuid-35301953-803a-439b-9845-5bf97a98fdf5-428"
                      d="M620.48064,445.8694c-4.40555,4.37995-10.23654,5.65711-13.0235,2.85293-2.78697-2.80418-1.47437-8.62694,2.93333-13.00786,1.73669-1.77415,3.873-3.1066,6.23021-3.88585l18.90084-18.32228,8.40905,9.05288-19.52566,17.10139c-.79347,2.35331-2.13911,4.48232-3.92428,6.20879Z"
                      fill="#a0616a"
                    />
                    <path
                      d="M660.67726,313.88028s27.10332-1.10843,28.19356,11.48521c1.09024,12.59365-17.43792,68.78704-17.43792,68.78704l-37.38606,44.47263-13.16323-12.81728,35.649-49.6797,4.14466-62.24791Z"
                      fill="#e6e6e6"
                    />
                  </g>
                  <g>
                    <path
                      d="M738.93506,463.12731l-173.30842-27.95322c-2.86383-.46191-4.81822-3.168-4.35631-6.03183,.46191-2.86383,3.16783-4.81714,6.03166-4.35523l173.30842,27.95322c2.86383,.46191,4.81731,3.16675,4.3554,6.03057-.46191,2.86383-3.16692,4.81839-6.03075,4.35648Z"
                      fill="#6c63ff"
                    />
                    <circle
                      cx="514.00268"
                      cy="420.86012"
                      r="12.88711"
                      fill="#6c63ff"
                    />
                    <path
                      d="M509.16881,441.83656l.45601-2.82726c10.52286,1.69725,20.46476-5.48238,22.16212-16.00593,1.69725-10.52286-5.48307-20.46487-16.00593-22.16212l.45601-2.82726c12.08213,1.94875,20.32592,13.36326,18.37718,25.44539-1.94875,12.08213-13.36326,20.32592-25.44539,18.37718Z"
                      fill="#3f3d56"
                    />
                  </g>
                  <g>
                    <circle
                      cx="668.79044"
                      cy="274.71441"
                      r="21.34417"
                      fill="#a0616a"
                    />
                    <path
                      d="M681.40367,274.71441s-13.3247-12.09503-21.86237-7.8262c-8.53767,4.26883-12.8065,7.11472-12.8065,7.11472,0,0-7.11472-10.67209,3.55736-19.92123,0,0-21.72169-9.49003-5.88054-24.31051,15.84115-14.82047,30.0706-9.1287,30.0706-9.1287,0,0,19.20976,8.53767,5.69178,25.61301,0,0,19.69339,12.48951,9.49096,32.92497,0,0-.95329-13.00374-3.79918-9.44638s-4.46211,4.98031-4.46211,4.98031Z"
                      fill="#2f2e41"
                    />
                  </g>
                  <path
                    d="M240.62026,347.86716c-8.1595-20.06132-16.31912-40.12252-24.47862-60.18372-1.12695-2.77073-4.65719-2.86911-5.75705,0-8.06208,21.03255-13.33049,42.97924-15.86326,65.35604-.43132,3.81143,5.5423,3.7807,5.97022,0,.99115-8.7565,2.46257-17.44753,4.35159-26.04588,6.72355,.35273,13.50236-.40156,19.99075-2.19778,3.34319,8.2195,6.68638,16.43888,10.02945,24.65839,1.42854,3.51227,7.20625,1.97623,5.75693-1.58706Zm-34.4234-26.77576c2.01097-8.23128,4.42179-16.36479,7.21912-24.36772l9.15029,22.49693c-5.3595,1.40668-10.84059,2.03247-16.36941,1.8708Z"
                    fill="#fff"
                  />
                </g>
                <circle cx="252.12709" cy="346.88466" r="6" fill="#fff" />
                <circle cx="189.12709" cy="293.88466" r="6" fill="#fff" />
              </svg>
            </div>
          </div>
        </div>
        <svg
          className="md:block hidden absolute z-47 top-[780px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L80,26.7C160,21,320,11,480,21.3C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        <div className="bg-white pr-8 pl-8 md:px-20 pt-16 md:pt-6 md:absolute">
          <div>
            <p className="text-black text-3xl font-bold font-Josefin">
              Jobs by category
            </p>
            <div className="md:flex md:place-content-between">
              <p className="pt-2">2020 jobs live - 293 added today</p>
              <NavLink to="" className=" font-normal flex items-center">
                Browse All
                <span class="material-symbols-outlined text-sm font-semibold">
                  arrow_forward_ios
                </span>
              </NavLink>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center mt-14 pb-10 md:gap-5">
              <NavLink className=" group hover:duration-500 flex items-center md:justify-around md:gap-0 gap-4 w-full bg-gray-100 h-[75px] md:w-[250px] rounded-full my-2 md:my-0 hover:bg-white hover:text-black border border-slate-100 hover:border-slate-200 text-blue-900 font-semibold hover:shadow-lg transition-all">
                <div className="md:h-[60px] md:w-[60px] h-[57px] w-[57px] rounded-full bg-white ml-4 md:ml-0 group-hover:bg-blue-600 group-hover:duration-500 transition-all"></div>
                <p className=" text-sm md:mr-4">Accounting / Finance</p>
              </NavLink>
              <NavLink className="group hover:duration-500 flex items-center md:justify-around md:gap-0 gap-4 w-full bg-gray-100 h-[75px] md:w-[180px] rounded-full my-2 md:my-0 hover:bg-white hover:text-black border border-slate-100 hover:border-slate-200 text-blue-900 font-semibold hover:shadow-lg transition-all">
                <div className="md:h-[60px] md:w-[60px] h-[57px] w-[57px] rounded-full bg-white ml-4 md:ml-0 group-hover:duration-500 group-hover:bg-blue-600 transition-all"></div>
                <p className=" text-sm md:mr-4">Marketing</p>
              </NavLink>
              <NavLink className="group hover:duration-500 flex items-center md:justify-around md:gap-0 gap-4 w-full bg-gray-100 h-[75px] md:w-[160px] rounded-full my-2 md:my-0 hover:bg-white hover:text-black border border-slate-100 hover:border-slate-200 text-blue-900 font-semibold hover:shadow-lg transition-all">
                <div className="md:h-[60px] md:w-[60px] h-[57px] w-[57px] rounded-full bg-white ml-4 md:ml-0 group-hover:duration-500 group-hover:bg-blue-600 transition-all"></div>
                <p className=" text-sm md:mr-4">Design</p>
              </NavLink>
              <NavLink className="group hover:duration-500 flex items-center md:justify-around md:gap-0 gap-4 w-full bg-gray-100 h-[75px] md:w-[200px] rounded-full my-2 md:my-0 hover:bg-white hover:text-black border border-slate-100 hover:border-slate-200 text-blue-900 font-semibold hover:shadow-lg transition-all">
                <div className="md:h-[60px] md:w-[60px] h-[57px] w-[57px] rounded-full bg-white ml-4 md:ml-0 group-hover:duration-500 group-hover:bg-blue-600 transition-all"></div>
                <p className=" text-sm md:mr-4">Development</p>
              </NavLink>
              <NavLink className="group hover:duration-500 flex items-center md:justify-around md:gap-0 gap-4 w-full bg-gray-100 h-[75px] md:w-[225px] rounded-full my-2 md:my-0 hover:bg-white hover:text-black border border-slate-100 hover:border-slate-200 text-blue-900 font-semibold hover:shadow-lg transition-all">
                <div className="md:h-[60px] md:w-[60px] h-[57px] w-[57px] rounded-full bg-white ml-4 md:ml-0 group-hover:duration-500 group-hover:bg-blue-600 transition-all"></div>
                <p className=" text-sm md:mr-4">Human Resource</p>
              </NavLink>
              <NavLink className="group hover:duration-500 flex items-center md:justify-around md:gap-0 gap-4 w-full bg-gray-100 h-[75px] md:w-[225px] rounded-full my-2 md:my-0 hover:bg-white hover:text-black border border-slate-100 hover:border-slate-200 text-blue-900 font-semibold hover:shadow-lg transition-all">
                <div className="md:h-[60px] md:w-[60px] h-[57px] w-[57px] rounded-full bg-white ml-4 md:ml-0 group-hover:duration-500 group-hover:bg-blue-600 transition-all"></div>
                <p className=" text-sm md:mr-4">Automative Jobs</p>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white md:mt-72">
          <div className="flex flex-col items-center pt-16">
            <p className="text-3xl font-semibold font-Josefin">How It Works?</p>
            <p className="pt-3 text-xs md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor
            </p>
            <p className="text-xs md:text-base pb-5">
              incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-around md:gap-9 gap-2">
            <div className=" h-[350px] w-[420px] flex flex-col bg-white items-center justify-center hover:shadow-lg md:mt-20 mt-12 mb-3 rounded-md hover:duration-500 transition-all">
              <div className="h-[130px] w-[130px] rounded-full bg-sky-100 flex justify-center items-center ">
                <span class="flex material-symbols-outlined text-7xl justify-center text-sky-300">
                  account_circle
                </span>
              </div>
              <div className="flex flex-col text-center">
                <p className="mt-6 text-xl font-Josefin font-semibold">
                  Register an account to start
                </p>
                <p className="mt-2 text-base">
                  Achieve virtually any design and layout from
                </p>
                <p className="text-base ">within the one template</p>
              </div>
            </div>
            <div className=" h-[350px] w-[420px] flex flex-col bg-white items-center justify-center hover:shadow-lg md:mt-20 mb-3 rounded-md hover:duration-500 transition-all">
              <div className="h-[130px] w-[130px] rounded-full bg-red-100 flex justify-center items-center ">
                <span class="flex material-symbols-outlined text-7xl justify-center text-red-300">
                  article
                </span>
              </div>
              <div className="flex flex-col text-center">
                <p className="mt-6 text-xl font-Josefin font-semibold">
                  Explore over thousands of resumes
                </p>
                <p className="mt-2 text-base ">
                  Achieve virtually any design and layout from
                </p>
                <p className="text-base ">within the one template</p>
              </div>
            </div>
            <div className=" h-[350px] w-[420px] flex flex-col bg-white items-center justify-center hover:shadow-lg md:mt-20 mb-6 rounded-md hover:duration-500 transition-all">
              <div className="h-[130px] w-[130px] rounded-full bg-yellow-100 flex justify-center items-center ">
                <span class="flex material-symbols-outlined text-7xl justify-center text-yellow-300">
                  patient_list
                </span>
              </div>
              <div className="flex flex-col text-center">
                <p className="mt-6 text-xl font-Josefin font-semibold">
                  Find the most suitable candidate
                </p>
                <p className="mt-2 text-base ">
                  Achieve virtually any design and layout from
                </p>
                <p className="text-base ">within the one template</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-10 px-6 pt-14 h-auto md:h-[690px] w-full bg-white flex flex-col md:flex-row">
          <div className="h-[450px] md:h-full md:w-[50%] w-full overflow-hidden bg-cover md:py-10 ">
            <img
              className="w-full h-full rounded-lg md:px-14"
              src="	https://superio-reactjs.ibthemespro.com/images/index-13/images/1.png"
            />
          </div>
          <div className="md:w-[50%] w-full h-full py-10 flex flex-col md:px-20">
            <p className="md:pt-36 md:text-4xl text-3xl font-Josefin font-bold">
              Professional CV is your ticket to the dream job
            </p>
            <p className="pt-10">
              To start searching for jobs, you can attend job fairs online or in
              person, use job boards and career websites or reach out directly
              to recruiters in a targeted company to broaden your network.
            </p>
            <div className="flex justify-center md:justify-start">
              <NavLink to="/candidate-dash/myResume" className="bg-blue-500 text-white mt-8 h-14 w-36 flex items-center text-center justify-center font-poppins rounded-md border-2 font-medium border-blue-500 hover:bg-transparent hover:text-blue-600 hover:duration-500 ">
                Post Resume
              </NavLink>
            </div>
          </div>
        </div>

        <div className="bg-white h-auto w-full mt-10 md:mt-10 md:px-24 px-6">
          <div className="bg-white flex flex-col justify-center text-center items-center pb-16">
            <p className="text-3xl font-bold font-Josefin pt-5 md:pt-10">
              Latest Jobs
            </p>
            <p className="pt-3">
              Know your worth and find the job that qualify your life
            </p>
            <div className=" bg-white h-10 w-auto mt-12 rounded-full flex flex-row justify-center items-center border border-slate-400 border-opacity-65  font-semibold">
              <button className="mx-1 w-32 px-7 py-1 focus:bg-blue-600 focus:rounded-full focus:text-white">
                All
              </button>
              <button className="mx-1 w-32 px-7 py-1 focus:bg-blue-600 focus:rounded-full focus:text-white">
                Recent
              </button>
              <button className="mx-1 w-32 px-7 py-1 focus:bg-blue-600 focus:rounded-full focus:text-white">
                Popular
              </button>
            </div>
          </div>
          <div className="bg-white flex flex-col w-full h-auto">
            {JobDetails.map((jobs) => (
              <div className=" bg-slate-100 mb-7 h-auto md:h-32 w-full rounded-md border border-slate-200 hover:bg-white hover:shadow-lg hover:duration-200">
                <div className="md:my-8 md:mx-8 mx-6 my-6 flex justify-between items-center">
                  <div className="flex flex-row sm:w-full">
                    <img src={jobs.image} className="h-16 w-16" />
                    <div className="md:ml-5 ml-12">
                      <NavLink
                        className="font-semibold font-Josefin text-xl flex-wrap"
                        to=""
                      >
                        {jobs.jobtitle}
                      </NavLink>
                      <div className="flex md:flex-row flex-col md:mt-2">
                        <div className="flex min-[320px]:mr-6 my-1 md:my-0">
                          <span className="material-symbols-outlined font-thin">
                            business_center
                          </span>
                          <p className="pl-1 font-normal text-sm font-Josefin mt-1">
                            {jobs.experience}
                          </p>
                        </div>

                        <div className="flex mr-6 my-1 md:my-0">
                          <span className="material-symbols-outlined font-thin">
                            location_on
                          </span>
                          <p className="pl-1 font-normal text-sm font-Josefin mt-1">
                            {jobs.location}
                          </p>
                        </div>

                        <div className="flex mr-6 my-1 md:my-0">
                          <span className="material-symbols-outlined font-thin">
                            schedule
                          </span>
                          <p className="pl-1 font-normal text-sm font-Josefin mt-1">
                            {jobs.time}
                          </p>
                        </div>

                        <div className="flex mr-6 my-1 md:my-0">
                          <span className="material-symbols-outlined font-thin">
                            currency_rupee
                          </span>
                          <p className="pl-1 font-normal text-sm font-Josefin mt-1">
                            {jobs.salary}
                          </p>
                        </div>

                        <div className="bg-blue-100 h-6 w-28 rounded-full text-center text-blue-500 font-semibold text-sm my-1 md:my-0">
                          {jobs.jobtype}
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavLink
                    className="bg-slate-200 content-center w-40 h-14 text-center  rounded-md hover:bg-blue-700 hover:text-white hover:duration-500 hidden md:block"
                    to=""
                  >
                    Apply Job
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-5">
            <NavLink
              className="bg-blue-500 text-white px-6 py-4 rounded-md border-2 border-blue-500 hover:bg-transparent hover:border-2 hover:border-blue-500 hover:text-blue-600 hover:duration-500 transition-all font-medium"
              to="/jobs"
            >
              Load More Jobs !!
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center h-auto w-full md:pt-28 md:px-24 sm:px-6 md:gap-6 sm:py-20 ">
          <div className="md:h-[300px] sm:auto bg-blue-800 sm:w-full md:w-[50%] sm:mb-3 md:mb-0 rounded-md flex md:flex-row sm:flex-col md:justify-around sm:items-center overflow-hidden">
            <div className="flex flex-col px-14 py-14 text-white sm:items-center md:items-start sm:text-center md:text-left">
              <p className="text-4xl font-semibold font-Josefin">Employers</p>
              <p className="pt-5 sm:w-full">
                Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt. Labore et dolore nostrud exercitation.
              </p>
              <NavLink
                className="mt-5 bg-white text-black py-3 w-60 text-center items-center rounded-lg"
                to=" "
              >
                Register Account
              </NavLink>
            </div>
            <div className="">
              <img
                className="h-72 md:w-[600px] sm:auto mt-3 pr-8"
                src="https://superio-reactjs.ibthemespro.com/images/resource/employ.png"
              />
            </div>
          </div>
          <div className="md:h-[300px] sm:auto bg-rose-200 sm:w-full md:w-[50%] sm:mb-3 md:mb-0 rounded-md flex md:flex-row sm:flex-col md:justify-around sm:items-center overflow-hidden">
            <div className="flex flex-col px-14 py-14 text-slate-600 sm:items-center md:items-start sm:text-center md:text-left">
              <p className="text-4xl font-semibold font-Josefin">Candidates</p>
              <p className="pt-5 sm:w-full">
                Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt. Labore et dolore nostrud exercitation.
              </p>
              <NavLink
                className="mt-5 bg-white text-rose-600 py-3 w-60 text-center items-center rounded-lg"
                to=" "
              >
                Register Account
              </NavLink>
            </div>
            <div className="">
              <img
                className="h-72 md:w-[600px] sm:auto mt-3 pr-8"
                src="https://superio-reactjs.ibthemespro.com/images/resource/candidate.png"
              />
            </div>
          </div>
        </div>

        <div className="md:px-24 md:py-10 sm:px-6 sm:py-6">
          <div>
            <p className="text-3xl font-Josefin font-bold">
              Top Company Registered
            </p>
            <div className="mt-3 flex md:flex-row sm:flex-col justify-between">
              <p className="mt-3">
                Some of the companies we have helped recruit excellent
                applicants over the years.
              </p>
              <NavLink to="" className="sm:mt-4 md:mt-2 w-[90px] h-auto">
                Browse All {">"}
              </NavLink>
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col md:justify-around sm:items-center sm:l-3">
            <div className="md:h-[300px] md:w-[290px] sm:h-[320px] sm:w-[90%] mt-16 bg-white border border-slate-200 flex flex-col justify-center items-center rounded-md hover:shadow-md">
              <img
                className="h-28 w-28"
                src="https://superio-reactjs.ibthemespro.com/images/resource/company-1.png"
              />
              <p className="mt-3 text-blue-600 text-xl font-Josefin">Udemy</p>
              <div className="flex">
                <span className="material-symbols-outlined font-thin">
                  location_on
                </span>
                <p>Kolkata , India</p>
              </div>
              <NavLink
                className="bg-blue-100/70 text-blue-700 px-8 py-3 mt-8 rounded-md hover:bg-blue-700 hover:text-white hover:duration-500"
                to=""
              >
                15 Opening Position
              </NavLink>
            </div>
            <div className="md:h-[300px] md:w-[290px] sm:h-[320px] sm:w-[90%] mt-16 bg-white border border-slate-200 flex flex-col justify-center items-center rounded-md hover:shadow-md">
              <img
                className="h-28 w-28"
                src="https://superio-reactjs.ibthemespro.com/images/resource/company-2.png"
              />
              <p className="mt-3 text-blue-600 text-xl font-Josefin">Stripe</p>
              <div className="flex">
                <span className="material-symbols-outlined font-thin">
                  location_on
                </span>
                <p>Kolkata , India</p>
              </div>
              <NavLink
                className="bg-blue-100/70 text-blue-700 px-8 py-3 mt-8 rounded-md hover:bg-blue-700 hover:text-white hover:duration-500"
                to=""
              >
                22 Opening Position
              </NavLink>
            </div>
            <div className="md:h-[300px] md:w-[290px] sm:h-[320px] sm:w-[90%] mt-16 bg-white border border-slate-200 flex flex-col justify-center items-center rounded-md hover:shadow-md">
              <img
                className="h-28 w-28"
                src="https://superio-reactjs.ibthemespro.com/images/resource/company-3.png"
              />
              <p className="mt-3 text-blue-600 text-xl font-Josefin">DropBox</p>
              <div className="flex">
                <span className="material-symbols-outlined font-thin">
                  location_on
                </span>
                <p>Kolkata , India</p>
              </div>
              <NavLink
                className="bg-blue-100/70 text-blue-700 px-8 py-3 mt-8 rounded-md hover:bg-blue-700 hover:text-white hover:duration-500"
                to=""
              >
                30 Opening Position
              </NavLink>
            </div>
            <div className="md:h-[300px] md:w-[290px] sm:h-[320px] sm:w-[90%] mt-16 bg-white border border-slate-200 flex flex-col justify-center items-center rounded-md hover:shadow-md">
              <img
                className="h-28 w-28"
                src="https://superio-reactjs.ibthemespro.com/images/resource/company-4.png"
              />
              <p className="mt-3 text-blue-600 text-xl font-Josefin">Figma</p>
              <div className="flex">
                <span className="material-symbols-outlined font-thin">
                  location_on
                </span>
                <p>Kolkata , India</p>
              </div>
              <NavLink
                className="bg-blue-100/70 text-blue-700 px-8 py-3 mt-8 rounded-md hover:bg-blue-700 hover:text-white hover:duration-500 font-normal"
                to=""
              >
                10 Opening Position
              </NavLink>
            </div>
          </div>
        </div>

        <div className="md:px-10 px-6 pt-14 h-auto md:h-[750px] w-full bg-white flex flex-col md:flex-row">
          <div className="h-[450px] md:h-full md:w-[50%] w-full overflow-hidden bg-cover md:py-10 ">
            <img
              className="w-full h-full rounded-lg md:px-14"
              src="https://superio-reactjs.ibthemespro.com/images/resource/image-2.jpg"
            />
          </div>
          <div className="md:w-[50%] w-full h-full py-10 flex flex-col md:px-20 ">
            <p className="md:pt-16 md:text-4xl text-3xl font-Josefin font-bold">
              Millions of Jobs. Find the one that suits you.
            </p>
            <p className="pt-10">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide.
            </p>
            <div className="flex mt-7">
              <span class="material-symbols-outlined">check</span>
              <p className="ml-3">Bring to the table win-win survival</p>
            </div>
            <div className="flex mt-4">
              <span class="material-symbols-outlined">check</span>
              <p className="ml-3">
                Capitalize on low hanging fruit to identify
              </p>
            </div>
            <div className="flex mt-4">
              <span class="material-symbols-outlined">check</span>
              <p className="ml-3">But I must explain to you how all this</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <NavLink to="/jobs" className="bg-blue-500 text-white flex justify-center items-center mt-8 h-14 w-36 rounded-md border-2 font-medium border-blue-500 hover:bg-transparent hover:text-blue-600 hover:duration-500 ">
                Get Started
              </NavLink>
            </div>

            <div className="bg-white border border-slate-200 rounded-md h-40 w-72 relative flex flex-col md:right-[350px] md:top-16 items-center sm:hidden md:block">
              <p className="text-black mt-6 font-semibold ml-20">
                300K+ Employees
              </p>

              <div className="mt-4">
                <div className="h-16 w-16 bg-green-400 rounded-full border-[3px] border-white overflow-hidden absolute z-4 left-[35px]">
                  <img
                    src="https://superio-reactjs.ibthemespro.com/images/resource/company-1.png"
                    alt="imge1"
                    className=" h-full w-full"
                  />
                </div>
                <div className="h-16 w-16 bg-green-400 rounded-full border-[3px] border-white overflow-hidden absolute z-3 left-[75px]">
                  <img
                    src="https://superio-reactjs.ibthemespro.com/images/resource/company-2.png"
                    alt="imge1"
                    className=" h-full w-full"
                  />
                </div>
                <div className="h-16 w-16 bg-green-400 rounded-full border-[3px] border-white overflow-hidden absolute z-2 left-[115px]">
                  <img
                    src="https://superio-reactjs.ibthemespro.com/images/resource/company-3.png"
                    alt="imge1"
                    className=" h-full w-full"
                  />
                </div>
                <div className="h-16 w-16 bg-green-400 rounded-full border-[3px] border-white overflow-hidden absolute z-1 left-[155px]">
                  <img
                    src="https://superio-reactjs.ibthemespro.com/images/resource/company-6.png"
                    alt="imge1"
                    className=" h-full w-full"
                  />
                </div>
                <div className="h-16 w-16 bg-green-400 rounded-full border-[3px] border-white overflow-hidden absolute z-0 left-[195px]">
                  <img
                    src="https://superio-reactjs.ibthemespro.com/images/resource/company-4.png"
                    alt="imge1"
                    className=" h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-auto w-auto mt-24 md:px-20 sm:px-6 md:h-[650px] bg-white overflow-hidden">
          <p className="text-3xl font-semibold font-Josefin">Featured Cities</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
          </p>
          <div className="sm:columns-1 md:columns-3 mt-[55px] gap-6">
            <div className="overflow-hidden rounded-md relative group hover:cursor-pointer sm:mt-3 md:my-0 ">
              <img
                className="h-[520px] w-full  group-hover:scale-110 group-hover:duration-500 group-hover:ease transition-all"
                src="https://superio-reactjs.ibthemespro.com/images/resource/featured-1.png"
              />
              <p className="text-white absolute text-xl bottom-8 left-8 font-Josefin">
                Mumbai<p className=" text-base">12 Jobs</p>
              </p>
            </div>
            <div className="">
              <div className="overflow-hidden rounded-md md:mb-6 relative group hover:cursor-pointer sm:mt-3 md:my-0">
                <img
                  className="w-full aspect-video  rounded-md  group-hover:scale-110 group-hover:duration-500 group-hover:ease transition-all"
                  src="	https://superio-reactjs.ibthemespro.com/images/resource/featured-2.png"
                />
                <p className="text-white absolute text-xl bottom-8 left-8 font-Josefin group-hover:cursor-pointer">
                  Pune<p className=" text-base">31 Jobs</p>
                </p>
              </div>
              <div className=" overflow-hidden rounded-md relative group hover:cursor-pointer sm:mt-3 md:my-0">
                <img
                  className="w-full aspect-video  rounded-md group-hover:scale-110 group-hover:duration-500 group-hover:ease transition-all"
                  src="	https://superio-reactjs.ibthemespro.com/images/resource/featured-4.png"
                />
                <p className="text-white absolute text-xl bottom-8 left-8 font-Josefin group-hover:cursor-pointer">
                  Hyderabad<p className=" text-base">22 Jobs</p>
                </p>
              </div>
            </div>
            <div className="">
              <div className="overflow-hidden rounded-md md:mb-6 relative group hover:cursor-pointer sm:mt-3 md:my-0 ">
                <img
                  className="w-full aspect-video rounded-md group-hover:scale-110 group-hover:duration-500 group-hover:ease transition-all"
                  src="	https://superio-reactjs.ibthemespro.com/images/resource/featured-3.png"
                />
                <p className="text-white absolute text-xl bottom-8 left-8 font-Josefin">
                  Noida<p className=" text-base">19 Jobs</p>
                </p>
              </div>
              <div className=" overflow-hidden rounded-md relative group hover:cursor-pointer sm:mt-3 md:my-0 ">
                <img
                  className="w-full aspect-video rounded-md group-hover:scale-110 group-hover:duration-500 group-hover:ease transition-all"
                  src="	https://superio-reactjs.ibthemespro.com/images/resource/featured-5.png"
                />
                <p className="text-white absolute text-xl bottom-8 left-8 font-Josefin">
                  Kolkata<p className=" text-base">27 Jobs</p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:bg-gradient-to-b md:bg-gradient-to-r from-blue-600 to-sky-400 h-auto md:h-64 flex md:flex-row sm:flex-col md:mx-20 md:px-10  sm:mx-6 items-center justify-around rounded-md">
          <div className="flex flex-col sm:text-center md:text-left sm:px-6 sm:mt-10 md:mt-0">
            <p className="text-white text-3xl font-Josefin font-semibold">
              Subscribe Our Newsletter
            </p>
            <p className="text-white sm:mt-4 md:mt-1">
              Advertise your jobs to millions of monthly users and search 15.8
              million CVs in our database.
            </p>
          </div>
          <div className="sm:px-6 flex md:flex-row sm:flex-col relative sm:mb-8 md:mb-0">
            <input
              className=" sm:h-[72px] md:h-20 md:w-[550px] sm:w-[400px] pl-10 rounded-md focus:outline-none sm:mt-10 md:mt-0"
              placeholder="Your e-mail"
            />
            <button className="bg-sky-400 hover:bg-blue-600 hover:duration-500 text-white h-16 md:w-36 sm:w-full rounded-md md:absolute top-2 left-[420px] sm:mt-3 md:mt-0">
              Subscribe
            </button>
          </div>
        </div>

        <footer className="h-auto md:h-[60vh] bg-white sm:mx-6 md:mx-20 flex md:flex-row sm:flex-col mt-28 justify-around">
          <div className="flex flex-col">
            <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-black">
              <span className="text-5xl text-blue-700 mr-3 pt-2">
                <ion-icon name="logo-ionic"></ion-icon>
              </span>
              JOB SEEK
            </div>
            <div className="mt-5 h-auto w-auto text-wrap">
              <p className="text-lg font-bold font-Josefin">Call Us</p>
              <a
                className="text-xl text-blue-600 font-semibold"
                href="tel:9832392104"
              >
                983 239 2104
              </a>
            </div>
            <div className="mt-8 ">
              <p className="mb-2">
                329 Queensberry Street, North Melbourne VIC
              </p>
              <p className="mb-2">3051, Australia.</p>
              <a href="mailto: rohandeepp100@gmail.com">
                rohandeepp100@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col md:mt-6 sm:mt-8">
            <p className="text-xl font-semibold md:mb-8 sm:mb-4">
              For Candidates
            </p>
            <NavLink className="my-1 h-7 w-auto">Browse Jobs</NavLink>
            <NavLink className="my-1 h-7 w-auto">Browse Categories</NavLink>
            <NavLink className="my-1 h-7 w-auto">Candidate Dashboard</NavLink>
            <NavLink className="my-1 h-7 w-auto">Job Alerts</NavLink>
            <NavLink className="my-1 h-7 w-auto">My Bookmarks</NavLink>
          </div>

          <div className="flex flex-col md:mt-6 sm:mt-8">
            <p className="text-xl font-semibold md:mb-8 sm:mb-4">
              For Employers
            </p>
            <NavLink className="my-1 h-7 w-auto">Browse Candidates</NavLink>
            <NavLink className="my-1 h-7 w-auto">Employer Dashboard</NavLink>
            <NavLink className="my-1 h-7 w-auto">Add Job</NavLink>
            <NavLink className="my-1 h-7 w-auto">Job Packages</NavLink>
          </div>

          <div className="flex flex-col md:mt-6 sm:mt-8">
            <p className="text-xl font-semibold md:mb-8 sm:mb-4">About Us</p>
            <NavLink className="my-1 h-7 w-auto">About Us</NavLink>
            <NavLink className="my-1 h-7 w-auto">Contact</NavLink>
            <NavLink className="my-1 h-7 w-auto">Terms of Use</NavLink>
          </div>
        </footer>
        <hr />
        <div className="h-24 flex flex-col-reverse md:flex-row md:mx-20 mx-6 items-center md:justify-between justify-evenly">
          <div>
            <p className=" text-sm font-serif">
              © 2024 Superio by ib-themes. All Right Reserved.
            </p>
          </div>
          <div className="flex">
            <Link
              to="https://www.facebook.com/nitnarula"
              target="blank"
              className="h-4 w-4 mx-3 hover:cursor-pointer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path
                  fill="#0866FF"
                  d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                />
              </svg>
            </Link>

            <svg
              className="h-4 w-4 mx-3 hover:cursor-pointer"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>X</title>
              <path
                fill="#000000"
                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
              />
            </svg>

            <svg
              className="h-4 w-4 mx-3 hover:cursor-pointer"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <path
                fill="#E4405F"
                d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
              />
            </svg>

            <svg
              className="h-4 w-4 mx-3 hover:cursor-pointer"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path
                fill="#0A66C2"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
