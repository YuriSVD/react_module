export default function RickAndMortyCharacter({value}) {
    return (
        <div>
            <h2>{value.id} {value.name}</h2>
            <img src={value.image} alt={value.name}/>
            <ul>
                <li>Status: {value.status}</li>
                <li>Species: {value.species}</li>
                <li>Gender: {value.gender}</li>
            </ul>
        </div>
    )
}