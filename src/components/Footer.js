import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="Footer">
      <a className="icon" href="https://github.com/JackStunning"><FaGithub size={50} /></a>
      <a className="icon" href="https://www.linkedin.com/in/jackstunning/"><FaLinkedin size={50} /></a>
    </div>
  )
}

export default Footer