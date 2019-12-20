import React from 'react'

const Mahasiswas = ({mahasiswas}) => {
    return (
        <div>
            <center><h1>Mahasiswa List</h1></center>
            {mahasiswas.map((mahasiswa) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{mahasiswa.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{mahasiswa.email}</h6>
                        <p class="card-text">{mahasiswa.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Mahasiswas