import { FiChevronsDown } from 'react-icons/fi';

const AppShowcase = () => {
  return (
    <div className="App-showcase">
      <div className="showcase-overlay">
        <h1>Hi, I'm Jack Dunning.
          <br /> I'm a Web Developer currently looking for a job in Seattle.
        </h1>
        <p className="showcase-text">Interested in working together? Feel free to contact me for any project or collaboration.</p>
        <a href="/portfolio-website/contact" ><button className="contact-button">Contact</button></a>
        <br />
        <a id="chevron" href="#chevron"><FiChevronsDown /></a>
      </div>
    </div>
  )
}

export default AppShowcase