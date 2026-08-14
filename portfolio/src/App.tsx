import './App.css'


function SocialLinks() {
  function Link({ icon, name, link }: { icon: string, name: string, link: string }) {
    return <a href={link}>
      <img className='linkIcon' src={icon} />
      <span className="link-name">{name}</span>
    </a>;
  }

  return <div id="social-links">
    <Link icon="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/github-light.svg" name="Github" link='https://github.com/bishan-batel' />
    <Link icon="https://github.com/bishan-batel/crab/raw/main/docs/image/logo.svg" name="Crab" link="https://crab.bishan.app" />
    <Link icon="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/obsidian.svg" name="Obsidian" link='https://bishan.app' />
  </div>;
}

function App() {

  return (
    <>
      <section id="center">
        <div>
          <h1>Kishan S Patel</h1>
          <p> Game Developer </p>
        </div>

        <SocialLinks />
      </section>
    </>
  )
}

export default App
