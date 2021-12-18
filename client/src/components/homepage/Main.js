import left from './images/homepage-banner-illustration-1-5d2a4d352884a025c5e728efb0a4c6ce.svg';
import right from './images/homepage-banner-illustration-2-99577afed0f02e7ee1411f1e8aede6c9.svg';
import save from './images/Screenshot 2021-12-17 at 11.54.28 PM.png';
import bike from './images/Vector (2).svg';
import health from './images/Vector (3).svg';
import car from './images/Car (1).svg';
import gift from './images/Car Gift.png'

const Main = () => {
    return (
  
        <div className='home_main'>
           <div className='home_main_child'>
           <div className='home_main_child_left'><img src={left}></img></div>
           </div>


           <div className='home_main_child home_main_mid'>
           <div className='home_main_mid_divs'>
               <p className='home_main_mid_p1'>Insurance made easy</p>
               <p className='home_main_mid_p2'>Zero commission. Zero paperwork</p>
               </div>

               <div className='home_main_mid_divs car_divis'>
               <div className='main_types'>
                      <div>
                      <div className='main_car car1'><img src={car} alt="car"></img></div>
                      <div className='main_car_text main_car_text1'>Car & Taxi</div>
                      </div> 
                      <div>
                      <div className='main_car'>
                          <img src={bike} alt="bike"></img>
                      </div>
                      <div className='main_car_text' size="2x">Bike</div>
                      </div> 
                      <div>
                      <div className='main_car'>
                          <img src={health} alt="health"></img>
                      </div>
                      <div className='main_car_text'>Health</div>
                      </div> 
                      
                   </div>
                  
               </div>

               <div className='home_main_mid_divs'>
               <div className='main_underline'>
                      <div className='main_underline_sub'></div> 
                      <div className='main_underline_sub'></div> 
                      <div className='main_underline_sub'></div> 
                   </div>
                </div>    

               <div className='home_main_mid_divs'>
               <div className="custom-search">
  <input type="text" className="custom-search-input" autocapitalize="uppercase" placeholder='Enter your car number'/>
  {/* <span className="floating-label">Your email address</span>
  </input> */}
  <button className="custom-search-botton" type="submit">Insure now <i class="fas fa-arrow-right"></i></button>  
    </div>
        </div>
        <div className='home_main_mid_divs'>
        <div className='main_underline2'>
                      <div className='main_underline_sub2'></div> 
                      <div>OR</div>
                      <div className='main_underline_sub2'></div> 
                   </div>
                   </div>

               <div className='home_main_mid_divs'>
               <div className='main_quote'><img src={gift} ></img>
               <div>
               <div>Looking to insure your new car?</div>
               <div style={{fontSize:"small", color:"#cebeef"}}>Save big with our zero commission insurance</div>
               </div>
               
               <button className='main_quote_btn'>Get a quote</button>
               </div>
               </div>

               <div className='home_main_mid_divs'><img src={save} alt='save' className='home_save' style={{width:"100%"}}></img></div>

               <div className='home_main_mid_divs'>
               <div className='main_underline3'>
                     <span><sub><img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIxIiB2aWV3Qm94PSIwIDAgMjEgMjEiIHdpZHRoPSIyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOC43NzczOSAxNS41NDU5Yy0uNDU5ODYtLjYzODctMS4yNTE4My0uOTcwOC0yLjAxODI1LS44NDMtLjYzODY5LjEwMjItMS4yMjYyOC0uMDc2Ny0xLjY2MDU5LS40MzQzbC0xLjczNzIyIDIuNTAzNiAyLjc4NDY3LS4xNzg4Ljc5MTk3IDIuNjU2OSAyLjI3MzcyLTMuMjcwMWMtLjE1MzI4LS4xMjc3LS4zMDY1Ny0uMjU1NC0uNDM0My0uNDM0M3oiIGZpbGw9IiMxNmMyZjgiLz48cGF0aCBkPSJtMTQuMTE2IDE0LjcwMjRjLS43OTItLjE1MzMtMS41NTg0LjE3ODgtMi4wMTgzLjg0My0uMTAyMS4xNTMzLS4yMDQzLjI4MS0uMzMyMS4zODMybDIuMzI0OCAzLjMyMTIuNzkyLTIuNjU2OSAyLjc4NDcuMTc4OC0xLjc4ODMtMi41ODAzYy0uNDU5OS40MDg4LTEuMDk4Ni42Mzg3LTEuNzYyOC41MTF6IiBmaWxsPSIjMTZjMmY4Ii8+PHBhdGggZD0ibTExLjk0MzggMi41MTYxOWMuNDA4OC41ODc1OSAxLjEyNDEuODY4NjEgMS44MTM5Ljc0MDg4IDEuMjUxOC0uMjI5OTMgMi4zMjQ4Ljg2ODYxIDIuMDk0OSAyLjA5NDg5LS4xMjc4LjY4OTc4LjE3ODggMS40MDUxMS43NDA4IDEuODEzODYgMS4wNDc1LjcxNTMzIDEuMDQ3NSAyLjI0ODE4IDAgMi45NjM0OC0uNTg3Ni40MDg4LS44Njg2IDEuMTI0MS0uNzQwOCAxLjgxMzkuMjI5OSAxLjI1MTgtLjg2ODcgMi4zMjQ4LTIuMDk0OSAyLjA5NDktLjY4OTgtLjEyNzgtMS40MDUxLjE3ODgtMS44MTM5Ljc0MDktLjcxNTMgMS4wNDc0LTIuMjQ4MTcgMS4wNDc0LTIuOTYzNSAwLS40MDg3Ni0uNTg3Ni0xLjEyNDA5LS44Njg3LTEuODEzODctLjc0MDktMS4yNTE4My4yNTU1LTIuMzUwMzctLjgxNzUtMi4xMjA0NC0yLjA2OTQuMTI3NzQtLjY4OTctLjE3ODgzLTEuNDA1MS0uNzQwODctMS44MTM4LTEuMDQ3NDUtLjcxNTM1LTEuMDQ3NDUtMi4yNDgyIDAtMi45NjM1My41ODc1OS0uNDA4NzYuODY4NjEtMS4xMjQwOS43NDA4Ny0xLjgxMzg3LS4yMjk5My0xLjI1MTgyLjg2ODYxLTIuMzI0ODEgMi4wOTQ4OS0yLjA5NDg5LjY4OTc4LjEyNzc0IDEuNDA1MTEtLjE3ODgzIDEuODEzODctLjc0MDg3LjcxNTMzLTEuMDQ3NDUgMi4yNDgxNS0xLjA0NzQ1IDIuOTg5MDUtLjAyNTU1eiIgZmlsbD0iI2QxYzBmZiIvPjxwYXRoIGQ9Im0xMC41MTM3IDEyLjcxYzIuMjg1NyAwIDQuMTM4Ny0xLjg1MyA0LjEzODctNC4xMzg3IDAtMi4yODU3My0xLjg1My00LjEzODY4LTQuMTM4Ny00LjEzODY4LTIuMjg1NzUgMC00LjEzODcgMS44NTI5NS00LjEzODcgNC4xMzg2OCAwIDIuMjg1NyAxLjg1Mjk1IDQuMTM4NyA0LjEzODcgNC4xMzg3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im05LjkyNjg5IDEwLjMwODRjLS4xMjc3MyAwLS4yNTU0Ny0uMDUxMS0uMzU3NjYtLjE1MzNsLTEuMjAwNzMtMS4yMDA3NGMtLjE3ODgzLS4xNzg4My0uMTc4ODMtLjUxMDk1IDAtLjY4OTc4cy41MTA5NS0uMTc4ODMuNjg5NzggMGwuODY4NjEuODY4NjEgMS45MTYxMS0xLjkxNjA2Yy4xNzg4LS4xNzg4My41MTA5LS4xNzg4My42ODk3IDAgLjE3ODkuMTc4ODMuMTc4OS41MTA5NSAwIC42ODk3OGwtMi4yNzM3IDIuMjQ4MTljLS4wNzY2LjEwMjItLjIwNDQuMTUzMy0uMzMyMTEuMTUzM3oiIGZpbGw9IiM5MzY0ZWQiLz48L3N2Zz4="></img></sub>Licensed by IRDAI</span>
                     <span>|</span>
                     <span>
                     <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMTYiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgyM3YxNmgtMjN6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGQ9Im0xNC45NTMxIDE2LjAwMDJoLTYuMjM0MzV2LTcuNDAxMzVjMC0xLjc0MTUgMS40MjE4NS0zLjE1NjQ3IDMuMTcxODUtMy4xNTY0N3MzLjE3MTkgMS40MTQ5NyAzLjE3MTkgMy4xNTY0N3Y3LjQwMTM1eiIgZmlsbD0iI2Y3NTI3NiIvPjxwYXRoIGQ9Im03Ljg0Mzc1IDE1Ljk5ODFoLTYuMzQzNzV2LTUuMjI0NWMwLTEuNzQxNDUgMS40MjE4OC0zLjE1NjQxIDMuMTcxODgtMy4xNTY0MXMzLjE3MTg3IDEuNDE0OTYgMy4xNzE4NyAzLjE1NjQxeiIgZmlsbD0iIzE2YzJmOCIvPjxwYXRoIGQ9Im0yMi41IDE2LjAwMDFoLTYuMzQzOHYtNC4wMjcyYzAtMS43NDE1IDEuNDIxOS0zLjE1NjQ5IDMuMTcxOS0zLjE1NjQ5czMuMTcxOSAxLjQxNDk5IDMuMTcxOSAzLjE1NjQ5eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xOS4zMjgxIDcuMTgzOTljMS4wODczIDAgMS45Njg4LS44NzcxNSAxLjk2ODgtMS45NTkxOHMtLjg4MTUtMS45NTkxOS0xLjk2ODgtMS45NTkxOS0xLjk2ODcuODc3MTYtMS45Njg3IDEuOTU5MTkuODgxNCAxLjk1OTE4IDEuOTY4NyAxLjk1OTE4eiIgZmlsbD0iI2YyYWEwMCIvPjxwYXRoIGQ9Im0xMS44OTA2IDMuOTE4MzdjMS4wODczIDAgMS45Njg4LS44NzcxNiAxLjk2ODgtMS45NTkxOSAwLTEuMDgyMDI0LS44ODE1LTEuOTU5MTgtMS45Njg4LTEuOTU5MThzLTEuOTY4NzIuODc3MTU2LTEuOTY4NzIgMS45NTkxOGMwIDEuMDgyMDMuODgxNDIgMS45NTkxOSAxLjk2ODcyIDEuOTU5MTl6IiBmaWxsPSIjZjc1Mjc2Ii8+PHBhdGggZD0ibTQuNjcxODggNi4zMTI5YzEuMDg3MzEgMCAxLjk2ODc0LS44NzcxNiAxLjk2ODc0LTEuOTU5MTkgMC0xLjA4MjAyLS44ODE0My0xLjk1OTE4LTEuOTY4NzQtMS45NTkxOC0xLjA4NzMyIDAtMS45Njg3Ni44NzcxNi0xLjk2ODc2IDEuOTU5MTggMCAxLjA4MjAzLjg4MTQ0IDEuOTU5MTkgMS45Njg3NiAxLjk1OTE5eiIgZmlsbD0iIzE2YzJmOCIvPjwvZz48L3N2Zz4="></img>
                     6.2 Crore users</span>
                     <span>|</span>
                     <span>
                     <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMzMgMTQiIHdpZHRoPSIzMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtLjUgMGgzMS42MzM2djE0aC0zMS42MzM2eiIvPjwvY2xpcFBhdGg+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJtMy40OTIxOSA4LjQ0MTQxLS40MjczIDEuODE5ODloLTEuODE2OGMtLjQyNzQ3OS0uOTYxODYtLjc0ODA5LTIuMDMwNTYtLjc0ODA5LTMuMzEzMDEgMC0xLjE3NTU3LjMyMDYxMS0yLjI0NDI3Ljc0ODA5LTMuMjA2MWwxLjYwMzA2LjMyMDYxLjYzMzIzIDEuNDg0MDhjLS4xMDY4OC40Mjc0OC0uMjA1NzUuOTczOTMtLjIwNTc1IDEuNDAxNDEgMCAuNTM0MzYuMDM3NzggMS4wMTY1NS4yMTM1NiAxLjQ5MzEyeiIgZmlsbD0iI2ZiYmIwMCIvPjxwYXRoIGQ9Im0xNC4wNjI5IDUuNzgxMjVjLjEwNjkuNDI3NDguMTA2OS44NTQ5Ni4xMDY5IDEuMjgyNDQgMCAuNTM0MzUgMCAuOTYxODMtLjEwNjkgMS40OTYxOS0uMzIwNiAxLjYwMzAyLTEuMDkzIDIuOTc4MzItMi4zNzU0IDMuOTQwMTJsLTIuMTEzMTUtLjA5MjgtLjMyMDYxLTEuNzA5OWMuODU0OTYtLjQyNzUgMS40OTYxNi0xLjE3NTU5IDEuODE2NzYtMi4xMzc0MmgtMy43NDA0MnYtMi43Nzg2M2gzLjc0MDQyeiIgZmlsbD0iIzUxOGVmOCIvPjxwYXRoIGQ9Im0xMS44MjgyIDEyLjM5NTZjLTEuMTc1Ni45NjE4LTIuNjcxNzYgMS40OTYyLTQuMzgxNjggMS40OTYyLTIuNjcxNzYgMC01LjAyMjktMS40OTYyLTYuMTk4NDctMy42MzM2bDIuMjQ0MjctMS44MTY3OWMuNjQxMjIgMS42MDMwOSAyLjEzNzQxIDIuNjcxNzkgMy44NDczMyAyLjY3MTc5Ljc0ODA5IDAgMS40OTYxOC0uMjEzOCAyLjEzNzQtLjUzNDR6IiBmaWxsPSIjMjhiNDQ2Ii8+PHBhdGggZD0ibTExLjkzNTEgMS42MDMwNS0yLjI0NDMxIDEuODE2OGMtLjY0MTIyLS4zMjA2MS0xLjM4OTMxLS42NDEyMi0yLjI0NDI3LS42NDEyMi0xLjgxNjc5IDAtMy40MTk4NSAxLjE3NTU3LTMuOTU0MiAyLjc3ODYybC0yLjI0NDI3LTEuODE2NzljMS4xNzU1Ny0yLjI0NDI4IDMuNTI2NzEtMy43NDA0NiA2LjE5ODQ3LTMuNzQwNDYgMS43MDk5MiAwIDMuMzEyOTguNjQxMjIxIDQuNDg4NTggMS42MDMwNXoiIGZpbGw9IiNmMTQzMzYiLz48cGF0aCBkPSJtMzIuMTMyOCA2Ljk0NjU2YzAtMy44NDczMi0zLjIwNjEtNi45NDY1Ni03LjA1MzQtNi45NDY1Ni0zLjg0NzQgMC02Ljk0NjYgMy4wOTkyNC02Ljk0NjYgNi45NDY1NiAwIDMuNTI2NzQgMi41NjQ5IDYuNDEyMjQgNS44Nzc5IDYuOTQ2NTR2LTQuOTE2aC0xLjgxNjh2LTIuMDMwNTRoMS44MTY4di0xLjQ5NjE4YzAtMS43MDk5MiAxLjA2ODctMi42NzE3NSAyLjY3MTctMi42NzE3NS43NDgxIDAgMS42MDMxLjEwNjg3IDEuNjAzMS4xMDY4N3YxLjcwOTkyaC0uODU1Yy0uODU0OSAwLTEuMTc1Ni41MzQzNS0xLjE3NTYgMS4wNjg3djEuMjgyNDRoMS45MjM3bC0uMzIwNiAyLjAzMDU0aC0xLjYwMzF2NC45MTZjMy4zMTMtLjUzNDMgNS44Nzc5LTMuNDE5OCA1Ljg3NzktNi45NDY1NHoiIGZpbGw9IiMxODc3ZjIiLz48cGF0aCBkPSJtMjcuODU5NCA4Ljk3NTgyLjMyMDYtMi4wMzA1NGgtMS45MTc3di0xLjI4MjQ0YzAtLjUzNDM1LjMyMDYtMS4wNjg3IDEuMTc1Ni0xLjA2ODdoLjg2MnYtMS43MDk5M3MtLjg2NzktLjEwNjg3LTEuNzIyOS0uMTA2ODdjLTEuNDk2MiAwLTIuNTY0OS45NjE4NC0yLjU2NDkgMi42NzE3NnYxLjQ5NjE4aC0xLjgxNjh2Mi4wMzA1NGgxLjgxNjh2NC45MTU5OGMuMzM5MS4wNDgyLjc0ODEuMTA2OSAxLjA2ODcuMTA2OXMuODE2LS4wMjM5IDEuMTc1Mi0uMTA2OXYtNC45MTU5OHoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+"></img>
                     95% 5Ratings</span>
                   </div>
                </div>

           </div>


           <div className='home_main_child'>
               <div className='home_main_child_right'><img src={right}></img></div>
           </div> 
        </div>
 
    )
}

export default Main
 