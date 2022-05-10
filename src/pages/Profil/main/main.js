import "./main.css";
const Main = () => {
    // const user = JSON.parse(window.localStorage.getItem('user'));

    return (
        <div className="mainadmin">
            <div className="main__container">
                <div style={{ marginLeft: '320px' }} >
                    <div>
                        <div className="Top1">
                            <img className="ProfilImage" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                            <h4 className='ProfilSet' style={{ marginLeft: "30%" }}>Profile Settings</h4>
                        </div>
                    </div>
                    <div className="p-3 py-5">

                        <div className="info-wrap">

                            <div className="info-profil">
                                <label className="labelsProfil" for="Nom" >Nom: </label>
                                <input type="text" className="inputsProfil" value="User Name" />
                            </div>

                            <div className="info-profil">
                                <label className="labelsProfil" for="Prenom" >Prenom: </label>
                                <input type="text" className="inputsProfil" value="User Name" />
                            </div>
                        </div>

                        <div className="info-wrap">

                            <div className="info-profil">
                                <label className="labelsProfil">Address mail:</label>
                                <input type="Email" className="inputsProfil" value="userMail@gmail.com" />
                            </div>

                            <div className="info-profil">
                                <label className="labelsProfil">Mot de passe:</label>
                                <input type="password" className="inputsProfil" value="Password" />
                            </div>

                        </div>
                        <div className="info-wrap">


                            <div className="info-profil">
                                <label className="labelsProfil">Mobile Number</label>
                                <input type="number" className="inputsProfil" placeholder="enter phone number" defaultValue />
                            </div>

                            <div className="info-profil">
                                <label className="labelsProfil">Date de naissance:</label>
                                <input type="Date" className="inputsProfil" value={""} />
                            </div>

                            <div className="info-profil">
                                <label className="labelsProfil">Identifiant universitaire:</label>
                                <input type="texte" className="inputsProfil" placeholder="entrer votre identifiant:" />
                            </div>

                        </div>
                        <div className="info-wrap">
                            <div className="info-profil">
                                <label className="labelsProfil">Niveau d'etude:</label>

                                <select type="radio" classname="labelsProfil" >
                                    <option selected>L1</option>
                                    <option>L2</option>
                                    <option>L3</option>
                                    <option>Prepa1</option>
                                    <option>Prepa2</option>
                                    <option>M1</option>
                                    <option>M2</option>
                                </select><br />
                                <br />
                            </div>
                        </div>

                        <div className="buttonProfil">

                            <button type="button">Save Profile</button>

                        </div>

                    </div>

                </div>
            </div>
        </div >

    );
};

export default Main;