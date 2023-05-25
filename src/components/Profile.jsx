import styles from "./Profile.module.css";

export const Profile = (props) => {
    let userId = location.pathname.split("/")[2];
    let user = props.function(userId);

    return (
        <div className="row">
            <div className="col-sm-4">
                <img src={user.avatar} alt="" width="100%" />
            </div>
            <div className="col-sm-8">
                <h2 className={styles.id}>
                    ID: <span>{user.id}</span>
                </h2>
                <h2 className={styles.name}>
                    Фамилия и имя:{" "}
                    <span>
                        {user.lastname} {user.name}
                    </span>
                </h2>
                <p className={styles.mail}>
                    E-mail: <span>{user.email}</span>
                </p>
                <p className={styles.text}>{user.about}</p>
                <p style={{ fontWeight: 700 }}>Небольшой текст</p>
            </div>
        </div>
    );
};