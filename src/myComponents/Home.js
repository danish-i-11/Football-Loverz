import React from 'react'
import lvrpl from './imgs/lvrpl.webp'
import brzl from './imgs/brzl.webp'
import grmny from './imgs/grmny.webp'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className='bg-black'>

      {/* section 1 */}

      <section className="lg:flex">

        <img src="https://img.freepik.com/premium-photo/black-football-soccer-ball-against-black-background-with-highlight-textured-surface_158001-4281.jpg" alt="" className='w-full lg:order-2' />
        <div className="p-5 lg:w-1/2 lg:order-1 lg:my-auto">

          <p className="head text-green-100 text-xl my-3 font-semibold">Not a game, but an EMOTION...!</p>
          <Link to="/explore">
            <button className=" text-green-300 hover:font-semibold hover:text-black hover:bg-green-300 border hover:shadow-[0_0_38px_11px_rgba(111,111,111,1)]  border-green-300 rounded-lg p-4">Explore more</button>
          </Link>

        </div>

      </section>





      {/* section 2 (Great Players)*/}

      <section className="p-5">
        <h2 className="text-5xl italic font- text-center my-20 bg-gradient-to-r from-[#30ff6b] to-[#ea01ff]  text-transparent bg-clip-text md:w-72 md:mx-auto">Great Players</h2>

        <div className="space-y-10 md:space-y-10 lg:space-y-0 lg:flex lg:justify-evenly">

          <div className="md:flex space-y-5 md:space-y-0 lg:space-x-36">

            <div className="w-44 mx-auto space-y-5 hover:scale-110 duration-700">

              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg" alt="CR7" className="aspect-square object-cover object-top rounded-full hover:shadow-[0_0_50px_0px_rgba(0,85,255,1)]" />
              <p className="para text-green-300 border-x-4 rounded-lg border-teal-400 bg-slate-700 bg-opacity-50  text-center p-3 "> Cristino Ronaldo</p>

            </div>


            <div className="w-44 mx-auto space-y-5 hover:scale-110 duration-700">

              <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8c9cbd6622e0dc09/6397332753152407ace5a11d/Sunil_Chhetri.jpg?auto=webp&format=pjpg&width=3840&quality=60" alt="CR7" className="aspect-square object-cover object-top rounded-full hover:shadow-[0_0_50px_0px_rgba(136,0,255,1)]" />
              <p className="para text-green-300 border-x-4 rounded-lg border-teal-400 bg-slate-700 bg-opacity-50  text-center p-3 ">Sunil Chhetri</p>

            </div>


          </div>


          <div className="md:flex space-y-5 md:space-y-0 lg:space-x-36">

            <div className="w-44 mx-auto space-y-5 hover:scale-110 duration-700">

              <img src="https://cdn.theathletic.com/cdn-cgi/image/width=1200,height=1200,fit=cover/app/uploads/2023/03/05131528/MOHAMED-SALAH--scaled-e1678042911315.jpeg" alt="CR7" className="aspect-square object-cover object-top rounded-full hover:shadow-[0_0_50px_0px_rgba(255,0,0,1)]" />
              <p className="para text-green-300 border-x-4 rounded-lg border-teal-400 bg-slate-700 bg-opacity-50  text-center p-3 ">Mohammad Salah</p>

            </div>


            <div className="w-44 mx-auto space-y-5 hover:scale-110 duration-700">

              <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2023/02/05/063dc31d9c08feba8092e0da52b61e4a1675602382047428_original.jpg?impolicy=abp_cdn&imwidth=650" alt="CR7" className="aspect-square object-cover object-top rounded-full hover:shadow-[0_0_50px_0px_rgba(255,242,0,1)]" />
              <p className="para text-green-300 border-x-4 rounded-lg border-teal-400 bg-slate-700 bg-opacity-50  text-center p-3 ">Neymar Jr.</p>

            </div>


          </div>




        </div>



      </section>


      {/* section 3 */}

      <section className="p-5">
        <h2 className="text-5xl italic text-center my-20 bg-gradient-to-r from-[#389bdc] to-[#b90202] bg-clip-text text-transparent">Legends of Early Times</h2>

        <div className="space-y-10 md:space-y-10 lg:space-y-0 lg:flex lg:justify-evenly">

          <div className="md:flex space-y-5 md:space-y-0 lg:space-x-36">

            <div className="w-44 mx-auto space-y-5 hover:scale-110 duration-700">

              <img src="https://www.indiablooms.com/sports_pic/2022/190c4c2dcf504aef3b65003aeee0bac5.jpg" alt="CR7" className="aspect-square object-cover object-top rounded-full hover:shadow-[0_0_50px_0px_rgba(136,255,0,1)]" />
              <p className="para text-green-300 border-x-4 rounded-lg border-teal-400 bg-slate-700 bg-opacity-50  text-center p-3 ">Pelé</p>

            </div>


            <div className="w-44 mx-auto space-y-5 hover:scale-110 duration-700">

              <img src="https://static.displate.com/857x1200/displate/2020-04-29/5421f6c3d6c07a78887dad5451bfd7f3_6bae1b03854421af3c688340e190a6ff.jpg" alt="CR7" className="aspect-square object-cover rounded-full hover:shadow-[0_0_50px_0px_rgba(255,115,0,1)]" />
              <p className="para text-green-300 border-x-4 rounded-lg border-teal-400 bg-slate-700 bg-opacity-50  text-center p-3 ">Ronaldinho</p>

            </div>


          </div>


          <div className="md:flex space-y-5 md:space-y-0 lg:space-x-36">

            <div className="w-44 mx-auto space-y-5 hover:scale-110 duration-700">

              <img src="https://static.toiimg.com/thumb/msid-47905251,width-1070,height-580,imgsize-88966,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" alt="CR7" className="aspect-square object-cover object-top rounded-full hover:shadow-[0_0_50px_0px_rgba(255,255,255,1)]" />
              <p className="para text-green-300 border-x-4 rounded-lg border-teal-400 bg-slate-700 bg-opacity-50  text-center p-3 ">Roberto Carlos</p>

            </div>


            <div className="w-44 mx-auto space-y-5 hover:scale-110 duration-700">

              <img src="https://iffhs.com/images/legend/3/avatar.png" alt="CR7" className="aspect-square object-cover object-top rounded-full hover:shadow-[0_0_50px_0px_rgba(0,236,236,1)]" />
              <p className="para text-green-300 border-x-4 rounded-lg border-teal-400 bg-slate-700 bg-opacity-50  text-center p-3 ">Maradona</p>

            </div>


          </div>




        </div>



      </section>



      {/* section 4 */}

      <section className='p-5'>
        <h2 className="text-5xl italic text-center my-20 bg-gradient-to-r from-[#e51bee] to-[#fdee21] bg-clip-text text-transparent">Some historical matches</h2>
        <div className="my-4 lg:flex lg:space-x-36 lg:px-10">

          <div className="hover:scale-110 duration-700"><img src={lvrpl} alt="" className="rounded-xl w-full hover:shadow-[0_0_38px_11px_rgba(111,111,111,1)]" />
            <p className="bg-gray-400 text-center font-semibold text-xl relative -top-14 py-2 bg-opacity-60">Liverpool vs AC Milan (2005)</p>
          </div>

          <div className="hover:scale-110 duration-700"><img src={brzl} alt="" className="rounded-xl w-full hover:shadow-[0_0_38px_11px_rgba(111,111,111,1)]" />
            <p className="bg-gray-400 text-center font-semibold text-xl relative -top-14 py-2 bg-opacity-60">Brazil vs Italy (1997)</p>
          </div>

          <div className="hover:scale-110 duration-700"><img src={grmny} alt="" className="rounded-xl w-full hover:shadow-[0_0_38px_11px_rgba(111,111,111,1)]" />
            <p className="bg-gray-400 text-center font-semibold text-xl relative -top-14 py-2 bg-opacity-60">Germany vs Brazil (2014)</p>
          </div>

        </div>
      </section>



      {/* section 5 */}

      <section className="p-5">

        <h2 className="text-5xl italic font- text-center my-20 bg-gradient-to-r from-[#30fffc] to-[#ff0101]  text-transparent bg-clip-text md:w-72 md:mx-auto">Leagues</h2>


        <div className="space-y-10 lg:p-10">

          <div className="space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">

            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/1200px-UEFA_Champions_League.svg.png" alt="UEFA Champions league" className="bg-white p-2 rounded-lg lg:w-44" />

            <p className="para text-justify text-white bg-slate-900 border-t-4 lg:border-t-0 lg:border-l-4 border-indigo-400 p-4 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg">The UEFA Champions League is an annual club association football competition organised by the Union of European Football Associations and contested by top-division European clubs, deciding the competition winners through a round robin group stage to qualify for a double-legged knockout format, and a single leg final. It is the most watched club competition in the world and the third-most watched football competition overall, behind only the UEFA European Championship and the FIFA World Cup. It is one of the most prestigious football tournaments in the world and the most prestigious club competition in European football, played by the national league champions (and, for some nations, one or more runners-up) of their national associations.</p>


          </div>


          <div className="space-y-5 lg:space-y-0 lg:flex">


            <img src="https://static.vecteezy.com/system/resources/previews/010/994/451/non_2x/premier-league-logo-symbol-with-name-design-england-football-european-countries-football-teams-illustration-with-purple-background-free-vector.jpg" alt="Premier league" className="bg-white p-2 rounded-lg lg:w-44 order-2" />


            <p className="para order-1 text-justify text-white bg-slate-900 border-t-4 lg:border-t-0 lg:border-r-4 border-indigo-400 p-4 rounded-b-lg lg:rounded-b-none lg:rounded-l-lg lg:mr-5">The Premier League is the highest level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL). Seasons typically run from August to May, with each team playing 38 matches against all other teams, both home and away. Most games are played on Saturday and Sunday afternoons, with occasional weekday evening fixtures.

              The competition was founded as the FA Premier League on 20 February 1992 following the decision of First Division (top-tier league from 1888 until 1992) clubs to break away from the English Football League. However, teams may still be relegated to and promoted from the EFL Championship.</p>





          </div>


          <div className="space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">

            <img src="https://www.thesun.co.uk/wp-content/uploads/2023/06/la-liga-logo-822870770-1.jpg" alt="LaLiga" className="bg-white p-2 rounded-lg lg:w-44" />

            <p className="para text-justify text-white bg-slate-900 border-t-4 lg:border-t-0 lg:border-l-4 border-indigo-400 p-4 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg">The Campeonato Nacional de Liga de Primera División, commonly known as the Primera División, or LaLiga, and officially LALIGA EA SPORTS since 2023 for sponsorship reasons, is the top men's professional football division of the Spanish football league system. Administered by Liga Nacional de Fútbol Profesional, it is contested by 20 teams.</p>


          </div>



          <div className="space-y-5 lg:space-y-0 lg:flex">

            <img src="https://pbs.twimg.com/media/BwHpxhUIMAEGgzg.png" alt="Indian Super league" className="bg-white p-2 rounded-lg w-full lg:w-44 order-2" />


            <p className="para order-1 text-justify text-white bg-slate-900 border-t-4 lg:border-t-0 lg:border-r-4 border-indigo-400 p-4 rounded-b-lg lg:rounded-b-none lg:rounded-l-lg lg:mr-5">The Indian Super League (ISL) is the men's highest level of the Indian football league system. Administered by the All India Football Federation (AIFF) and its commercial partner Football Sports Development Limited (FSDL), the league currently comprises 12 clubs.

              The season runs from September to March and includes a 22-round regular season followed by playoffs involving the top six teams, culminating with the ISL Final to determine the champions. At the end of the regular season, the team with the most points is declared the premiers and presented with the League Winners' Shield.</p>





          </div>



          <div className="space-y-5 lg:space-y-0 lg:space-x-5 lg:flex">

            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Roshn_Saudi_League_Logo.svg/1200px-Roshn_Saudi_League_Logo.svg.png" alt="Saudi Pro league" className="bg-white p-2 rounded-lg lg:w-44" />

            <p className="para text-justify text-white bg-slate-900 border-t-4 lg:border-t-0 lg:border-l-4 border-indigo-400 p-4 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg">The Saudi Pro League (SPL), known as the ROSHN Saudi League (RSL) for sponsorship reasons, is the highest division of football in the Saudi football league system.

              The first season of competition was the 1976–77 season. The league had been operating as a round-robin tournament from its inaugural season until the 1989–90 season, after that the Saudi Federation decided to merge the football League with the King's Cup in one tournament and the addition of the Golden Box. The Golden Box would be an end of season knockout competition played between the top four teams of the regular league season. These teams would play at a semi-final stage to crown the champions of Saudi Arabia. The league reverted to a round-robin system in the 2007–08 season.</p>


          </div>


        </div>








      </section>


      {/* section 6 */}

      <section className="p-5">


        <h2 className="text-5xl italic text-center my-20 bg-gradient-to-r from-[#ff0055] to-[#ffe600] bg-clip-text text-transparent">World Cup</h2>

        <div className="">


          <img src="https://images.unsplash.com/photo-1637203727317-3cc1a557cdbf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGQlMjBjdXAlMjB0cm9waHl8ZW58MHx8MHx8fDA%3D" alt="FIFA trophy" className="rounded-md mx-auto" />

          <div className="text-white">
            <p className="head text-green-800 text-center text-4xl my-5">FIFA</p>
            <p className="para text-justify md:text-center">The FIFA World Cup, often simply called the World Cup, is an international association football competition between the senior men's national teams of the members of the Fédération Internationale de Football Association (FIFA), the sport's global governing body. The tournament has been held every four years since the inaugural tournament in 1930, with the exception of 1942 and 1946 due to the Second World War. The reigning champions are Argentina, who won their third title at the 2022 tournament.</p>
          </div>

          <div className="space-y-10 py-10 lg:space-y-0 lg:flex lg:space-x-24">


            <div className="p-2 text-center rounded-lg bg-slate-900 lg:w-1/3">

              <img src="https://c.ndtvimg.com/2022-12/2a22k77o_messi-afp_625x300_21_December_22.jpg" alt="fifa2022" className="rounded-t-lg" />

              <p className="head text-blue-300 text-xl">ARGENTINA</p>
              <p className="para text-white">(Current Winners)</p>


            </div>


            <div className="p-2 text-center rounded-lg bg-slate-900 lg:w-1/3">

              <img src="https://www.wallpaperup.com/uploads/wallpapers/2014/06/01/361858/8c28ca8bbc84d93ea8d413e097c9c06a.jpg" alt="fifa2022" className="rounded-t-lg" />

              <p className="head text-yellow-300 text-xl">BRAZIL</p>
              <p className="para text-white">(Most Wins)</p>


            </div>


            <div className="p-2 text-center rounded-lg bg-slate-900 lg:w-1/3">

              <img src="https://hungarytoday.hu/wp-content/uploads/2023/06/DVAST20230620028-scaled.jpg" alt="fifa2022" className="rounded-t-lg" />

              <p className="head text-red-600 text-xl">HUNGARY</p>
              <p className="para text-white">(Most goals in a tournament
                )</p>


            </div>


          </div>





        </div>

      </section>



    </main>
  )
}

export default Home
