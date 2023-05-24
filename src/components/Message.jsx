const TableRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>{props.lastname}</td>
            <td>{props.name}</td>
        </tr>
    );
};

export const Messages = (props) => {
    let users = props.function();
    let usersCount = Object.keys(users).length;
    let usersRow = [];
    for (let i = 0; i < usersCount; i++) {
        usersRow.push(<TableRow index={i} key={i} name={users[i].name} lastname={users[i].lastname} />);
    }
    return (
        <>
            <h2 className="text-center">Мои друзья:</h2>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">Имя</th>
                        </tr>
                    </thead>
                    <tbody>{usersRow}</tbody>
                </table>
            </div>
        </>
    );
};