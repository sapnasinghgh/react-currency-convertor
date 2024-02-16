import { useState } from 'react'
import InputBox from './componant/Input'
import useCurrencyInfo from './assets/hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amount,setamount] = useState(0)
  const [from , setfrom] = useState("abt")
  const [to , setto] = useState("inr")
  const [convertamount , setconertedamount] = useState(0)

 

   
    const currencyInfo  = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
 
const swap = () =>{
    setfrom(to)
    setto(from)
    setconertedamount(amount)
    setamount(convertamount)
 

   

    
  }
      const convert =()=>{
   setconertedamount(amount*currencyInfo[to])

  }

 return (
  
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover
    bg-no-repeat '
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
    }}>

      <h1 className='text-6xl text-white'>Currency Convertor</h1>

      <div className='w-full text-black'>
        <div className='w-full max-w-md mx-auto
        border border-gray-60 rounded-lg p-5
        backdrop-blur-sm bg-white/30 text-black'>
          <form 
          onSubmit={(e)=>{
            e.preventDefault();
            convert()
          }}
          >


          <div className='w-full mb-1  '>
            <InputBox 
             
            label = "From"
            amount ={amount}
            currencyoptionfrom= {options}
            oncurrencychange ={(currency) => setfrom(currency)}

            selectCurrency ={from}
            onamountchange={(amount)=>{
              setamount(amount)
            }}

            />

          </div>


          <div className='realtive w-full h-0.5'>
            <button
            type='button'
            className='absolute left-1/2
            -translate-x-1/2
            -translate-y-1/2 border-2
             border-white rounded-md 
             bg-blue-600 text-white px-2 py-0.5'
             onClick={swap}
             >
              
              swap
              </button>
              </div>

              <div className='w-full mb-4 mt-1 '>
                <InputBox 
                 label = "To"
            amount ={convertamount}
            currencyoptionto = {options}
            oncurrencychange ={(currency)=>setto(currency)}
            selectCurrency ={to}
         
            amountDisable
                />
              </div>

          <button
          type='submit'
          className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg
          '> Convert {from.toUpperCase()} To {to.toUpperCase()}
          </button>
          </form>
            

          </div>
        </div>

      </div>

  
  )
}

export default App
