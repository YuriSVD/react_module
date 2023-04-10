import RickAndMortyCharacter from "./RickAndMortyCharacter";

export default function RickAndMortyShow({characters}) {
    return (
        <div>
            {
                characters.map(value => (
                    <RickAndMortyCharacter
                    key={value.id}
                    value={value}
                    />
                ))
            }
        </div>
    )
}