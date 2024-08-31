import '../css/Home.css'
import Card from '../components/Card';
import DCCGathering from '../assets/dcc_gathering.webp'
import MimiEye from '../assets/mimi_eye.gif';
import DCCDesign from '../assets/dccdesign1.svg'

export default function Home() {

  let imageTextStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    background: 'repeating-linear-gradient(white, white 54px, #f5c24f 54px, #f5c24f 108px)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    cursor: 'pointer'
  }


  return (
    <div className='Home'>
      <div className='row'>
        <Card 
          imageStyle={
            { 
              backgroundImage: `url(${DCCGathering})`, 
              backgroundColor: 'rgba(0, 0, 0, 0.65)' , 
              backgroundBlendMode: 'darken', 
              height: '500px' 
            }
          } 
          imageTextStyle={imageTextStyle}
          imagetext={
            <>
              <p>Welcome to</p>
              <p>Dearborn</p>
              <p>Coding Club</p>
            </>
          } 
          textStyle={{ textAlign: 'center', padding:'10px' }}  
          text={
            <>
              <p>
                Come work on whatever side project that you're looking into while getting to know some interesting folks and enjoying some Yemeni coffee at Haraz Coffee in Dearborn! We're an inclusive group of curious builders so bring questions, answers, projects, or just an interest in meeting new people!</p>
              <p>
                If you're interested in collaborating, we're currently working on this website for the group. We've got a few repositories that manage the infrastructure and the code here:
                <br/>
                <a href='https://github.com/dearborn-coding-club/website-base-backend'>website-base-backend</a>
                <br/>
                <a href='https://github.com/dearborn-coding-club/website-base-frontend'>website-base-frontend</a>
                <br/>
                <a href='https://github.com/dearborn-coding-club/Terraform-infra-website'>Terraform-infra-website</a>
              </p>
              <p>
                We've also recently started up a slack organization that can be found here: <a href='https://dearborncodingclub.slack.com'>https://dearborncodingclub.slack.com</a>.
              Space is limited so we'll look to capture the table in the back before it gets filled with other folks!make it short and professional
              </p>
            </>
          }
        />
      </div>
      <div className='row'>
        <Card 
          imageStyle={
            { 
              backgroundImage: `url(${MimiEye})`, 
              backgroundColor: 'rgba(0, 0, 0, 0.4)' , 
              backgroundBlendMode: 'darken', 
              height: '300px' 
            }
          } 
          imageTextStyle={imageTextStyle}
          imagetext={
            <>
              <p>Bring</p>
              <p>Questions</p>
              <p>And</p>
              <p>Projects</p>
            </>
          } 
        />
        <Card 
          imageStyle={{ height: '300px' }} 
          imagetext={
            <div className="image-text-style">
              <p>Enjoy</p>
              <p className='heighlight'>Yemeni Coffee</p>
            </div>
          } 
        />
      </div>
      <div className='row'>
        <Card 
          imageStyle={
            { 
              backgroundImage: `url(${DCCDesign})`, 
              backgroundColor: 'rgba(0, 0, 0, 0.4)' , 
              backgroundBlendMode: 'darken', 
              height: '300px' 
            }
          }
          imagetext={
            <div className="image-text-style">
              <p>Know our</p>
              <p className='heighlight'>Projects</p>
            </div>
          } 
        />
      </div>
    </div>
  );
}