import ProfileImg from './assets/profile.jpg';
import './App.scss';

const App = () => (
  <div className="animate h-100 d-flex flex-column justify-content-evenly align-items-center text-center">
    <Profile/>
    <div className="medium">Sou,</div>
    <div className="x-large">Rafael Alexandre</div>
    <div className="large">Desenvolvedor</div>
    <div className="medium">FullStack especializado em aplicações Java. (Spring Boot & React)</div>
    <div className="small"><i className="bi bi-cone-striped"/><i className="bi bi-cone-striped"/><i className="bi bi-cone-striped"/> No momento o site está em manutenção, mas fique a vontade para entrar em contato! <i className="bi bi-cone-striped"/><i className="bi bi-cone-striped"/><i className="bi bi-cone-striped"/></div>
    <div className="links d-flex flex-column justify-content-evenly align-items-center">
      <a href="https://github.com/Rafael-Alexandre-96" target="_blank"><i className="bi bi-github" /></a>
      <a href="https://www.linkedin.com/in/rafael-alexandre-766793bb/" target="_blank"><i className="bi bi-linkedin"/></a>
      <a href="mailto:rafael.alexandre.1996.ra@gmail.com" target="_blank"><i className="bi bi-envelope-at-fill"/></a>
    </div>
  </div>
)

const Profile = () => (
  <img
    className="img-thumbnail"
    src={ProfileImg}
  />
)

export default App
