import { useEffect, useState } from 'react'
import useBreedList from '../hooks/useBreedList'
import Pet from './Pet'
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)

  const requestPets = async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)

    const json = await res.json()
    setPets(json.pets)
  }

  useEffect(() => {
    requestPets()
  }, [])

  return (
    <div className='search-params'>
      <form
        onSubmit={e => {
          e.preventDefault()
          requestPets()
        }}
      >
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
      {pets.map(pet => (
        <Pet key={pet.id} name={pet.name} animal={pet.animal} breed={pet.breed} />
      ))}
    </div>
  )
}

export default SearchParams
