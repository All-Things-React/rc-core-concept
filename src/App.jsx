import { createRoot } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1 id='something-important'>Adopt Me!</h1>
      <Pet name='Luna' animal='Dog' breed='Havanese' />
      <Pet name='Pepper' animal='Bird' breed='Cockatiel' />
      <Pet name='Doink' animal='Cat' breed='Mix' />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
