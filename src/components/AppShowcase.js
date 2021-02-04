import { FiChevronsDown } from 'react-icons/fi';


const AppShowcase = () => {
  return (
    <div className="App-showcase">
      <div className="showcase-overlay">
        <h1>Hi, I'm Jack Dunning.
          <br /> I'm a Web Developer currently looking for a job in Seattle.
        </h1>
        <p>Interested in working together? Feel free to contact me for any project or collaboration.</p>
        {/* <Button variant="contained" >Default</Button> */}
        <FiChevronsDown />
      </div>
    </div>
  )
}

export default AppShowcase