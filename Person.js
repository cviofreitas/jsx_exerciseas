const Person = (props) => {
    let message = props.age >= 18 ? "Please go vote" : "Must be 18 years or older";

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <p>Learn some information about {props.name}
            <ul>
                <li>name: {props.name.slice(0, 6)}</li>
                <li>age: {props.age}</li>
                <ul>
                    Hobbies Include:
                    {hobbies}
                </ul>
                <h3>{message}</h3>
            </ul>
        </p>
    )
}