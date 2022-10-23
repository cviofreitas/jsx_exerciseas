const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Caio Freitas" />
            <Tweet username="bond007" name="James Bond" date="10/27/21" message="The name is Bond, James Bond" />
            <Tweet username="michaelJackson" name="Michael Jackson" date="01/02/83" message="Billie Jean is not my lover! Shes just a girl who thinks that I am the one, but the kid is not my son." />
            <Person name="Bob The Builder" hobbies={['driving tractors', 'digging holes']} age="32" />
            <Person name="Tony Stark" hobbies={['being rich', 'building flying suits']} age="45" />
            <Person name="Mickey Mouse" hobbies={['walking Plue']} age="12" />
        </div>
    )
}