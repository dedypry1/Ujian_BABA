import React from 'react'

const Matkuls = ({matkuls}) => {
    return (
        <div>
            <center><h1>matkul List</h1></center>
            {matkuls.map((matkul) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{matkul.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{matkul.email}</h6>
                        <p class="card-text">{matkul.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Matkuls