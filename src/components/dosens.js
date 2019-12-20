import React from 'react'

const Dosens = ({dosens}) => {
    return (
        <div>
            <center><h1>Dosen List</h1></center>
            {dosens.map((dosen) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{dosen.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{dosen.email}</h6>
                        <p class="card-text">{dosen.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Dosens