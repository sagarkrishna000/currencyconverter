import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import UseCurrency from './hooks/useCurrency.js'
import {InputBox} from './components/index.js'

function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = UseCurrency(from)
  const options = Object.keys(currencyInfo)
  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style = {{backgroundImage: `url(https://cdn.pixabay.com/photo/2019/11/23/13/53/bitcoin-4647175_1280.jpg)`}}>

      <div className='w-full'>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className='text-brown text-4xl text-center my-5'>Currency Converter</h1>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className="w-full mb-1">
              <InputBox label="from" amount={amount} currencyOptions={options} onCurrencyChange = {(currency) => setFrom(currency)} onAmountChange ={(amount) => setAmount(amount)} selectedCurrency = {from}></InputBox>
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
            </div>
            <div className="w-full mb-1">
              <InputBox label="to" currencyOptions={options} amount={convertedAmount} onCurrencyChange = {(currency) => setTo(currency)}  selectedCurrency = {to} amountDisabled></InputBox>
            </div>
            <button type ='submit' className='w-full bg-blue-500 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
