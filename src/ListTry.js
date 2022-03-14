export default function ListTry() {
    const people = [
        { name: 'jagbir singh' },
        { name: 'ankit kumar' },
        { name: 'harbir' }
    ];

    return (
        <div>
            <ol>
            {people.map((val,index) => (
                <li key={index}>{val.name}</li>
            ))}
            </ol>
        </div>
    );
}
