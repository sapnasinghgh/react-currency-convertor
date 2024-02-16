import React,{useId} from 'react'

function InputBox({
    label,
    className ="",
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptionfrom =[],
    currencyoptionto =[],

    selectcurrency ="usd",
    amountDisable =false,
    currencyDisable = false,
    

}){
    const amountinputid = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        
         <div className='w-1/2 flex flex-wrap'>
            
            <label htmlFor={amountinputid}  
            className='text-black mb-2 inline-block '>
                {label}
            </label>


            <input
            id={amountinputid}
            className="outline-none w-full bg-transparent py-1.5"
            type='number'
            placeholder='amount'
            disabled ={amountDisable}
            value={amount}
            onChange={(e)=> onamountchange && onamountchange(Number(e.target.value))}
            />
            </div>


            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black mb-2 w-full'> Currency Type</p>
               
                <select 
                className='rounded-lg px-1 py-1 bd-gray-100 cursor-pointer
                 ouline-none'
                 value={  Object.keys.selectcurrency }
                // value={ selectcurrency }
                
                 onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
                 disabled ={currencyDisable}>

                    {currencyoptionfrom.map((currency )=>(
                        <option key={currency } value={currency }> 
                         {currency }
                        
                        </option>
                    ))}

                     {currencyoptionto.map((currency )=>(
                        <option key={currency } value={currency }> 
                         {currency }
                        
                        </option>
                    ))}
                  </select>

              

            </div>
    </div>
  )
}

export default InputBox