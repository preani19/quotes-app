import { useState } from 'react'


function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')



  
  function toggle() {
    fetch('https://dummyjson.com/quotes')
    .then(res => res.json())
    .then(d => {
      const randomIndex = Math.floor(Math.random() * d.quotes.length)
      setQuote(d.quotes[randomIndex].quote)
      setAuthor(d.quotes[randomIndex].author)
    }); 
  }
  
  


  return (
    <div id="quote-box" className='transition hover:scale-110 duration-300 max-w-128   bg-blue-300 mx-5 p-10 rounded-md'>
      <h1 className='text-center mb-5'>Random Quote Machine</h1>
      <div id="quote">
        <p id="text" className='italic font-medium'>
          {quote ? <i className="fa-solid fa-quote-left"></i>  : ""} 
          { " " + quote + " "}
          {quote ? <i className="fa-solid fa-quote-right"></i> : ""} 
        </p>
        <p id="author" className='font-light mt-2'>{quote ? '- ' : ""}{author}</p>
      </div>
      <div className={` flex flex-col  sm:flex-row ${quote ? "justify-between" : "justify-center"} gap-10 mt-5`}>
            {quote 
            ? <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
                target="_blank"
                rel="noopener noreferrer"
                className='text-center '
                >
                  Tweet this quote
                </a> 
            :   ""}
      <button id="new-quote" onClick={toggle}>
          {quote ? "New Quote" : "Genrate a Quete"} 
      </button>
      </div>
    
    </div>
  )
}

export default App
