import { useState } from 'react'
import './home.css'

function Home(){
    const [bao1,setBao1] = useState("")
    const [bao2,setBao2] = useState("")
    const [bao3,setBao3] = useState("")
    const SuKien1 = (e)=>{
        if(e.target.value == ''){
            setBao1("This field is invalid")
        }else {setBao1("")}
    }
    const SuKien2 = (e)=>{
        if(e.target.value == ''){
            setBao2("This field is invalid")
        }else {setBao2("")}
    }
    const SuKien3 = (e)=>{
        if(e.target.value == ''){
            setBao3("This field is invalid")
        }else {setBao3("")}
    }

    return (
        <section id="home">
            <div className="home">
                <a href="https://huynham.github.io/dorsin-0911-home/" className="home-a"><i class="fas fa-home-lg"></i></a>
                <h3>DORSIN</h3>
                <p className="p1">Sign up for a new Account</p>
                <form>
                    <label>First Name</label> <span className="thongbao">{bao1}</span><br />
                    <input type="text" placeholder="First Nam" className="inp1" onChange={SuKien1} onBlur={SuKien1}/><br />
                    
                    <label>Email</label><span className="thongbao">{bao2}</span><br />
                    <input type="text" placeholder="Emai" className="inp-email" onChange={SuKien2} onBlur={SuKien2} /><br />
                    
                    <label>Password</label><span className="thongbao">{bao3}</span>
                    <input type="text" placeholder="Enter Password" className="inp2" onChange={SuKien3} onBlur={SuKien3}/><br />
                    
                    <input type="checkbox" className="check" />
                    <label>Remember Me</label><br />
                    <button type="button" className="but1">Sign In</button>
                    <p className="p2">Don't have an account ?<a href="https://huynham.github.io/dorsin-0911-home/"> Sing In</a></p>
                </form>

            </div>
        </section>
    )
}

export default Home