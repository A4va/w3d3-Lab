import './App.css'
import Programers from './components/Programers'
import Companies from './components/Companies'
import Services from './components/Services'

let langsProg: string[]= ["HTML", "CSS", "JS"] 

let servs: string[]= ["A", "B", "C"]
function App() {

  return (
    <section className='container'>
      <div className="profile-container">
        <Programers name='Abduallah' coName='Abduallah-Company' experYears={45} langs = {langsProg}/>
        <Programers name='Abduallah' coName='Abduallah-Company' experYears={45} langs = {langsProg}/>
        <Programers name='Abduallah' coName='Abduallah-Company' experYears={45} langs = {langsProg}/>
      </div>
      <div className="company-container">
        <Companies name="Abduallah-Company" empsCount={100} year={100}/>
        <Companies name="Abduallah-Company" empsCount={100} year={100}/>
        <Companies name="Abduallah-Company" empsCount={100} year={100}/>
      </div>
      <div className="Service-container">
        <Services services= {servs} expctedPrice={9999}/>
        <Services services= {servs} expctedPrice={9999}/>
        <Services services= {servs} expctedPrice={9999}/>
      </div>
    </section>
  )
}

export default App
