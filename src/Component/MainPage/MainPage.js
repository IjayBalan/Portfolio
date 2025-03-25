import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css';

let MainPage = () => {
    return (
        <div>
            <div className="row m-0" style={{ backgroundColor: "rgb(166, 8, 234)",width:"100vw",position:"fixed"}}>
                <h5 className="col-7 col-md-5 d-flex justify-content-center m-2" style={{ color: "white" }}>Ijay Balan S │</h5>
                <div className="d-flex col-12 col-md-4">
                <p className="col-3 d-flex justify-content-center m-2 " style={{ color: "white",cursor:"pointer",textDecoration:"underlined" }} onClick={()=>{
                    let homeSection =document.getElementById("home")
                    homeSection.scrollIntoView({behavior:"smooth"})
                }}>Home</p>
                <p className="col-3 d-flex justify-content-center m-2" style={{ color: "white",cursor:"pointer" }} onClick={()=>{
                    let aboutSection =document.getElementById("about")
                    aboutSection.scrollIntoView({behavior:"smooth"})
                }}>About</p>
                <p className="col-3 d-flex justify-content-center m-2" style={{ color: "white",cursor:"pointer" }} onClick={()=>{
                    let contactSection =document.getElementById("contact")
                    contactSection.scrollIntoView({behavior:"smooth"})
                }}>Contact</p>
                </div>
                
            </div>
            <div id="home" className="row d-flex justify-content-start align-items-center" style={{width:"100vw"}}>
                <div className="col-8 col-md-6 col-lg-7 col-xl-8 m-5">
                    <p className="mt-5">Hi, Myself</p>
                    <h5 style={{ fontFamily: "Timesnewroman", fontWeight: "bold" }}>Ijay Balan S</h5>
                    <p className="mt-4" style={{ textAlign: "justify", fontFamily: "Quicksand"}}>Aspiring Software Engineering, a self-learner who loves to learn cutting-edge technologies and improve myself to attain industry standards.</p>
                    <a href="/Ijay Balan Resume.pdf" download><button className="btn btn-custom" style={{backgroundColor:"rgb(166, 8, 234)",color:"white"}}>Download CV</button></a>

                </div>
                <div className="res-image col-md-2 col-lg-2 col-xl-3 ">
                    <img src="https://www.becker.com/sites/default/files/styles/atge_no_style_lg/public/2024-04/BEC_Now_student_at_desk_with_laptop_960x640.png?itok=q-NBgtwc"style={{width: "250px",border: "2px solid",borderRadius: "50%",borderColor: "rgb(216, 181, 231)",marginTop:"60px"}}alt="Student at Desk"/>
                </div>
            </div>
            <div id="about">
                <div className="row mt-5" style={{width:"100vw"}}>
                    <h3 className="col-11 d-flex justify-content-center" style={{fontFamily: "Oswald"}}>About Me</h3>
                    <h5 className="col-11 d-flex justify-content-center mt-3" style={{fontFamily: "Winky Sans"}}>Let Me Introduce Myself</h5>
                    <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <p className="col-11"style={{textAlign: "justify",margin: 0,fontFamily: "Quicksand"}}>
                        I'm Ijay Balan, completed my Bachelor's degree in Electronics and Communication Engineering from Sri Ramakrishna Institute of Technology.
                        I am passionate about frontend development and constantly strive to improve my skills by working on new projects and learning the latest trends in the industry.
                        I am excited about the opportunity to contribute my skills and grow in a challenging environment.
                        </p>
                    </div> 
                </div>
                <div className="row" >
                    <h5 className="d-flex justify-content-center align-items-center mt-3">Skills</h5>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://ih1.redbubble.net/image.1468562064.1834/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg" style={{maxWidth:"300px",height:"auto",objectFit:"contain"}}></img>
                    </div>
                </div>
            </div>
            <div >
                <h5 className="d-flex justify-content-center mt-3" style={{fontFamily: "Winky Sans"}}>Projects</h5>
                <div className="row d-flex justify-content-center align-items-center">
                <div className=" col-8 col-md-5 col-lg-3 m-2 " style={{border:"1px ",width:"320px",height:"235px",backgroundColor:"rgb(166,8,234)",borderRadius:"5%",boxShadow:"0 4px 8px rgba(0,0,0,0.3)"}}>
                    <div className="row d-flex align-content-center ">
                        <p className="col-6 col-md-7 m-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-folder2" viewBox="0 0 16 16"><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z"/></svg></p>
                        <p className="col-2 m-1"><a style={{color:"black"}} href="https://ijaybalan.github.io/market-react/"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/></svg></a></p>
                        <p className="col-2 m-1"><a style={{color:"black"}} href="https://github.com/IjayBalan/market-react"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-file-earmark-code" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/><path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"/></svg></a></p>
                    </div>
                    <h5 className="mt-2" style={{color:"white"}}>Market Website</h5>
                    <p style={{textAlign:"justify",fontFamily: "Quicksand",color:"white"}}>Developed a dynamic market app with React, Redux, and Bootstrap, ensuring smooth navigation, responsive design, and efficient state management.</p> 
                    <p className=" col-4 d-flex justify-content-center" style={{border:"1px solid",borderColor:"rgba(166,8,234)",backgroundColor:"white",borderRadius:"5%"}} >React Js</p>              
                </div>
                <div className="col-8 col-md-5 col-lg-3 m-2" style={{border:"1px ",width:"320px",height:"235px",backgroundColor:"rgb(166,8,234)",borderRadius:"5%",boxShadow:"0 4px 8px rgba(0,0,0,0.3)"}}>
                    <div className="row">
                        <p className="col-6 col-md-7 m-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-folder2" viewBox="0 0 16 16"><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z"/></svg></p>
                        <p className="col-2 m-1"><a style={{color:"black"}} href="https://ijaybalan.github.io/Weather-react/"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/></svg></a></p>
                        <p className="col-2 m-1"><a style={{color:"black"}} href="https://github.com/IjayBalan/Weather-react"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-file-earmark-code" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/><path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"/></svg></a></p>
                    </div>
                    <h5 className="mt-2" style={{color:"white"}}>Weather Website</h5>
                    <p style={{textAlign:"justify",fontFamily: "Quicksand",color:"white"}}>Developed a weather website using React and APIs, featuring real-time data, responsive design, and smooth user experience.</p> 
                    <p className="col-4 d-flex justify-content-center" style={{border:"1px solid",borderColor:"rgb(166,8,234)",backgroundColor:"white",borderRadius:"5%"}}>React Js</p>              
                </div>
                <div className="col-8 col-md-5 col-lg-3 m-2" style={{border:"1px",width:"320px",height:"235px",backgroundColor:"rgb(166,8,234)",borderRadius:"5%",boxShadow:"0 4px 8px rgba(0,0,0,0.3)"}}>
                    <div className="row">
                        <p className="col-6 col-md-7 m-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-folder2" viewBox="0 0 16 16"><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z"/></svg></p>
                        <p className="col-2 m-1"><a style={{color:"black"}} href="https://ijaybalan.github.io/bank-react/"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-link-45deg" viewBox="0 0 16 16"><path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/></svg></a></p>
                        <p className="col-2 m-1"><a style={{color:"black"}} href="https://github.com/IjayBalan/bank-react"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-file-earmark-code" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/><path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"/></svg></a></p>
                    </div>
                    <h5 className="mt-2" style={{color:"white"}}>Bank Website</h5>
                    <p style={{textAlign:"justify",fontFamily: "Quicksand",color:"white"}}>Developed a secure banking application using React, featuring authentication, transactions, responsive design, and seamless user experience.(UserId:Ijay.01, Password:1003)</p> 
                    <p className="col-4 d-flex justify-content-center" style={{border:"1px solid",borderColor:"rgba(166,8,234)",backgroundColor:"white",borderRadius:"5%"}}>React Js</p>              
                </div>
                </div>
            </div>
            <div id="contact" className="row mt-5">
                <h3 className="d-flex justify-content-center align-items-center" style={{fontFamily: "Oswald"}}>Get In Touch</h3>
                <div className="d-flex justify-content-center align-items-center">
                    <p className="col-10" style={{textAlign:"center",fontFamily: "Quicksand"}}>I'm currently looking for new exciting opportunities,my in box is always open.whether you hav a question or just want to say hi,I'll try my best to get back to you!</p>
                </div>
                <p className="d-flex justify-content-center m-2" style={{fontSize:"small"}}>Ph:+91 9123543663</p>
                <div className="d-flex justify-content-center">
                    <p className="ms-4"><a style={{color:"black"}} href="https://github.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a></p>
                    <p className="ms-4"><a style={{color:"black"}} href="https://www.linkedin.com/feed/"></a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg></p>
                    <p className="ms-4"><a style={{color:"black"}} href="mailto:iijaybalan@gmail.com" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/></svg></a></p>
                </div>
            </div>
        </div>

    );
};
export default MainPage;
