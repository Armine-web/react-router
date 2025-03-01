import { BrowserRouter, Routes, Route, Link } from "react-router";

const MainLayout = ({children}) => {
  return (
    <>
      <Nav/>
      {children}
      <Footer/>
    </>
     
  )
}

const Nav = () => {
  return (
    <nav>
    <Link to ="/about">About</Link>   
    <Link to = "/"> Home </Link>
  </nav> 
  )
}



const Home = () => {
  return (
    <>
      <div>Home</div>
    </>    
  )
}

const About = () => {
  return (
    <>
      <div>About</div>
    </>  
  )
}

const Footer = () => {
  return (
    <>
      <div>Footer</div>
    </>
  )
}

const NotFound = ()=> {
  return (
    <>
    <h2>404</h2>
    <h3>Page Not Found</h3>
    <Link to = "/"> Home </Link>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>  
    </BrowserRouter>
  )
}

export default App
