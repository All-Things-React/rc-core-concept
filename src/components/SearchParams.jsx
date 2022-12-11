import { useState } from 'react'
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const breeds = []

  return (
    <div className='search-params'>
      <form>
        <label htmlFor='location'>
          Location
          <input id='location' value={location} onChange={e => setLocation(e.target.value)} placeholder='Location' />
        </label>
        <label htmlFor='animal'>
          Animal
          <select
            id='animal'
            value={animal}
            onChange={e => {
              setAnimal(e.target.value)
              setBreed('')
            }}
          >
            <option>Please choose an animal</option>
            {ANIMALS.map(animal => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='breed'>
          Breed
          <select id='breed' disabled={breeds.length === 0} value={breed} onChange={e => setBreed(e.target.value)}>
            {breeds.length > 0 ? (
              <option>Please choose a breed</option>
            ) : (
              <option>Please choose an animal to continue</option>
            )}
            {breeds.map(breed => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
