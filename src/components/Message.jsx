import { NavLink } from "react-router-dom";
import rowImg from "../assets/img/sea.jpg";

const TableRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.index + 1}</th>
            <td>
                <NavLink to={"/profile/" + props.id}>
                    {props.lastname} {props.name}
                </NavLink>
            </td>
            <td>{props.email}</td>
        </tr>
    );
};

export const Messages = (props) => {
    let users = props.function();

    let usersCount = Object.keys(users).length;
    let usersRow = [];
    for (let i = 0; i < usersCount; i++) {
        usersRow.push(<TableRow id={users[i].id} index={i} key={i} name={users[i].name} lastname={users[i].lastname} email={users[i].email} />);
    }
    return (
        <>
            <h2 className="text-center">Мои друзья:</h2>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Фамилия и имя</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>{usersRow}</tbody>
                </table>
            </div>
            <div className="row">
                <div className="col-6"><img src={rowImg} alt="" /></div>
            </div>
        </>
    );
};